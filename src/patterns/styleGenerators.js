const styles = require('./styles.js');
const isEven = require('./helpers.js').isEven;

// styles functions
const stars = styles.stars;
const waveStroke = styles.waveStroke;
const dashes = styles.dashes;
const hollowLine = styles.hollowLine;
// styles for angledHollowDiamond
const upperStroke = styles.upperStroke;
const midStroke = styles.midStroke;
const lowerStroke = styles.lowerStroke;

const filledStyleGenerator = function () {
  return stars;
};

const hollowStyleGenerator = function (level, maxWidth, maxHeight) {
  return level === 1 || level === maxHeight ? stars : hollowLine;
};

const alternateStyleGenerator = function (level) {
  return isEven(level) ? dashes : stars;
};

const topHalfStyle = function (level) {
  if (level === 1) {
    return stars;
  }
  return upperStroke;
};

const bottomHalfStyle = function (level, maxHeight) {
  if (level === maxHeight) {
    return stars;
  }
  return lowerStroke;
};

const angledHollowStyleGenerator = function (level, maxWidth, maxHeight) {
  if (level === 1 || level === maxHeight) {
    return stars;
  }
  const midLevel = Math.ceil(maxHeight / 2);
  if (level < midLevel) {
    return upperStroke;
  } else if (level === midLevel) {
    return midStroke;
  }
  return lowerStroke;
};

const waveStyleGenerator = function (level, maxLength, maxHeight, height) {
  return height <= 1 ? stars : waveStroke;
};

exports.filledStyleGenerator = filledStyleGenerator;
exports.hollowStyleGenerator = hollowStyleGenerator;
exports.alternateStyleGenerator = alternateStyleGenerator;
exports.angledHollowStyleGenerator = angledHollowStyleGenerator;
exports.waveStyleGenerator = waveStyleGenerator;
