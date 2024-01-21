// Implement Lodash functions: debounce()

function debounce(fn, delayMs) {
  let debouncedFunc;
  function scopedDebouncedFn() {
    clearTimeout(debouncedFunc);
    debouncedFunc = setTimeout(fn, delayMs);
  }
  return scopedDebouncedFn;
}

const logMessage = () => console.log("hello");

const debouncedLogHello = debounce(logMessage, 1000);

debouncedLogHello();
debouncedLogHello();
debouncedLogHello();
