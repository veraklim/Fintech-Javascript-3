/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  var newPromise = new Promise(function(resolve, reject) {
    var resolveValues = [];
    var num = 0;

    promises.forEach((promise, i) => {
      promise.then(res => {
      resolveValues[i] = res;
      num += 1;
      }, reject).then(function () {
        if (num === promises.length) {
          resolve(resolveValues);
        }
      });
    });
  });

  return newPromise;
}


module.exports = promiseAll;
