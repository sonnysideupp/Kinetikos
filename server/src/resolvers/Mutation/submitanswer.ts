import { Context, getUserId } from "../../utils"
export default {
  submitanswer: async (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)


if(args.alternativeId == null)
{
    return await ctx.db.mutation.updateUser(
        {
            data:{answers:{create:{value:args.value,question:{connect:{number:args.questionnumber}}}}},
            where:{id:id}
        },
        info
            )
  }

  else{

    return await ctx.db.mutation.updateUser(
        {
            data:{answers:{create:{value:args.value,question:{connect:{number:args.questionnumber}},alternative:{connect:{id:args.alternativeId}}}}},
            where:{id:id}
        },
        info
            )


  }}
}
