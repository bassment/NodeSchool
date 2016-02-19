function* upper(items) {
  for (var i = 0; i < items.length; i++) {
    try {
      yield items[i].toUpperCase();
    } catch (e) {
      yield null;
    }
  }
}

var badItems = ['a', 'B', 1, 'c'];

for (var item of upper(badItems)) {
  console.log(item);
}
