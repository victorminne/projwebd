import { setupServer } from 'msw/node';
import { handlers } from './mock-met/getMETResponse.mock'

export const mswServer = setupServer(...handlers);