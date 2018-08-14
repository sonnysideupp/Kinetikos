import { Context, getUserId } from "../utils"

export default {
  me: (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
  answers:(parent, args, ctx: Context, info) => {
    return ctx.db.query.answers({...args}, info)
  },
  languages:(parent, args, ctx: Context, info) => {
    return ctx.db.query.languages({...args}, info)
  },

  questionnaires: (parent, args, ctx: Context, info) => {
    return ctx.db.query.questionnaires({...args}, info)
  },

  questionTexts: (parent, args, ctx: Context, info) => {
    
      return ctx.db.query.questionTexts({...args}, info)
   
  }, 
  questions: (parent, args, ctx: Context, info) => {
    
    return ctx.db.query.questions({...args}, info)
 
}, 

  alternatives: (parent, args, ctx: Context, info) => {
  
      return ctx.db.query.alternativeses({...args}, info)
  
  },

  alternativeTexts: (parent, args, ctx: Context, info) => {
    return ctx.db.query.alternativeTexts({...args}, info)
  },
}
