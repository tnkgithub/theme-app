const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const results = [];

  fs.createReadStream('public/tmp/data/title_sim.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const item of results) {
        const similarityData = Array.from(
          { length: 200 },
          (_, i) => `sim_${i + 1}`
        ).reduce(
          (acc, key) => ({
            ...acc,
            [key]: item[key],
          }),
          {}
        );

        await prisma.titleSimilarity.create({
          data: {
            id: item.id,
            ...similarityData,
          },
        });
      }
      console.log('Data imported successfully!');
    });
}
main().catch((e) => {
  throw e;
});
