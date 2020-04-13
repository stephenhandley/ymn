const Yes = 1;
const Maybe = 0.5;
const No = 0;

function ymn (obj) {
  return function (attr) {
    if (attr in obj) {
      return !!obj[attr] ? Yes : No;
    } else {
      return Maybe;
    }
  }
}

ymn.Yes = Yes;
ymn.Maybe = Maybe;
ymn.No = No;

module.exports = ymn;
