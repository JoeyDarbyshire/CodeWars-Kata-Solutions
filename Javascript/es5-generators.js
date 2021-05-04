// ES5 Generators(i)
// 4 Kyu
// Javascript

// https://www.codewars.com/kata/53c29a6abb5187180d000b65

function generator(sequencer, ...args) {
    // Sends arguments to the submited function
    let next = sequencer(...args);
    return {
      next
    }
  }
  
  function dummySeq() {
    return function() {
      return "dummy";
    };
  }
  
  function factorialSeq() {
    let curTotal, curN;
    return function() {
      if (curTotal) {
        curN++;
        curTotal = curTotal * curN;
      } else {
        curN = 0;
        curTotal = 1;
      }
      return curTotal;
    }
  }
  
  function fibonacciSeq() {
    let prevNum, curNum = 0;
    return function () {
      if (prevNum !== undefined) {
        const newNum = prevNum + curNum;
        prevNum = curNum;
        curNum = newNum;
      } else {
        prevNum = curNum;
        curNum = 1;
      }
      return curNum;
    }
  }
  
  function rangeSeq(start, step) {
    let curNum;
    return function() {
      if (curNum) {
        curNum += step;
      } else {
        curNum = start;
      }
      return curNum;
    }
  }
  
  function primeSeq() {
    let curPrime;
    function isPrime (prime) {
      for (let i = 2; i < Math.sqrt(prime) + 1; ++i) {
        if (prime % i === 0) {
          return false;
        }
      }
      return prime !== 1;
    }
    return function() {
      if (curPrime) {
        let count = ++curPrime;
        while (!isPrime(count)) {
          count++;
        }
        curPrime = count;
      } else {
        curPrime = 2;
      }
      return curPrime;
    }
  }
  
  function partialSumSeq(...seq) {
    let curN, curTotal;
    return function() {
      if (curTotal !== undefined) {
        curN++;
      } else {
        curN = 0;
        curTotal = 0;
      }
      if (curN >= seq.length) {
        throw new Error("End of sequence error expected");
      }
      curTotal = seq[curN] + curTotal;
      return curTotal;
    }
  }