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

/**
 * Calculates the Gallagher index for a given election result
 *
 * @param  {Array}  parties An array of party results
 * @return {Number}         The Gallagher index score
 */
module.exports = function calculateGallagherIndex (parties) {
  'use strict';

  const votes = parties.reduce((total, party) => total + party.votes, 0);
  const seats = parties.reduce((total, party) => total + party.seats, 0);
  const rows = parties.map(
    (party) => Math.pow((100 * party.votes / votes) - (100 * party.seats / seats), 2)
  );

  return Math.sqrt(0.5 * rows.reduce((total, value) => total + value, 0));
};
