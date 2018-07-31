import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questions: <T = Question[]>(args: { where?: QuestionWhereInput, orderBy?: QuestionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionTypes: <T = QuestionType[]>(args: { where?: QuestionTypeWhereInput, orderBy?: QuestionTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionTexts: <T = QuestionText[]>(args: { where?: QuestionTextWhereInput, orderBy?: QuestionTextOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alternativeses: <T = Alternatives[]>(args: { where?: AlternativesWhereInput, orderBy?: AlternativesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alternativeTexts: <T = AlternativeText[]>(args: { where?: AlternativeTextWhereInput, orderBy?: AlternativeTextOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lists: <T = List[]>(args: { where?: ListWhereInput, orderBy?: ListOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    answers: <T = Answer[]>(args: { where?: AnswerWhereInput, orderBy?: AnswerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languages: <T = Language[]>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    question: <T = Question | null>(args: { where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionType: <T = QuestionType | null>(args: { where: QuestionTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionText: <T = QuestionText | null>(args: { where: QuestionTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alternatives: <T = Alternatives | null>(args: { where: AlternativesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alternativeText: <T = AlternativeText | null>(args: { where: AlternativeTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    list: <T = List | null>(args: { where: ListWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    answer: <T = Answer | null>(args: { where: AnswerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    language: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionsConnection: <T = QuestionConnection>(args: { where?: QuestionWhereInput, orderBy?: QuestionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionTypesConnection: <T = QuestionTypeConnection>(args: { where?: QuestionTypeWhereInput, orderBy?: QuestionTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionTextsConnection: <T = QuestionTextConnection>(args: { where?: QuestionTextWhereInput, orderBy?: QuestionTextOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alternativesesConnection: <T = AlternativesConnection>(args: { where?: AlternativesWhereInput, orderBy?: AlternativesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alternativeTextsConnection: <T = AlternativeTextConnection>(args: { where?: AlternativeTextWhereInput, orderBy?: AlternativeTextOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    listsConnection: <T = ListConnection>(args: { where?: ListWhereInput, orderBy?: ListOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    answersConnection: <T = AnswerConnection>(args: { where?: AnswerWhereInput, orderBy?: AnswerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languagesConnection: <T = LanguageConnection>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestion: <T = Question>(args: { data: QuestionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestionType: <T = QuestionType>(args: { data: QuestionTypeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestionText: <T = QuestionText>(args: { data: QuestionTextCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAlternatives: <T = Alternatives>(args: { data: AlternativesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAlternativeText: <T = AlternativeText>(args: { data: AlternativeTextCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createList: <T = List>(args: { data: ListCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAnswer: <T = Answer>(args: { data: AnswerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLanguage: <T = Language>(args: { data: LanguageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateQuestion: <T = Question | null>(args: { data: QuestionUpdateInput, where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateQuestionType: <T = QuestionType | null>(args: { data: QuestionTypeUpdateInput, where: QuestionTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateQuestionText: <T = QuestionText | null>(args: { data: QuestionTextUpdateInput, where: QuestionTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAlternatives: <T = Alternatives | null>(args: { data: AlternativesUpdateInput, where: AlternativesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAlternativeText: <T = AlternativeText | null>(args: { data: AlternativeTextUpdateInput, where: AlternativeTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateList: <T = List | null>(args: { data: ListUpdateInput, where: ListWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAnswer: <T = Answer | null>(args: { data: AnswerUpdateInput, where: AnswerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLanguage: <T = Language | null>(args: { data: LanguageUpdateInput, where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteQuestion: <T = Question | null>(args: { where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteQuestionType: <T = QuestionType | null>(args: { where: QuestionTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteQuestionText: <T = QuestionText | null>(args: { where: QuestionTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAlternatives: <T = Alternatives | null>(args: { where: AlternativesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAlternativeText: <T = AlternativeText | null>(args: { where: AlternativeTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteList: <T = List | null>(args: { where: ListWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAnswer: <T = Answer | null>(args: { where: AnswerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLanguage: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestion: <T = Question>(args: { where: QuestionWhereUniqueInput, create: QuestionCreateInput, update: QuestionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestionType: <T = QuestionType>(args: { where: QuestionTypeWhereUniqueInput, create: QuestionTypeCreateInput, update: QuestionTypeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestionText: <T = QuestionText>(args: { where: QuestionTextWhereUniqueInput, create: QuestionTextCreateInput, update: QuestionTextUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAlternatives: <T = Alternatives>(args: { where: AlternativesWhereUniqueInput, create: AlternativesCreateInput, update: AlternativesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAlternativeText: <T = AlternativeText>(args: { where: AlternativeTextWhereUniqueInput, create: AlternativeTextCreateInput, update: AlternativeTextUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertList: <T = List>(args: { where: ListWhereUniqueInput, create: ListCreateInput, update: ListUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAnswer: <T = Answer>(args: { where: AnswerWhereUniqueInput, create: AnswerCreateInput, update: AnswerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLanguage: <T = Language>(args: { where: LanguageWhereUniqueInput, create: LanguageCreateInput, update: LanguageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestions: <T = BatchPayload>(args: { data: QuestionUpdateInput, where?: QuestionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestionTypes: <T = BatchPayload>(args: { data: QuestionTypeUpdateInput, where?: QuestionTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestionTexts: <T = BatchPayload>(args: { data: QuestionTextUpdateInput, where?: QuestionTextWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAlternativeses: <T = BatchPayload>(args: { data: AlternativesUpdateInput, where?: AlternativesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAlternativeTexts: <T = BatchPayload>(args: { data: AlternativeTextUpdateInput, where?: AlternativeTextWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLists: <T = BatchPayload>(args: { data: ListUpdateInput, where?: ListWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAnswers: <T = BatchPayload>(args: { data: AnswerUpdateInput, where?: AnswerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLanguages: <T = BatchPayload>(args: { data: LanguageUpdateInput, where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestions: <T = BatchPayload>(args: { where?: QuestionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestionTypes: <T = BatchPayload>(args: { where?: QuestionTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestionTexts: <T = BatchPayload>(args: { where?: QuestionTextWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAlternativeses: <T = BatchPayload>(args: { where?: AlternativesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAlternativeTexts: <T = BatchPayload>(args: { where?: AlternativeTextWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLists: <T = BatchPayload>(args: { where?: ListWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAnswers: <T = BatchPayload>(args: { where?: AnswerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLanguages: <T = BatchPayload>(args: { where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    question: <T = QuestionSubscriptionPayload | null>(args: { where?: QuestionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    questionType: <T = QuestionTypeSubscriptionPayload | null>(args: { where?: QuestionTypeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    questionText: <T = QuestionTextSubscriptionPayload | null>(args: { where?: QuestionTextSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    alternatives: <T = AlternativesSubscriptionPayload | null>(args: { where?: AlternativesSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    alternativeText: <T = AlternativeTextSubscriptionPayload | null>(args: { where?: AlternativeTextSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    list: <T = ListSubscriptionPayload | null>(args: { where?: ListSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    answer: <T = AnswerSubscriptionPayload | null>(args: { where?: AnswerSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    language: <T = LanguageSubscriptionPayload | null>(args: { where?: LanguageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Question: (where?: QuestionWhereInput) => Promise<boolean>
  QuestionType: (where?: QuestionTypeWhereInput) => Promise<boolean>
  QuestionText: (where?: QuestionTextWhereInput) => Promise<boolean>
  Alternatives: (where?: AlternativesWhereInput) => Promise<boolean>
  AlternativeText: (where?: AlternativeTextWhereInput) => Promise<boolean>
  List: (where?: ListWhereInput) => Promise<boolean>
  Answer: (where?: AnswerWhereInput) => Promise<boolean>
  Language: (where?: LanguageWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAlternatives {
  count: Int!
}

type AggregateAlternativeText {
  count: Int!
}

type AggregateAnswer {
  count: Int!
}

type AggregateLanguage {
  count: Int!
}

type AggregateList {
  count: Int!
}

type AggregateQuestion {
  count: Int!
}

type AggregateQuestionText {
  count: Int!
}

type AggregateQuestionType {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Alternatives implements Node {
  id: ID!
  description: String!
  value: Float!
  order: Int!
  listID: ID!
}

"""A connection to a list of items."""
type AlternativesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AlternativesEdge]!
  aggregate: AggregateAlternatives!
}

input AlternativesCreateInput {
  description: String!
  value: Float!
  order: Int!
  listID: ID!
}

"""An edge in a connection."""
type AlternativesEdge {
  """The item at the end of the edge."""
  node: Alternatives!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AlternativesOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  value_ASC
  value_DESC
  order_ASC
  order_DESC
  listID_ASC
  listID_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AlternativesPreviousValues {
  id: ID!
  description: String!
  value: Float!
  order: Int!
  listID: ID!
}

type AlternativesSubscriptionPayload {
  mutation: MutationType!
  node: Alternatives
  updatedFields: [String!]
  previousValues: AlternativesPreviousValues
}

input AlternativesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AlternativesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AlternativesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AlternativesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AlternativesWhereInput
}

input AlternativesUpdateInput {
  description: String
  value: Float
  order: Int
  listID: ID
}

input AlternativesWhereInput {
  """Logical AND on all given filters."""
  AND: [AlternativesWhereInput!]

  """Logical OR on all given filters."""
  OR: [AlternativesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AlternativesWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  value: Float

  """All values that are not equal to given value."""
  value_not: Float

  """All values that are contained in given list."""
  value_in: [Float!]

  """All values that are not contained in given list."""
  value_not_in: [Float!]

  """All values less than the given value."""
  value_lt: Float

  """All values less than or equal the given value."""
  value_lte: Float

  """All values greater than the given value."""
  value_gt: Float

  """All values greater than or equal the given value."""
  value_gte: Float
  order: Int

  """All values that are not equal to given value."""
  order_not: Int

  """All values that are contained in given list."""
  order_in: [Int!]

  """All values that are not contained in given list."""
  order_not_in: [Int!]

  """All values less than the given value."""
  order_lt: Int

  """All values less than or equal the given value."""
  order_lte: Int

  """All values greater than the given value."""
  order_gt: Int

  """All values greater than or equal the given value."""
  order_gte: Int
  listID: ID

  """All values that are not equal to given value."""
  listID_not: ID

  """All values that are contained in given list."""
  listID_in: [ID!]

  """All values that are not contained in given list."""
  listID_not_in: [ID!]

  """All values less than the given value."""
  listID_lt: ID

  """All values less than or equal the given value."""
  listID_lte: ID

  """All values greater than the given value."""
  listID_gt: ID

  """All values greater than or equal the given value."""
  listID_gte: ID

  """All values containing the given string."""
  listID_contains: ID

  """All values not containing the given string."""
  listID_not_contains: ID

  """All values starting with the given string."""
  listID_starts_with: ID

  """All values not starting with the given string."""
  listID_not_starts_with: ID

  """All values ending with the given string."""
  listID_ends_with: ID

  """All values not ending with the given string."""
  listID_not_ends_with: ID
}

input AlternativesWhereUniqueInput {
  id: ID
}

type AlternativeText implements Node {
  id: ID!
  alternativeID: ID!
  language: ID!
  text: String!
}

"""A connection to a list of items."""
type AlternativeTextConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AlternativeTextEdge]!
  aggregate: AggregateAlternativeText!
}

input AlternativeTextCreateInput {
  alternativeID: ID!
  language: ID!
  text: String!
}

"""An edge in a connection."""
type AlternativeTextEdge {
  """The item at the end of the edge."""
  node: AlternativeText!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AlternativeTextOrderByInput {
  id_ASC
  id_DESC
  alternativeID_ASC
  alternativeID_DESC
  language_ASC
  language_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AlternativeTextPreviousValues {
  id: ID!
  alternativeID: ID!
  language: ID!
  text: String!
}

type AlternativeTextSubscriptionPayload {
  mutation: MutationType!
  node: AlternativeText
  updatedFields: [String!]
  previousValues: AlternativeTextPreviousValues
}

input AlternativeTextSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AlternativeTextSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AlternativeTextSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AlternativeTextSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AlternativeTextWhereInput
}

input AlternativeTextUpdateInput {
  alternativeID: ID
  language: ID
  text: String
}

input AlternativeTextWhereInput {
  """Logical AND on all given filters."""
  AND: [AlternativeTextWhereInput!]

  """Logical OR on all given filters."""
  OR: [AlternativeTextWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AlternativeTextWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  alternativeID: ID

  """All values that are not equal to given value."""
  alternativeID_not: ID

  """All values that are contained in given list."""
  alternativeID_in: [ID!]

  """All values that are not contained in given list."""
  alternativeID_not_in: [ID!]

  """All values less than the given value."""
  alternativeID_lt: ID

  """All values less than or equal the given value."""
  alternativeID_lte: ID

  """All values greater than the given value."""
  alternativeID_gt: ID

  """All values greater than or equal the given value."""
  alternativeID_gte: ID

  """All values containing the given string."""
  alternativeID_contains: ID

  """All values not containing the given string."""
  alternativeID_not_contains: ID

  """All values starting with the given string."""
  alternativeID_starts_with: ID

  """All values not starting with the given string."""
  alternativeID_not_starts_with: ID

  """All values ending with the given string."""
  alternativeID_ends_with: ID

  """All values not ending with the given string."""
  alternativeID_not_ends_with: ID
  language: ID

  """All values that are not equal to given value."""
  language_not: ID

  """All values that are contained in given list."""
  language_in: [ID!]

  """All values that are not contained in given list."""
  language_not_in: [ID!]

  """All values less than the given value."""
  language_lt: ID

  """All values less than or equal the given value."""
  language_lte: ID

  """All values greater than the given value."""
  language_gt: ID

  """All values greater than or equal the given value."""
  language_gte: ID

  """All values containing the given string."""
  language_contains: ID

  """All values not containing the given string."""
  language_not_contains: ID

  """All values starting with the given string."""
  language_starts_with: ID

  """All values not starting with the given string."""
  language_not_starts_with: ID

  """All values ending with the given string."""
  language_ends_with: ID

  """All values not ending with the given string."""
  language_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
}

input AlternativeTextWhereUniqueInput {
  id: ID
}

type Answer implements Node {
  id: ID!
  questionID: ID!
  value: Float
  alternativeID: ID
}

"""A connection to a list of items."""
type AnswerConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AnswerEdge]!
  aggregate: AggregateAnswer!
}

input AnswerCreateInput {
  questionID: ID!
  value: Float
  alternativeID: ID
}

"""An edge in a connection."""
type AnswerEdge {
  """The item at the end of the edge."""
  node: Answer!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AnswerOrderByInput {
  id_ASC
  id_DESC
  questionID_ASC
  questionID_DESC
  value_ASC
  value_DESC
  alternativeID_ASC
  alternativeID_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AnswerPreviousValues {
  id: ID!
  questionID: ID!
  value: Float
  alternativeID: ID
}

type AnswerSubscriptionPayload {
  mutation: MutationType!
  node: Answer
  updatedFields: [String!]
  previousValues: AnswerPreviousValues
}

input AnswerSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AnswerSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AnswerSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AnswerSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AnswerWhereInput
}

input AnswerUpdateInput {
  questionID: ID
  value: Float
  alternativeID: ID
}

input AnswerWhereInput {
  """Logical AND on all given filters."""
  AND: [AnswerWhereInput!]

  """Logical OR on all given filters."""
  OR: [AnswerWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AnswerWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  questionID: ID

  """All values that are not equal to given value."""
  questionID_not: ID

  """All values that are contained in given list."""
  questionID_in: [ID!]

  """All values that are not contained in given list."""
  questionID_not_in: [ID!]

  """All values less than the given value."""
  questionID_lt: ID

  """All values less than or equal the given value."""
  questionID_lte: ID

  """All values greater than the given value."""
  questionID_gt: ID

  """All values greater than or equal the given value."""
  questionID_gte: ID

  """All values containing the given string."""
  questionID_contains: ID

  """All values not containing the given string."""
  questionID_not_contains: ID

  """All values starting with the given string."""
  questionID_starts_with: ID

  """All values not starting with the given string."""
  questionID_not_starts_with: ID

  """All values ending with the given string."""
  questionID_ends_with: ID

  """All values not ending with the given string."""
  questionID_not_ends_with: ID
  value: Float

  """All values that are not equal to given value."""
  value_not: Float

  """All values that are contained in given list."""
  value_in: [Float!]

  """All values that are not contained in given list."""
  value_not_in: [Float!]

  """All values less than the given value."""
  value_lt: Float

  """All values less than or equal the given value."""
  value_lte: Float

  """All values greater than the given value."""
  value_gt: Float

  """All values greater than or equal the given value."""
  value_gte: Float
  alternativeID: ID

  """All values that are not equal to given value."""
  alternativeID_not: ID

  """All values that are contained in given list."""
  alternativeID_in: [ID!]

  """All values that are not contained in given list."""
  alternativeID_not_in: [ID!]

  """All values less than the given value."""
  alternativeID_lt: ID

  """All values less than or equal the given value."""
  alternativeID_lte: ID

  """All values greater than the given value."""
  alternativeID_gt: ID

  """All values greater than or equal the given value."""
  alternativeID_gte: ID

  """All values containing the given string."""
  alternativeID_contains: ID

  """All values not containing the given string."""
  alternativeID_not_contains: ID

  """All values starting with the given string."""
  alternativeID_starts_with: ID

  """All values not starting with the given string."""
  alternativeID_not_starts_with: ID

  """All values ending with the given string."""
  alternativeID_ends_with: ID

  """All values not ending with the given string."""
  alternativeID_not_ends_with: ID
}

input AnswerWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Language implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type LanguageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LanguageEdge]!
  aggregate: AggregateLanguage!
}

input LanguageCreateInput {
  name: String!
}

input LanguageCreateOneInput {
  create: LanguageCreateInput
  connect: LanguageWhereUniqueInput
}

"""An edge in a connection."""
type LanguageEdge {
  """The item at the end of the edge."""
  node: Language!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LanguageOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LanguagePreviousValues {
  id: ID!
  name: String!
}

type LanguageSubscriptionPayload {
  mutation: MutationType!
  node: Language
  updatedFields: [String!]
  previousValues: LanguagePreviousValues
}

input LanguageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LanguageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LanguageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LanguageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LanguageWhereInput
}

input LanguageUpdateDataInput {
  name: String
}

input LanguageUpdateInput {
  name: String
}

input LanguageUpdateOneInput {
  create: LanguageCreateInput
  connect: LanguageWhereUniqueInput
  delete: Boolean
  update: LanguageUpdateDataInput
  upsert: LanguageUpsertNestedInput
}

input LanguageUpsertNestedInput {
  update: LanguageUpdateDataInput!
  create: LanguageCreateInput!
}

input LanguageWhereInput {
  """Logical AND on all given filters."""
  AND: [LanguageWhereInput!]

  """Logical OR on all given filters."""
  OR: [LanguageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LanguageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input LanguageWhereUniqueInput {
  id: ID
  name: String
}

type List implements Node {
  id: ID!
  description: String!
}

"""A connection to a list of items."""
type ListConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ListEdge]!
  aggregate: AggregateList!
}

input ListCreateInput {
  description: String!
}

"""An edge in a connection."""
type ListEdge {
  """The item at the end of the edge."""
  node: List!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ListOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ListPreviousValues {
  id: ID!
  description: String!
}

type ListSubscriptionPayload {
  mutation: MutationType!
  node: List
  updatedFields: [String!]
  previousValues: ListPreviousValues
}

input ListSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ListSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ListSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ListSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ListWhereInput
}

input ListUpdateInput {
  description: String
}

input ListWhereInput {
  """Logical AND on all given filters."""
  AND: [ListWhereInput!]

  """Logical OR on all given filters."""
  OR: [ListWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ListWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
}

input ListWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createQuestion(data: QuestionCreateInput!): Question!
  createQuestionType(data: QuestionTypeCreateInput!): QuestionType!
  createQuestionText(data: QuestionTextCreateInput!): QuestionText!
  createAlternatives(data: AlternativesCreateInput!): Alternatives!
  createAlternativeText(data: AlternativeTextCreateInput!): AlternativeText!
  createList(data: ListCreateInput!): List!
  createAnswer(data: AnswerCreateInput!): Answer!
  createLanguage(data: LanguageCreateInput!): Language!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateQuestion(data: QuestionUpdateInput!, where: QuestionWhereUniqueInput!): Question
  updateQuestionType(data: QuestionTypeUpdateInput!, where: QuestionTypeWhereUniqueInput!): QuestionType
  updateQuestionText(data: QuestionTextUpdateInput!, where: QuestionTextWhereUniqueInput!): QuestionText
  updateAlternatives(data: AlternativesUpdateInput!, where: AlternativesWhereUniqueInput!): Alternatives
  updateAlternativeText(data: AlternativeTextUpdateInput!, where: AlternativeTextWhereUniqueInput!): AlternativeText
  updateList(data: ListUpdateInput!, where: ListWhereUniqueInput!): List
  updateAnswer(data: AnswerUpdateInput!, where: AnswerWhereUniqueInput!): Answer
  updateLanguage(data: LanguageUpdateInput!, where: LanguageWhereUniqueInput!): Language
  deleteUser(where: UserWhereUniqueInput!): User
  deleteQuestion(where: QuestionWhereUniqueInput!): Question
  deleteQuestionType(where: QuestionTypeWhereUniqueInput!): QuestionType
  deleteQuestionText(where: QuestionTextWhereUniqueInput!): QuestionText
  deleteAlternatives(where: AlternativesWhereUniqueInput!): Alternatives
  deleteAlternativeText(where: AlternativeTextWhereUniqueInput!): AlternativeText
  deleteList(where: ListWhereUniqueInput!): List
  deleteAnswer(where: AnswerWhereUniqueInput!): Answer
  deleteLanguage(where: LanguageWhereUniqueInput!): Language
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertQuestion(where: QuestionWhereUniqueInput!, create: QuestionCreateInput!, update: QuestionUpdateInput!): Question!
  upsertQuestionType(where: QuestionTypeWhereUniqueInput!, create: QuestionTypeCreateInput!, update: QuestionTypeUpdateInput!): QuestionType!
  upsertQuestionText(where: QuestionTextWhereUniqueInput!, create: QuestionTextCreateInput!, update: QuestionTextUpdateInput!): QuestionText!
  upsertAlternatives(where: AlternativesWhereUniqueInput!, create: AlternativesCreateInput!, update: AlternativesUpdateInput!): Alternatives!
  upsertAlternativeText(where: AlternativeTextWhereUniqueInput!, create: AlternativeTextCreateInput!, update: AlternativeTextUpdateInput!): AlternativeText!
  upsertList(where: ListWhereUniqueInput!, create: ListCreateInput!, update: ListUpdateInput!): List!
  upsertAnswer(where: AnswerWhereUniqueInput!, create: AnswerCreateInput!, update: AnswerUpdateInput!): Answer!
  upsertLanguage(where: LanguageWhereUniqueInput!, create: LanguageCreateInput!, update: LanguageUpdateInput!): Language!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyQuestions(data: QuestionUpdateInput!, where: QuestionWhereInput): BatchPayload!
  updateManyQuestionTypes(data: QuestionTypeUpdateInput!, where: QuestionTypeWhereInput): BatchPayload!
  updateManyQuestionTexts(data: QuestionTextUpdateInput!, where: QuestionTextWhereInput): BatchPayload!
  updateManyAlternativeses(data: AlternativesUpdateInput!, where: AlternativesWhereInput): BatchPayload!
  updateManyAlternativeTexts(data: AlternativeTextUpdateInput!, where: AlternativeTextWhereInput): BatchPayload!
  updateManyLists(data: ListUpdateInput!, where: ListWhereInput): BatchPayload!
  updateManyAnswers(data: AnswerUpdateInput!, where: AnswerWhereInput): BatchPayload!
  updateManyLanguages(data: LanguageUpdateInput!, where: LanguageWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyQuestions(where: QuestionWhereInput): BatchPayload!
  deleteManyQuestionTypes(where: QuestionTypeWhereInput): BatchPayload!
  deleteManyQuestionTexts(where: QuestionTextWhereInput): BatchPayload!
  deleteManyAlternativeses(where: AlternativesWhereInput): BatchPayload!
  deleteManyAlternativeTexts(where: AlternativeTextWhereInput): BatchPayload!
  deleteManyLists(where: ListWhereInput): BatchPayload!
  deleteManyAnswers(where: AnswerWhereInput): BatchPayload!
  deleteManyLanguages(where: LanguageWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  questions(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Question]!
  questionTypes(where: QuestionTypeWhereInput, orderBy: QuestionTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [QuestionType]!
  questionTexts(where: QuestionTextWhereInput, orderBy: QuestionTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [QuestionText]!
  alternativeses(where: AlternativesWhereInput, orderBy: AlternativesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Alternatives]!
  alternativeTexts(where: AlternativeTextWhereInput, orderBy: AlternativeTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AlternativeText]!
  lists(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [List]!
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer]!
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language]!
  user(where: UserWhereUniqueInput!): User
  question(where: QuestionWhereUniqueInput!): Question
  questionType(where: QuestionTypeWhereUniqueInput!): QuestionType
  questionText(where: QuestionTextWhereUniqueInput!): QuestionText
  alternatives(where: AlternativesWhereUniqueInput!): Alternatives
  alternativeText(where: AlternativeTextWhereUniqueInput!): AlternativeText
  list(where: ListWhereUniqueInput!): List
  answer(where: AnswerWhereUniqueInput!): Answer
  language(where: LanguageWhereUniqueInput!): Language
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  questionsConnection(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionConnection!
  questionTypesConnection(where: QuestionTypeWhereInput, orderBy: QuestionTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionTypeConnection!
  questionTextsConnection(where: QuestionTextWhereInput, orderBy: QuestionTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionTextConnection!
  alternativesesConnection(where: AlternativesWhereInput, orderBy: AlternativesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AlternativesConnection!
  alternativeTextsConnection(where: AlternativeTextWhereInput, orderBy: AlternativeTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AlternativeTextConnection!
  listsConnection(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ListConnection!
  answersConnection(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnswerConnection!
  languagesConnection(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LanguageConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Question implements Node {
  id: ID!
  description: String!
  questionType: ID!
  listID: ID
}

"""A connection to a list of items."""
type QuestionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [QuestionEdge]!
  aggregate: AggregateQuestion!
}

input QuestionCreateInput {
  description: String!
  questionType: ID!
  listID: ID
}

"""An edge in a connection."""
type QuestionEdge {
  """The item at the end of the edge."""
  node: Question!

  """A cursor for use in pagination."""
  cursor: String!
}

enum QuestionOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  questionType_ASC
  questionType_DESC
  listID_ASC
  listID_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type QuestionPreviousValues {
  id: ID!
  description: String!
  questionType: ID!
  listID: ID
}

type QuestionSubscriptionPayload {
  mutation: MutationType!
  node: Question
  updatedFields: [String!]
  previousValues: QuestionPreviousValues
}

input QuestionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: QuestionWhereInput
}

type QuestionText implements Node {
  id: ID!
  text: String!
  language(where: LanguageWhereInput): Language!
  questionID: ID!
}

"""A connection to a list of items."""
type QuestionTextConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [QuestionTextEdge]!
  aggregate: AggregateQuestionText!
}

input QuestionTextCreateInput {
  text: String!
  questionID: ID!
  language: LanguageCreateOneInput!
}

"""An edge in a connection."""
type QuestionTextEdge {
  """The item at the end of the edge."""
  node: QuestionText!

  """A cursor for use in pagination."""
  cursor: String!
}

enum QuestionTextOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  questionID_ASC
  questionID_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type QuestionTextPreviousValues {
  id: ID!
  text: String!
  questionID: ID!
}

type QuestionTextSubscriptionPayload {
  mutation: MutationType!
  node: QuestionText
  updatedFields: [String!]
  previousValues: QuestionTextPreviousValues
}

input QuestionTextSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionTextSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionTextSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionTextSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: QuestionTextWhereInput
}

input QuestionTextUpdateInput {
  text: String
  questionID: ID
  language: LanguageUpdateOneInput
}

input QuestionTextWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionTextWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionTextWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionTextWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  questionID: ID

  """All values that are not equal to given value."""
  questionID_not: ID

  """All values that are contained in given list."""
  questionID_in: [ID!]

  """All values that are not contained in given list."""
  questionID_not_in: [ID!]

  """All values less than the given value."""
  questionID_lt: ID

  """All values less than or equal the given value."""
  questionID_lte: ID

  """All values greater than the given value."""
  questionID_gt: ID

  """All values greater than or equal the given value."""
  questionID_gte: ID

  """All values containing the given string."""
  questionID_contains: ID

  """All values not containing the given string."""
  questionID_not_contains: ID

  """All values starting with the given string."""
  questionID_starts_with: ID

  """All values not starting with the given string."""
  questionID_not_starts_with: ID

  """All values ending with the given string."""
  questionID_ends_with: ID

  """All values not ending with the given string."""
  questionID_not_ends_with: ID
  language: LanguageWhereInput
}

input QuestionTextWhereUniqueInput {
  id: ID
}

type QuestionType implements Node {
  id: ID!
  description: String!
}

"""A connection to a list of items."""
type QuestionTypeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [QuestionTypeEdge]!
  aggregate: AggregateQuestionType!
}

input QuestionTypeCreateInput {
  description: String!
}

"""An edge in a connection."""
type QuestionTypeEdge {
  """The item at the end of the edge."""
  node: QuestionType!

  """A cursor for use in pagination."""
  cursor: String!
}

enum QuestionTypeOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type QuestionTypePreviousValues {
  id: ID!
  description: String!
}

type QuestionTypeSubscriptionPayload {
  mutation: MutationType!
  node: QuestionType
  updatedFields: [String!]
  previousValues: QuestionTypePreviousValues
}

input QuestionTypeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionTypeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionTypeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionTypeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: QuestionTypeWhereInput
}

input QuestionTypeUpdateInput {
  description: String
}

input QuestionTypeWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionTypeWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionTypeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionTypeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
}

input QuestionTypeWhereUniqueInput {
  id: ID
  description: String
}

input QuestionUpdateInput {
  description: String
  questionType: ID
  listID: ID
}

input QuestionWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  questionType: ID

  """All values that are not equal to given value."""
  questionType_not: ID

  """All values that are contained in given list."""
  questionType_in: [ID!]

  """All values that are not contained in given list."""
  questionType_not_in: [ID!]

  """All values less than the given value."""
  questionType_lt: ID

  """All values less than or equal the given value."""
  questionType_lte: ID

  """All values greater than the given value."""
  questionType_gt: ID

  """All values greater than or equal the given value."""
  questionType_gte: ID

  """All values containing the given string."""
  questionType_contains: ID

  """All values not containing the given string."""
  questionType_not_contains: ID

  """All values starting with the given string."""
  questionType_starts_with: ID

  """All values not starting with the given string."""
  questionType_not_starts_with: ID

  """All values ending with the given string."""
  questionType_ends_with: ID

  """All values not ending with the given string."""
  questionType_not_ends_with: ID
  listID: ID

  """All values that are not equal to given value."""
  listID_not: ID

  """All values that are contained in given list."""
  listID_in: [ID!]

  """All values that are not contained in given list."""
  listID_not_in: [ID!]

  """All values less than the given value."""
  listID_lt: ID

  """All values less than or equal the given value."""
  listID_lte: ID

  """All values greater than the given value."""
  listID_gt: ID

  """All values greater than or equal the given value."""
  listID_gte: ID

  """All values containing the given string."""
  listID_contains: ID

  """All values not containing the given string."""
  listID_not_contains: ID

  """All values starting with the given string."""
  listID_starts_with: ID

  """All values not starting with the given string."""
  listID_not_starts_with: ID

  """All values ending with the given string."""
  listID_ends_with: ID

  """All values not ending with the given string."""
  listID_not_ends_with: ID
}

input QuestionWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  question(where: QuestionSubscriptionWhereInput): QuestionSubscriptionPayload
  questionType(where: QuestionTypeSubscriptionWhereInput): QuestionTypeSubscriptionPayload
  questionText(where: QuestionTextSubscriptionWhereInput): QuestionTextSubscriptionPayload
  alternatives(where: AlternativesSubscriptionWhereInput): AlternativesSubscriptionPayload
  alternativeText(where: AlternativeTextSubscriptionWhereInput): AlternativeTextSubscriptionPayload
  list(where: ListSubscriptionWhereInput): ListSubscriptionPayload
  answer(where: AnswerSubscriptionWhereInput): AnswerSubscriptionPayload
  language(where: LanguageSubscriptionWhereInput): LanguageSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type QuestionTypeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type QuestionTextOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'questionID_ASC' |
  'questionID_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AlternativesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'description_ASC' |
  'description_DESC' |
  'value_ASC' |
  'value_DESC' |
  'order_ASC' |
  'order_DESC' |
  'listID_ASC' |
  'listID_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type QuestionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'description_ASC' |
  'description_DESC' |
  'questionType_ASC' |
  'questionType_DESC' |
  'listID_ASC' |
  'listID_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type AlternativeTextOrderByInput =   'id_ASC' |
  'id_DESC' |
  'alternativeID_ASC' |
  'alternativeID_DESC' |
  'language_ASC' |
  'language_DESC' |
  'text_ASC' |
  'text_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ListOrderByInput =   'id_ASC' |
  'id_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AnswerOrderByInput =   'id_ASC' |
  'id_DESC' |
  'questionID_ASC' |
  'questionID_DESC' |
  'value_ASC' |
  'value_DESC' |
  'alternativeID_ASC' |
  'alternativeID_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LanguageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface UserCreateInput {
  name: String
  email: String
  password: String
}

export interface AlternativesWhereUniqueInput {
  id?: ID_Input
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
}

export interface AlternativeTextWhereUniqueInput {
  id?: ID_Input
}

export interface AlternativesSubscriptionWhereInput {
  AND?: AlternativesSubscriptionWhereInput[] | AlternativesSubscriptionWhereInput
  OR?: AlternativesSubscriptionWhereInput[] | AlternativesSubscriptionWhereInput
  NOT?: AlternativesSubscriptionWhereInput[] | AlternativesSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AlternativesWhereInput
}

export interface ListWhereUniqueInput {
  id?: ID_Input
}

export interface LanguageWhereInput {
  AND?: LanguageWhereInput[] | LanguageWhereInput
  OR?: LanguageWhereInput[] | LanguageWhereInput
  NOT?: LanguageWhereInput[] | LanguageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface AnswerWhereUniqueInput {
  id?: ID_Input
}

export interface QuestionTextSubscriptionWhereInput {
  AND?: QuestionTextSubscriptionWhereInput[] | QuestionTextSubscriptionWhereInput
  OR?: QuestionTextSubscriptionWhereInput[] | QuestionTextSubscriptionWhereInput
  NOT?: QuestionTextSubscriptionWhereInput[] | QuestionTextSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: QuestionTextWhereInput
}

export interface LanguageWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface AlternativesWhereInput {
  AND?: AlternativesWhereInput[] | AlternativesWhereInput
  OR?: AlternativesWhereInput[] | AlternativesWhereInput
  NOT?: AlternativesWhereInput[] | AlternativesWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  value?: Float
  value_not?: Float
  value_in?: Float[] | Float
  value_not_in?: Float[] | Float
  value_lt?: Float
  value_lte?: Float
  value_gt?: Float
  value_gte?: Float
  order?: Int
  order_not?: Int
  order_in?: Int[] | Int
  order_not_in?: Int[] | Int
  order_lt?: Int
  order_lte?: Int
  order_gt?: Int
  order_gte?: Int
  listID?: ID_Input
  listID_not?: ID_Input
  listID_in?: ID_Input[] | ID_Input
  listID_not_in?: ID_Input[] | ID_Input
  listID_lt?: ID_Input
  listID_lte?: ID_Input
  listID_gt?: ID_Input
  listID_gte?: ID_Input
  listID_contains?: ID_Input
  listID_not_contains?: ID_Input
  listID_starts_with?: ID_Input
  listID_not_starts_with?: ID_Input
  listID_ends_with?: ID_Input
  listID_not_ends_with?: ID_Input
}

export interface ListUpdateInput {
  description?: String
}

export interface AlternativeTextSubscriptionWhereInput {
  AND?: AlternativeTextSubscriptionWhereInput[] | AlternativeTextSubscriptionWhereInput
  OR?: AlternativeTextSubscriptionWhereInput[] | AlternativeTextSubscriptionWhereInput
  NOT?: AlternativeTextSubscriptionWhereInput[] | AlternativeTextSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AlternativeTextWhereInput
}

export interface AlternativeTextUpdateInput {
  alternativeID?: ID_Input
  language?: ID_Input
  text?: String
}

export interface AlternativeTextWhereInput {
  AND?: AlternativeTextWhereInput[] | AlternativeTextWhereInput
  OR?: AlternativeTextWhereInput[] | AlternativeTextWhereInput
  NOT?: AlternativeTextWhereInput[] | AlternativeTextWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  alternativeID?: ID_Input
  alternativeID_not?: ID_Input
  alternativeID_in?: ID_Input[] | ID_Input
  alternativeID_not_in?: ID_Input[] | ID_Input
  alternativeID_lt?: ID_Input
  alternativeID_lte?: ID_Input
  alternativeID_gt?: ID_Input
  alternativeID_gte?: ID_Input
  alternativeID_contains?: ID_Input
  alternativeID_not_contains?: ID_Input
  alternativeID_starts_with?: ID_Input
  alternativeID_not_starts_with?: ID_Input
  alternativeID_ends_with?: ID_Input
  alternativeID_not_ends_with?: ID_Input
  language?: ID_Input
  language_not?: ID_Input
  language_in?: ID_Input[] | ID_Input
  language_not_in?: ID_Input[] | ID_Input
  language_lt?: ID_Input
  language_lte?: ID_Input
  language_gt?: ID_Input
  language_gte?: ID_Input
  language_contains?: ID_Input
  language_not_contains?: ID_Input
  language_starts_with?: ID_Input
  language_not_starts_with?: ID_Input
  language_ends_with?: ID_Input
  language_not_ends_with?: ID_Input
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
}

export interface AlternativesUpdateInput {
  description?: String
  value?: Float
  order?: Int
  listID?: ID_Input
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface LanguageUpsertNestedInput {
  update: LanguageUpdateDataInput
  create: LanguageCreateInput
}

export interface ListSubscriptionWhereInput {
  AND?: ListSubscriptionWhereInput[] | ListSubscriptionWhereInput
  OR?: ListSubscriptionWhereInput[] | ListSubscriptionWhereInput
  NOT?: ListSubscriptionWhereInput[] | ListSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ListWhereInput
}

export interface LanguageUpdateDataInput {
  name?: String
}

export interface AnswerWhereInput {
  AND?: AnswerWhereInput[] | AnswerWhereInput
  OR?: AnswerWhereInput[] | AnswerWhereInput
  NOT?: AnswerWhereInput[] | AnswerWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  questionID?: ID_Input
  questionID_not?: ID_Input
  questionID_in?: ID_Input[] | ID_Input
  questionID_not_in?: ID_Input[] | ID_Input
  questionID_lt?: ID_Input
  questionID_lte?: ID_Input
  questionID_gt?: ID_Input
  questionID_gte?: ID_Input
  questionID_contains?: ID_Input
  questionID_not_contains?: ID_Input
  questionID_starts_with?: ID_Input
  questionID_not_starts_with?: ID_Input
  questionID_ends_with?: ID_Input
  questionID_not_ends_with?: ID_Input
  value?: Float
  value_not?: Float
  value_in?: Float[] | Float
  value_not_in?: Float[] | Float
  value_lt?: Float
  value_lte?: Float
  value_gt?: Float
  value_gte?: Float
  alternativeID?: ID_Input
  alternativeID_not?: ID_Input
  alternativeID_in?: ID_Input[] | ID_Input
  alternativeID_not_in?: ID_Input[] | ID_Input
  alternativeID_lt?: ID_Input
  alternativeID_lte?: ID_Input
  alternativeID_gt?: ID_Input
  alternativeID_gte?: ID_Input
  alternativeID_contains?: ID_Input
  alternativeID_not_contains?: ID_Input
  alternativeID_starts_with?: ID_Input
  alternativeID_not_starts_with?: ID_Input
  alternativeID_ends_with?: ID_Input
  alternativeID_not_ends_with?: ID_Input
}

export interface LanguageUpdateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
  delete?: Boolean
  update?: LanguageUpdateDataInput
  upsert?: LanguageUpsertNestedInput
}

export interface AnswerUpdateInput {
  questionID?: ID_Input
  value?: Float
  alternativeID?: ID_Input
}

export interface QuestionTextUpdateInput {
  text?: String
  questionID?: ID_Input
  language?: LanguageUpdateOneInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface QuestionTypeUpdateInput {
  description?: String
}

export interface QuestionTypeWhereUniqueInput {
  id?: ID_Input
  description?: String
}

export interface QuestionUpdateInput {
  description?: String
  questionType?: ID_Input
  listID?: ID_Input
}

export interface QuestionTextWhereInput {
  AND?: QuestionTextWhereInput[] | QuestionTextWhereInput
  OR?: QuestionTextWhereInput[] | QuestionTextWhereInput
  NOT?: QuestionTextWhereInput[] | QuestionTextWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  questionID?: ID_Input
  questionID_not?: ID_Input
  questionID_in?: ID_Input[] | ID_Input
  questionID_not_in?: ID_Input[] | ID_Input
  questionID_lt?: ID_Input
  questionID_lte?: ID_Input
  questionID_gt?: ID_Input
  questionID_gte?: ID_Input
  questionID_contains?: ID_Input
  questionID_not_contains?: ID_Input
  questionID_starts_with?: ID_Input
  questionID_not_starts_with?: ID_Input
  questionID_ends_with?: ID_Input
  questionID_not_ends_with?: ID_Input
  language?: LanguageWhereInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
}

export interface QuestionTypeSubscriptionWhereInput {
  AND?: QuestionTypeSubscriptionWhereInput[] | QuestionTypeSubscriptionWhereInput
  OR?: QuestionTypeSubscriptionWhereInput[] | QuestionTypeSubscriptionWhereInput
  NOT?: QuestionTypeSubscriptionWhereInput[] | QuestionTypeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: QuestionTypeWhereInput
}

export interface AnswerCreateInput {
  questionID: ID_Input
  value?: Float
  alternativeID?: ID_Input
}

export interface QuestionWhereInput {
  AND?: QuestionWhereInput[] | QuestionWhereInput
  OR?: QuestionWhereInput[] | QuestionWhereInput
  NOT?: QuestionWhereInput[] | QuestionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  questionType?: ID_Input
  questionType_not?: ID_Input
  questionType_in?: ID_Input[] | ID_Input
  questionType_not_in?: ID_Input[] | ID_Input
  questionType_lt?: ID_Input
  questionType_lte?: ID_Input
  questionType_gt?: ID_Input
  questionType_gte?: ID_Input
  questionType_contains?: ID_Input
  questionType_not_contains?: ID_Input
  questionType_starts_with?: ID_Input
  questionType_not_starts_with?: ID_Input
  questionType_ends_with?: ID_Input
  questionType_not_ends_with?: ID_Input
  listID?: ID_Input
  listID_not?: ID_Input
  listID_in?: ID_Input[] | ID_Input
  listID_not_in?: ID_Input[] | ID_Input
  listID_lt?: ID_Input
  listID_lte?: ID_Input
  listID_gt?: ID_Input
  listID_gte?: ID_Input
  listID_contains?: ID_Input
  listID_not_contains?: ID_Input
  listID_starts_with?: ID_Input
  listID_not_starts_with?: ID_Input
  listID_ends_with?: ID_Input
  listID_not_ends_with?: ID_Input
}

export interface ListCreateInput {
  description: String
}

export interface ListWhereInput {
  AND?: ListWhereInput[] | ListWhereInput
  OR?: ListWhereInput[] | ListWhereInput
  NOT?: ListWhereInput[] | ListWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
}

export interface AlternativeTextCreateInput {
  alternativeID: ID_Input
  language: ID_Input
  text: String
}

export interface AnswerSubscriptionWhereInput {
  AND?: AnswerSubscriptionWhereInput[] | AnswerSubscriptionWhereInput
  OR?: AnswerSubscriptionWhereInput[] | AnswerSubscriptionWhereInput
  NOT?: AnswerSubscriptionWhereInput[] | AnswerSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AnswerWhereInput
}

export interface AlternativesCreateInput {
  description: String
  value: Float
  order: Int
  listID: ID_Input
}

export interface QuestionWhereUniqueInput {
  id?: ID_Input
}

export interface LanguageCreateInput {
  name: String
}

export interface QuestionTypeWhereInput {
  AND?: QuestionTypeWhereInput[] | QuestionTypeWhereInput
  OR?: QuestionTypeWhereInput[] | QuestionTypeWhereInput
  NOT?: QuestionTypeWhereInput[] | QuestionTypeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
}

export interface QuestionCreateInput {
  description: String
  questionType: ID_Input
  listID?: ID_Input
}

export interface QuestionTypeCreateInput {
  description: String
}

export interface QuestionTextCreateInput {
  text: String
  questionID: ID_Input
  language: LanguageCreateOneInput
}

export interface LanguageCreateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
}

export interface LanguageUpdateInput {
  name?: String
}

export interface QuestionSubscriptionWhereInput {
  AND?: QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput
  OR?: QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput
  NOT?: QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: QuestionWhereInput
}

export interface QuestionTextWhereUniqueInput {
  id?: ID_Input
}

export interface LanguageSubscriptionWhereInput {
  AND?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput
  OR?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput
  NOT?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LanguageWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface ListConnection {
  pageInfo: PageInfo
  edges: ListEdge[]
  aggregate: AggregateList
}

export interface List extends Node {
  id: ID_Output
  description: String
}

export interface LanguagePreviousValues {
  id: ID_Output
  name: String
}

export interface BatchPayload {
  count: Long
}

export interface AggregateList {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ListEdge {
  node: List
  cursor: String
}

export interface AnswerSubscriptionPayload {
  mutation: MutationType
  node?: Answer
  updatedFields?: String[]
  previousValues?: AnswerPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface AnswerConnection {
  pageInfo: PageInfo
  edges: AnswerEdge[]
  aggregate: AggregateAnswer
}

/*
 * An edge in a connection.

 */
export interface AnswerEdge {
  node: Answer
  cursor: String
}

export interface AggregateAnswer {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface LanguageEdge {
  node: Language
  cursor: String
}

export interface AlternativeText extends Node {
  id: ID_Output
  alternativeID: ID_Output
  language: ID_Output
  text: String
}

export interface AggregateAlternativeText {
  count: Int
}

export interface Alternatives extends Node {
  id: ID_Output
  description: String
  value: Float
  order: Int
  listID: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface AlternativeTextConnection {
  pageInfo: PageInfo
  edges: AlternativeTextEdge[]
  aggregate: AggregateAlternativeText
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface AlternativesEdge {
  node: Alternatives
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
}

export interface AggregateQuestionText {
  count: Int
}

export interface AnswerPreviousValues {
  id: ID_Output
  questionID: ID_Output
  value?: Float
  alternativeID?: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface QuestionTextConnection {
  pageInfo: PageInfo
  edges: QuestionTextEdge[]
  aggregate: AggregateQuestionText
}

export interface QuestionSubscriptionPayload {
  mutation: MutationType
  node?: Question
  updatedFields?: String[]
  previousValues?: QuestionPreviousValues
}

/*
 * An edge in a connection.

 */
export interface QuestionTypeEdge {
  node: QuestionType
  cursor: String
}

export interface QuestionPreviousValues {
  id: ID_Output
  description: String
  questionType: ID_Output
  listID?: ID_Output
}

export interface AggregateQuestion {
  count: Int
}

export interface Language extends Node {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface QuestionConnection {
  pageInfo: PageInfo
  edges: QuestionEdge[]
  aggregate: AggregateQuestion
}

export interface QuestionTypeSubscriptionPayload {
  mutation: MutationType
  node?: QuestionType
  updatedFields?: String[]
  previousValues?: QuestionTypePreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface QuestionTypePreviousValues {
  id: ID_Output
  description: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface QuestionText extends Node {
  id: ID_Output
  text: String
  language: Language
  questionID: ID_Output
}

export interface Answer extends Node {
  id: ID_Output
  questionID: ID_Output
  value?: Float
  alternativeID?: ID_Output
}

export interface QuestionTextSubscriptionPayload {
  mutation: MutationType
  node?: QuestionText
  updatedFields?: String[]
  previousValues?: QuestionTextPreviousValues
}

export interface AggregateLanguage {
  count: Int
}

export interface QuestionTextPreviousValues {
  id: ID_Output
  text: String
  questionID: ID_Output
}

export interface AggregateAlternatives {
  count: Int
}

export interface QuestionType extends Node {
  id: ID_Output
  description: String
}

/*
 * An edge in a connection.

 */
export interface QuestionTextEdge {
  node: QuestionText
  cursor: String
}

export interface AlternativesSubscriptionPayload {
  mutation: MutationType
  node?: Alternatives
  updatedFields?: String[]
  previousValues?: AlternativesPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface QuestionTypeConnection {
  pageInfo: PageInfo
  edges: QuestionTypeEdge[]
  aggregate: AggregateQuestionType
}

export interface AlternativesPreviousValues {
  id: ID_Output
  description: String
  value: Float
  order: Int
  listID: ID_Output
}

export interface AggregateUser {
  count: Int
}

export interface Question extends Node {
  id: ID_Output
  description: String
  questionType: ID_Output
  listID?: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface AlternativeTextSubscriptionPayload {
  mutation: MutationType
  node?: AlternativeText
  updatedFields?: String[]
  previousValues?: AlternativeTextPreviousValues
}

/*
 * An edge in a connection.

 */
export interface AlternativeTextEdge {
  node: AlternativeText
  cursor: String
}

export interface AggregateQuestionType {
  count: Int
}

export interface ListPreviousValues {
  id: ID_Output
  description: String
}

export interface ListSubscriptionPayload {
  mutation: MutationType
  node?: List
  updatedFields?: String[]
  previousValues?: ListPreviousValues
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
}

export interface AlternativeTextPreviousValues {
  id: ID_Output
  alternativeID: ID_Output
  language: ID_Output
  text: String
}

/*
 * An edge in a connection.

 */
export interface QuestionEdge {
  node: Question
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface AlternativesConnection {
  pageInfo: PageInfo
  edges: AlternativesEdge[]
  aggregate: AggregateAlternatives
}

/*
 * A connection to a list of items.

 */
export interface LanguageConnection {
  pageInfo: PageInfo
  edges: LanguageEdge[]
  aggregate: AggregateLanguage
}

export interface LanguageSubscriptionPayload {
  mutation: MutationType
  node?: Language
  updatedFields?: String[]
  previousValues?: LanguagePreviousValues
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number