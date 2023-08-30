import '@testing-library/jest-dom/jest-globals';
import { server } from './mocks/server';

beforeAll(() => {
    server.listen();
})

// beforeEach(() => {
    
// })

afterEach(() => {
    server.resetHandlers();
})

afterAll(() => {
    server.close();
})