# abz
Simple JavaScript random array element chooser with percentage weight|chance support.

I was doing some `ab` thing and I needed it. So I write a simple piece of code and I thought it can|may be used by someone else.


## Installation:

You can simply install it from [npm](https://www.npmjs.com/package/abz):

```bash
npm install --save abz
```


## Usage:

```js
import abz from 'abz'; // or require it
const result = abz([
  {
    chance: 70,
    value: 'a',
  }, {
    chance: 20,
    value: 'b',
  }, {
    chance: 10,
    fn: () => {
      if (location.pathname === '/') { // or anything else maybe
        return 'z';
      }
    }
  }
]);

console.log(result); // a, b or z
```


## Ideas || Issues
Just fill an issue and describe it. I'll check it ASAP!


## Contribution

You can fork the repository, improve or fix some part of it and then send the pull requests back if you want to see them here. I really appreciate that. :heart:
