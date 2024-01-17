# use strict

'use strict' is a statement used to enable strict mode to entire scripts or individual functions. Strict mode is a way to opt into a restricted variant of JavaScript.

Advantages:
- Makes it impossible to accidentally create global variables.
- Makes assignments which would otherwise silently fail to throw an exception.
- Makes attempts to delete undeletable properties throw an exception (where before the attempt would simply have no effect).
- Requires that function parameter names be unique.
- this is undefined in the global context.
- It catches some common coding bloopers, throwing exceptions.
- It disables features that are confusing or poorly thought out.

Disadvantages:
- Many missing features that some developers might be used to.
- No more access to function.caller and function.arguments.
- Concatenation of scripts written in different strict modes might cause issues.