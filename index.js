module.exports = function(input) {
  data = input.reduce((prev, curr) => {
    // no chance, no more!
    if (curr.chance === 0) {
      return prev;
    }

    const item = {};

    item.from = prev.length ? prev[prev.length - 1].to : 0;
    item.to = item.from + (curr.chance / 100);

    if (curr.fn) {
      item.fn = curr.fn;
    } else {
      item.value = curr.value;
    }

    return prev.concat(item);
  }, []);

  const randomNumber = Math.random();
  const chosen = data.find(item => {
    return randomNumber >= item.from && randomNumber < item.to;
  });

  // If we got a callback fn, call it and return the value. Otherwise, return the value provided
  if (chosen.fn) {
    return chosen.fn();
  }
  return chosen.value;
}
