/**
 * MIT License
 *
 *  Copyright (c) 2016 Keri Henare <keri@henare.co.nz>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const gallagher = require('../');

/**
 * Round a number accurately to the given number of decimal places
 * http://www.jacklmoore.com/notes/rounding-in-javascript/
 *
 * @param  {Number} value    The value to be rounded
 * @param  {Number} decimals The number of decimal places (Integer)
 * @return {Number}          The resultant rounded number
 */
function round (value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

// All figures are as provided by the data behind the 2012 MMP Review Report
// 2008 figures haven't been used as they are incorrect in the report;
// https://fyi.org.nz/request/4268/response/14301/attach/2/OIA%20Request%2015.2016.pdf

// 1.63 - Table 5 (Page 22)

module.exports['NZ 2011 Election - 5% threshold with overhangs'] = (test) => {
  const parties = [
    { votes: 1058636, seats: 59 },
    { votes: 614937, seats: 34 },
    { votes: 247372, seats: 14 },
    { votes: 147544, seats: 8 },
    { votes: 59237, seats: 0 },
    { votes: 31982, seats: 3 },
    { votes: 24168, seats: 1 },
    { votes: 23889, seats: 1 },
    { votes: 13443, seats: 1 },
    { votes: 11738, seats: 0 },
    { votes: 1714, seats: 0 },
    { votes: 1595, seats: 0 },
    { votes: 1209, seats: 0 }
  ];

  const result = gallagher(parties);

  test.equals(round(result, 3), 2.378);

  test.done();
};

module.exports['NZ 2011 Election - 5% threshold without overhangs'] = (test) => {
  const parties = [
    { votes: 1058636, seats: 58 },
    { votes: 614937, seats: 34 },
    { votes: 247372, seats: 14 },
    { votes: 147544, seats: 8 },
    { votes: 59237, seats: 0 },
    { votes: 31982, seats: 3 },
    { votes: 24168, seats: 1 },
    { votes: 23889, seats: 1 },
    { votes: 13443, seats: 1 },
    { votes: 11738, seats: 0 },
    { votes: 1714, seats: 0 },
    { votes: 1595, seats: 0 },
    { votes: 1209, seats: 0 }
  ];

  const result = gallagher(parties);

  test.equals(round(result, 3), 2.319);

  test.done();
};

module.exports['NZ 2011 Election - 4% threshold with overhangs'] = (test) => {
  const parties = [
    { votes: 1058636, seats: 59 },
    { votes: 614937, seats: 34 },
    { votes: 247372, seats: 14 },
    { votes: 147544, seats: 8 },
    { votes: 59237, seats: 0 },
    { votes: 31982, seats: 3 },
    { votes: 24168, seats: 1 },
    { votes: 23889, seats: 1 },
    { votes: 13443, seats: 1 },
    { votes: 11738, seats: 0 },
    { votes: 1714, seats: 0 },
    { votes: 1595, seats: 0 },
    { votes: 1209, seats: 0 }
  ];

  const result = gallagher(parties);

  test.equals(round(result, 3), 2.378);

  test.done();
};

module.exports['NZ 2011 Election - 4% threshold without overhangs'] = (test) => {
  const parties = [
    { votes: 1058636, seats: 58 },
    { votes: 614937, seats: 34 },
    { votes: 247372, seats: 14 },
    { votes: 147544, seats: 8 },
    { votes: 59237, seats: 0 },
    { votes: 31982, seats: 3 },
    { votes: 24168, seats: 1 },
    { votes: 23889, seats: 1 },
    { votes: 13443, seats: 1 },
    { votes: 11738, seats: 0 },
    { votes: 1714, seats: 0 },
    { votes: 1595, seats: 0 },
    { votes: 1209, seats: 0 }
  ];

  const result = gallagher(parties);

  test.equals(round(result, 3), 2.319);

  test.done();
};

module.exports['NZ 2005 Election - 5% threshold with overhangs'] = (test) => {
  const parties = [
    { votes: 935319, seats: 50 },
    { votes: 889813, seats: 48 },
    { votes: 130115, seats: 7 },
    { votes: 120521, seats: 6 },
    { votes: 48263, seats: 4 },
    { votes: 60860, seats: 3 },
    { votes: 34469, seats: 2 },
    { votes: 26441, seats: 1 },
    { votes: 14210, seats: 0 },
    { votes: 5748, seats: 0 },
    { votes: 2821, seats: 0 },
    { votes: 1641, seats: 0 },
    { votes: 1178, seats: 0 },
    { votes: 1079, seats: 0 },
    { votes: 946, seats: 0 },
    { votes: 782, seats: 0 },
    { votes: 601, seats: 0 },
    { votes: 478, seats: 0 },
    { votes: 344, seats: 0 }
  ];

  const result = gallagher(parties);

  test.equals(round(result, 3), 1.128);

  test.done();
};

module.exports['NZ 2005 Election - 5% threshold without overhangs'] = (test) => {
  const parties = [
    { votes: 935319, seats: 50 },
    { votes: 889813, seats: 47 },
    { votes: 130115, seats: 7 },
    { votes: 120521, seats: 6 },
    { votes: 48263, seats: 4 },
    { votes: 60860, seats: 3 },
    { votes: 34469, seats: 2 },
    { votes: 26441, seats: 1 },
    { votes: 14210, seats: 0 },
    { votes: 5748, seats: 0 },
    { votes: 2821, seats: 0 },
    { votes: 1641, seats: 0 },
    { votes: 1178, seats: 0 },
    { votes: 1079, seats: 0 },
    { votes: 946, seats: 0 },
    { votes: 782, seats: 0 },
    { votes: 601, seats: 0 },
    { votes: 478, seats: 0 },
    { votes: 344, seats: 0 }
  ];

  const result = gallagher(parties);

  test.equals(round(result, 3), 1.127);

  test.done();
};

module.exports['NZ 2005 Election - 4% threshold with overhangs'] = (test) => {
  const parties = [
    { votes: 935319, seats: 51 },
    { votes: 889813, seats: 49 },
    { votes: 130115, seats: 7 },
    { votes: 120521, seats: 7 },
    { votes: 48263, seats: 4 },
    { votes: 60860, seats: 1 },
    { votes: 34469, seats: 1 },
    { votes: 26441, seats: 1 },
    { votes: 14210, seats: 0 },
    { votes: 5748, seats: 0 },
    { votes: 2821, seats: 0 },
    { votes: 1641, seats: 0 },
    { votes: 1178, seats: 0 },
    { votes: 1079, seats: 0 },
    { votes: 946, seats: 0 },
    { votes: 782, seats: 0 },
    { votes: 601, seats: 0 },
    { votes: 478, seats: 0 },
    { votes: 344, seats: 0 }
  ];

  const result = gallagher(parties);

  test.equals(round(result, 3), 2.142);

  test.done();
};

module.exports['NZ 2005 Election - 4% threshold without overhangs'] = (test) => {
  const parties = [
    { votes: 935319, seats: 51 },
    { votes: 889813, seats: 48 },
    { votes: 130115, seats: 7 },
    { votes: 120521, seats: 7 },
    { votes: 48263, seats: 4 },
    { votes: 60860, seats: 1 },
    { votes: 34469, seats: 1 },
    { votes: 26441, seats: 1 },
    { votes: 14210, seats: 0 },
    { votes: 5748, seats: 0 },
    { votes: 2821, seats: 0 },
    { votes: 1641, seats: 0 },
    { votes: 1178, seats: 0 },
    { votes: 1079, seats: 0 },
    { votes: 946, seats: 0 },
    { votes: 782, seats: 0 },
    { votes: 601, seats: 0 },
    { votes: 478, seats: 0 },
    { votes: 344, seats: 0 }
  ];

  const result = gallagher(parties);

  test.equals(round(result, 3), 2.119);

  test.done();
};
