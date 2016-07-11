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

/**
 *
 */
module.exports = function gallagher(parties) {
  'use strict';

  var seats,
    votes;

  votes = _.reduce(parties, function(total, party) {
    return total + party.votes;
  }, 0);

  seats = _.reduce(parties, function(total, party) {
    return total + party.seats;
  }, 0);

  return Math.sqrt(_.chain(parties)
    .map(function(party) {
      return Math.pow((100 * party.votes / votes) - (100 * party.seats / seats), 2);
    })
    .reduce(function(total, value) {
      return total + value;
    }, 0)
    .value() / 2);
};
