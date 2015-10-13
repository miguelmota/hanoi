# hanoi

> Tower of Hanoi algorithm for finding the smallest number of steps to move the stack.

The Towers of Hanoi is a mathematical puzzle whose solution illustrates recursion. There are three pegs which can hold stacks of disks of different diameters. A larger disk may never be stacked on top of a smaller. Starting with `n` disks on one peg, they must be moved to another peg one at a time.

[![Towers of Hanoi alogrithm](https://upload.wikimedia.org/wikipedia/commons/6/60/Tower_of_Hanoi_4.gif)](https://en.wikipedia.org/wiki/Tower_of_Hano://en.wikipedia.org/wiki/Tower_of_Hanoi)

[source](https://en.wikipedia.org/wiki/Tower_of_Hano://en.wikipedia.org/wiki/Tower_of_Hanoi)

# Install

```bash
npm install hanoi
```

```bash
bower install hanoi
```

# Usage

```javascript
const hanoi = require('hanoi');

console.log(hanoi(0)); // 0
console.log(hanoi(1)); // 1
console.log(hanoi(2)); // 3
console.log(hanoi(3)); // 7
console.log(hanoi(4)); // 15
console.log(hanoi(5)); // 31
console.log(hanoi(6)); // 63
console.log(hanoi(7)); // 127
console.log(hanoi(8)); // 255
```

# Test

```bash
npm test
```

# License

MIT
