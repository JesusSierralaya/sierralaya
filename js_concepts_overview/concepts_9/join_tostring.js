//
class Series {
  constructor(title, seasonNumber) {
    this.title = title;
    this.seasonNumber = seasonNumber;
  }
  toString() {
    return this.title + "::" + this.seasonNumber;
  }
}

let from = new Series("From", 3);
let _30coins = new Series('30 coins', 3)

let series = [from, _30coins]
// [Series, Series]

let all = series.join('---')
// From::3---30 coins::3