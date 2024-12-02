const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const results = [];

  fs.createReadStream('public/tmp/data/posterData_1.0.csv') // パスを修正
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const item of results) {
        await prisma.poster.create({
          data: {
            posterId: item.posterId,
            title: item.title,
            description: item.description,
            somCoordinate: parseInt(item.somCoordinate, 10), // 数値に変換
            representationsCoordinate: !isNaN(item.representationsCoordinate)
              ? parseInt(item.representationsCoordinate, 10)
              : null,
            clusterId: !isNaN(item.clusterId)
              ? parseInt(item.clusterId, 10)
              : null,
          },
        });
      }
      console.log('Data imported successfully!');
    });
}

main().catch((e) => {
  console.error(e);
});
