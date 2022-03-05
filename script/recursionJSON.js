console.log("Hello");

// **************************Print 1-10 using recursion************************************************
const initCount = 1;
const endCount = 10;

function printCountRecursion(init, end) {
    if (init > end) {
        return;
    }
    console.log(init);
    printCountRecursion(++init, end);
}

// ************************Print 1-10 using recursion*****************************************************

// **************************Fibonacci with recursion************************************************
// 0 1 2  3 5  8 13 21 

function printFibonacciRecursionList(totalCount, index = 2, list = [0,1]) {
    if (totalCount === 1) {
        return list.at(-2);
    } else if(totalCount === 2){
       return  list
    } 
    
    if (index < totalCount) {
        const [secLast, last] = list.slice(-2);
        return printFibonacciRecursionList(totalCount, ++index, [...list, secLast + last]);
    }
    return list;

}

// ************************end of Fibonacci with recursion*****************************************************

// **************************Fibonacci with nth Position recursion************************************************
// 0 1 2  3 5  8 13 21 

function printFiboNthPos(totalCount, index = 2, list = [0,1]) {
    if (totalCount === 1) {
        return list.at(-2);
    } else if(totalCount === 2){
       return  list
    } 
    
    if (index < totalCount) {
        const [secLast, last] = list.slice(-2);
        return printFiboNthPos(totalCount, ++index, [...list, secLast + last]);
    } 
    return list[index-1];

}

// ************************end of Fibonacci with nth Position recursion*****************************************************


const object = {
    aProperty: {
        aSetting1: 1,
        aSetting2: 2,
        aSetting3: 3,
        aSetting4: 4,
        aSetting5: {
            aSetting51: {
                aSetting551: 5
            }
        }
    },
    bProperty: {
        bSetting1: {
            bPropertySubSetting : true
        },
        bSetting2: "bString"
    },
    cProperty: {
        cSetting: "cString"
    }
}
let newList = [];
function concatenateObjPropsRecursion(obj = {}, list = []) {
   if(typeof obj === 'object'){
        for (let prop in obj) {
                let curPath = [...list, prop];
                concatenateObjPropsRecursion(obj[prop], curPath);
        }
    } else {
       let newProps = list.join('.') + '.' + obj;
       newList.push(newProps);
            console.log(newProps);
   }
    return newList;
}
// ***************************
let obj = { lamp: 2, candle: 2, pillow: { big: 2, small: 4 }, bathroom: { toilet: 1, shower: [{ shampoo: 1, conditioner: 2 }, { shampoo: 8, conditioner: 9 }] } };

function getPropertyListFromObj(obj = {}, list = []) {
    if (typeof obj === 'object' && obj !== null) {
        for (let prop in obj) {
            let item = obj[prop];
            list.push(prop);
            if (obj[prop] && typeof item === 'object') {
                getPropertyListFromObj(obj[prop], list);
            } 
        }
        
    }
    return  list;;
}
// ********************************************************************************

let valueStr = '';
function getObjPropsValueList(obj) {
    if (obj instanceof Object) {
        for (let props in obj) {
            let item = obj[props];
            getObjPropsValueList(item);
        }
        
    } else {
        valueStr = valueStr + ' ' + obj;
    }
    return valueStr;
}
// ****************************************************************


// ***************************** Flatten nested json object**************************

let flattenObj = {};
function flattenNestedJsonObject(obj, list = []) {
    if (obj instanceof Object) {
        for (let prop in obj) {
            let currList = [...list, prop];
            flattenNestedJsonObject(obj[prop], currList);
        }
    } else {
        let currProp = list.join('.') 
        flattenObj[currProp]  = obj;
    }
    return flattenObj;

}


// ***************************** End of Flatten nested json object********************

// ***************************** Find Json Object depth**************************

let flattenObj = {};
function findJsonDepth(obj, depth = 0) {
    if (obj instanceof Object) {
        for (let prop in obj) {
            findJsonDepth(obj[prop], ++depth);
        }
    } else {
        
    }
    return flattenObj;

}


// ***************************** Find Json Object depth********************





//  printCountRecursion(1, 10);
// console.log("REC Sequence", printFibonacciRecursionList(12)) // params as total count

// console.log("Nth Position", printFiboNthPos(12));
//console.log("new", printFibonacciRecursionList(0, 2, []));

//  console.log("concatenateObjPropsRecursion", concatenateObjPropsRecursion(obj)); // [aProperty.aSetting1, aProperty.aSetting2]
//  console.log(getPropertyListFromObj(obj)); // push all property of object in list ['lamp', 'candle', 'pillow']
//console.log("valuelsit",  getObjPropsValueList(obj));
//console.log(flattenNestedJsonObject(obj))
//console.log(findJsonDepth(obj));



