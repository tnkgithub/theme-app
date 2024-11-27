const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const results = [];

  fs.createReadStream('public/tmp/data/objectWordData3.csv') // パスを修正
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const item of results) {
        await prisma.objectWord.create({
          data: {
            word: item.word,
          },
        });
      }
      console.log('Data imported successfully!');
    });
}

main().catch((e) => {
  console.error(e);
});
