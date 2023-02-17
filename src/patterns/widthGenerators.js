const scale = require('./helpers.js').scale;
const sameWidthGenerator = function (level, maxWidth) {
  return maxWidth;
};

const symmetricWidthGenerator = function (level, maxWidth) {
  const _level = Math.min(level, maxWidth - level + 1);
  return 2 * _level - 1;
};

const radian = function (currentLength, maxLength) {
  return (2 * Math.PI / maxLength) * currentLength;
};

const waveWidthGenerator = function (
  currentLength,
  maxHeight,
  maxLength,
  trigonometricFn
) {
  const waveHeight = trigonometricFn(radian(currentLength, maxLength));
  const heightDomain = [-1, 1];
  const heightRange = [0, maxHeight];
  const scaledWaveHeight = scale(waveHeight, heightDomain, heightRange);
  return Math.round(scaledWaveHeight) + 1;
};

const sinWaveWidthGenerator = function (currentLength, maxHeight, maxLength) {
  return waveWidthGenerator(currentLength, maxHeight, maxLength, Math.sin);
};

const cosWaveWidthGenerator = function (currentLength, maxHeight, maxLength) {
  return waveWidthGenerator(currentLength, maxHeight, maxLength, Math.cos);
};

exports.sameWidthGenerator = sameWidthGenerator;
exports.symmetricWidthGenerator = symmetricWidthGenerator;
exports.sinWaveWidthGenerator = sinWaveWidthGenerator;
exports.cosWaveWidthGenerator = cosWaveWidthGenerator;
