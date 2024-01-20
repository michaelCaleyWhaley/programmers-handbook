class MyPromise {
  constructor(successCallback) {
    this.successCallbacks = [];
    this.state = "pending";
    this.value = undefined;

    const resolve = (value) => {
      this.state = "fullfilled";
      this.value = value;
      this.successCallbacks.forEach((cb) => {
        this.value = cb(this.value);
      });
    };

    successCallback(resolve);
  }

  then(thenCallback) {
    if (this.state === "pending") {
      this.successCallbacks.push(thenCallback);
    } else {
      this.value = thenCallback(this.value);
    }

    return this;
  }
}

new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 100);
})
  .then((value) => {
    return value;
  })
  .then((value2) => {
    return value2;
  })
  .then((value3) => {
    console.log("value3: ", value3);
  });
