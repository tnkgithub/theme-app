import { Poster } from '@prisma/client';

export function getAroundPosters(
  posterId: string,
  posters: Poster[],
  rangeX: number = 5,
  rangeY: number = 8
): Poster[] {
  const aroundPosters: Poster[] = []; // 画像IDのリスト
  let targetCoordinate: number[] = [0, 0];

  const numX = 26; // 縦の資料数
  const numY = 78; // 横の資料数

  // ターゲットの画像IDの2次元座標を取得
  for (const poster of posters) {
    if (poster.posterId === posterId) {
      const x = Math.floor(poster.somCoordinate / numY);
      const y = poster.somCoordinate % numY;
      targetCoordinate = [x, y];
      break;
    }
  }

  // 画像IDの範囲をトーラス状に取得。11行17列の画像が表示されるようにする
  // 例１）targetCoordinateが[5, 8]だったら, aroundPostersIdに[0, 0]から[10, 16]となる。
  // 例２）targetCoordinateが[0, 0]だったら, 最初の17個が[21, 70]~[21, 77]と[21, 0]~[21, 8], 次の17個が[22, 70]~[22, 77]と[22, 0]~[22, 8]となる。これを11回繰り返す
  // 例３）targetCoordinateが[25, 77]だったら, 最初の17個が[20, 69]~[20, 77]と[20, 0]~[0, 8], 次の17個が[21, 69]~[21, 77]と[21, 0]~[21, 8]となる。これを11回繰り返す

  let startX = targetCoordinate[0] - rangeX;
  let endX = targetCoordinate[0] + rangeX;
  let startY = targetCoordinate[1] - rangeY;
  let endY = targetCoordinate[1] + rangeY;

  // 画像IDをaroundPostersIdに追加
  if (startX < 0 && startY < 0) {
    // ターゲットが左上にあり、縦と横の両方を折り返す場合 例）targetCoordinate[0, 0]
    const tmpStartX = numX + startX;
    const tmpStartY = numY + startY;
    for (let x = tmpStartX; x < numX; x++) {
      for (let y = tmpStartY; y < numY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
      for (let y = 0; y <= endY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
    for (let x = 0; x <= endX; x++) {
      for (let y = tmpStartY; y < numY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
      for (let y = 0; y <= endY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
  } else if (startX < 0 && 0 <= startY && endY < numY) {
    // ターゲットが上端付近にあり、縦のみ折り返す場合 例）targetCoordinate[0, 8]
    const tmpStartX = numX + startX;
    for (let x = tmpStartX; x < numX; x++) {
      for (let y = startY; y <= endY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
    for (let x = 0; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
  } else if (startX < 0 && endY >= numY) {
    // ターゲットが右上端付近にあり、横と縦の両方を折り返す場合 例）targetCoordinate[0, 77]
    const tmpStartX = numX + startX;
    const tmpEndY = endY - numY;
    for (let x = tmpStartX; x < numX; x++) {
      for (let y = startY; y < numY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
      for (let y = 0; y <= tmpEndY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
    for (let x = 0; x <= endX; x++) {
      for (let y = startY; y < numY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
      for (let y = 0; y <= tmpEndY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
  } else if (endX >= numX && startY < 0) {
    // ターゲットが左下にあり、縦と横の両方を折り返す場合 例）targetCoordinate[25, 0]
    const tmpEndX = endX - numX;
    const tmpStartY = numY + startY;
    for (let x = startX; x < numX; x++) {
      for (let y = tmpStartY; y < numY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
      for (let y = 0; y <= endY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
    for (let x = 0; x <= tmpEndX; x++) {
      for (let y = tmpStartY; y < numY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
      for (let y = 0; y <= endY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
  } else if (endX >= numX && 0 <= startY && endY < numY) {
    // ターゲットが下端付近にあり、縦のみ折り返す場合 例）targetCoordinate[25, 8]
    const tmpEndX = endX - numX;
    for (let x = startX; x < numX; x++) {
      for (let y = startY; y <= endY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
    for (let x = 0; x <= tmpEndX; x++) {
      for (let y = startY; y <= endY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
  } else if (endX >= numX && endY >= numY) {
    // ターゲットが右下にあり、縦と横の両方を折り返す場縦 例）targetCoordinate[25, 77]
    const tmpEndX = endX - numX;
    const tmpEndY = endY - numY;
    for (let x = startX; x < numX; x++) {
      for (let y = startY; y < numY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
      for (let y = 0; y <= tmpEndY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
    for (let x = 0; x <= tmpEndX; x++) {
      for (let y = startY; y < numY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
      for (let y = 0; y <= tmpEndY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
  } else if (startY < 0) {
    // ターゲットが左端付近にあり、横のみ折り返す場合 例）targetCoordinate[5, 0]
    const tmpStartY = numY + startY;
    for (let x = startX; x <= endX; x++) {
      for (let y = tmpStartY; y < numY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
      for (let y = 0; y <= endY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
  } else if (endY >= numY) {
    // ターゲットが右端付近にあり、横のみ折り返す場合 例）targetCoordinate[5, 77]
    const tmpEndY = endY - numY;
    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y < numY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
      for (let y = 0; y <= tmpEndY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
  } else {
    // 通常の場合
    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        aroundPosters.push(posters[x * numY + y]);
      }
    }
  }
  return aroundPosters;
}
