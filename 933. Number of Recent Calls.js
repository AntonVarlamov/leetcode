class RecentCounter {
  arr = []
  start =0
  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    this.arr.push(t);
    while (this.arr[this.start] < t - 3000) {
      this.start++;
    }
    return this.arr.length - this.start
  }
}
