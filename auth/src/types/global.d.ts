// src/types/global.d.ts
import { SuperTest, Test } from 'supertest';

declare global {
  var signin: () => Promise<string[]>;
}

export {};