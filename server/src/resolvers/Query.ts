import { Context, getUserId } from "../utils"

export default {
  me: (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },

  questionnaire: (parent, args, ctx: Context, info) => {
    return ctx.db.query.questions({}, info)
  },

  questionTexts: (parent, args, ctx: Context, info) => {
    if(args) {
      return ctx.db.query.questionTexts({where: {AND: {...args}}}, info)
    } else {
      return ctx.db.query.questionTexts({}, info)
    }
  }, 

  alternatives: (parent, args, ctx: Context, info) => {
    if(args) {
      return ctx.db.query.alternativeses({where: {listID: args.listID}}, info)
    }

    return ctx.db.query.alternativeses({}, info)
  },

  alternativeTexts: (parent, args, ctx: Context, info) => {
    return ctx.db.query.alternativeTexts({where: {AND: [{...args.alternativeID},{...args.language}]}}, info)
  },
}
