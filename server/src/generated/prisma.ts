import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questions: <T = Question[]>(args: { where?: QuestionWhereInput, orderBy?: QuestionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionTexts: <T = QuestionText[]>(args: { where?: QuestionTextWhereInput, orderBy?: QuestionTextOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionOptionses: <T = QuestionOptions[]>(args: { where?: QuestionOptionsWhereInput, orderBy?: QuestionOptionsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languages: <T = Language[]>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionTypes: <T = QuestionType[]>(args: { where?: QuestionTypeWhereInput, orderBy?: QuestionTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    question: <T = Question | null>(args: { where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionText: <T = QuestionText | null>(args: { where: QuestionTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionOptions: <T = QuestionOptions | null>(args: { where: QuestionOptionsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    language: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionType: <T = QuestionType | null>(args: { where: QuestionTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionsConnection: <T = QuestionConnection>(args: { where?: QuestionWhereInput, orderBy?: QuestionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionTextsConnection: <T = QuestionTextConnection>(args: { where?: QuestionTextWhereInput, orderBy?: QuestionTextOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionOptionsesConnection: <T = QuestionOptionsConnection>(args: { where?: QuestionOptionsWhereInput, orderBy?: QuestionOptionsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languagesConnection: <T = LanguageConnection>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionTypesConnection: <T = QuestionTypeConnection>(args: { where?: QuestionTypeWhereInput, orderBy?: QuestionTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestion: <T = Question>(args: { data: QuestionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestionText: <T = QuestionText>(args: { data: QuestionTextCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestionOptions: <T = QuestionOptions>(args: { data: QuestionOptionsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLanguage: <T = Language>(args: { data: LanguageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestionType: <T = QuestionType>(args: { data: QuestionTypeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateQuestion: <T = Question | null>(args: { data: QuestionUpdateInput, where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateQuestionText: <T = QuestionText | null>(args: { data: QuestionTextUpdateInput, where: QuestionTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateQuestionOptions: <T = QuestionOptions | null>(args: { data: QuestionOptionsUpdateInput, where: QuestionOptionsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLanguage: <T = Language | null>(args: { data: LanguageUpdateInput, where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateQuestionType: <T = QuestionType | null>(args: { data: QuestionTypeUpdateInput, where: QuestionTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteQuestion: <T = Question | null>(args: { where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteQuestionText: <T = QuestionText | null>(args: { where: QuestionTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteQuestionOptions: <T = QuestionOptions | null>(args: { where: QuestionOptionsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLanguage: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteQuestionType: <T = QuestionType | null>(args: { where: QuestionTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestion: <T = Question>(args: { where: QuestionWhereUniqueInput, create: QuestionCreateInput, update: QuestionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestionText: <T = QuestionText>(args: { where: QuestionTextWhereUniqueInput, create: QuestionTextCreateInput, update: QuestionTextUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestionOptions: <T = QuestionOptions>(args: { where: QuestionOptionsWhereUniqueInput, create: QuestionOptionsCreateInput, update: QuestionOptionsUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLanguage: <T = Language>(args: { where: LanguageWhereUniqueInput, create: LanguageCreateInput, update: LanguageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestionType: <T = QuestionType>(args: { where: QuestionTypeWhereUniqueInput, create: QuestionTypeCreateInput, update: QuestionTypeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestions: <T = BatchPayload>(args: { data: QuestionUpdateInput, where?: QuestionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestionTexts: <T = BatchPayload>(args: { data: QuestionTextUpdateInput, where?: QuestionTextWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestionOptionses: <T = BatchPayload>(args: { data: QuestionOptionsUpdateInput, where?: QuestionOptionsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLanguages: <T = BatchPayload>(args: { data: LanguageUpdateInput, where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestionTypes: <T = BatchPayload>(args: { data: QuestionTypeUpdateInput, where?: QuestionTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestions: <T = BatchPayload>(args: { where?: QuestionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestionTexts: <T = BatchPayload>(args: { where?: QuestionTextWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestionOptionses: <T = BatchPayload>(args: { where?: QuestionOptionsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLanguages: <T = BatchPayload>(args: { where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestionTypes: <T = BatchPayload>(args: { where?: QuestionTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    question: <T = QuestionSubscriptionPayload | null>(args: { where?: QuestionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    questionText: <T = QuestionTextSubscriptionPayload | null>(args: { where?: QuestionTextSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    questionOptions: <T = QuestionOptionsSubscriptionPayload | null>(args: { where?: QuestionOptionsSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    language: <T = LanguageSubscriptionPayload | null>(args: { where?: LanguageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    questionType: <T = QuestionTypeSubscriptionPayload | null>(args: { where?: QuestionTypeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Question: (where?: QuestionWhereInput) => Promise<boolean>
  QuestionText: (where?: QuestionTextWhereInput) => Promise<boolean>
  QuestionOptions: (where?: QuestionOptionsWhereInput) => Promise<boolean>
  Language: (where?: LanguageWhereInput) => Promise<boolean>
  QuestionType: (where?: QuestionTypeWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateLanguage {
  count: Int!
}

type AggregateQuestion {
  count: Int!
}

type AggregateQuestionOptions {
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

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createQuestion(data: QuestionCreateInput!): Question!
  createQuestionText(data: QuestionTextCreateInput!): QuestionText!
  createQuestionOptions(data: QuestionOptionsCreateInput!): QuestionOptions!
  createLanguage(data: LanguageCreateInput!): Language!
  createQuestionType(data: QuestionTypeCreateInput!): QuestionType!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateQuestion(data: QuestionUpdateInput!, where: QuestionWhereUniqueInput!): Question
  updateQuestionText(data: QuestionTextUpdateInput!, where: QuestionTextWhereUniqueInput!): QuestionText
  updateQuestionOptions(data: QuestionOptionsUpdateInput!, where: QuestionOptionsWhereUniqueInput!): QuestionOptions
  updateLanguage(data: LanguageUpdateInput!, where: LanguageWhereUniqueInput!): Language
  updateQuestionType(data: QuestionTypeUpdateInput!, where: QuestionTypeWhereUniqueInput!): QuestionType
  deleteUser(where: UserWhereUniqueInput!): User
  deleteQuestion(where: QuestionWhereUniqueInput!): Question
  deleteQuestionText(where: QuestionTextWhereUniqueInput!): QuestionText
  deleteQuestionOptions(where: QuestionOptionsWhereUniqueInput!): QuestionOptions
  deleteLanguage(where: LanguageWhereUniqueInput!): Language
  deleteQuestionType(where: QuestionTypeWhereUniqueInput!): QuestionType
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertQuestion(where: QuestionWhereUniqueInput!, create: QuestionCreateInput!, update: QuestionUpdateInput!): Question!
  upsertQuestionText(where: QuestionTextWhereUniqueInput!, create: QuestionTextCreateInput!, update: QuestionTextUpdateInput!): QuestionText!
  upsertQuestionOptions(where: QuestionOptionsWhereUniqueInput!, create: QuestionOptionsCreateInput!, update: QuestionOptionsUpdateInput!): QuestionOptions!
  upsertLanguage(where: LanguageWhereUniqueInput!, create: LanguageCreateInput!, update: LanguageUpdateInput!): Language!
  upsertQuestionType(where: QuestionTypeWhereUniqueInput!, create: QuestionTypeCreateInput!, update: QuestionTypeUpdateInput!): QuestionType!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyQuestions(data: QuestionUpdateInput!, where: QuestionWhereInput): BatchPayload!
  updateManyQuestionTexts(data: QuestionTextUpdateInput!, where: QuestionTextWhereInput): BatchPayload!
  updateManyQuestionOptionses(data: QuestionOptionsUpdateInput!, where: QuestionOptionsWhereInput): BatchPayload!
  updateManyLanguages(data: LanguageUpdateInput!, where: LanguageWhereInput): BatchPayload!
  updateManyQuestionTypes(data: QuestionTypeUpdateInput!, where: QuestionTypeWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyQuestions(where: QuestionWhereInput): BatchPayload!
  deleteManyQuestionTexts(where: QuestionTextWhereInput): BatchPayload!
  deleteManyQuestionOptionses(where: QuestionOptionsWhereInput): BatchPayload!
  deleteManyLanguages(where: LanguageWhereInput): BatchPayload!
  deleteManyQuestionTypes(where: QuestionTypeWhereInput): BatchPayload!
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
  questionTexts(where: QuestionTextWhereInput, orderBy: QuestionTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [QuestionText]!
  questionOptionses(where: QuestionOptionsWhereInput, orderBy: QuestionOptionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [QuestionOptions]!
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language]!
  questionTypes(where: QuestionTypeWhereInput, orderBy: QuestionTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [QuestionType]!
  user(where: UserWhereUniqueInput!): User
  question(where: QuestionWhereUniqueInput!): Question
  questionText(where: QuestionTextWhereUniqueInput!): QuestionText
  questionOptions(where: QuestionOptionsWhereUniqueInput!): QuestionOptions
  language(where: LanguageWhereUniqueInput!): Language
  questionType(where: QuestionTypeWhereUniqueInput!): QuestionType
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  questionsConnection(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionConnection!
  questionTextsConnection(where: QuestionTextWhereInput, orderBy: QuestionTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionTextConnection!
  questionOptionsesConnection(where: QuestionOptionsWhereInput, orderBy: QuestionOptionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionOptionsConnection!
  languagesConnection(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LanguageConnection!
  questionTypesConnection(where: QuestionTypeWhereInput, orderBy: QuestionTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionTypeConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Question implements Node {
  id: ID!
  description: String
  type(where: QuestionTypeWhereInput): QuestionType!
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
  description: String
  type: QuestionTypeCreateOneInput!
}

"""An edge in a connection."""
type QuestionEdge {
  """The item at the end of the edge."""
  node: Question!

  """A cursor for use in pagination."""
  cursor: String!
}

type QuestionOptions implements Node {
  id: ID!
  QuestionTypeID: ID!
  QuestionID: ID!
  options: [String!]!
  language(where: LanguageWhereInput): Language!
  questionText(where: QuestionTextWhereInput): QuestionText!
}

"""A connection to a list of items."""
type QuestionOptionsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [QuestionOptionsEdge]!
  aggregate: AggregateQuestionOptions!
}

input QuestionOptionsCreateInput {
  QuestionTypeID: ID!
  QuestionID: ID!
  options: QuestionOptionsCreateoptionsInput
  language: LanguageCreateOneInput!
  questionText: QuestionTextCreateOneWithoutQuestionOptionsInput!
}

input QuestionOptionsCreateOneWithoutQuestionTextInput {
  create: QuestionOptionsCreateWithoutQuestionTextInput
  connect: QuestionOptionsWhereUniqueInput
}

input QuestionOptionsCreateoptionsInput {
  set: [String!]
}

input QuestionOptionsCreateWithoutQuestionTextInput {
  QuestionTypeID: ID!
  QuestionID: ID!
  options: QuestionOptionsCreateoptionsInput
  language: LanguageCreateOneInput!
}

"""An edge in a connection."""
type QuestionOptionsEdge {
  """The item at the end of the edge."""
  node: QuestionOptions!

  """A cursor for use in pagination."""
  cursor: String!
}

enum QuestionOptionsOrderByInput {
  id_ASC
  id_DESC
  QuestionTypeID_ASC
  QuestionTypeID_DESC
  QuestionID_ASC
  QuestionID_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type QuestionOptionsPreviousValues {
  id: ID!
  QuestionTypeID: ID!
  QuestionID: ID!
  options: [String!]!
}

type QuestionOptionsSubscriptionPayload {
  mutation: MutationType!
  node: QuestionOptions
  updatedFields: [String!]
  previousValues: QuestionOptionsPreviousValues
}

input QuestionOptionsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionOptionsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionOptionsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionOptionsSubscriptionWhereInput!]

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
  node: QuestionOptionsWhereInput
}

input QuestionOptionsUpdateInput {
  QuestionTypeID: ID
  QuestionID: ID
  options: QuestionOptionsUpdateoptionsInput
  language: LanguageUpdateOneInput
  questionText: QuestionTextUpdateOneWithoutQuestionOptionsInput
}

input QuestionOptionsUpdateOneWithoutQuestionTextInput {
  create: QuestionOptionsCreateWithoutQuestionTextInput
  connect: QuestionOptionsWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: QuestionOptionsUpdateWithoutQuestionTextDataInput
  upsert: QuestionOptionsUpsertWithoutQuestionTextInput
}

input QuestionOptionsUpdateoptionsInput {
  set: [String!]
}

input QuestionOptionsUpdateWithoutQuestionTextDataInput {
  QuestionTypeID: ID
  QuestionID: ID
  options: QuestionOptionsUpdateoptionsInput
  language: LanguageUpdateOneInput
}

input QuestionOptionsUpsertWithoutQuestionTextInput {
  update: QuestionOptionsUpdateWithoutQuestionTextDataInput!
  create: QuestionOptionsCreateWithoutQuestionTextInput!
}

input QuestionOptionsWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionOptionsWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionOptionsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionOptionsWhereInput!]
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
  QuestionTypeID: ID

  """All values that are not equal to given value."""
  QuestionTypeID_not: ID

  """All values that are contained in given list."""
  QuestionTypeID_in: [ID!]

  """All values that are not contained in given list."""
  QuestionTypeID_not_in: [ID!]

  """All values less than the given value."""
  QuestionTypeID_lt: ID

  """All values less than or equal the given value."""
  QuestionTypeID_lte: ID

  """All values greater than the given value."""
  QuestionTypeID_gt: ID

  """All values greater than or equal the given value."""
  QuestionTypeID_gte: ID

  """All values containing the given string."""
  QuestionTypeID_contains: ID

  """All values not containing the given string."""
  QuestionTypeID_not_contains: ID

  """All values starting with the given string."""
  QuestionTypeID_starts_with: ID

  """All values not starting with the given string."""
  QuestionTypeID_not_starts_with: ID

  """All values ending with the given string."""
  QuestionTypeID_ends_with: ID

  """All values not ending with the given string."""
  QuestionTypeID_not_ends_with: ID
  QuestionID: ID

  """All values that are not equal to given value."""
  QuestionID_not: ID

  """All values that are contained in given list."""
  QuestionID_in: [ID!]

  """All values that are not contained in given list."""
  QuestionID_not_in: [ID!]

  """All values less than the given value."""
  QuestionID_lt: ID

  """All values less than or equal the given value."""
  QuestionID_lte: ID

  """All values greater than the given value."""
  QuestionID_gt: ID

  """All values greater than or equal the given value."""
  QuestionID_gte: ID

  """All values containing the given string."""
  QuestionID_contains: ID

  """All values not containing the given string."""
  QuestionID_not_contains: ID

  """All values starting with the given string."""
  QuestionID_starts_with: ID

  """All values not starting with the given string."""
  QuestionID_not_starts_with: ID

  """All values ending with the given string."""
  QuestionID_ends_with: ID

  """All values not ending with the given string."""
  QuestionID_not_ends_with: ID
  language: LanguageWhereInput
  questionText: QuestionTextWhereInput
}

input QuestionOptionsWhereUniqueInput {
  id: ID
}

enum QuestionOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type QuestionPreviousValues {
  id: ID!
  description: String
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
  questionType(where: QuestionTypeWhereInput): QuestionType!
  questionOptions(where: QuestionOptionsWhereInput): QuestionOptions
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
  questionType: QuestionTypeCreateOneInput!
  questionOptions: QuestionOptionsCreateOneWithoutQuestionTextInput
}

input QuestionTextCreateOneWithoutQuestionOptionsInput {
  create: QuestionTextCreateWithoutQuestionOptionsInput
  connect: QuestionTextWhereUniqueInput
}

input QuestionTextCreateWithoutQuestionOptionsInput {
  text: String!
  questionID: ID!
  language: LanguageCreateOneInput!
  questionType: QuestionTypeCreateOneInput!
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
  questionType: QuestionTypeUpdateOneInput
  questionOptions: QuestionOptionsUpdateOneWithoutQuestionTextInput
}

input QuestionTextUpdateOneWithoutQuestionOptionsInput {
  create: QuestionTextCreateWithoutQuestionOptionsInput
  connect: QuestionTextWhereUniqueInput
  delete: Boolean
  update: QuestionTextUpdateWithoutQuestionOptionsDataInput
  upsert: QuestionTextUpsertWithoutQuestionOptionsInput
}

input QuestionTextUpdateWithoutQuestionOptionsDataInput {
  text: String
  questionID: ID
  language: LanguageUpdateOneInput
  questionType: QuestionTypeUpdateOneInput
}

input QuestionTextUpsertWithoutQuestionOptionsInput {
  update: QuestionTextUpdateWithoutQuestionOptionsDataInput!
  create: QuestionTextCreateWithoutQuestionOptionsInput!
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
  questionType: QuestionTypeWhereInput
  questionOptions: QuestionOptionsWhereInput
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

input QuestionTypeCreateOneInput {
  create: QuestionTypeCreateInput
  connect: QuestionTypeWhereUniqueInput
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

input QuestionTypeUpdateDataInput {
  description: String
}

input QuestionTypeUpdateInput {
  description: String
}

input QuestionTypeUpdateOneInput {
  create: QuestionTypeCreateInput
  connect: QuestionTypeWhereUniqueInput
  delete: Boolean
  update: QuestionTypeUpdateDataInput
  upsert: QuestionTypeUpsertNestedInput
}

input QuestionTypeUpsertNestedInput {
  update: QuestionTypeUpdateDataInput!
  create: QuestionTypeCreateInput!
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
  type: QuestionTypeUpdateOneInput
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
  type: QuestionTypeWhereInput
}

input QuestionWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  question(where: QuestionSubscriptionWhereInput): QuestionSubscriptionPayload
  questionText(where: QuestionTextSubscriptionWhereInput): QuestionTextSubscriptionPayload
  questionOptions(where: QuestionOptionsSubscriptionWhereInput): QuestionOptionsSubscriptionPayload
  language(where: LanguageSubscriptionWhereInput): LanguageSubscriptionPayload
  questionType(where: QuestionTypeSubscriptionWhereInput): QuestionTypeSubscriptionPayload
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

export type QuestionOrderByInput =   'id_ASC' |
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

export type QuestionOptionsOrderByInput =   'id_ASC' |
  'id_DESC' |
  'QuestionTypeID_ASC' |
  'QuestionTypeID_DESC' |
  'QuestionID_ASC' |
  'QuestionID_DESC' |
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

export type QuestionTypeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'description_ASC' |
  'description_DESC' |
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

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface QuestionTypeCreateOneInput {
  create?: QuestionTypeCreateInput
  connect?: QuestionTypeWhereUniqueInput
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

export interface QuestionOptionsCreateOneWithoutQuestionTextInput {
  create?: QuestionOptionsCreateWithoutQuestionTextInput
  connect?: QuestionOptionsWhereUniqueInput
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

export interface QuestionOptionsUpsertWithoutQuestionTextInput {
  update: QuestionOptionsUpdateWithoutQuestionTextDataInput
  create: QuestionOptionsCreateWithoutQuestionTextInput
}

export interface QuestionOptionsCreateInput {
  QuestionTypeID: ID_Input
  QuestionID: ID_Input
  options?: QuestionOptionsCreateoptionsInput
  language: LanguageCreateOneInput
  questionText: QuestionTextCreateOneWithoutQuestionOptionsInput
}

export interface QuestionOptionsUpdateoptionsInput {
  set?: String[] | String
}

export interface QuestionOptionsCreateWithoutQuestionTextInput {
  QuestionTypeID: ID_Input
  QuestionID: ID_Input
  options?: QuestionOptionsCreateoptionsInput
  language: LanguageCreateOneInput
}

export interface QuestionOptionsUpdateWithoutQuestionTextDataInput {
  QuestionTypeID?: ID_Input
  QuestionID?: ID_Input
  options?: QuestionOptionsUpdateoptionsInput
  language?: LanguageUpdateOneInput
}

export interface QuestionOptionsWhereInput {
  AND?: QuestionOptionsWhereInput[] | QuestionOptionsWhereInput
  OR?: QuestionOptionsWhereInput[] | QuestionOptionsWhereInput
  NOT?: QuestionOptionsWhereInput[] | QuestionOptionsWhereInput
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
  QuestionTypeID?: ID_Input
  QuestionTypeID_not?: ID_Input
  QuestionTypeID_in?: ID_Input[] | ID_Input
  QuestionTypeID_not_in?: ID_Input[] | ID_Input
  QuestionTypeID_lt?: ID_Input
  QuestionTypeID_lte?: ID_Input
  QuestionTypeID_gt?: ID_Input
  QuestionTypeID_gte?: ID_Input
  QuestionTypeID_contains?: ID_Input
  QuestionTypeID_not_contains?: ID_Input
  QuestionTypeID_starts_with?: ID_Input
  QuestionTypeID_not_starts_with?: ID_Input
  QuestionTypeID_ends_with?: ID_Input
  QuestionTypeID_not_ends_with?: ID_Input
  QuestionID?: ID_Input
  QuestionID_not?: ID_Input
  QuestionID_in?: ID_Input[] | ID_Input
  QuestionID_not_in?: ID_Input[] | ID_Input
  QuestionID_lt?: ID_Input
  QuestionID_lte?: ID_Input
  QuestionID_gt?: ID_Input
  QuestionID_gte?: ID_Input
  QuestionID_contains?: ID_Input
  QuestionID_not_contains?: ID_Input
  QuestionID_starts_with?: ID_Input
  QuestionID_not_starts_with?: ID_Input
  QuestionID_ends_with?: ID_Input
  QuestionID_not_ends_with?: ID_Input
  language?: LanguageWhereInput
  questionText?: QuestionTextWhereInput
}

export interface QuestionOptionsUpdateOneWithoutQuestionTextInput {
  create?: QuestionOptionsCreateWithoutQuestionTextInput
  connect?: QuestionOptionsWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: QuestionOptionsUpdateWithoutQuestionTextDataInput
  upsert?: QuestionOptionsUpsertWithoutQuestionTextInput
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

export interface LanguageUpsertNestedInput {
  update: LanguageUpdateDataInput
  create: LanguageCreateInput
}

export interface QuestionOptionsSubscriptionWhereInput {
  AND?: QuestionOptionsSubscriptionWhereInput[] | QuestionOptionsSubscriptionWhereInput
  OR?: QuestionOptionsSubscriptionWhereInput[] | QuestionOptionsSubscriptionWhereInput
  NOT?: QuestionOptionsSubscriptionWhereInput[] | QuestionOptionsSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: QuestionOptionsWhereInput
}

export interface LanguageUpdateDataInput {
  name?: String
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

export interface LanguageUpdateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
  delete?: Boolean
  update?: LanguageUpdateDataInput
  upsert?: LanguageUpsertNestedInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface QuestionTextUpdateInput {
  text?: String
  questionID?: ID_Input
  language?: LanguageUpdateOneInput
  questionType?: QuestionTypeUpdateOneInput
  questionOptions?: QuestionOptionsUpdateOneWithoutQuestionTextInput
}

export interface QuestionTextWhereUniqueInput {
  id?: ID_Input
}

export interface QuestionTypeUpsertNestedInput {
  update: QuestionTypeUpdateDataInput
  create: QuestionTypeCreateInput
}

export interface LanguageWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface QuestionTypeUpdateDataInput {
  description?: String
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

export interface QuestionTypeUpdateOneInput {
  create?: QuestionTypeCreateInput
  connect?: QuestionTypeWhereUniqueInput
  delete?: Boolean
  update?: QuestionTypeUpdateDataInput
  upsert?: QuestionTypeUpsertNestedInput
}

export interface LanguageUpdateInput {
  name?: String
}

export interface QuestionUpdateInput {
  description?: String
  type?: QuestionTypeUpdateOneInput
}

export interface QuestionTextUpdateWithoutQuestionOptionsDataInput {
  text?: String
  questionID?: ID_Input
  language?: LanguageUpdateOneInput
  questionType?: QuestionTypeUpdateOneInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
}

export interface QuestionOptionsUpdateInput {
  QuestionTypeID?: ID_Input
  QuestionID?: ID_Input
  options?: QuestionOptionsUpdateoptionsInput
  language?: LanguageUpdateOneInput
  questionText?: QuestionTextUpdateOneWithoutQuestionOptionsInput
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
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
  type?: QuestionTypeWhereInput
}

export interface QuestionCreateInput {
  description?: String
  type: QuestionTypeCreateOneInput
}

export interface QuestionWhereUniqueInput {
  id?: ID_Input
}

export interface QuestionTextCreateWithoutQuestionOptionsInput {
  text: String
  questionID: ID_Input
  language: LanguageCreateOneInput
  questionType: QuestionTypeCreateOneInput
}

export interface QuestionTypeWhereUniqueInput {
  id?: ID_Input
  description?: String
}

export interface QuestionTypeCreateInput {
  description: String
}

export interface QuestionTextUpsertWithoutQuestionOptionsInput {
  update: QuestionTextUpdateWithoutQuestionOptionsDataInput
  create: QuestionTextCreateWithoutQuestionOptionsInput
}

export interface QuestionTextCreateInput {
  text: String
  questionID: ID_Input
  language: LanguageCreateOneInput
  questionType: QuestionTypeCreateOneInput
  questionOptions?: QuestionOptionsCreateOneWithoutQuestionTextInput
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

export interface LanguageCreateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
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

export interface QuestionOptionsCreateoptionsInput {
  set?: String[] | String
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
  questionType?: QuestionTypeWhereInput
  questionOptions?: QuestionOptionsWhereInput
}

export interface QuestionTextCreateOneWithoutQuestionOptionsInput {
  create?: QuestionTextCreateWithoutQuestionOptionsInput
  connect?: QuestionTextWhereUniqueInput
}

export interface LanguageCreateInput {
  name: String
}

export interface QuestionOptionsWhereUniqueInput {
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

export interface QuestionTextUpdateOneWithoutQuestionOptionsInput {
  create?: QuestionTextCreateWithoutQuestionOptionsInput
  connect?: QuestionTextWhereUniqueInput
  delete?: Boolean
  update?: QuestionTextUpdateWithoutQuestionOptionsDataInput
  upsert?: QuestionTextUpsertWithoutQuestionOptionsInput
}

export interface QuestionTypeUpdateInput {
  description?: String
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface QuestionTypePreviousValues {
  id: ID_Output
  description: String
}

export interface BatchPayload {
  count: Long
}

export interface QuestionType extends Node {
  id: ID_Output
  description: String
}

export interface Question extends Node {
  id: ID_Output
  description?: String
  type: QuestionType
}

export interface AggregateQuestionType {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * A connection to a list of items.

 */
export interface QuestionTypeConnection {
  pageInfo: PageInfo
  edges: QuestionTypeEdge[]
  aggregate: AggregateQuestionType
}

/*
 * An edge in a connection.

 */
export interface QuestionTypeEdge {
  node: QuestionType
  cursor: String
}

export interface LanguageSubscriptionPayload {
  mutation: MutationType
  node?: Language
  updatedFields?: String[]
  previousValues?: LanguagePreviousValues
}

export interface AggregateLanguage {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface LanguageEdge {
  node: Language
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface LanguageConnection {
  pageInfo: PageInfo
  edges: LanguageEdge[]
  aggregate: AggregateLanguage
}

/*
 * An edge in a connection.

 */
export interface QuestionOptionsEdge {
  node: QuestionOptions
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface AggregateQuestionText {
  count: Int
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
}

/*
 * A connection to a list of items.

 */
export interface QuestionTextConnection {
  pageInfo: PageInfo
  edges: QuestionTextEdge[]
  aggregate: AggregateQuestionText
}

export interface LanguagePreviousValues {
  id: ID_Output
  name: String
}

/*
 * An edge in a connection.

 */
export interface QuestionEdge {
  node: Question
  cursor: String
}

export interface QuestionSubscriptionPayload {
  mutation: MutationType
  node?: Question
  updatedFields?: String[]
  previousValues?: QuestionPreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface QuestionPreviousValues {
  id: ID_Output
  description?: String
}

export interface QuestionTypeSubscriptionPayload {
  mutation: MutationType
  node?: QuestionType
  updatedFields?: String[]
  previousValues?: QuestionTypePreviousValues
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
}

export interface QuestionText extends Node {
  id: ID_Output
  text: String
  language: Language
  questionID: ID_Output
  questionType: QuestionType
  questionOptions?: QuestionOptions
}

export interface QuestionTextSubscriptionPayload {
  mutation: MutationType
  node?: QuestionText
  updatedFields?: String[]
  previousValues?: QuestionTextPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface QuestionOptionsConnection {
  pageInfo: PageInfo
  edges: QuestionOptionsEdge[]
  aggregate: AggregateQuestionOptions
}

export interface QuestionTextPreviousValues {
  id: ID_Output
  text: String
  questionID: ID_Output
}

export interface AggregateQuestion {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface Language extends Node {
  id: ID_Output
  name: String
}

export interface QuestionOptionsPreviousValues {
  id: ID_Output
  QuestionTypeID: ID_Output
  QuestionID: ID_Output
  options: String[]
}

export interface QuestionOptionsSubscriptionPayload {
  mutation: MutationType
  node?: QuestionOptions
  updatedFields?: String[]
  previousValues?: QuestionOptionsPreviousValues
}

export interface QuestionOptions extends Node {
  id: ID_Output
  QuestionTypeID: ID_Output
  QuestionID: ID_Output
  options: String[]
  language: Language
  questionText: QuestionText
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

/*
 * A connection to a list of items.

 */
export interface QuestionConnection {
  pageInfo: PageInfo
  edges: QuestionEdge[]
  aggregate: AggregateQuestion
}

/*
 * An edge in a connection.

 */
export interface QuestionTextEdge {
  node: QuestionText
  cursor: String
}

export interface AggregateQuestionOptions {
  count: Int
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number