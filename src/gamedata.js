let boardcell = []
for (let i = 100; i >= 1; i -= 10) {
  if (i % 20 === 0) {
    for (let j = i; j > (i - 10); j--) {
      boardcell.push(j)
    }
  }
  else {
    for (let j = (i - 9); j <= i; j++) {
      boardcell.push(j)
    }
  }

}



export default boardcell