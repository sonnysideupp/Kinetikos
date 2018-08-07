import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionnaires: <T = Questionnaire[]>(args: { where?: QuestionnaireWhereInput, orderBy?: QuestionnaireOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionnairenames: <T = Questionnairename[]>(args: { where?: QuestionnairenameWhereInput, orderBy?: QuestionnairenameOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionTexts: <T = QuestionText[]>(args: { where?: QuestionTextWhereInput, orderBy?: QuestionTextOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alternativeTexts: <T = AlternativeText[]>(args: { where?: AlternativeTextWhereInput, orderBy?: AlternativeTextOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lists: <T = List[]>(args: { where?: ListWhereInput, orderBy?: ListOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questions: <T = Question[]>(args: { where?: QuestionWhereInput, orderBy?: QuestionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    answers: <T = Answer[]>(args: { where?: AnswerWhereInput, orderBy?: AnswerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionTypes: <T = QuestionType[]>(args: { where?: QuestionTypeWhereInput, orderBy?: QuestionTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languages: <T = Language[]>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alternativeses: <T = Alternatives[]>(args: { where?: AlternativesWhereInput, orderBy?: AlternativesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionnaire: <T = Questionnaire | null>(args: { where: QuestionnaireWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionnairename: <T = Questionnairename | null>(args: { where: QuestionnairenameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionText: <T = QuestionText | null>(args: { where: QuestionTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alternativeText: <T = AlternativeText | null>(args: { where: AlternativeTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    list: <T = List | null>(args: { where: ListWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    question: <T = Question | null>(args: { where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    answer: <T = Answer | null>(args: { where: AnswerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionType: <T = QuestionType | null>(args: { where: QuestionTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    language: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alternatives: <T = Alternatives | null>(args: { where: AlternativesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionnairesConnection: <T = QuestionnaireConnection>(args: { where?: QuestionnaireWhereInput, orderBy?: QuestionnaireOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionnairenamesConnection: <T = QuestionnairenameConnection>(args: { where?: QuestionnairenameWhereInput, orderBy?: QuestionnairenameOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionTextsConnection: <T = QuestionTextConnection>(args: { where?: QuestionTextWhereInput, orderBy?: QuestionTextOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alternativeTextsConnection: <T = AlternativeTextConnection>(args: { where?: AlternativeTextWhereInput, orderBy?: AlternativeTextOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    listsConnection: <T = ListConnection>(args: { where?: ListWhereInput, orderBy?: ListOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionsConnection: <T = QuestionConnection>(args: { where?: QuestionWhereInput, orderBy?: QuestionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    answersConnection: <T = AnswerConnection>(args: { where?: AnswerWhereInput, orderBy?: AnswerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionTypesConnection: <T = QuestionTypeConnection>(args: { where?: QuestionTypeWhereInput, orderBy?: QuestionTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languagesConnection: <T = LanguageConnection>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alternativesesConnection: <T = AlternativesConnection>(args: { where?: AlternativesWhereInput, orderBy?: AlternativesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestionnaire: <T = Questionnaire>(args: { data: QuestionnaireCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestionnairename: <T = Questionnairename>(args: { data: QuestionnairenameCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestionText: <T = QuestionText>(args: { data: QuestionTextCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAlternativeText: <T = AlternativeText>(args: { data: AlternativeTextCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createList: <T = List>(args: { data: ListCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestion: <T = Question>(args: { data: QuestionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAnswer: <T = Answer>(args: { data: AnswerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestionType: <T = QuestionType>(args: { data: QuestionTypeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLanguage: <T = Language>(args: { data: LanguageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAlternatives: <T = Alternatives>(args: { data: AlternativesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateQuestionnaire: <T = Questionnaire | null>(args: { data: QuestionnaireUpdateInput, where: QuestionnaireWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateQuestionnairename: <T = Questionnairename | null>(args: { data: QuestionnairenameUpdateInput, where: QuestionnairenameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateQuestionText: <T = QuestionText | null>(args: { data: QuestionTextUpdateInput, where: QuestionTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAlternativeText: <T = AlternativeText | null>(args: { data: AlternativeTextUpdateInput, where: AlternativeTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateList: <T = List | null>(args: { data: ListUpdateInput, where: ListWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateQuestion: <T = Question | null>(args: { data: QuestionUpdateInput, where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAnswer: <T = Answer | null>(args: { data: AnswerUpdateInput, where: AnswerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateQuestionType: <T = QuestionType | null>(args: { data: QuestionTypeUpdateInput, where: QuestionTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLanguage: <T = Language | null>(args: { data: LanguageUpdateInput, where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAlternatives: <T = Alternatives | null>(args: { data: AlternativesUpdateInput, where: AlternativesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteQuestionnaire: <T = Questionnaire | null>(args: { where: QuestionnaireWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteQuestionnairename: <T = Questionnairename | null>(args: { where: QuestionnairenameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteQuestionText: <T = QuestionText | null>(args: { where: QuestionTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAlternativeText: <T = AlternativeText | null>(args: { where: AlternativeTextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteList: <T = List | null>(args: { where: ListWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteQuestion: <T = Question | null>(args: { where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAnswer: <T = Answer | null>(args: { where: AnswerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteQuestionType: <T = QuestionType | null>(args: { where: QuestionTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLanguage: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAlternatives: <T = Alternatives | null>(args: { where: AlternativesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestionnaire: <T = Questionnaire>(args: { where: QuestionnaireWhereUniqueInput, create: QuestionnaireCreateInput, update: QuestionnaireUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestionnairename: <T = Questionnairename>(args: { where: QuestionnairenameWhereUniqueInput, create: QuestionnairenameCreateInput, update: QuestionnairenameUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestionText: <T = QuestionText>(args: { where: QuestionTextWhereUniqueInput, create: QuestionTextCreateInput, update: QuestionTextUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAlternativeText: <T = AlternativeText>(args: { where: AlternativeTextWhereUniqueInput, create: AlternativeTextCreateInput, update: AlternativeTextUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertList: <T = List>(args: { where: ListWhereUniqueInput, create: ListCreateInput, update: ListUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestion: <T = Question>(args: { where: QuestionWhereUniqueInput, create: QuestionCreateInput, update: QuestionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAnswer: <T = Answer>(args: { where: AnswerWhereUniqueInput, create: AnswerCreateInput, update: AnswerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestionType: <T = QuestionType>(args: { where: QuestionTypeWhereUniqueInput, create: QuestionTypeCreateInput, update: QuestionTypeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLanguage: <T = Language>(args: { where: LanguageWhereUniqueInput, create: LanguageCreateInput, update: LanguageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAlternatives: <T = Alternatives>(args: { where: AlternativesWhereUniqueInput, create: AlternativesCreateInput, update: AlternativesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestionnaires: <T = BatchPayload>(args: { data: QuestionnaireUpdateInput, where?: QuestionnaireWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestionnairenames: <T = BatchPayload>(args: { data: QuestionnairenameUpdateInput, where?: QuestionnairenameWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestionTexts: <T = BatchPayload>(args: { data: QuestionTextUpdateInput, where?: QuestionTextWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAlternativeTexts: <T = BatchPayload>(args: { data: AlternativeTextUpdateInput, where?: AlternativeTextWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLists: <T = BatchPayload>(args: { data: ListUpdateInput, where?: ListWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestions: <T = BatchPayload>(args: { data: QuestionUpdateInput, where?: QuestionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAnswers: <T = BatchPayload>(args: { data: AnswerUpdateInput, where?: AnswerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestionTypes: <T = BatchPayload>(args: { data: QuestionTypeUpdateInput, where?: QuestionTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLanguages: <T = BatchPayload>(args: { data: LanguageUpdateInput, where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAlternativeses: <T = BatchPayload>(args: { data: AlternativesUpdateInput, where?: AlternativesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestionnaires: <T = BatchPayload>(args: { where?: QuestionnaireWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestionnairenames: <T = BatchPayload>(args: { where?: QuestionnairenameWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestionTexts: <T = BatchPayload>(args: { where?: QuestionTextWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAlternativeTexts: <T = BatchPayload>(args: { where?: AlternativeTextWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLists: <T = BatchPayload>(args: { where?: ListWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestions: <T = BatchPayload>(args: { where?: QuestionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAnswers: <T = BatchPayload>(args: { where?: AnswerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestionTypes: <T = BatchPayload>(args: { where?: QuestionTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLanguages: <T = BatchPayload>(args: { where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAlternativeses: <T = BatchPayload>(args: { where?: AlternativesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    questionnaire: <T = QuestionnaireSubscriptionPayload | null>(args: { where?: QuestionnaireSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    questionnairename: <T = QuestionnairenameSubscriptionPayload | null>(args: { where?: QuestionnairenameSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    questionText: <T = QuestionTextSubscriptionPayload | null>(args: { where?: QuestionTextSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    alternativeText: <T = AlternativeTextSubscriptionPayload | null>(args: { where?: AlternativeTextSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    list: <T = ListSubscriptionPayload | null>(args: { where?: ListSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    question: <T = QuestionSubscriptionPayload | null>(args: { where?: QuestionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    answer: <T = AnswerSubscriptionPayload | null>(args: { where?: AnswerSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    questionType: <T = QuestionTypeSubscriptionPayload | null>(args: { where?: QuestionTypeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    language: <T = LanguageSubscriptionPayload | null>(args: { where?: LanguageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    alternatives: <T = AlternativesSubscriptionPayload | null>(args: { where?: AlternativesSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Questionnaire: (where?: QuestionnaireWhereInput) => Promise<boolean>
  Questionnairename: (where?: QuestionnairenameWhereInput) => Promise<boolean>
  QuestionText: (where?: QuestionTextWhereInput) => Promise<boolean>
  AlternativeText: (where?: AlternativeTextWhereInput) => Promise<boolean>
  List: (where?: ListWhereInput) => Promise<boolean>
  Question: (where?: QuestionWhereInput) => Promise<boolean>
  Answer: (where?: AnswerWhereInput) => Promise<boolean>
  QuestionType: (where?: QuestionTypeWhereInput) => Promise<boolean>
  Language: (where?: LanguageWhereInput) => Promise<boolean>
  Alternatives: (where?: AlternativesWhereInput) => Promise<boolean>
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

type AggregateQuestionnaire {
  count: Int!
}

type AggregateQuestionnairename {
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
  listID(where: ListWhereInput): List
  alternativeText(where: AlternativeTextWhereInput, orderBy: AlternativeTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AlternativeText!]
  question(where: QuestionWhereInput): Question
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
  listID: ListCreateOneInput
  alternativeText: AlternativeTextCreateManyWithoutAlternativeIDInput
  question: QuestionCreateOneWithoutAlternativeInput
}

input AlternativesCreateManyWithoutQuestionInput {
  create: [AlternativesCreateWithoutQuestionInput!]
  connect: [AlternativesWhereUniqueInput!]
}

input AlternativesCreateOneInput {
  create: AlternativesCreateInput
  connect: AlternativesWhereUniqueInput
}

input AlternativesCreateOneWithoutAlternativeTextInput {
  create: AlternativesCreateWithoutAlternativeTextInput
  connect: AlternativesWhereUniqueInput
}

input AlternativesCreateWithoutAlternativeTextInput {
  description: String!
  value: Float!
  order: Int!
  listID: ListCreateOneInput
  question: QuestionCreateOneWithoutAlternativeInput
}

input AlternativesCreateWithoutQuestionInput {
  description: String!
  value: Float!
  order: Int!
  listID: ListCreateOneInput
  alternativeText: AlternativeTextCreateManyWithoutAlternativeIDInput
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

input AlternativesUpdateDataInput {
  description: String
  value: Float
  order: Int
  listID: ListUpdateOneInput
  alternativeText: AlternativeTextUpdateManyWithoutAlternativeIDInput
  question: QuestionUpdateOneWithoutAlternativeInput
}

input AlternativesUpdateInput {
  description: String
  value: Float
  order: Int
  listID: ListUpdateOneInput
  alternativeText: AlternativeTextUpdateManyWithoutAlternativeIDInput
  question: QuestionUpdateOneWithoutAlternativeInput
}

input AlternativesUpdateManyWithoutQuestionInput {
  create: [AlternativesCreateWithoutQuestionInput!]
  connect: [AlternativesWhereUniqueInput!]
  disconnect: [AlternativesWhereUniqueInput!]
  delete: [AlternativesWhereUniqueInput!]
  update: [AlternativesUpdateWithWhereUniqueWithoutQuestionInput!]
  upsert: [AlternativesUpsertWithWhereUniqueWithoutQuestionInput!]
}

input AlternativesUpdateOneInput {
  create: AlternativesCreateInput
  connect: AlternativesWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: AlternativesUpdateDataInput
  upsert: AlternativesUpsertNestedInput
}

input AlternativesUpdateOneWithoutAlternativeTextInput {
  create: AlternativesCreateWithoutAlternativeTextInput
  connect: AlternativesWhereUniqueInput
  delete: Boolean
  update: AlternativesUpdateWithoutAlternativeTextDataInput
  upsert: AlternativesUpsertWithoutAlternativeTextInput
}

input AlternativesUpdateWithoutAlternativeTextDataInput {
  description: String
  value: Float
  order: Int
  listID: ListUpdateOneInput
  question: QuestionUpdateOneWithoutAlternativeInput
}

input AlternativesUpdateWithoutQuestionDataInput {
  description: String
  value: Float
  order: Int
  listID: ListUpdateOneInput
  alternativeText: AlternativeTextUpdateManyWithoutAlternativeIDInput
}

input AlternativesUpdateWithWhereUniqueWithoutQuestionInput {
  where: AlternativesWhereUniqueInput!
  data: AlternativesUpdateWithoutQuestionDataInput!
}

input AlternativesUpsertNestedInput {
  update: AlternativesUpdateDataInput!
  create: AlternativesCreateInput!
}

input AlternativesUpsertWithoutAlternativeTextInput {
  update: AlternativesUpdateWithoutAlternativeTextDataInput!
  create: AlternativesCreateWithoutAlternativeTextInput!
}

input AlternativesUpsertWithWhereUniqueWithoutQuestionInput {
  where: AlternativesWhereUniqueInput!
  update: AlternativesUpdateWithoutQuestionDataInput!
  create: AlternativesCreateWithoutQuestionInput!
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
  listID: ListWhereInput
  alternativeText_every: AlternativeTextWhereInput
  alternativeText_some: AlternativeTextWhereInput
  alternativeText_none: AlternativeTextWhereInput
  question: QuestionWhereInput
}

input AlternativesWhereUniqueInput {
  id: ID
}

type AlternativeText implements Node {
  id: ID!
  alternativeID(where: AlternativesWhereInput): Alternatives!
  language(where: LanguageWhereInput): Language!
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
  text: String!
  alternativeID: AlternativesCreateOneWithoutAlternativeTextInput!
  language: LanguageCreateOneInput!
}

input AlternativeTextCreateManyWithoutAlternativeIDInput {
  create: [AlternativeTextCreateWithoutAlternativeIDInput!]
  connect: [AlternativeTextWhereUniqueInput!]
}

input AlternativeTextCreateWithoutAlternativeIDInput {
  text: String!
  language: LanguageCreateOneInput!
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
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AlternativeTextPreviousValues {
  id: ID!
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
  text: String
  alternativeID: AlternativesUpdateOneWithoutAlternativeTextInput
  language: LanguageUpdateOneInput
}

input AlternativeTextUpdateManyWithoutAlternativeIDInput {
  create: [AlternativeTextCreateWithoutAlternativeIDInput!]
  connect: [AlternativeTextWhereUniqueInput!]
  disconnect: [AlternativeTextWhereUniqueInput!]
  delete: [AlternativeTextWhereUniqueInput!]
  update: [AlternativeTextUpdateWithWhereUniqueWithoutAlternativeIDInput!]
  upsert: [AlternativeTextUpsertWithWhereUniqueWithoutAlternativeIDInput!]
}

input AlternativeTextUpdateWithoutAlternativeIDDataInput {
  text: String
  language: LanguageUpdateOneInput
}

input AlternativeTextUpdateWithWhereUniqueWithoutAlternativeIDInput {
  where: AlternativeTextWhereUniqueInput!
  data: AlternativeTextUpdateWithoutAlternativeIDDataInput!
}

input AlternativeTextUpsertWithWhereUniqueWithoutAlternativeIDInput {
  where: AlternativeTextWhereUniqueInput!
  update: AlternativeTextUpdateWithoutAlternativeIDDataInput!
  create: AlternativeTextCreateWithoutAlternativeIDInput!
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
  alternativeID: AlternativesWhereInput
  language: LanguageWhereInput
}

input AlternativeTextWhereUniqueInput {
  id: ID
}

type Answer implements Node {
  id: ID!
  question(where: QuestionWhereInput): Question!
  value: String!
  alternative(where: AlternativesWhereInput): Alternatives
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
  value: String!
  question: QuestionCreateOneInput!
  alternative: AlternativesCreateOneInput
}

input AnswerCreateManyInput {
  create: [AnswerCreateInput!]
  connect: [AnswerWhereUniqueInput!]
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
  value_ASC
  value_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AnswerPreviousValues {
  id: ID!
  value: String!
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

input AnswerUpdateDataInput {
  value: String
  question: QuestionUpdateOneInput
  alternative: AlternativesUpdateOneInput
}

input AnswerUpdateInput {
  value: String
  question: QuestionUpdateOneInput
  alternative: AlternativesUpdateOneInput
}

input AnswerUpdateManyInput {
  create: [AnswerCreateInput!]
  connect: [AnswerWhereUniqueInput!]
  disconnect: [AnswerWhereUniqueInput!]
  delete: [AnswerWhereUniqueInput!]
  update: [AnswerUpdateWithWhereUniqueNestedInput!]
  upsert: [AnswerUpsertWithWhereUniqueNestedInput!]
}

input AnswerUpdateWithWhereUniqueNestedInput {
  where: AnswerWhereUniqueInput!
  data: AnswerUpdateDataInput!
}

input AnswerUpsertWithWhereUniqueNestedInput {
  where: AnswerWhereUniqueInput!
  update: AnswerUpdateDataInput!
  create: AnswerCreateInput!
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
  value: String

  """All values that are not equal to given value."""
  value_not: String

  """All values that are contained in given list."""
  value_in: [String!]

  """All values that are not contained in given list."""
  value_not_in: [String!]

  """All values less than the given value."""
  value_lt: String

  """All values less than or equal the given value."""
  value_lte: String

  """All values greater than the given value."""
  value_gt: String

  """All values greater than or equal the given value."""
  value_gte: String

  """All values containing the given string."""
  value_contains: String

  """All values not containing the given string."""
  value_not_contains: String

  """All values starting with the given string."""
  value_starts_with: String

  """All values not starting with the given string."""
  value_not_starts_with: String

  """All values ending with the given string."""
  value_ends_with: String

  """All values not ending with the given string."""
  value_not_ends_with: String
  question: QuestionWhereInput
  alternative: AlternativesWhereInput
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

input ListCreateOneInput {
  create: ListCreateInput
  connect: ListWhereUniqueInput
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

input ListUpdateDataInput {
  description: String
}

input ListUpdateInput {
  description: String
}

input ListUpdateOneInput {
  create: ListCreateInput
  connect: ListWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ListUpdateDataInput
  upsert: ListUpsertNestedInput
}

input ListUpsertNestedInput {
  update: ListUpdateDataInput!
  create: ListCreateInput!
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
  createQuestionnaire(data: QuestionnaireCreateInput!): Questionnaire!
  createQuestionnairename(data: QuestionnairenameCreateInput!): Questionnairename!
  createQuestionText(data: QuestionTextCreateInput!): QuestionText!
  createAlternativeText(data: AlternativeTextCreateInput!): AlternativeText!
  createList(data: ListCreateInput!): List!
  createQuestion(data: QuestionCreateInput!): Question!
  createAnswer(data: AnswerCreateInput!): Answer!
  createQuestionType(data: QuestionTypeCreateInput!): QuestionType!
  createLanguage(data: LanguageCreateInput!): Language!
  createAlternatives(data: AlternativesCreateInput!): Alternatives!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateQuestionnaire(data: QuestionnaireUpdateInput!, where: QuestionnaireWhereUniqueInput!): Questionnaire
  updateQuestionnairename(data: QuestionnairenameUpdateInput!, where: QuestionnairenameWhereUniqueInput!): Questionnairename
  updateQuestionText(data: QuestionTextUpdateInput!, where: QuestionTextWhereUniqueInput!): QuestionText
  updateAlternativeText(data: AlternativeTextUpdateInput!, where: AlternativeTextWhereUniqueInput!): AlternativeText
  updateList(data: ListUpdateInput!, where: ListWhereUniqueInput!): List
  updateQuestion(data: QuestionUpdateInput!, where: QuestionWhereUniqueInput!): Question
  updateAnswer(data: AnswerUpdateInput!, where: AnswerWhereUniqueInput!): Answer
  updateQuestionType(data: QuestionTypeUpdateInput!, where: QuestionTypeWhereUniqueInput!): QuestionType
  updateLanguage(data: LanguageUpdateInput!, where: LanguageWhereUniqueInput!): Language
  updateAlternatives(data: AlternativesUpdateInput!, where: AlternativesWhereUniqueInput!): Alternatives
  deleteUser(where: UserWhereUniqueInput!): User
  deleteQuestionnaire(where: QuestionnaireWhereUniqueInput!): Questionnaire
  deleteQuestionnairename(where: QuestionnairenameWhereUniqueInput!): Questionnairename
  deleteQuestionText(where: QuestionTextWhereUniqueInput!): QuestionText
  deleteAlternativeText(where: AlternativeTextWhereUniqueInput!): AlternativeText
  deleteList(where: ListWhereUniqueInput!): List
  deleteQuestion(where: QuestionWhereUniqueInput!): Question
  deleteAnswer(where: AnswerWhereUniqueInput!): Answer
  deleteQuestionType(where: QuestionTypeWhereUniqueInput!): QuestionType
  deleteLanguage(where: LanguageWhereUniqueInput!): Language
  deleteAlternatives(where: AlternativesWhereUniqueInput!): Alternatives
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertQuestionnaire(where: QuestionnaireWhereUniqueInput!, create: QuestionnaireCreateInput!, update: QuestionnaireUpdateInput!): Questionnaire!
  upsertQuestionnairename(where: QuestionnairenameWhereUniqueInput!, create: QuestionnairenameCreateInput!, update: QuestionnairenameUpdateInput!): Questionnairename!
  upsertQuestionText(where: QuestionTextWhereUniqueInput!, create: QuestionTextCreateInput!, update: QuestionTextUpdateInput!): QuestionText!
  upsertAlternativeText(where: AlternativeTextWhereUniqueInput!, create: AlternativeTextCreateInput!, update: AlternativeTextUpdateInput!): AlternativeText!
  upsertList(where: ListWhereUniqueInput!, create: ListCreateInput!, update: ListUpdateInput!): List!
  upsertQuestion(where: QuestionWhereUniqueInput!, create: QuestionCreateInput!, update: QuestionUpdateInput!): Question!
  upsertAnswer(where: AnswerWhereUniqueInput!, create: AnswerCreateInput!, update: AnswerUpdateInput!): Answer!
  upsertQuestionType(where: QuestionTypeWhereUniqueInput!, create: QuestionTypeCreateInput!, update: QuestionTypeUpdateInput!): QuestionType!
  upsertLanguage(where: LanguageWhereUniqueInput!, create: LanguageCreateInput!, update: LanguageUpdateInput!): Language!
  upsertAlternatives(where: AlternativesWhereUniqueInput!, create: AlternativesCreateInput!, update: AlternativesUpdateInput!): Alternatives!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyQuestionnaires(data: QuestionnaireUpdateInput!, where: QuestionnaireWhereInput): BatchPayload!
  updateManyQuestionnairenames(data: QuestionnairenameUpdateInput!, where: QuestionnairenameWhereInput): BatchPayload!
  updateManyQuestionTexts(data: QuestionTextUpdateInput!, where: QuestionTextWhereInput): BatchPayload!
  updateManyAlternativeTexts(data: AlternativeTextUpdateInput!, where: AlternativeTextWhereInput): BatchPayload!
  updateManyLists(data: ListUpdateInput!, where: ListWhereInput): BatchPayload!
  updateManyQuestions(data: QuestionUpdateInput!, where: QuestionWhereInput): BatchPayload!
  updateManyAnswers(data: AnswerUpdateInput!, where: AnswerWhereInput): BatchPayload!
  updateManyQuestionTypes(data: QuestionTypeUpdateInput!, where: QuestionTypeWhereInput): BatchPayload!
  updateManyLanguages(data: LanguageUpdateInput!, where: LanguageWhereInput): BatchPayload!
  updateManyAlternativeses(data: AlternativesUpdateInput!, where: AlternativesWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyQuestionnaires(where: QuestionnaireWhereInput): BatchPayload!
  deleteManyQuestionnairenames(where: QuestionnairenameWhereInput): BatchPayload!
  deleteManyQuestionTexts(where: QuestionTextWhereInput): BatchPayload!
  deleteManyAlternativeTexts(where: AlternativeTextWhereInput): BatchPayload!
  deleteManyLists(where: ListWhereInput): BatchPayload!
  deleteManyQuestions(where: QuestionWhereInput): BatchPayload!
  deleteManyAnswers(where: AnswerWhereInput): BatchPayload!
  deleteManyQuestionTypes(where: QuestionTypeWhereInput): BatchPayload!
  deleteManyLanguages(where: LanguageWhereInput): BatchPayload!
  deleteManyAlternativeses(where: AlternativesWhereInput): BatchPayload!
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
  questionnaires(where: QuestionnaireWhereInput, orderBy: QuestionnaireOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Questionnaire]!
  questionnairenames(where: QuestionnairenameWhereInput, orderBy: QuestionnairenameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Questionnairename]!
  questionTexts(where: QuestionTextWhereInput, orderBy: QuestionTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [QuestionText]!
  alternativeTexts(where: AlternativeTextWhereInput, orderBy: AlternativeTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AlternativeText]!
  lists(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [List]!
  questions(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Question]!
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer]!
  questionTypes(where: QuestionTypeWhereInput, orderBy: QuestionTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [QuestionType]!
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language]!
  alternativeses(where: AlternativesWhereInput, orderBy: AlternativesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Alternatives]!
  user(where: UserWhereUniqueInput!): User
  questionnaire(where: QuestionnaireWhereUniqueInput!): Questionnaire
  questionnairename(where: QuestionnairenameWhereUniqueInput!): Questionnairename
  questionText(where: QuestionTextWhereUniqueInput!): QuestionText
  alternativeText(where: AlternativeTextWhereUniqueInput!): AlternativeText
  list(where: ListWhereUniqueInput!): List
  question(where: QuestionWhereUniqueInput!): Question
  answer(where: AnswerWhereUniqueInput!): Answer
  questionType(where: QuestionTypeWhereUniqueInput!): QuestionType
  language(where: LanguageWhereUniqueInput!): Language
  alternatives(where: AlternativesWhereUniqueInput!): Alternatives
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  questionnairesConnection(where: QuestionnaireWhereInput, orderBy: QuestionnaireOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionnaireConnection!
  questionnairenamesConnection(where: QuestionnairenameWhereInput, orderBy: QuestionnairenameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionnairenameConnection!
  questionTextsConnection(where: QuestionTextWhereInput, orderBy: QuestionTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionTextConnection!
  alternativeTextsConnection(where: AlternativeTextWhereInput, orderBy: AlternativeTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AlternativeTextConnection!
  listsConnection(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ListConnection!
  questionsConnection(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionConnection!
  answersConnection(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnswerConnection!
  questionTypesConnection(where: QuestionTypeWhereInput, orderBy: QuestionTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionTypeConnection!
  languagesConnection(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LanguageConnection!
  alternativesesConnection(where: AlternativesWhereInput, orderBy: AlternativesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AlternativesConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Question implements Node {
  id: ID!
  number: Int!
  description: String!
  questionType(where: QuestionTypeWhereInput): QuestionType!
  questionText(where: QuestionTextWhereInput, orderBy: QuestionTextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [QuestionText!]
  list(where: ListWhereInput): List
  alternative(where: AlternativesWhereInput, orderBy: AlternativesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Alternatives!]
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
  number: Int!
  description: String!
  questionType: QuestionTypeCreateOneInput!
  questionText: QuestionTextCreateManyWithoutQuestionInput
  list: ListCreateOneInput
  alternative: AlternativesCreateManyWithoutQuestionInput
}

input QuestionCreateManyInput {
  create: [QuestionCreateInput!]
  connect: [QuestionWhereUniqueInput!]
}

input QuestionCreateOneInput {
  create: QuestionCreateInput
  connect: QuestionWhereUniqueInput
}

input QuestionCreateOneWithoutAlternativeInput {
  create: QuestionCreateWithoutAlternativeInput
  connect: QuestionWhereUniqueInput
}

input QuestionCreateOneWithoutQuestionTextInput {
  create: QuestionCreateWithoutQuestionTextInput
  connect: QuestionWhereUniqueInput
}

input QuestionCreateWithoutAlternativeInput {
  number: Int!
  description: String!
  questionType: QuestionTypeCreateOneInput!
  questionText: QuestionTextCreateManyWithoutQuestionInput
  list: ListCreateOneInput
}

input QuestionCreateWithoutQuestionTextInput {
  number: Int!
  description: String!
  questionType: QuestionTypeCreateOneInput!
  list: ListCreateOneInput
  alternative: AlternativesCreateManyWithoutQuestionInput
}

"""An edge in a connection."""
type QuestionEdge {
  """The item at the end of the edge."""
  node: Question!

  """A cursor for use in pagination."""
  cursor: String!
}

type Questionnaire implements Node {
  id: ID!
  numberID: Int!
  questions(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Question!]
  questionairename(where: QuestionnairenameWhereInput, orderBy: QuestionnairenameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Questionnairename!]
}

"""A connection to a list of items."""
type QuestionnaireConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [QuestionnaireEdge]!
  aggregate: AggregateQuestionnaire!
}

input QuestionnaireCreateInput {
  numberID: Int!
  questions: QuestionCreateManyInput
  questionairename: QuestionnairenameCreateManyWithoutQuestionaireInput
}

input QuestionnaireCreateOneWithoutQuestionairenameInput {
  create: QuestionnaireCreateWithoutQuestionairenameInput
  connect: QuestionnaireWhereUniqueInput
}

input QuestionnaireCreateWithoutQuestionairenameInput {
  numberID: Int!
  questions: QuestionCreateManyInput
}

"""An edge in a connection."""
type QuestionnaireEdge {
  """The item at the end of the edge."""
  node: Questionnaire!

  """A cursor for use in pagination."""
  cursor: String!
}

type Questionnairename implements Node {
  id: ID!
  text: String!
  language(where: LanguageWhereInput): Language!
  questionaire(where: QuestionnaireWhereInput): Questionnaire!
}

"""A connection to a list of items."""
type QuestionnairenameConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [QuestionnairenameEdge]!
  aggregate: AggregateQuestionnairename!
}

input QuestionnairenameCreateInput {
  text: String!
  language: LanguageCreateOneInput!
  questionaire: QuestionnaireCreateOneWithoutQuestionairenameInput!
}

input QuestionnairenameCreateManyWithoutQuestionaireInput {
  create: [QuestionnairenameCreateWithoutQuestionaireInput!]
  connect: [QuestionnairenameWhereUniqueInput!]
}

input QuestionnairenameCreateWithoutQuestionaireInput {
  text: String!
  language: LanguageCreateOneInput!
}

"""An edge in a connection."""
type QuestionnairenameEdge {
  """The item at the end of the edge."""
  node: Questionnairename!

  """A cursor for use in pagination."""
  cursor: String!
}

enum QuestionnairenameOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type QuestionnairenamePreviousValues {
  id: ID!
  text: String!
}

type QuestionnairenameSubscriptionPayload {
  mutation: MutationType!
  node: Questionnairename
  updatedFields: [String!]
  previousValues: QuestionnairenamePreviousValues
}

input QuestionnairenameSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionnairenameSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionnairenameSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionnairenameSubscriptionWhereInput!]

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
  node: QuestionnairenameWhereInput
}

input QuestionnairenameUpdateInput {
  text: String
  language: LanguageUpdateOneInput
  questionaire: QuestionnaireUpdateOneWithoutQuestionairenameInput
}

input QuestionnairenameUpdateManyWithoutQuestionaireInput {
  create: [QuestionnairenameCreateWithoutQuestionaireInput!]
  connect: [QuestionnairenameWhereUniqueInput!]
  disconnect: [QuestionnairenameWhereUniqueInput!]
  delete: [QuestionnairenameWhereUniqueInput!]
  update: [QuestionnairenameUpdateWithWhereUniqueWithoutQuestionaireInput!]
  upsert: [QuestionnairenameUpsertWithWhereUniqueWithoutQuestionaireInput!]
}

input QuestionnairenameUpdateWithoutQuestionaireDataInput {
  text: String
  language: LanguageUpdateOneInput
}

input QuestionnairenameUpdateWithWhereUniqueWithoutQuestionaireInput {
  where: QuestionnairenameWhereUniqueInput!
  data: QuestionnairenameUpdateWithoutQuestionaireDataInput!
}

input QuestionnairenameUpsertWithWhereUniqueWithoutQuestionaireInput {
  where: QuestionnairenameWhereUniqueInput!
  update: QuestionnairenameUpdateWithoutQuestionaireDataInput!
  create: QuestionnairenameCreateWithoutQuestionaireInput!
}

input QuestionnairenameWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionnairenameWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionnairenameWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionnairenameWhereInput!]
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
  language: LanguageWhereInput
  questionaire: QuestionnaireWhereInput
}

input QuestionnairenameWhereUniqueInput {
  id: ID
}

enum QuestionnaireOrderByInput {
  id_ASC
  id_DESC
  numberID_ASC
  numberID_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type QuestionnairePreviousValues {
  id: ID!
  numberID: Int!
}

type QuestionnaireSubscriptionPayload {
  mutation: MutationType!
  node: Questionnaire
  updatedFields: [String!]
  previousValues: QuestionnairePreviousValues
}

input QuestionnaireSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionnaireSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionnaireSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionnaireSubscriptionWhereInput!]

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
  node: QuestionnaireWhereInput
}

input QuestionnaireUpdateInput {
  numberID: Int
  questions: QuestionUpdateManyInput
  questionairename: QuestionnairenameUpdateManyWithoutQuestionaireInput
}

input QuestionnaireUpdateOneWithoutQuestionairenameInput {
  create: QuestionnaireCreateWithoutQuestionairenameInput
  connect: QuestionnaireWhereUniqueInput
  delete: Boolean
  update: QuestionnaireUpdateWithoutQuestionairenameDataInput
  upsert: QuestionnaireUpsertWithoutQuestionairenameInput
}

input QuestionnaireUpdateWithoutQuestionairenameDataInput {
  numberID: Int
  questions: QuestionUpdateManyInput
}

input QuestionnaireUpsertWithoutQuestionairenameInput {
  update: QuestionnaireUpdateWithoutQuestionairenameDataInput!
  create: QuestionnaireCreateWithoutQuestionairenameInput!
}

input QuestionnaireWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionnaireWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionnaireWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionnaireWhereInput!]
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
  numberID: Int

  """All values that are not equal to given value."""
  numberID_not: Int

  """All values that are contained in given list."""
  numberID_in: [Int!]

  """All values that are not contained in given list."""
  numberID_not_in: [Int!]

  """All values less than the given value."""
  numberID_lt: Int

  """All values less than or equal the given value."""
  numberID_lte: Int

  """All values greater than the given value."""
  numberID_gt: Int

  """All values greater than or equal the given value."""
  numberID_gte: Int
  questions_every: QuestionWhereInput
  questions_some: QuestionWhereInput
  questions_none: QuestionWhereInput
  questionairename_every: QuestionnairenameWhereInput
  questionairename_some: QuestionnairenameWhereInput
  questionairename_none: QuestionnairenameWhereInput
}

input QuestionnaireWhereUniqueInput {
  id: ID
  numberID: Int
}

enum QuestionOrderByInput {
  id_ASC
  id_DESC
  number_ASC
  number_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type QuestionPreviousValues {
  id: ID!
  number: Int!
  description: String!
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
  question(where: QuestionWhereInput): Question!
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
  language: LanguageCreateOneInput!
  question: QuestionCreateOneWithoutQuestionTextInput!
}

input QuestionTextCreateManyWithoutQuestionInput {
  create: [QuestionTextCreateWithoutQuestionInput!]
  connect: [QuestionTextWhereUniqueInput!]
}

input QuestionTextCreateWithoutQuestionInput {
  text: String!
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type QuestionTextPreviousValues {
  id: ID!
  text: String!
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
  language: LanguageUpdateOneInput
  question: QuestionUpdateOneWithoutQuestionTextInput
}

input QuestionTextUpdateManyWithoutQuestionInput {
  create: [QuestionTextCreateWithoutQuestionInput!]
  connect: [QuestionTextWhereUniqueInput!]
  disconnect: [QuestionTextWhereUniqueInput!]
  delete: [QuestionTextWhereUniqueInput!]
  update: [QuestionTextUpdateWithWhereUniqueWithoutQuestionInput!]
  upsert: [QuestionTextUpsertWithWhereUniqueWithoutQuestionInput!]
}

input QuestionTextUpdateWithoutQuestionDataInput {
  text: String
  language: LanguageUpdateOneInput
}

input QuestionTextUpdateWithWhereUniqueWithoutQuestionInput {
  where: QuestionTextWhereUniqueInput!
  data: QuestionTextUpdateWithoutQuestionDataInput!
}

input QuestionTextUpsertWithWhereUniqueWithoutQuestionInput {
  where: QuestionTextWhereUniqueInput!
  update: QuestionTextUpdateWithoutQuestionDataInput!
  create: QuestionTextCreateWithoutQuestionInput!
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
  language: LanguageWhereInput
  question: QuestionWhereInput
}

input QuestionTextWhereUniqueInput {
  id: ID
}

type QuestionType implements Node {
  id: ID!
  type: String!
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
  type: String!
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
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type QuestionTypePreviousValues {
  id: ID!
  type: String!
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
  type: String
}

input QuestionTypeUpdateInput {
  type: String
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
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
}

input QuestionTypeWhereUniqueInput {
  id: ID
  type: String
}

input QuestionUpdateDataInput {
  number: Int
  description: String
  questionType: QuestionTypeUpdateOneInput
  questionText: QuestionTextUpdateManyWithoutQuestionInput
  list: ListUpdateOneInput
  alternative: AlternativesUpdateManyWithoutQuestionInput
}

input QuestionUpdateInput {
  number: Int
  description: String
  questionType: QuestionTypeUpdateOneInput
  questionText: QuestionTextUpdateManyWithoutQuestionInput
  list: ListUpdateOneInput
  alternative: AlternativesUpdateManyWithoutQuestionInput
}

input QuestionUpdateManyInput {
  create: [QuestionCreateInput!]
  connect: [QuestionWhereUniqueInput!]
  disconnect: [QuestionWhereUniqueInput!]
  delete: [QuestionWhereUniqueInput!]
  update: [QuestionUpdateWithWhereUniqueNestedInput!]
  upsert: [QuestionUpsertWithWhereUniqueNestedInput!]
}

input QuestionUpdateOneInput {
  create: QuestionCreateInput
  connect: QuestionWhereUniqueInput
  delete: Boolean
  update: QuestionUpdateDataInput
  upsert: QuestionUpsertNestedInput
}

input QuestionUpdateOneWithoutAlternativeInput {
  create: QuestionCreateWithoutAlternativeInput
  connect: QuestionWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: QuestionUpdateWithoutAlternativeDataInput
  upsert: QuestionUpsertWithoutAlternativeInput
}

input QuestionUpdateOneWithoutQuestionTextInput {
  create: QuestionCreateWithoutQuestionTextInput
  connect: QuestionWhereUniqueInput
  delete: Boolean
  update: QuestionUpdateWithoutQuestionTextDataInput
  upsert: QuestionUpsertWithoutQuestionTextInput
}

input QuestionUpdateWithoutAlternativeDataInput {
  number: Int
  description: String
  questionType: QuestionTypeUpdateOneInput
  questionText: QuestionTextUpdateManyWithoutQuestionInput
  list: ListUpdateOneInput
}

input QuestionUpdateWithoutQuestionTextDataInput {
  number: Int
  description: String
  questionType: QuestionTypeUpdateOneInput
  list: ListUpdateOneInput
  alternative: AlternativesUpdateManyWithoutQuestionInput
}

input QuestionUpdateWithWhereUniqueNestedInput {
  where: QuestionWhereUniqueInput!
  data: QuestionUpdateDataInput!
}

input QuestionUpsertNestedInput {
  update: QuestionUpdateDataInput!
  create: QuestionCreateInput!
}

input QuestionUpsertWithoutAlternativeInput {
  update: QuestionUpdateWithoutAlternativeDataInput!
  create: QuestionCreateWithoutAlternativeInput!
}

input QuestionUpsertWithoutQuestionTextInput {
  update: QuestionUpdateWithoutQuestionTextDataInput!
  create: QuestionCreateWithoutQuestionTextInput!
}

input QuestionUpsertWithWhereUniqueNestedInput {
  where: QuestionWhereUniqueInput!
  update: QuestionUpdateDataInput!
  create: QuestionCreateInput!
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
  number: Int

  """All values that are not equal to given value."""
  number_not: Int

  """All values that are contained in given list."""
  number_in: [Int!]

  """All values that are not contained in given list."""
  number_not_in: [Int!]

  """All values less than the given value."""
  number_lt: Int

  """All values less than or equal the given value."""
  number_lte: Int

  """All values greater than the given value."""
  number_gt: Int

  """All values greater than or equal the given value."""
  number_gte: Int
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
  questionType: QuestionTypeWhereInput
  questionText_every: QuestionTextWhereInput
  questionText_some: QuestionTextWhereInput
  questionText_none: QuestionTextWhereInput
  list: ListWhereInput
  alternative_every: AlternativesWhereInput
  alternative_some: AlternativesWhereInput
  alternative_none: AlternativesWhereInput
}

input QuestionWhereUniqueInput {
  id: ID
  number: Int
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  questionnaire(where: QuestionnaireSubscriptionWhereInput): QuestionnaireSubscriptionPayload
  questionnairename(where: QuestionnairenameSubscriptionWhereInput): QuestionnairenameSubscriptionPayload
  questionText(where: QuestionTextSubscriptionWhereInput): QuestionTextSubscriptionPayload
  alternativeText(where: AlternativeTextSubscriptionWhereInput): AlternativeTextSubscriptionPayload
  list(where: ListSubscriptionWhereInput): ListSubscriptionPayload
  question(where: QuestionSubscriptionWhereInput): QuestionSubscriptionPayload
  answer(where: AnswerSubscriptionWhereInput): AnswerSubscriptionPayload
  questionType(where: QuestionTypeSubscriptionWhereInput): QuestionTypeSubscriptionPayload
  language(where: LanguageSubscriptionWhereInput): LanguageSubscriptionPayload
  alternatives(where: AlternativesSubscriptionWhereInput): AlternativesSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer!]
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
  answers: AnswerCreateManyInput
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
  answers: AnswerUpdateManyInput
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
  answers_every: AnswerWhereInput
  answers_some: AnswerWhereInput
  answers_none: AnswerWhereInput
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
  'number_ASC' |
  'number_DESC' |
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

export type QuestionnaireOrderByInput =   'id_ASC' |
  'id_DESC' |
  'numberID_ASC' |
  'numberID_DESC' |
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

export type AnswerOrderByInput =   'id_ASC' |
  'id_DESC' |
  'value_ASC' |
  'value_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type QuestionTextOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
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
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AlternativeTextOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type QuestionTypeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type QuestionnairenameOrderByInput =   'id_ASC' |
  'id_DESC' |
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

export interface QuestionnairenameCreateManyWithoutQuestionaireInput {
  create?: QuestionnairenameCreateWithoutQuestionaireInput[] | QuestionnairenameCreateWithoutQuestionaireInput
  connect?: QuestionnairenameWhereUniqueInput[] | QuestionnairenameWhereUniqueInput
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
  answers_every?: AnswerWhereInput
  answers_some?: AnswerWhereInput
  answers_none?: AnswerWhereInput
}

export interface QuestionUpdateOneWithoutAlternativeInput {
  create?: QuestionCreateWithoutAlternativeInput
  connect?: QuestionWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: QuestionUpdateWithoutAlternativeDataInput
  upsert?: QuestionUpsertWithoutAlternativeInput
}

export interface AlternativeTextUpdateWithWhereUniqueWithoutAlternativeIDInput {
  where: AlternativeTextWhereUniqueInput
  data: AlternativeTextUpdateWithoutAlternativeIDDataInput
}

export interface AlternativesUpdateDataInput {
  description?: String
  value?: Float
  order?: Int
  listID?: ListUpdateOneInput
  alternativeText?: AlternativeTextUpdateManyWithoutAlternativeIDInput
  question?: QuestionUpdateOneWithoutAlternativeInput
}

export interface QuestionCreateWithoutQuestionTextInput {
  number: Int
  description: String
  questionType: QuestionTypeCreateOneInput
  list?: ListCreateOneInput
  alternative?: AlternativesCreateManyWithoutQuestionInput
}

export interface AlternativesUpdateOneInput {
  create?: AlternativesCreateInput
  connect?: AlternativesWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: AlternativesUpdateDataInput
  upsert?: AlternativesUpsertNestedInput
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

export interface QuestionUpsertNestedInput {
  update: QuestionUpdateDataInput
  create: QuestionCreateInput
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

export interface AlternativesUpsertWithWhereUniqueWithoutQuestionInput {
  where: AlternativesWhereUniqueInput
  update: AlternativesUpdateWithoutQuestionDataInput
  create: AlternativesCreateWithoutQuestionInput
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

export interface AlternativeTextUpsertWithWhereUniqueWithoutAlternativeIDInput {
  where: AlternativeTextWhereUniqueInput
  update: AlternativeTextUpdateWithoutAlternativeIDDataInput
  create: AlternativeTextCreateWithoutAlternativeIDInput
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

export interface UserCreateInput {
  name: String
  email: String
  password: String
  answers?: AnswerCreateManyInput
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

export interface AnswerCreateManyInput {
  create?: AnswerCreateInput[] | AnswerCreateInput
  connect?: AnswerWhereUniqueInput[] | AnswerWhereUniqueInput
}

export interface QuestionnairenameSubscriptionWhereInput {
  AND?: QuestionnairenameSubscriptionWhereInput[] | QuestionnairenameSubscriptionWhereInput
  OR?: QuestionnairenameSubscriptionWhereInput[] | QuestionnairenameSubscriptionWhereInput
  NOT?: QuestionnairenameSubscriptionWhereInput[] | QuestionnairenameSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: QuestionnairenameWhereInput
}

export interface AnswerCreateInput {
  value: String
  question: QuestionCreateOneInput
  alternative?: AlternativesCreateOneInput
}

export interface QuestionnairenameWhereInput {
  AND?: QuestionnairenameWhereInput[] | QuestionnairenameWhereInput
  OR?: QuestionnairenameWhereInput[] | QuestionnairenameWhereInput
  NOT?: QuestionnairenameWhereInput[] | QuestionnairenameWhereInput
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
  language?: LanguageWhereInput
  questionaire?: QuestionnaireWhereInput
}

export interface QuestionCreateOneInput {
  create?: QuestionCreateInput
  connect?: QuestionWhereUniqueInput
}

export interface QuestionnaireSubscriptionWhereInput {
  AND?: QuestionnaireSubscriptionWhereInput[] | QuestionnaireSubscriptionWhereInput
  OR?: QuestionnaireSubscriptionWhereInput[] | QuestionnaireSubscriptionWhereInput
  NOT?: QuestionnaireSubscriptionWhereInput[] | QuestionnaireSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: QuestionnaireWhereInput
}

export interface QuestionCreateInput {
  number: Int
  description: String
  questionType: QuestionTypeCreateOneInput
  questionText?: QuestionTextCreateManyWithoutQuestionInput
  list?: ListCreateOneInput
  alternative?: AlternativesCreateManyWithoutQuestionInput
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
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
}

export interface QuestionTypeCreateOneInput {
  create?: QuestionTypeCreateInput
  connect?: QuestionTypeWhereUniqueInput
}

export interface AlternativesUpdateInput {
  description?: String
  value?: Float
  order?: Int
  listID?: ListUpdateOneInput
  alternativeText?: AlternativeTextUpdateManyWithoutAlternativeIDInput
  question?: QuestionUpdateOneWithoutAlternativeInput
}

export interface QuestionTypeCreateInput {
  type: String
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
  value?: String
  value_not?: String
  value_in?: String[] | String
  value_not_in?: String[] | String
  value_lt?: String
  value_lte?: String
  value_gt?: String
  value_gte?: String
  value_contains?: String
  value_not_contains?: String
  value_starts_with?: String
  value_not_starts_with?: String
  value_ends_with?: String
  value_not_ends_with?: String
  question?: QuestionWhereInput
  alternative?: AlternativesWhereInput
}

export interface QuestionTextCreateManyWithoutQuestionInput {
  create?: QuestionTextCreateWithoutQuestionInput[] | QuestionTextCreateWithoutQuestionInput
  connect?: QuestionTextWhereUniqueInput[] | QuestionTextWhereUniqueInput
}

export interface QuestionnaireWhereUniqueInput {
  id?: ID_Input
  numberID?: Int
}

export interface QuestionTextCreateWithoutQuestionInput {
  text: String
  language: LanguageCreateOneInput
}

export interface QuestionTextWhereUniqueInput {
  id?: ID_Input
}

export interface LanguageCreateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
}

export interface ListWhereUniqueInput {
  id?: ID_Input
}

export interface LanguageCreateInput {
  name: String
}

export interface AnswerWhereUniqueInput {
  id?: ID_Input
}

export interface ListCreateOneInput {
  create?: ListCreateInput
  connect?: ListWhereUniqueInput
}

export interface LanguageWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface ListCreateInput {
  description: String
}

export interface LanguageUpdateInput {
  name?: String
}

export interface AlternativesCreateManyWithoutQuestionInput {
  create?: AlternativesCreateWithoutQuestionInput[] | AlternativesCreateWithoutQuestionInput
  connect?: AlternativesWhereUniqueInput[] | AlternativesWhereUniqueInput
}

export interface AnswerUpdateInput {
  value?: String
  question?: QuestionUpdateOneInput
  alternative?: AlternativesUpdateOneInput
}

export interface AlternativesCreateWithoutQuestionInput {
  description: String
  value: Float
  order: Int
  listID?: ListCreateOneInput
  alternativeText?: AlternativeTextCreateManyWithoutAlternativeIDInput
}

export interface ListUpdateInput {
  description?: String
}

export interface AlternativeTextCreateManyWithoutAlternativeIDInput {
  create?: AlternativeTextCreateWithoutAlternativeIDInput[] | AlternativeTextCreateWithoutAlternativeIDInput
  connect?: AlternativeTextWhereUniqueInput[] | AlternativeTextWhereUniqueInput
}

export interface AlternativesUpdateWithoutAlternativeTextDataInput {
  description?: String
  value?: Float
  order?: Int
  listID?: ListUpdateOneInput
  question?: QuestionUpdateOneWithoutAlternativeInput
}

export interface AlternativeTextCreateWithoutAlternativeIDInput {
  text: String
  language: LanguageCreateOneInput
}

export interface AlternativeTextUpdateInput {
  text?: String
  alternativeID?: AlternativesUpdateOneWithoutAlternativeTextInput
  language?: LanguageUpdateOneInput
}

export interface AlternativesCreateOneInput {
  create?: AlternativesCreateInput
  connect?: AlternativesWhereUniqueInput
}

export interface QuestionUpdateWithoutQuestionTextDataInput {
  number?: Int
  description?: String
  questionType?: QuestionTypeUpdateOneInput
  list?: ListUpdateOneInput
  alternative?: AlternativesUpdateManyWithoutQuestionInput
}

export interface AlternativesCreateInput {
  description: String
  value: Float
  order: Int
  listID?: ListCreateOneInput
  alternativeText?: AlternativeTextCreateManyWithoutAlternativeIDInput
  question?: QuestionCreateOneWithoutAlternativeInput
}

export interface QuestionTextUpdateInput {
  text?: String
  language?: LanguageUpdateOneInput
  question?: QuestionUpdateOneWithoutQuestionTextInput
}

export interface QuestionCreateOneWithoutAlternativeInput {
  create?: QuestionCreateWithoutAlternativeInput
  connect?: QuestionWhereUniqueInput
}

export interface QuestionnaireUpdateWithoutQuestionairenameDataInput {
  numberID?: Int
  questions?: QuestionUpdateManyInput
}

export interface QuestionCreateWithoutAlternativeInput {
  number: Int
  description: String
  questionType: QuestionTypeCreateOneInput
  questionText?: QuestionTextCreateManyWithoutQuestionInput
  list?: ListCreateOneInput
}

export interface QuestionnairenameUpdateInput {
  text?: String
  language?: LanguageUpdateOneInput
  questionaire?: QuestionnaireUpdateOneWithoutQuestionairenameInput
}

export interface QuestionnaireCreateInput {
  numberID: Int
  questions?: QuestionCreateManyInput
  questionairename?: QuestionnairenameCreateManyWithoutQuestionaireInput
}

export interface QuestionnairenameUpdateWithoutQuestionaireDataInput {
  text?: String
  language?: LanguageUpdateOneInput
}

export interface QuestionCreateManyInput {
  create?: QuestionCreateInput[] | QuestionCreateInput
  connect?: QuestionWhereUniqueInput[] | QuestionWhereUniqueInput
}

export interface QuestionnairenameUpdateManyWithoutQuestionaireInput {
  create?: QuestionnairenameCreateWithoutQuestionaireInput[] | QuestionnairenameCreateWithoutQuestionaireInput
  connect?: QuestionnairenameWhereUniqueInput[] | QuestionnairenameWhereUniqueInput
  disconnect?: QuestionnairenameWhereUniqueInput[] | QuestionnairenameWhereUniqueInput
  delete?: QuestionnairenameWhereUniqueInput[] | QuestionnairenameWhereUniqueInput
  update?: QuestionnairenameUpdateWithWhereUniqueWithoutQuestionaireInput[] | QuestionnairenameUpdateWithWhereUniqueWithoutQuestionaireInput
  upsert?: QuestionnairenameUpsertWithWhereUniqueWithoutQuestionaireInput[] | QuestionnairenameUpsertWithWhereUniqueWithoutQuestionaireInput
}

export interface AlternativeTextUpdateWithoutAlternativeIDDataInput {
  text?: String
  language?: LanguageUpdateOneInput
}

export interface QuestionUpdateWithWhereUniqueNestedInput {
  where: QuestionWhereUniqueInput
  data: QuestionUpdateDataInput
}

export interface QuestionnairenameCreateWithoutQuestionaireInput {
  text: String
  language: LanguageCreateOneInput
}

export interface QuestionnaireUpdateInput {
  numberID?: Int
  questions?: QuestionUpdateManyInput
  questionairename?: QuestionnairenameUpdateManyWithoutQuestionaireInput
}

export interface QuestionnairenameCreateInput {
  text: String
  language: LanguageCreateOneInput
  questionaire: QuestionnaireCreateOneWithoutQuestionairenameInput
}

export interface AlternativesUpsertNestedInput {
  update: AlternativesUpdateDataInput
  create: AlternativesCreateInput
}

export interface QuestionnaireCreateOneWithoutQuestionairenameInput {
  create?: QuestionnaireCreateWithoutQuestionairenameInput
  connect?: QuestionnaireWhereUniqueInput
}

export interface QuestionUpdateWithoutAlternativeDataInput {
  number?: Int
  description?: String
  questionType?: QuestionTypeUpdateOneInput
  questionText?: QuestionTextUpdateManyWithoutQuestionInput
  list?: ListUpdateOneInput
}

export interface QuestionnaireCreateWithoutQuestionairenameInput {
  numberID: Int
  questions?: QuestionCreateManyInput
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

export interface QuestionTextCreateInput {
  text: String
  language: LanguageCreateOneInput
  question: QuestionCreateOneWithoutQuestionTextInput
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

export interface QuestionCreateOneWithoutQuestionTextInput {
  create?: QuestionCreateWithoutQuestionTextInput
  connect?: QuestionWhereUniqueInput
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

export interface AlternativeTextCreateInput {
  text: String
  alternativeID: AlternativesCreateOneWithoutAlternativeTextInput
  language: LanguageCreateOneInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface AlternativesCreateOneWithoutAlternativeTextInput {
  create?: AlternativesCreateWithoutAlternativeTextInput
  connect?: AlternativesWhereUniqueInput
}

export interface AlternativeTextWhereUniqueInput {
  id?: ID_Input
}

export interface AlternativesCreateWithoutAlternativeTextInput {
  description: String
  value: Float
  order: Int
  listID?: ListCreateOneInput
  question?: QuestionCreateOneWithoutAlternativeInput
}

export interface QuestionTypeWhereUniqueInput {
  id?: ID_Input
  type?: String
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
  answers?: AnswerUpdateManyInput
}

export interface QuestionTypeUpdateInput {
  type?: String
}

export interface AnswerUpdateManyInput {
  create?: AnswerCreateInput[] | AnswerCreateInput
  connect?: AnswerWhereUniqueInput[] | AnswerWhereUniqueInput
  disconnect?: AnswerWhereUniqueInput[] | AnswerWhereUniqueInput
  delete?: AnswerWhereUniqueInput[] | AnswerWhereUniqueInput
  update?: AnswerUpdateWithWhereUniqueNestedInput[] | AnswerUpdateWithWhereUniqueNestedInput
  upsert?: AnswerUpsertWithWhereUniqueNestedInput[] | AnswerUpsertWithWhereUniqueNestedInput
}

export interface AlternativesUpsertWithoutAlternativeTextInput {
  update: AlternativesUpdateWithoutAlternativeTextDataInput
  create: AlternativesCreateWithoutAlternativeTextInput
}

export interface AnswerUpdateWithWhereUniqueNestedInput {
  where: AnswerWhereUniqueInput
  data: AnswerUpdateDataInput
}

export interface QuestionUpsertWithoutQuestionTextInput {
  update: QuestionUpdateWithoutQuestionTextDataInput
  create: QuestionCreateWithoutQuestionTextInput
}

export interface AnswerUpdateDataInput {
  value?: String
  question?: QuestionUpdateOneInput
  alternative?: AlternativesUpdateOneInput
}

export interface QuestionnaireUpsertWithoutQuestionairenameInput {
  update: QuestionnaireUpdateWithoutQuestionairenameDataInput
  create: QuestionnaireCreateWithoutQuestionairenameInput
}

export interface QuestionUpdateOneInput {
  create?: QuestionCreateInput
  connect?: QuestionWhereUniqueInput
  delete?: Boolean
  update?: QuestionUpdateDataInput
  upsert?: QuestionUpsertNestedInput
}

export interface QuestionnairenameUpsertWithWhereUniqueWithoutQuestionaireInput {
  where: QuestionnairenameWhereUniqueInput
  update: QuestionnairenameUpdateWithoutQuestionaireDataInput
  create: QuestionnairenameCreateWithoutQuestionaireInput
}

export interface QuestionUpdateDataInput {
  number?: Int
  description?: String
  questionType?: QuestionTypeUpdateOneInput
  questionText?: QuestionTextUpdateManyWithoutQuestionInput
  list?: ListUpdateOneInput
  alternative?: AlternativesUpdateManyWithoutQuestionInput
}

export interface QuestionUpsertWithWhereUniqueNestedInput {
  where: QuestionWhereUniqueInput
  update: QuestionUpdateDataInput
  create: QuestionCreateInput
}

export interface QuestionTypeUpdateOneInput {
  create?: QuestionTypeCreateInput
  connect?: QuestionTypeWhereUniqueInput
  delete?: Boolean
  update?: QuestionTypeUpdateDataInput
  upsert?: QuestionTypeUpsertNestedInput
}

export interface AnswerUpsertWithWhereUniqueNestedInput {
  where: AnswerWhereUniqueInput
  update: AnswerUpdateDataInput
  create: AnswerCreateInput
}

export interface QuestionTypeUpdateDataInput {
  type?: String
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
  alternativeID?: AlternativesWhereInput
  language?: LanguageWhereInput
}

export interface QuestionTypeUpsertNestedInput {
  update: QuestionTypeUpdateDataInput
  create: QuestionTypeCreateInput
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
  listID?: ListWhereInput
  alternativeText_every?: AlternativeTextWhereInput
  alternativeText_some?: AlternativeTextWhereInput
  alternativeText_none?: AlternativeTextWhereInput
  question?: QuestionWhereInput
}

export interface QuestionTextUpdateManyWithoutQuestionInput {
  create?: QuestionTextCreateWithoutQuestionInput[] | QuestionTextCreateWithoutQuestionInput
  connect?: QuestionTextWhereUniqueInput[] | QuestionTextWhereUniqueInput
  disconnect?: QuestionTextWhereUniqueInput[] | QuestionTextWhereUniqueInput
  delete?: QuestionTextWhereUniqueInput[] | QuestionTextWhereUniqueInput
  update?: QuestionTextUpdateWithWhereUniqueWithoutQuestionInput[] | QuestionTextUpdateWithWhereUniqueWithoutQuestionInput
  upsert?: QuestionTextUpsertWithWhereUniqueWithoutQuestionInput[] | QuestionTextUpsertWithWhereUniqueWithoutQuestionInput
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
  language?: LanguageWhereInput
  question?: QuestionWhereInput
}

export interface QuestionTextUpdateWithWhereUniqueWithoutQuestionInput {
  where: QuestionTextWhereUniqueInput
  data: QuestionTextUpdateWithoutQuestionDataInput
}

export interface QuestionnairenameWhereUniqueInput {
  id?: ID_Input
}

export interface QuestionTextUpdateWithoutQuestionDataInput {
  text?: String
  language?: LanguageUpdateOneInput
}

export interface AlternativesWhereUniqueInput {
  id?: ID_Input
}

export interface LanguageUpdateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
  delete?: Boolean
  update?: LanguageUpdateDataInput
  upsert?: LanguageUpsertNestedInput
}

export interface AlternativesUpdateOneWithoutAlternativeTextInput {
  create?: AlternativesCreateWithoutAlternativeTextInput
  connect?: AlternativesWhereUniqueInput
  delete?: Boolean
  update?: AlternativesUpdateWithoutAlternativeTextDataInput
  upsert?: AlternativesUpsertWithoutAlternativeTextInput
}

export interface LanguageUpdateDataInput {
  name?: String
}

export interface QuestionnaireUpdateOneWithoutQuestionairenameInput {
  create?: QuestionnaireCreateWithoutQuestionairenameInput
  connect?: QuestionnaireWhereUniqueInput
  delete?: Boolean
  update?: QuestionnaireUpdateWithoutQuestionairenameDataInput
  upsert?: QuestionnaireUpsertWithoutQuestionairenameInput
}

export interface LanguageUpsertNestedInput {
  update: LanguageUpdateDataInput
  create: LanguageCreateInput
}

export interface QuestionUpdateManyInput {
  create?: QuestionCreateInput[] | QuestionCreateInput
  connect?: QuestionWhereUniqueInput[] | QuestionWhereUniqueInput
  disconnect?: QuestionWhereUniqueInput[] | QuestionWhereUniqueInput
  delete?: QuestionWhereUniqueInput[] | QuestionWhereUniqueInput
  update?: QuestionUpdateWithWhereUniqueNestedInput[] | QuestionUpdateWithWhereUniqueNestedInput
  upsert?: QuestionUpsertWithWhereUniqueNestedInput[] | QuestionUpsertWithWhereUniqueNestedInput
}

export interface QuestionTextUpsertWithWhereUniqueWithoutQuestionInput {
  where: QuestionTextWhereUniqueInput
  update: QuestionTextUpdateWithoutQuestionDataInput
  create: QuestionTextCreateWithoutQuestionInput
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

export interface ListUpdateOneInput {
  create?: ListCreateInput
  connect?: ListWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ListUpdateDataInput
  upsert?: ListUpsertNestedInput
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
  number?: Int
  number_not?: Int
  number_in?: Int[] | Int
  number_not_in?: Int[] | Int
  number_lt?: Int
  number_lte?: Int
  number_gt?: Int
  number_gte?: Int
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
  questionType?: QuestionTypeWhereInput
  questionText_every?: QuestionTextWhereInput
  questionText_some?: QuestionTextWhereInput
  questionText_none?: QuestionTextWhereInput
  list?: ListWhereInput
  alternative_every?: AlternativesWhereInput
  alternative_some?: AlternativesWhereInput
  alternative_none?: AlternativesWhereInput
}

export interface ListUpdateDataInput {
  description?: String
}

export interface QuestionUpdateInput {
  number?: Int
  description?: String
  questionType?: QuestionTypeUpdateOneInput
  questionText?: QuestionTextUpdateManyWithoutQuestionInput
  list?: ListUpdateOneInput
  alternative?: AlternativesUpdateManyWithoutQuestionInput
}

export interface ListUpsertNestedInput {
  update: ListUpdateDataInput
  create: ListCreateInput
}

export interface QuestionnairenameUpdateWithWhereUniqueWithoutQuestionaireInput {
  where: QuestionnairenameWhereUniqueInput
  data: QuestionnairenameUpdateWithoutQuestionaireDataInput
}

export interface AlternativeTextUpdateManyWithoutAlternativeIDInput {
  create?: AlternativeTextCreateWithoutAlternativeIDInput[] | AlternativeTextCreateWithoutAlternativeIDInput
  connect?: AlternativeTextWhereUniqueInput[] | AlternativeTextWhereUniqueInput
  disconnect?: AlternativeTextWhereUniqueInput[] | AlternativeTextWhereUniqueInput
  delete?: AlternativeTextWhereUniqueInput[] | AlternativeTextWhereUniqueInput
  update?: AlternativeTextUpdateWithWhereUniqueWithoutAlternativeIDInput[] | AlternativeTextUpdateWithWhereUniqueWithoutAlternativeIDInput
  upsert?: AlternativeTextUpsertWithWhereUniqueWithoutAlternativeIDInput[] | AlternativeTextUpsertWithWhereUniqueWithoutAlternativeIDInput
}

export interface AlternativesUpdateWithoutQuestionDataInput {
  description?: String
  value?: Float
  order?: Int
  listID?: ListUpdateOneInput
  alternativeText?: AlternativeTextUpdateManyWithoutAlternativeIDInput
}

export interface AlternativesUpdateWithWhereUniqueWithoutQuestionInput {
  where: AlternativesWhereUniqueInput
  data: AlternativesUpdateWithoutQuestionDataInput
}

export interface AlternativesUpdateManyWithoutQuestionInput {
  create?: AlternativesCreateWithoutQuestionInput[] | AlternativesCreateWithoutQuestionInput
  connect?: AlternativesWhereUniqueInput[] | AlternativesWhereUniqueInput
  disconnect?: AlternativesWhereUniqueInput[] | AlternativesWhereUniqueInput
  delete?: AlternativesWhereUniqueInput[] | AlternativesWhereUniqueInput
  update?: AlternativesUpdateWithWhereUniqueWithoutQuestionInput[] | AlternativesUpdateWithWhereUniqueWithoutQuestionInput
  upsert?: AlternativesUpsertWithWhereUniqueWithoutQuestionInput[] | AlternativesUpsertWithWhereUniqueWithoutQuestionInput
}

export interface QuestionUpsertWithoutAlternativeInput {
  update: QuestionUpdateWithoutAlternativeDataInput
  create: QuestionCreateWithoutAlternativeInput
}

export interface QuestionUpdateOneWithoutQuestionTextInput {
  create?: QuestionCreateWithoutQuestionTextInput
  connect?: QuestionWhereUniqueInput
  delete?: Boolean
  update?: QuestionUpdateWithoutQuestionTextDataInput
  upsert?: QuestionUpsertWithoutQuestionTextInput
}

export interface QuestionWhereUniqueInput {
  id?: ID_Input
  number?: Int
}

export interface QuestionnaireWhereInput {
  AND?: QuestionnaireWhereInput[] | QuestionnaireWhereInput
  OR?: QuestionnaireWhereInput[] | QuestionnaireWhereInput
  NOT?: QuestionnaireWhereInput[] | QuestionnaireWhereInput
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
  numberID?: Int
  numberID_not?: Int
  numberID_in?: Int[] | Int
  numberID_not_in?: Int[] | Int
  numberID_lt?: Int
  numberID_lte?: Int
  numberID_gt?: Int
  numberID_gte?: Int
  questions_every?: QuestionWhereInput
  questions_some?: QuestionWhereInput
  questions_none?: QuestionWhereInput
  questionairename_every?: QuestionnairenameWhereInput
  questionairename_some?: QuestionnairenameWhereInput
  questionairename_none?: QuestionnairenameWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AlternativesPreviousValues {
  id: ID_Output
  description: String
  value: Float
  order: Int
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

export interface Question extends Node {
  id: ID_Output
  number: Int
  description: String
  questionType: QuestionType
  questionText?: QuestionText[]
  list?: List
  alternative?: Alternatives[]
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
  answers?: Answer[]
}

export interface AggregateAlternatives {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface AlternativesConnection {
  pageInfo: PageInfo
  edges: AlternativesEdge[]
  aggregate: AggregateAlternatives
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface LanguageEdge {
  node: Language
  cursor: String
}

export interface Answer extends Node {
  id: ID_Output
  question: Question
  value: String
  alternative?: Alternatives
}

export interface AggregateQuestionType {
  count: Int
}

export interface Questionnairename extends Node {
  id: ID_Output
  text: String
  language: Language
  questionaire: Questionnaire
}

/*
 * A connection to a list of items.

 */
export interface QuestionTypeConnection {
  pageInfo: PageInfo
  edges: QuestionTypeEdge[]
  aggregate: AggregateQuestionType
}

export interface LanguagePreviousValues {
  id: ID_Output
  name: String
}

/*
 * An edge in a connection.

 */
export interface AnswerEdge {
  node: Answer
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface AggregateQuestion {
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
export interface QuestionConnection {
  pageInfo: PageInfo
  edges: QuestionEdge[]
  aggregate: AggregateQuestion
}

export interface Questionnaire extends Node {
  id: ID_Output
  numberID: Int
  questions?: Question[]
  questionairename?: Questionnairename[]
}

/*
 * An edge in a connection.

 */
export interface ListEdge {
  node: List
  cursor: String
}

export interface QuestionnaireSubscriptionPayload {
  mutation: MutationType
  node?: Questionnaire
  updatedFields?: String[]
  previousValues?: QuestionnairePreviousValues
}

export interface AggregateAlternativeText {
  count: Int
}

export interface QuestionnairePreviousValues {
  id: ID_Output
  numberID: Int
}

/*
 * A connection to a list of items.

 */
export interface AlternativeTextConnection {
  pageInfo: PageInfo
  edges: AlternativeTextEdge[]
  aggregate: AggregateAlternativeText
}

export interface AlternativeText extends Node {
  id: ID_Output
  alternativeID: Alternatives
  language: Language
  text: String
}

/*
 * An edge in a connection.

 */
export interface QuestionTextEdge {
  node: QuestionText
  cursor: String
}

export interface QuestionnairenameSubscriptionPayload {
  mutation: MutationType
  node?: Questionnairename
  updatedFields?: String[]
  previousValues?: QuestionnairenamePreviousValues
}

export interface AggregateQuestionnairename {
  count: Int
}

export interface QuestionnairenamePreviousValues {
  id: ID_Output
  text: String
}

/*
 * A connection to a list of items.

 */
export interface QuestionnairenameConnection {
  pageInfo: PageInfo
  edges: QuestionnairenameEdge[]
  aggregate: AggregateQuestionnairename
}

export interface Alternatives extends Node {
  id: ID_Output
  description: String
  value: Float
  order: Int
  listID?: List
  alternativeText?: AlternativeText[]
  question?: Question
}

/*
 * An edge in a connection.

 */
export interface QuestionnaireEdge {
  node: Questionnaire
  cursor: String
}

export interface QuestionTextSubscriptionPayload {
  mutation: MutationType
  node?: QuestionText
  updatedFields?: String[]
  previousValues?: QuestionTextPreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface QuestionTextPreviousValues {
  id: ID_Output
  text: String
}

export interface AlternativesSubscriptionPayload {
  mutation: MutationType
  node?: Alternatives
  updatedFields?: String[]
  previousValues?: AlternativesPreviousValues
}

export interface List extends Node {
  id: ID_Output
  description: String
}

export interface AggregateLanguage {
  count: Int
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
export interface QuestionTypeEdge {
  node: QuestionType
  cursor: String
}

export interface AlternativeTextPreviousValues {
  id: ID_Output
  text: String
}

/*
 * A connection to a list of items.

 */
export interface AnswerConnection {
  pageInfo: PageInfo
  edges: AnswerEdge[]
  aggregate: AggregateAnswer
}

export interface Language extends Node {
  id: ID_Output
  name: String
}

export interface AggregateList {
  count: Int
}

export interface ListSubscriptionPayload {
  mutation: MutationType
  node?: List
  updatedFields?: String[]
  previousValues?: ListPreviousValues
}

/*
 * An edge in a connection.

 */
export interface AlternativeTextEdge {
  node: AlternativeText
  cursor: String
}

export interface ListPreviousValues {
  id: ID_Output
  description: String
}

/*
 * A connection to a list of items.

 */
export interface QuestionTextConnection {
  pageInfo: PageInfo
  edges: QuestionTextEdge[]
  aggregate: AggregateQuestionText
}

export interface QuestionText extends Node {
  id: ID_Output
  text: String
  language: Language
  question: Question
}

export interface AggregateQuestionnaire {
  count: Int
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
export interface UserEdge {
  node: User
  cursor: String
}

export interface QuestionPreviousValues {
  id: ID_Output
  number: Int
  description: String
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
 * An edge in a connection.

 */
export interface QuestionEdge {
  node: Question
  cursor: String
}

export interface AnswerSubscriptionPayload {
  mutation: MutationType
  node?: Answer
  updatedFields?: String[]
  previousValues?: AnswerPreviousValues
}

export interface AggregateQuestionText {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface QuestionnaireConnection {
  pageInfo: PageInfo
  edges: QuestionnaireEdge[]
  aggregate: AggregateQuestionnaire
}

export interface QuestionTypePreviousValues {
  id: ID_Output
  type: String
}

export interface QuestionTypeSubscriptionPayload {
  mutation: MutationType
  node?: QuestionType
  updatedFields?: String[]
  previousValues?: QuestionTypePreviousValues
}

export interface QuestionType extends Node {
  id: ID_Output
  type: String
}

export interface AnswerPreviousValues {
  id: ID_Output
  value: String
}

/*
 * An edge in a connection.

 */
export interface AlternativesEdge {
  node: Alternatives
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface QuestionnairenameEdge {
  node: Questionnairename
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ListConnection {
  pageInfo: PageInfo
  edges: ListEdge[]
  aggregate: AggregateList
}

export interface AggregateAnswer {
  count: Int
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

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
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number