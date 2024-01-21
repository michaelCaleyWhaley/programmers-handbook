class MyPromise {
  constructor(promiseCallback) {
    this.successCallbacks = [];
    this.catchCallbacks = [];
    this.state = "pending";
    this.value = undefined;

    const resolve = (value) => {
      this.state = "fullfilled";
      this.value = value;
      this.successCallbacks.forEach((cb) => {
        this.value = cb(this.value);
      });
    };

    const reject = (value) => {
      this.state = "rejected";
      this.value = value;
      this.catchCallbacks.forEach((cb) => {
        this.value = cb(this.value);
      });
    };

    try {
      promiseCallback(resolve);
    } catch (e) {
      reject(e);
    }
  }

  then(thenCallback) {
    if (this.state === "pending") {
      this.successCallbacks.push(thenCallback);
    } else if (this.state === "fullfilled") {
      this.value = thenCallback(this.value);
    }

    return this;
  }

  catch(catchCallback) {
    if (this.state === "pending") {
      this.catchCallbacks.push(catchCallback);
    } else if (this.state === "rejected") {
      this.value = catchCallback(this.value);
    }

    return this;
  }
}

new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 100);

  // throw new Error("test error");
})
  .then((value) => {
    return value;
  })
  .then((value2) => {
    return value2;
  })
  .then((value3) => {
    console.log("value3: ", value3);
  })
  .catch((error) => {
    console.log("ERROR: ", error);
  });
