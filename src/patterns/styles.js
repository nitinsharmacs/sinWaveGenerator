const stars = function (iterations) {
  return '*'.repeat(Math.abs(iterations));
};

const dashes = function (iterations) {
  return '-'.repeat(iterations);
};

const hollowLine = function (length) {
  return '*'.concat(' '.repeat(length - 2), '*');
};

const upperStroke = function (width) {
  return '/'.concat(' '.repeat(width - 2), '\\');
};

const lowerStroke = function (width) {
  return '\\'.concat(' '.repeat(width - 2), '/');
};

const midStroke = function (width) {
  return '*'.concat(' '.repeat(width - 2), '*');
};

const waveStroke = function (width) {
  return ' '.repeat(width - 1).concat('*');
};

exports.stars = stars;
exports.dashes = dashes;
exports.hollowLine = hollowLine;
exports.upperStroke = upperStroke;
exports.midStroke = midStroke;
exports.lowerStroke = lowerStroke;
exports.waveStroke = waveStroke;
