class Sorter {
  constructor() {
    // your implementation
    this._addedElements = [];
    this.comparator = (left, right) =>  left - right;
  }

  add(element) {
    // your implementation
      this._addedElements.push(element);
  }

  at(index) {
    // your implementation
    return this._addedElements[index];
  }

  get length() {
    // your implementation
    return this._addedElements.length;
  }

  toArray() {
    // your implementation
    return this._addedElements;
  }

  sort(indices) {
    // your implementation
    let tmpSortingArr = [];
    const simpleSorter = (left, right) => left - right;
    indices.sort(simpleSorter);
    indices.forEach(index => tmpSortingArr.push(this._addedElements[index]));
    tmpSortingArr.sort(this.comparator);
    tmpSortingArr.forEach((value, index) => this._addedElements[indices[index]] = value);
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction ? compareFunction : this.comparator;
  }
}

module.exports = Sorter;