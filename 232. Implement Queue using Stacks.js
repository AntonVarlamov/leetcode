class MyQueue {
  arr = []

  push(value) {
    this.arr.push(value)
  }

  pop() {
    return this.arr.shift()
  }

  peek() {
    return this.arr[0]
  }

  empty() {
    return this.arr.length === 0
  }
}

let a = new MyQueue()

