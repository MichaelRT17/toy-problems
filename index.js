// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// https://www.codewars.com/kata/square-every-digit/train/javascript

function squareDigits(num) {
    return parseInt(num.toString().split('').map(digit => +digit * +digit).join(''));
}

// Below should return 811181

squareDigits(9119);


// Given an array/list [] of integers , Construct a product array Of same size 
// Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

function productArray(numbers) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        let x = numbers.splice(i, 1);
        let y = numbers.reduce((a, b) => a * b);
        arr.push(y);
        numbers.splice(i, 0, x[0]);
    }
    return arr;
}

// Below should return [ 120, 60, 40, 30, 24 ]

productArray([1, 2, 3, 4, 5]);


// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }

const whosOnline = (friends) => {
    let object = {};
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].status === 'offline' && !object.offline) {
            object.offline = [];
            object.offline.push(friends[i].username)
        }
        else if (friends[i].status === 'offline') {
            object.offline.push(friends[i].username)
        }
        else if (friends[i].lastActivity > 10 && !object.away) {
            object.away = [];
            object.away.push(friends[i].username)
        }
        else if (friends[i].lastActivity > 10) {
            object.away.push(friends[i].username)
        }
        else if (!object.online) {
            object.online = [];
            object.online.push(friends[i].username)
        }
        else {
            object.online.push(friends[i].username)
        }
    }
    return object
}

// Below should return {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }

whosOnline(
    [
        {
            username: 'David',
            status: 'online',
            lastActivity: 10
        }, {
            username: 'Lucy',
            status: 'offline',
            lastActivity: 22
        }, {
            username: 'Bob',
            status: 'online',
            lastActivity: 104
        }
    ]
)

// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str) {
    return str.split(' ').map(word => {
        if (word.length >= 5) {
            return word.split('').reverse().join('')
        }
        return word
    }).join(' ');
}

// Below should return 'Hey wollef sroirraw'

spinWords('Hey fellow warriors')


// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

//  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
    let zeros = arr.filter(x => x === 0)
    let others = arr.filter(y => y !== 0)
    return others.concat(zeros)
}

// Below should return [true, 5, "hello", 6, 3, "z", 0, 0, 0]

moveZeros([true, 0, 5, "hello", 0, 6, 3, 0, "z"])