import { PrismaClient } from '@prisma/client/';
import csvParser from 'csv-parser';
import fs from 'fs';

const prisma = new PrismaClient();
