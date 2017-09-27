/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  var min = Number.MAX_VALUE;
  var max = Number.MIN_VALUE;
  var cnt = 0.0;
  var str = string.split(' ');

  for (var i = 0; i < str.length; i++) {
    cnt = parseFloat(str[i]);
    if (!isNaN(cnt)) {
      if (cnt < min) {
        min = cnt;
      } else if (cnt > max) {
        max = cnt;
      }
    } else {
      continue;
    }
  }
  return { max, min };
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x === 1 || x === 2) {
    return 1;
  }
  return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x, fibonacci) {
  fibonacci = fibonacci || {};
  if (x === 1 || x === 2) {
    fibonacci[x] = 1;
    return fibonacci[x];
  }

  if (isNaN(fibonacci[x])) {
    fibonacci[x] = fibonacciWithCache(x - 1, fibonacci) + fibonacciWithCache(x - 2, fibonacci);
  }
  return fibonacci[x];
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  var line = 0;
  var str = '';
  if ((max + 1) % cols === 0) {
    line = (max + 1) / cols;
  } else {
    line = 1 + Math.floor((max + 1) / cols);
  }
  for (var i = 0; i < line; i++) {
    for (var j = 0; j < cols; j++) {
      if (j * line + i < max + 1) {
        if (j > 0) {
          if (j * line + i >= 10) {
            str += ' ';
          } else {
            str += '  ';
          }
        } else {
          str += ' ';
        }
        str += j * line + i;
        if (j === cols - 1 && i !== line - 1) {
          str += '\n';
        }
      } else {
        break;
      }
    }
  }
  return str;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  var str = '';
  var crnt = 1;
  for (var i = 1; input.length >= i; i++) {
    if (input[i] === input[i - 1]) {
      crnt += 1;
    } else if (crnt > 1) {
      str += input[i - 1];
      str += crnt;
      crnt = 1;
    } else {
      str += input[i - 1];
    }
  }
  return str;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
