module.exports = class FeatureSetSequenceDistance {
  constructor(comparator) {
    this.comparator = comparator;

    this.insertionCost = 2;
    this.deletionCost = 2;
  };

  /**
* Compute the edit distance between the two given FeatureSet array
* @param {FeatureSet[]} a
* @param {FeatureSet[]} b
* @returns {Number}
*/
  compute(a, b) {
    if (a.length === 0) return b.length * this.insertionCost;
    if (b.length === 0) return a.length * this.insertionCost;

    let matrix = this._initMatrix(a, b);

    // Fill in the matrix
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        let featuresA = a[j - 1];
        let featuresB = b[i - 1];

        let distance = this.comparator.distance(featuresA, featuresB);

        let substitution = matrix[i - 1][j - 1] + distance;
        let insertion = matrix[i][j - 1] + this.insertionCost;
        let deletion = matrix[i - 1][j] + this.deletionCost;

        matrix[i][j] = Math.min(substitution, insertion, deletion);
      }
    }

    return matrix[b.length][a.length];
  }

  _initMatrix(a, b) {
    let matrix = [];

    // increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i * this.insertionCost];
    }

    // increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j * this.insertionCost;
    }

    return matrix;
  }
}