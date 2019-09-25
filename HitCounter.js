class HitCounter {
  counters = [];

  record(timestamp) {
    this.counters.push(timestamp);
    this.counters.sort();
  }

  total() {
    this.counters.length;
  }

  range(lower, upper) {
    const result = [];
    const start = this.counters.findIndex(c => c === lower);
    const end = this.counters.findIndex(c => c === upper);

    for (let i = start; i <= end; i++) {
      result.push(this.counters[i]);
    }

    return result;
  }
}

const instance = new HitCounter();
const i = Date.now();
instance.record(Date.now());
instance.record(Date.now());
const j = Date.now();
instance.record(j);

console.log(instance.range(i, j));
