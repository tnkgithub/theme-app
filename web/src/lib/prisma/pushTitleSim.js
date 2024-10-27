const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const rows = [];

  fs.createReadStream('public/tmp/data/title_sim_list.csv')
    .pipe(csv())
    .on('data', (row) => rows.push(row))
    .on('end', async () => {
      // データをDBに保存
      try {
        for (const row of rows) {
          await prisma.titleSimilarity.create({
            data: {
              posterId: parseInt(row.id),
              ...Object.fromEntries(
                Array.from({ length: 132 }, (_, i) => [
                  `id${i + 1}`,
                  !isNaN(row[i + 1]) ? parseInt(row[i + 1], 10) : null,
                ])
              ),
            },
          });
        }
      } catch (e) {
        console.error(e);
      }
      console.log('Done');
    });
}

main().catch((e) => {
  throw e;
});
