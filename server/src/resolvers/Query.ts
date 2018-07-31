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
    return ctx.db.query.questionTexts({where: {language: args.language}}, info)
  }, 
}
