const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const results = [];

  fs.createReadStream('public/tmp/data/posterData.csv') // パスを修正
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const item of results) {
        await prisma.poster.create({
          data: {
            id: item.id,
            title: item.title,
            description: item.description,
            somCoordinate: parseInt(item.somCoordinate, 10), // 数値に変換
            representationsCoordinate: !isNaN(
              parseInt(item.representationsCoordinate, 10)
            )
              ? parseInt(item.representationsCoordinate, 10)
              : null,
          },
        });
      }
      console.log('Data imported successfully!');
      await prisma.$disconnect();
    });
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
});
