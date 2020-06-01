const _ = {
  clamp(num, lowerNum, upperNum) {
       
    const arr = [num, lowerNum, upperNum];
    const sortedArr = arr.sort((a, b) => a - b);

    return sortedArr[1];

    /*  
    //ALTERNATIVELY ...
      let lowerClampedValue = Math.max(num, lowerNum);
      let clampedValue = Math.min(lowerClampedValue, upperNum);

      return clampedValue;
    */
  },

  inRange(num, start, end) {
    if (end == undefined) {
      end = start;
      start = 0;
      return (num >= start && num < end);
    }
    if (start > end) {
      let switchedStart = end;
      let switchedEnd = start;

      return (num >= switchedStart && num < switchedEnd);
    }
    return (num >=start && num < end);
  },

  words(str) {
    return str.split(' ');
  },

  pad(str, length) {
    /*
    let padStringArr = str.split()

    if (str.length > length) {
      return str;
    }
    if ((length - str.length) % 2 === 0) {
      let totalPad = length - str.length;
      let sidePad = totalPad / 2;

      for (let i = 0; i < sidePad; i++) {
        ;
        padStringArr.unshift(' ');
        padStringArr.push(' ');
      }
      return padStringArr.join('');
    }
    if ((length - str.length) % 2 !== 0) {
      let lowestPad = Math.floor((length - str.length) / 2);

      for (let i = 0; i < lowestPad; i++) {
        padStringArr.unshift(' ');
        padStringArr.push(' ');
      }
      padStringArr.push(' ')
      return padStringArr.join('');
    }
    */

    //SIMPLIFIED
    if (str.length > length) {
      return str;
    }
    let startPadLength = Math.floor((length - str.length) / 2);
    let endPadLength = length - str.length - startPadLength;
    let paddedStr = ' '.repeat(startPadLength) + str + ' '.repeat(endPadLength);

    return paddedStr;
  },

  has(obj, key) {
    return obj[key] !== undefined;
  },

  invert(obj) {
    /*
    let keysArr = Object.keys(obj);
    let valArr = Object.values(obj);

    let invertedObj = {}
    for (let key of keysArr) {
      for (let val of valArr) {
        invertedObj[val] = key;
      }
    }
    */
    //SIMPLIFIED
    let invertedObj = {};
    for (let key in obj) {
      let val = obj[key];
      invertedObj[val] = key;
    }
    return invertedObj;
  },

  findKey(obj, predicate) {
    // let valArr = Object.values(obj);
    // for (let key in obj) {
    //   if (valArr.find(predicate(obj[key]))) {
    //     console.log(key);
    //   }
    // }
    for (let key in obj) {
      if (predicate(obj[key])) {
        return key;
       }
    }
  },

  drop(arr, n = 1) {
    return arr.slice(n);
  },

  dropWhile(arr, predicate) {
    /*
    for (let i = 0; i < arr.length; i++) {
      let newArr = arr;
      if (predicate(arr[i], i, arr)) {
        newArr.shift();
      } else {
        newArr.shift()
        return newArr;
      }
    }
    */

    // SIMPLIFIED
      let dropNumber = arr.findIndex((el, idx) => {
        return !predicate(el, idx, arr);
      });

      return arr.slice(dropNumber);
  },
  
  chunk(arr, size = 1) {
    let chunksArr = [];
    
    for (let i = 0; i < arr.length; i += size) {
      let chunk = arr.slice(i, i + size);
      chunksArr.push(chunk);
    }
    return chunksArr;
  }

};


module.exports = _;