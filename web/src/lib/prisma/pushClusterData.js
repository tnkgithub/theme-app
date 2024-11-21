const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const results = [];

  fs.createReadStream('public/tmp/data/rep_word.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const item of results) {
        await prisma.cluster.create({
          data: {
            repWord1: item.rep_word1,
            repWord2: item.rep_word2,
            repWord3: item.rep_word3,
            repWord4: item.rep_word4,
            repWord5: item.rep_word5,
          },
        });
      }
      console.log('Data imported successfully!');
    });
}

main().catch((e) => {
  console.error(e);
});
