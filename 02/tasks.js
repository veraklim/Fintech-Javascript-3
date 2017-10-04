/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (var i = 0; i < 10; i++) {
    setTimeout(i => {
      logger(i);
    }, 100, i);
  }
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
  return function(args_) {
    args.push(args_);
    return func.apply(context, args);
  };
}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x = 0) {
  var cursum = x;

  function foo(y = 0) {
    if (y !== 0) {
      cursum += y;
    } else {
      return cursum;
    }
    return foo;
  }
  /*if (x === 0) {
    return x;
  }*/

  return foo(x);
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  var flag = true;

  for (var i = 0; i < first.length; i++) {
    flag = (second.indexOf(first[i]) >= 0);
  }
  return flag;
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  var cur = [];

  for (var a in arr) {
    if (cur.indexOf(arr[a]) < 0) {
      cur.push(arr[a]);
    }
  }
  cur.sort(function(a, b) {
    var flag = 1;

    if (a < b) {
      flag = -1;
    }
    return flag;
  });
  return cur;
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  var cur = [];

  for (var a in first) {
    if (second.indexOf(first[a]) >= 0) {
      cur.push(first[a]);
    }
  }
  cur.sort(function(a, b) {
    var flag = 1;

    if (a < b) {
      flag = -1;
    }
    return flag;
  });
  return cur;
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  var cnt = 0;

  for (var a in left) {
    if (left[a] !== right[a]) {
      ++cnt;
      if (cnt > 1) {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
