// Задача 3
/**
 * throttle.
 *
 * Напишите функцию throttle(fn, delay, ctx) – «тормозилку», которая возвращает обёртку,
 * вызывающую fn не чаще, чем раз в delay миллисекунд.
 * В качестве контекста исполнения используется ctx.
 * Если игнорируемый вызов оказался последним, то он должен выполниться.
 */

// пример для delay === 100
// . - вызовы throttledFn
// ! - вызовы fn
//................
//!         !          !
//0ms      100ms      200ms
//.    .         .
//!         !          !
//0ms      100ms      200ms

function test() {
  function log(text) {
    console.log(`${this.name}: ${text}`);
  }

  const throttled = throttle(log, 100, {name: 'me'});


  setTimeout(() => throttled('a'), 0);
  setTimeout(() => throttled('b'), 56);
  setTimeout(() => throttled('c'), 57);
  setTimeout(() => throttled('d'), 95);
  setTimeout(() => throttled('e'), 115);
  setTimeout(() => throttled('f'), 194);
  setTimeout(() => throttled('g'), 200);
  //   0ms: me logged a
  // 100ms: me logged d
  // 200ms: me logged e
}

function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

function throttle(fn, delay, ctx) {
  // code here

  let savedArgs = null
  let isThrottled = false

  return function perform(...args) {

    if (isThrottled) {
      savedArgs = args
      return
    }

    isThrottled = true

    fn.apply(ctx, args)

    setTimeout(() => {
      isThrottled = false
      if (savedArgs) {
        perform(savedArgs)
        savedArgs = null
      }
    }, delay)
  }
}

function log(text) {
  console.log(`${this.name}: ${text}`);
}

const debounceFunc = debounce(log, 100)

setTimeout(() => debounceFunc('a'), 100);
setTimeout(() => debounceFunc('b'), 56);
setTimeout(() => debounceFunc('c'), 57);
setTimeout(() => debounceFunc('d'), 200);
