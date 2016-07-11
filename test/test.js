/**
 * Copyright (c) 2016, Keri Henare <keri@henare.co.nz>
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

var _ = require('lodash');
var gallagher = require('../');

// All figures are as provided by the 2012 MMP Review Report
// http://www.elections.org.nz/sites/default/files/bulk-upload/documents/Final_Report_2012_Review_of_MMP.pdf

// 1.63 - Table 5 (Page 22)

module.exports['NZ 2011 Election - 5% threshold with overhangs'] = function(test) {
  var parties,
    result;

  parties = [
    { "votes": 1058636, seats: 59 },
    { "votes": 614937, seats: 34 },
    { "votes": 247372, seats: 14 },
    { "votes": 147544, seats: 8 },
    { "votes": 59237, seats: 0 },
    { "votes": 31982, seats: 3 },
    { "votes": 24168, seats: 1 },
    { "votes": 23889, seats: 1 },
    { "votes": 13443, seats: 1 },
    { "votes": 11738, seats: 0 },
    { "votes": 1714, seats: 0 },
    { "votes": 1595, seats: 0 },
    { "votes": 1209, seats: 0 }
  ];

  result = gallagher(parties);

  test.equals(_.round(result, 2), 2.38);

  test.done();
};

module.exports['NZ 2011 Election - 5% threshold without overhangs'] = function(test) {
  var parties,
    result;

  parties = [
    { "votes": 1058636, seats: 58 },
    { "votes": 614937, seats: 34 },
    { "votes": 247372, seats: 14 },
    { "votes": 147544, seats: 8 },
    { "votes": 59237, seats: 0 },
    { "votes": 31982, seats: 3 },
    { "votes": 24168, seats: 1 },
    { "votes": 23889, seats: 1 },
    { "votes": 13443, seats: 1 },
    { "votes": 11738, seats: 0 },
    { "votes": 1714, seats: 0 },
    { "votes": 1595, seats: 0 },
    { "votes": 1209, seats: 0 }
  ];

  result = gallagher(parties);

  test.equals(_.round(result, 2), 2.32);

  test.done();
};

module.exports['NZ 2011 Election - 4% threshold with overhangs'] = function(test) {
  var parties,
    result;

  parties = [
    { "votes": 1058636, seats: 59 },
    { "votes": 614937, seats: 34 },
    { "votes": 247372, seats: 14 },
    { "votes": 147544, seats: 8 },
    { "votes": 59237, seats: 0 },
    { "votes": 31982, seats: 3 },
    { "votes": 24168, seats: 1 },
    { "votes": 23889, seats: 1 },
    { "votes": 13443, seats: 1 },
    { "votes": 11738, seats: 0 },
    { "votes": 1714, seats: 0 },
    { "votes": 1595, seats: 0 },
    { "votes": 1209, seats: 0 }
  ];

  result = gallagher(parties);

  test.equals(_.round(result, 2), 2.38);

  test.done();
};

module.exports['NZ 2011 Election - 4% threshold without overhangs'] = function(test) {
  var parties,
    result;

  parties = [
    { "votes": 1058636, seats: 58 },
    { "votes": 614937, seats: 34 },
    { "votes": 247372, seats: 14 },
    { "votes": 147544, seats: 8 },
    { "votes": 59237, seats: 0 },
    { "votes": 31982, seats: 3 },
    { "votes": 24168, seats: 1 },
    { "votes": 23889, seats: 1 },
    { "votes": 13443, seats: 1 },
    { "votes": 11738, seats: 0 },
    { "votes": 1714, seats: 0 },
    { "votes": 1595, seats: 0 },
    { "votes": 1209, seats: 0 }
  ];

  result = gallagher(parties);

  test.equals(_.round(result, 2), 2.32);

  test.done();
};

module.exports['NZ 2008 Election - 5% threshold with overhangs'] = function(test) {
  var parties,
    result;

  parties = [
    { votes: 1053398, seats: 58 },
    { votes: 796880, seats: 43 },
    { votes: 157613, seats: 9 },
    { votes: 95356, seats: 0 },
    { votes: 85496, seats: 5 },
    { votes: 55980, seats: 5 },
    { votes: 21241, seats: 1 },
    { votes: 20497, seats: 1 },
    { votes: 13016, seats: 0 },
    { votes: 12755, seats: 0 },
    { votes: 9515, seats: 0 },
    { votes: 9640, seats: 0 },
    { votes: 8176, seats: 0 },
    { votes: 1909, seats: 0 },
    { votes: 1208, seats: 0 },
    { votes: 1176, seats: 0 },
    { votes: 932, seats: 0 },
    { votes: 465, seats: 0 },
    { votes: 313, seats: 0 }
  ];

  result = gallagher(parties);

  test.equals(_.round(result, 2), 3.84);

  test.done();
};

module.exports['NZ 2008 Election - 5% threshold without overhangs'] = function(test) {
  var parties,
    result;

  parties = [
    { votes: 1053398, seats: 57 },
    { votes: 796880, seats: 43 },
    { votes: 157613, seats: 8 },
    { votes: 95356, seats: 0 },
    { votes: 85496, seats: 5 },
    { votes: 55980, seats: 5 },
    { votes: 21241, seats: 1 },
    { votes: 20497, seats: 1 },
    { votes: 13016, seats: 0 },
    { votes: 12755, seats: 0 },
    { votes: 9515, seats: 0 },
    { votes: 9640, seats: 0 },
    { votes: 8176, seats: 0 },
    { votes: 1909, seats: 0 },
    { votes: 1208, seats: 0 },
    { votes: 1176, seats: 0 },
    { votes: 932, seats: 0 },
    { votes: 465, seats: 0 },
    { votes: 313, seats: 0 }
  ];

  result = gallagher(parties);

  test.equals(_.round(result, 2), 3.94);

  test.done();
};

module.exports['NZ 2008 Election - 4% threshold with overhangs'] = function(test) {
  var parties,
    result;

  parties = [
    { votes: 1053398, seats: 60 },
    { votes: 796880, seats: 46 },
    { votes: 157613, seats: 9 },
    { votes: 95356, seats: 5 },
    { votes: 85496, seats: 1 },
    { votes: 55980, seats: 5 },
    { votes: 21241, seats: 1 },
    { votes: 20497, seats: 1 },
    { votes: 13016, seats: 0 },
    { votes: 12755, seats: 0 },
    { votes: 9515, seats: 0 },
    { votes: 9640, seats: 0 },
    { votes: 8176, seats: 0 },
    { votes: 1909, seats: 0 },
    { votes: 1208, seats: 0 },
    { votes: 1176, seats: 0 },
    { votes: 932, seats: 0 },
    { votes: 465, seats: 0 },
    { votes: 313, seats: 0 }
  ];

  result = gallagher(parties);

  test.equals(_.round(result, 2), 2.93);

  test.done();
};

module.exports['NZ 2008 Election - 4% threshold without overhangs'] = function(test) {
  var parties,
    result;

  parties = [
    { votes: 1053398, seats: 56 },
    { votes: 796880, seats: 43 },
    { votes: 157613, seats: 8 },
    { votes: 95356, seats: 5 },
    { votes: 85496, seats: 1 },
    { votes: 55980, seats: 5 },
    { votes: 21241, seats: 1 },
    { votes: 20497, seats: 1 },
    { votes: 13016, seats: 0 },
    { votes: 12755, seats: 0 },
    { votes: 9515, seats: 0 },
    { votes: 9640, seats: 0 },
    { votes: 8176, seats: 0 },
    { votes: 1909, seats: 0 },
    { votes: 1208, seats: 0 },
    { votes: 1176, seats: 0 },
    { votes: 932, seats: 0 },
    { votes: 465, seats: 0 },
    { votes: 313, seats: 0 }
  ];

  result = gallagher(parties);

  test.equals(_.round(result, 2), 3.05);

  test.done();
};

module.exports['NZ 2005 Election - 5% threshold with overhangs'] = function(test) {
  var parties,
    result;

  parties = [
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

  result = gallagher(parties);

  test.equals(_.round(result, 2), 1.13);

  test.done();
};

module.exports['NZ 2005 Election - 5% threshold without overhangs'] = function(test) {
  var parties,
    result;

  parties = [
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

  result = gallagher(parties);

  test.equals(_.round(result, 2), 1.13);

  test.done();
};

module.exports['NZ 2005 Election - 4% threshold with overhangs'] = function(test) {
  var parties,
    result;

  parties = [
    { votes: 935319, seats: 54 },
    { votes: 889813, seats: 51 },
    { votes: 130115, seats: 8 },
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

  result = gallagher(parties);

  test.equals(_.round(result, 2), 2.14);

  test.done();
};

module.exports['NZ 2005 Election - 4% threshold without overhangs'] = function(test) {
  var parties,
    result;

  parties = [
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

  result = gallagher(parties);

  test.equals(_.round(result, 2), 2.12);

  test.done();
};
