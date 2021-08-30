
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    const array = [];
    return array.concat(...matrix.map((a, i) => {
      if (i % 2 === 0) return a;
      return a.reverse();
    }));
  }
