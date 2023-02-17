const generatePattern = function (
  dimensions,
  widthGenerator,
  styleGenerator,
  formatter
) {
  const pattern = [];
  const maxWidth = dimensions[0];
  const maxHeight = dimensions[1];
  for (let level = 1; level <= maxHeight; level++) {
    const rowWidth = widthGenerator(level, maxWidth, maxHeight);
    const style = styleGenerator(level, maxWidth, maxHeight, rowWidth);
    const formattedRow = formatter(
      style(rowWidth, level, maxWidth),
      rowWidth,
      level,
      maxWidth
    );
    pattern.push(formattedRow);
  }
  return pattern;
};

exports.generatePattern = generatePattern;
