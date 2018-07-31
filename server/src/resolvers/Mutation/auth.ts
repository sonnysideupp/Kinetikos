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

  async addList(parent, args, ctx: Context, info) {
    const question = await ctx.db.query.question({ where: args.questionID }, info)
    if(args.listID) {
      return ctx.db.mutation.updateQuestion({data: {listID: args.listID}, where: {id: args.questionID}}, info)
    } 
    return question
  }

  // async createQuestionText(parent, args, ctx: Context, info) {
  //   const name = args.language
  //   const language = await ctx.db.query.language({where: {name: name }})
  //   if(!args.questionType) {
  //     const question = await ctx.db.query.question({where: {id: args.questionID}})
  //     return ctx.db.mutation.createQuestionText({data: {text: args.text, questionID: args.questionID, language: {connect: {id: language.id}}, questionType: {connect: {id: question.type.id}}}}, info)
  //   } else {
  //     return ctx.db.mutation.createQuestionText({data: {text: args.text, questionID: args.questionID, language: {connect: {id: language.id}}, questionType: args.questionType }}, info)
  //   }
  // },
}
