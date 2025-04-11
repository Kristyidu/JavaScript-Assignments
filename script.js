// Question 1: Check if bob is a Palindrome string

function bobIsAPalindrome(string) {
    let reversed = string.split('').reverse().join('');
    return string === reversed;
  }
  
//   // Example usage
  let word = "bob";
  console.log(`${word} is a palindrome`, bobIsAPalindrome(word));
console.log ("------------------")

// Question 2: Return maximum number from the following array [1, 2, 1000, 3, -1]

   function findMax(arr) {
    let max = 0; 
    for (let i = 0; i <= arr.length; i++) {
        if (max < arr[i]){
            max = arr [i]
        }
    }
    console.log (max)
}

let numberss = [1, 2, 1000, 3, -1]
findMax(numberss)
console.log ("----------------------")

// // Question 3: Find the factorial of 5

function findFactorial(n) {
    let outcome = 1;
    for (let i = 1; i <= n; i++) {
        outcome *= (i);
    }
    return outcome;
   
}
findFactorial(5)
console.log(findFactorial(5));
console.log ("---------------------------")

//Question 4: Sum of numbers in an array 

let numberr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0
for (let num of numberr){
    sum = sum + num
}
console.log (sum)
console.log ("----------------------")

// Question 5: Count vowels in the string "numbers"

function checkVowel(string) {
    let formattedString = string.toLowerCase();
    let vowels = "aeiou";
    let result = [];

    for (let char of formattedString) {
        if (vowels.includes(char)) {
            result.push(char);
        }
    }

    console.log(result);
}
checkVowel("numbers"); 

// Question: 5(b)

function countVowels(string) {
    const vowels = "aeiou";
    let count = 0;
    let formattedString = string.toLowerCase();

    for (let char of formattedString) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
console.log(countVowels("numbers"));
console.log ("----------------------------")

//Question 6: Prime number of 3: return the boolean. 

function isPrimeNumber(n) {
    if (n <= 1) return false;
    if (n === 2) return true;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrimeNumber(3));
console.log ("------------------------")


// Question 7: Multiply the array [1, 2, 3, 4, 5, 6, 7] by 3. 
// Return all multiples of 3 in the array. 

function multiplyArrayByThree(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 3);
    }

    return result;
}
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(multiplyArrayByThree(numbers)); 

// To Return all multiples of 3 in the array. 

function getMultiplesOfThree(arr) {
    return arr.filter(num => num % 3 === 0);
}
let numberArray = [1, 2, 3, 4, 5, 6, 7];
console.log(getMultiplesOfThree (numberArray)); 
console.log ("--------------------------")

//Question 8: Find index of a number in an array [1, 2, 3, 4, 5, 6, 7]

function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; 
}
let array = [1, 2, 3, 4, 5, 6, 7];
console.log(findIndex(array, 4)); 
console.log(findIndex(array, 10));

console.log ("----------------------")

// Question 9: Merge two arrays ([0, 4, 6,], [1, 2, 3] and sort. Pass a temp parameter 
// of either "Asc" or "Desc" order, else "wrong sort param". Note, it  shouldnt be case sensitive 

function mergeAndSortTwoArrays(arr1, arr2, temp) {
    let merged = arr1.concat(arr2);
   let sortType = temp.toLowerCase();

    if (sortType === "asc") {
        return merged.sort((a, b) => a - b);
    } else if (sortType === "desc") {
        return merged.sort((a, b) => b - a);
    } else {
        return "This is a wrong sort param";
    }
}
console.log(mergeAndSortTwoArrays([0, 4, 6], [1, 2, 3], "ASC"));  
console.log(mergeAndSortTwoArrays([0, 4, 6], [1, 2, 3], "DESC")); 
console.log(mergeAndSortTwoArrays([0, 4, 6], [1, 2, 3], "hello")); 

console.log ("-------------------------")

// Question 10: ADASHE contribution for XTY Club members. 
// a. Add members, (update the amount of an existing member); 
// b. Print all members (names and amount); 
// c. get Member (name); that is, return record for a particular member to include name and amount
// d. withdraw (name and amount of available balance of a member); 
// e. Remove member's (name/details)

let adasheContribution =[
    {
        name: "Yakubu", 
        amount: 2000, 
    }, 
    {
        name: "Maria", 
        amount: 1500, 
    }, 
    {
        name: "Isaac", 
        amount: 2500, 
    }, 
    {
        name: "Dan", 
        amount: 1000, 
    }, 
]

//To Add a New Member to the Contribution 

function addNewMember (name, amount) {
    let member = {
        name: name, 
        amount: amount,
    };
   let existingMember = adasheContribution.find(
        member => member.name.toLowerCase() === name.toLowerCase()
    );

    if (existingMember) {
        existingMember.amount += amount;
    } else {
        adasheContribution.push({ name, amount });
    }
}
console.log("Adashe club member list  before adding a new member", adasheContribution)
console.log("------------------")

addNewMember("Promise", 2000)
addNewMember("Josephine", 5000)
addNewMember("Dan", 100)
addNewMember("Josiah", 3000)
addNewMember("Maria", 2000)
addNewMember("Yakubu", 1200)
addNewMember("Zara", 1700)
addNewMember("Tobi", 1350)

console.log("Adashe Contribution list after adding new members", adasheContribution)
console.log("------------------")


// (b). Get member by name

function getMemberByName(name) {
    let member = adasheContribution.find(
        mem => mem.name.toLowerCase() === name.toLowerCase()
    );

    if (member) {
        return `Name: ${member.name}, Amount: ${member.amount}`;
    } else {
        return "Member not found on this list";
    }
}
console.log(getMemberByName("Promise")); 

console.log(getMemberByName("Maria"));   

console.log(getMemberByName("Unknown")); 
console.log ("----------------------")

// (c). Withdraw for a member
    function withdrawFromMember(name, amount) {
    let member = adasheContribution.find(
        m => m.name.toLowerCase() === name.toLowerCase()
    );

    if (!member) {
        return "Member not found.";
    }

    if (member.amount >= amount) {
        member.amount -= amount;
        return `Withdrawal successful. ${member.name}'s new balance is ${member.amount}`;
    } else {
        return "Insufficient balance.";
    }
}
console.log(withdrawFromMember("Isaac", 1000)); 
console.log ("-------------------")

//(d.) To Remove a member

function toRemoveMember(name) {
    let index = adasheContribution.findIndex(
        mem => mem.name.toLowerCase() === name.toLowerCase()
    );

    if (index !== -1) {
        let removed = adasheContribution.splice(index, 1)[0];
        return `Member "${removed.name}" has been removed.`;
    } else {
        return "Member not found.";
    }
}
console.log(toRemoveMember("Dan"));  

console.log ("--------------------------")
console.log("list of members after Dan was removed from the group", adasheContribution)


