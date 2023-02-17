const wavesGenerators = require('./src/patterns/wavesGenerators.js');

const sinWavesGenerator = wavesGenerators.sinWavesGenerator;
const cosWavesGenerator = wavesGenerators.cosWavesGenerator;

const main = function () {
  const waveLength = 10;
  const waveHeight = 20;
  const frequency = 4;
  console.log(sinWavesGenerator(waveLength, waveHeight, frequency));
  // console.log(cosWavesGenerator(waveLength, waveHeight, frequency));
};

main();
