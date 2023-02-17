const generatePattern = require('./patternGenerator.js').generatePattern;
const widthGenerators = require('./widthGenerators.js');
const styleGenerators = require('./styleGenerators.js');
const identity = require('./helpers.js').identity;

// width generator
const sinWaveWidthGenerator = widthGenerators.sinWaveWidthGenerator;
const cosWaveWidthGenerator = widthGenerators.cosWaveWidthGenerator;

// storing styling types
const waveStyleGenerator = styleGenerators.waveStyleGenerator;

const repeatWaves = function (wave, frequence) {
  const nextWave = '\n'.concat(wave);
  return wave.concat(nextWave.repeat(frequence - 1));
};

const waveGenerator = function (
  maxLength,
  maxHeight,
  frequency,
  widthGenerator
) {
  const wave = generatePattern(
    [maxHeight, maxLength],
    widthGenerator,
    waveStyleGenerator,
    identity
  ).join('\n');
  return frequency <= 0 ? '' : repeatWaves(wave, frequency);
};

const sinWavesGenerator = function (maxLength, maxHeight, frequency) {
  return waveGenerator(maxLength, maxHeight, frequency, sinWaveWidthGenerator);
};

const cosWavesGenerator = function (maxLength, maxHeight, frequency) {
  return waveGenerator(maxLength, maxHeight, frequency, cosWaveWidthGenerator);
};

exports.sinWavesGenerator = sinWavesGenerator;
exports.cosWavesGenerator = cosWavesGenerator;
