# NodeJS Streams

This file streams bytes from file `./input.txt` and edits them as they pass through the program and writes them to `./output.txt`. This is done without holding the entire contexts of `input.txt` in memory. This allows the program to manipulate files larger than the memory available.  

- (node-js-streams-everything-you-need-to-know)[https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/]