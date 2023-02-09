class RandomizedSet {
  value = new Set()
  insert(val) {
    const bool = !this.value.has(val)
    this.value.add(val)
    return bool
  }
  remove(val) {
    const bool = this.value.has(val)
    this.value.delete(val)
    return bool
  }
  getRandom() {
    return [...this.value][Math.floor(Math.random() * this.value.size)]
  }
}



/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
