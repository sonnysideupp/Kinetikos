import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"
import { Context } from "../../utils"

export const auth = {
  async signup(parent, args, ctx: Context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password }
    })

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    }
  },

  async login(parent, { email, password }, ctx: Context, info) {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error("Invalid password")
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    }
  },

  async createQuestionText(parent, args, ctx: Context, info) {
    const name = args.language
    const language = await ctx.db.query.language({where: {name: name }})
    if(!args.questionType) {
      const question = await ctx.db.query.question({where: {id: args.questionID}})
      return ctx.db.mutation.createQuestionText({data: {text: args.text, questionID: args.questionID, language: {connect: {id: language.id}}, questionType: {connect: {id: question.type.id}}}}, info)
    } else {
      return ctx.db.mutation.createQuestionText({data: {text: args.text, questionID: args.questionID, language: {connect: {id: language.id}}, questionType: args.questionType }}, info)
    }
  },

  async createQuestionOptions(parent, args, ctx: Context, info) {
    // const languages = []
    // const indices = []
    // {args.language.forEach(async (name, idx) => {
    //   console.log(name)
    //   indices.push(idx)
    //   await ctx.db.query.language({where: {name: name }}).then((lang) => {
    //     languages.push(lang)
    //   })
    //   //console.log(`lang is ${lang}`)
    //   //languages.push(lang)
    // })}
    // console.log(indices)
    // console.log(`LANGUAGE   ${languages}`)

    // const options = []
    // {languages.forEach((name) => {
    //   options.push(ctx.db.mutation.createQuestionOptions({data: {QuestionTypeID: args.QuestionTypeID, QuestionID: args.QuestionID, options: {set: args.options}, language: {connect: name}}}))
    // })}
    // return options


    if(args.language) {
      const name = args.language
      return [ctx.db.mutation.createQuestionOptions({data: {QuestionTypeID: args.QuestionTypeID, QuestionID: args.QuestionID, options: {set: args.options}, language: {connect: {name}  }, questionText: args.questionText}}, info)]
    } else {
      const options = []
      console.log("BEFORE THE QUERYYYYY")
      const languages = await ctx.db.query.languages({}, info)
      console.log("AFTER THE QUERYYYYY")

        languages.forEach(async(language) => {
          const name = language.name
          console.log("NAAAAAAAAAAMMMEEEEEEEEE")
          console.log(name)
          options.push(await ctx.db.mutation.createQuestionOptions({data: {QuestionTypeID: args.QuestionTypeID, QuestionID: args.QuestionID, options: {set: args.options}, language: {connect: {name}}, questionText: args.questionText}}, info))
        })
      return options
    }




  }
}
