/**
 * Создайте класс, обладающий следующим поведением:
 * const values = ['hello', 'javascript', 'world'];
 * const instances = values.map(str => new NumberAndString(str));
 *
 * const resultConcatenation = instances.join(' '); // == 'hello javascript world'
 * const resultCharCount = instances.reduce((obj, memo) => memo + obj, 0); // == 20
 * @class NumberAndString
 * @param {String} str - initial value
 */
class NumberAndString {
  constructor(str) {
    this.str = str;
    this.len = str.length;
  }
  toString() {
    var newStr =  new String(this.str);
    return newStr.toString();
  }
  valueOf() {
    var num = new Number(this.len);
    return num.valueOf();
  }
}

module.exports = NumberAndString;
