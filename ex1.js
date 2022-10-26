const CONST_VISUAL = 'Visual'
const CONST_NUTS = 'Nuts'
function handle(number) {
  if (typeof number !== 'number')
    return
  if (number <= 1) {
    return
  }
  console.log(
    !(number % 3) && !(number % 5) ?
      `${CONST_VISUAL} ${CONST_NUTS}` :
      !(number % 3) ?
        `${CONST_VISUAL}` : !(number % 5) ? `${CONST_VISUAL}`
          : number
  );

  handle(number - 1)
}

const allNumbers = 100
handle(allNumbers)