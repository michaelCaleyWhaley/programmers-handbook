// Difference between AMD (aysnchronous module Definition) and commonJS?

// AMD is more suited to client side code because it's dependencies can be loaded in anyschronously.
// i.e. AMD execution is simultaneous.

// example
define("alpha", ["require", "exports", "beta"], function (
  require,
  exports,
  beta
) {
  exports.verb = function () {
    return beta.verb();
    //Or:
    return require("beta").verb();
  };
});

// commonJS example

// designed with servers in mind, commonJS is synchronous and relies on an export, require syntax

module.exports = { test: () => {} };

const test = require("./");

test();
