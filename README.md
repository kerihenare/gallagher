# Gallagher index

  Calculates the [Gallagher index](https://en.wikipedia.org/wiki/Gallagher_index) for an election result.

  [![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)
  [![NPM Version](https://img.shields.io/npm/v/gallagher.svg)](https://npmjs.org/package/gallagher)

> The **Gallagher index** measures an electoral system’s relative disproportionality between votes received and seats allotted in a legislature. As such, it measures the difference between the percentage of votes each party gets, and the percentage of seats each party gets in the resulting legislature -- and it measures this dis-proportionality from all parties collectively in one given election. This collective dis-proportionality from this one election is given a precise score, which can then be used in comparing various levels of proportionality among various elections from various electoral systems.

## Use
```js
var gallagher = require('gallagher');

var parties = [
  { name: 'Party A', votes: 1058636, seats: 59 },
  { name: 'Party B', votes: 614937, seats: 34 },
  { name: 'Party C', votes: 247372, seats: 14 },
  { name: 'Party D', votes: 147544, seats: 8 },
  { name: 'Party E', votes: 59237, seats: 0 },
  { name: 'Party F', votes: 31982, seats: 3 },
  { name: 'Party G', votes: 24168, seats: 1 },
  { name: 'Party H', votes: 23889, seats: 1 },
  { name: 'Party I', votes: 13443, seats: 1 },
  { name: 'Party J', votes: 11738, seats: 0 },
  { name: 'Party K', votes: 1714, seats: 0 },
  { name: 'Party L', votes: 1595, seats: 0 },
  { name: 'Party M', votes: 1209, seats: 0 }
];

var result = gallagher(parties); // 2.377974544114885
```

## License

  [MIT](LICENSE)
