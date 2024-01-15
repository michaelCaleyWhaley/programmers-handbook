# How does `this` work?

This works by creating an execution context whenever a function is called.

Depending on how the function is called `this` is different. For example:

- Arrow function does not bind `this`, so `this` would be bound to the outerscope.
- Classes created with the new keyword bind `this` to the class context.
- Callbacks bind `this` to their execution context for example click event handlers on DOM elements bind the event object to `this`.