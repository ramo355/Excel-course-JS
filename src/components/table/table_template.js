const CODES = {
  A: 65,
  Z: 90,
};

function toCell() {
  return `
    <div class='cell' contenteditable='true'></div>
    `;
}

function toCol(col) {
  return `
    <div class='column'>
    ${col}
    </div>
    `;
}

function createRow(index, content) {
  return `
    <div class='row'>
    <div class='row-info'>${index ? index : ''}</div>
    <div class='row-data'>${content}</div>
    </div>
    `
}
export function createTable(rowsCount = 25) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  
  const cols = new Array(colsCount)
    .fill("")
    .map((el, index) => {
      return String.fromCharCode(CODES.A + index);
    })
    .map((el) => {
      return toCol(el);
    })
    .join("");


  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
      const cells = new Array(colsCount).fill('')
      .map(toCell)
      .join('')
    rows.push(createRow(i + 1, cells))
  }

  return rows.join("");
}
