function getNumbers(str) {
    let arrNumbers = [];
    let k = 0;
    const ink = true;
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i]) >= 0) {
            while (ink) {
                arrNumbers[k] = parseInt(str[i])
                k++
                break;
            }

        }
    }
    return arrNumbers;
}



function findTypes() {
    let types = {};
    let countNumber = 0;
    let countString = 0;
    let countBoolean = 0;
    let countUndefined = 0;
    let countObject = 0;
    let countFunction = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            countNumber += 1;
            types['number'] = countNumber;
        } else if (typeof arguments[i] === 'string') {
            countString += 1;
            types['string'] = countString;
        } else if (typeof arguments[i] === 'boolean') {
            countBoolean += 1;
            types['boolean'] = countBoolean;
        } else if (typeof arguments[i] === 'undefined') {
            countUndefined += 1;
            types['undefined'] = countUndefined;
        } else if (typeof arguments[i] === 'object') {
            countObject += 1;
            types['object'] = countObject;
        } else {
            countFunction += 1;
            types['functiont'] = countFunction;
        }
    }
    return types;
}




function executeForEach(myArr, func) {
    for (let i = 0; i < myArr.length; i++) {
        func(myArr[i]);
    }

 }


function mapArray(myArr, func) {
    let newMyArr = [];
    executeForEach(myArr, (arrItem) => {
 newMyArr.push(func(arrItem)) 
})
    return newMyArr;
}

function filterArray(myArr, func) {
    let newMyArr = [];
    executeForEach(myArr, (arrItem) => {
        if (func(arrItem)) {
            newMyArr.push(arrItem)
        }
    }
    )
    return newMyArr;
}



function showFormattedDate(date) {
    let year = date.getFullYear();
    let month = date.toLocaleString('en-US', {month: 'short'});
    let monthDate = date.getDate();
    return `Date: ${month} ${monthDate} ${year} `
}


function canConvertToDate(date) {
   if(Date.parse(date)) {
       return true;
   } else {
 return false; 
}
}

 

function daysBetween(dateFirst, dateSecond) {
    let dayFirst = dateFirst.getTime();
    let daySecond = dateSecond.getTime();
    let difference = daySecond - dayFirst;
    let ms = 1000;
    let sec = 60;
    let minutes = 60;
    let hours = 24;
    let negative = -1;
    difference = Math.ceil(difference / (ms * sec * minutes * hours));
    if (difference < 0) {
        difference *= negative;
    }
    return difference;
}


let date = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }

]
function getAmountOfAdultPeople(date) {
    let arrAge = [];
    for (let i = 0; i < date.length; i++) {
        let currentDate = new Date();
        let birthdayDate = new Date(date[i][' birthday ']);
        let daysInYear = 365;
        let peopleAge = Math.ceil(daysBetween(currentDate, birthdayDate) / daysInYear);
        arrAge.push(peopleAge);
    }
    let minAge = 18;
    let count = filterArray(arrAge, function (number) {
        return number > minAge;
    })
    return count.length;
}

function keys(object) {
    let arr = [];

    for(let key in object) {
        if (object.hasOwnProperty(key)) {
            arr.push(key)
        }
    }
    return arr;
}


function values(object) {
    let arr = [];

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            arr.push(object[key])
        }
    }
    return arr;
}
