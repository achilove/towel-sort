
module.exports = function towelSort (matrix) {
  return matrix? matrix.map((elem, i) => (i % 2 !== 0 ? elem.reverse() : elem)).flat():[];
}
