import { extractFragmentReplacements } from "prisma-binding"
import Query from "./Query"
import { auth } from "./Mutation/auth"
import { AuthPayload } from "./AuthPayload"
import submitanswer from "./Mutation/submitanswer"

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...submitanswer,
  },
  AuthPayload
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
