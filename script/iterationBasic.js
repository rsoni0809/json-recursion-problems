

// **************************Fibonacci with Iteration************************************************
// 0 1 2  3 5  8 13 21 

function printFibonacciListIteration(count, index = 2, list = [0, 1]) {
    while (index < count && count > 2) {  // 2 < 3
        const [secLast, last ] = list.slice(-2);
        return printFibonacciListIteration(count, ++index, [...list, secLast + last]);
    }
    
    return list;
  
}

// ************************end of Fibonacci with Iteration*****************************************************










//console.log("ite", printFibonacciListIteration(12));



