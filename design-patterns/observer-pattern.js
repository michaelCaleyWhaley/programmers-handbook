class Observer {
  constructor() {
    this.observables = [];
  }

  subscribe(func) {
    this.observables.push(func);
  }

  unsubscribe(func) {
    this.observables = this.observables.filter(
      (observedFuncs) => observedFuncs !== func
    );
  }

  notify(event) {
    for (const observedFunc of this.observables) {
      observedFunc(event);
    }
  }
}

const test = new Observer();

function log1(event) {
  console.log("LOG: 1");
  console.log("event: ", event);
}

test.subscribe(log1);

test.unsubscribe(log1);

test.subscribe(log1);
test.subscribe(log1);

test.notify("Event");
