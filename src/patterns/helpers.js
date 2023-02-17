const identity = function (value) {
  return value;
};

const isEven = function (number) {
  return number % 2 === 0;
};

const scale = function (
  domainValue,
  domain,
  range
) {
  const domainStart = domain[0];
  const domainEnd = domain[1];
  const rangeStart = range[0];
  const rangeEnd = range[1];
  const domainRatio = (domainValue - domainStart) / (domainEnd - domainStart);
  return domainRatio * (rangeEnd - rangeStart) + rangeStart;
};

exports.identity = identity;
exports.isEven = isEven;
exports.scale = scale;
