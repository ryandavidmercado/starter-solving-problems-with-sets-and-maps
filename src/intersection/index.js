function intersection(a, b) {
  const aSet = new Set();
  const uSet = new Set();
  a.forEach((element) => {
    aSet.add(element);
  });
  b.forEach((element) => {
    if (aSet.has(element)) uSet.add(element);
  });
  return [...uSet];
}

module.exports = intersection;
