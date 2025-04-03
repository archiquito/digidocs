import { PrismaClient } from './generated/prisma/';

declare global {
  var prisma: PrismaClient | undefined
}

const prisma = new PrismaClient();

const db = global.prisma || prisma;

if(process.env.NODE_ENV !== 'production'){
  globalThis.prisma = db;
}

export default db;