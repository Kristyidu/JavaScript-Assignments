// Question 1: Check if bob is a Palindrome string
function bobIsAPalindrome (string) {
    let reversed = '';
    
    // Loop from the end of the string to the beginning
    for (let i = string.length - 1; i >= 0; i--) {
      reversed += string[i];
    }
    
    return string === reversed;
  }

  let word = "bob";
  console.log(`${word} is a palindrome:`, bobIsAPalindrome(word));
  console.log("------------------");

 
 // Question 2: Return maximum number from the following array [1, 2, 1000, 3, -1]
  function findMaximumNumberOfTheArray(arr) {
    let maximumNumber = 0; 
    for (let i = 0; i <= arr.length; i++) {
        if (maximumNumber < arr[i]){
            maximumNumber = arr [i]
        }
    }
    console.log (maximumNumber)
}

let numberss = [1, 2, 1000, 3, -1]
findMaximumNumberOfTheArray(numberss)
console.log ("----------------------")


// // Question 3: Find the factorial of 5
function findFactorialOfNumber(n) {
    let outcome = 1;
    for (let i = 1; i <= n; i++) {
        outcome *= (i);
    }
    return outcome;
   
}
findFactorialOfNumber(5)
console.log(findFactorialOfNumber(5));
console.log ("---------------------------")


//Question 4: Sum of numbers in an array 
function calculateSumOfNumbers (arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i]; 
    }
  
    return sum;
  }
  let numberr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let totalSum = calculateSumOfNumbers(numberr);
  
  console.log(totalSum);
  console.log("----------------------");


// Question 5: Count vowels in the string "numbers"
  function checkForVowel(string) {
    let formattedString = string.toLowerCase();
    let result = [];
  
    for (let i = 0; i < formattedString.length; i++) {
      let char = formattedString[i];
  
      if (
        char === 'a' ||
        char === 'e' ||
        char === 'i' ||
        char === 'o' ||
        char === 'u'
      ) {
        result.push(char);
      }
    }
  
    console.log(result);
  }
  checkForVowel("numbers");


  // Question: 5(b) Count the number  of vowels
  function countNumberOfVowels(string) {
    let formattedString = string.toLowerCase();
    let totalNumberCount = 0;
    let uniqueVowelsChar = [];
  
    for (let i = 0; i < formattedString.length; i++) {
      let char = formattedString[i];
  
      if (
        char === 'a' ||
        char === 'e' ||
        char === 'i' ||
        char === 'o' ||
        char === 'u'
      ) {
        totalNumberCount++;
  
        // Add only if it's not already in uniqueVowelsChar
        let alreadyExists = false;
        for (let j = 0; j < uniqueVowelsChar.length; j++) {
          if (uniqueVowelsChar[j] === char) {
            alreadyExists = true;
            break;
          }
        }
  
        if (!alreadyExists) {
            uniqueVowelsChar.push(char);
        }
      }
    }
    console.log("Total vowel count:", totalNumberCount);
    console.log("Unique vowels found:", uniqueVowelsChar);
  }
    countNumberOfVowels("numbers");


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
  
  // Function to return all multiples of 3 
  function getMultiplesOfThree(arr) {
    let multiplesOfThree = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 === 0) {
        multiplesOfThree.push(arr[i]);
      }
    }
  
    return multiplesOfThree;
  }
  
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log(multiplyArrayByThree(numbers));
  
  let numberArray = [1, 2, 3, 4, 5, 6, 7];
  console.log(getMultiplesOfThree(numberArray));
  
  console.log("--------------------------");


  //Question 8: Find index of a number in an array [1, 2, 3, 4, 5, 6, 7]

function findIndexOfNumber(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; 
}
let array = [1, 2, 3, 4, 5, 6, 7];
console.log(findIndexOfNumber(array, 4)); 
console.log(`This index doesn't exist: ${findIndexOfNumber(array, 10)}`);

console.log ("----------------------")


// Question 9: Merge two arrays ([0, 4, 6,], [1, 2, 3] and sort. Pass a temp parameter 
// of either "Asc" or "Desc" order, else "wrong sort param". Note, it  shouldnt be case sensitive 

function mergeAndSortTwoArrays(arr1, arr2, temp) {
    let merged = [];
  
    for (let i = 0; i < arr1.length; i++) {
      merged.push(arr1[i]);
    }
  
    for (let i = 0; i < arr2.length; i++) {
      merged.push(arr2[i]);
    }
  
    let sortType = temp.toLowerCase();
  
    // Manual sorting (selection-sort style)
    for (let i = 0; i < merged.length; i++) {
      let targetIndex = i;
  
      for (let j = i + 1; j < merged.length; j++) {
        if (
          (sortType === "asc" && merged[j] < merged[targetIndex]) ||
          (sortType === "desc" && merged[j] > merged[targetIndex])
        ) {
          targetIndex = j;
        }
      }
  
      let tempValue = merged[i];
      merged[i] = merged[targetIndex];
      merged[targetIndex] = tempValue;
    }
  
    if (sortType !== "asc" && sortType !== "desc") {
      return "This is a wrong sort parameter";
    }
  
    return merged;
  }
  
  // Example usage
  console.log(mergeAndSortTwoArrays([0, 4, 6], [1, 2, 3], "ASC"));   // [0, 1, 2, 3, 4, 6]
  console.log(mergeAndSortTwoArrays([0, 4, 6], [1, 2, 3], "DESC"));  // [6, 4, 3, 2, 1, 0]
  console.log(mergeAndSortTwoArrays([0, 4, 6], [1, 2, 3], "hello")); // error message
  
  console.log("-------------------------");


  // Question 10: ADASHE contribution for XTY Club members. 
// a. Add members, (update the amount of an existing member); 
// b. Print all members (names and amount); 
// c. get Member (name); that is, return record for a particular member to include name and amount
// d. withdraw (name and amount of available balance of a member); 
// e. Remove member's (name/details)


//a. To Add New Members to the Contribution 
let adasheContribution = [];

function addNewMember(name, amount) {
  let memberExists = false;

  for (let i = 0; i < adasheContribution.length; i++) {
    
    if (adasheContribution[i].name.toLowerCase() === name.toLowerCase()) {
      adasheContribution[i].amount += amount;
      memberExists = true;
      break; 
    }
  }

  if (!memberExists) {
    adasheContribution.push({ name: name, amount: amount });
  }
}
console.log("Adashe club member list before adding a new member", adasheContribution);
console.log("------------------");

addNewMember("Promise", 2000);
addNewMember("Josephine", 5000);
addNewMember("Dan", 100);
addNewMember("Josiah", 3000);
addNewMember("Maria", 2000);
addNewMember("Yakubu", 1200);
addNewMember("Zara", 1700);
addNewMember("Tobi", 1350);
addNewMember("Isaac", 2300);
addNewMember("Dan", 2000);
addNewMember("Yakubu", 1800);

// Add again to test update (e.g. adding to an existing member)
addNewMember("Maria", 1000);  
addNewMember("Tobi", 650); 
addNewMember("Josiah", 2000);
addNewMember("Yakubu", 1200);


console.log("Adashe Contribution list after adding new members", adasheContribution);
console.log("------------------");


// (b). Get member by name
function getMemberByName(name) {
    for (let i = 0; i < adasheContribution.length; i++) {
      if (adasheContribution[i].name.toLowerCase() === name.toLowerCase()) {
        return `Name: ${adasheContribution[i].name}, Amount: ${adasheContribution[i].amount}`;
      }
    }
  
    return "Member not found on this list";
  }
  console.log(getMemberByName("Promise")); 
  console.log(getMemberByName("Maria"));   
  console.log(getMemberByName("Unknown")); 
  console.log("----------------------");


 // (c). Withdraw for a member
function withdrawFromMember(name, amount) {
    for (let i = 0; i < adasheContribution.length; i++) {
      if (adasheContribution[i].name.toLowerCase() === name.toLowerCase()) {
        if (adasheContribution[i].amount >= amount) {
          adasheContribution[i].amount -= amount;
          return `Withdrawal successful. ${adasheContribution[i].name}'s new balance is ${adasheContribution[i].amount}`;
        } else {
          return "Insufficient balance.";
        }
      }
    }
  
    return "Member not found.";
  }
  console.log(withdrawFromMember("Isaac", 1000)); 
  console.log(withdrawFromMember("Maria", 500));  
  console.log(withdrawFromMember("Martins", 300));
  console.log("-------------------");

// //(d.) To Remove a member

function toRemoveMember(name) {
    let found = false;
    let newList = [];
  
    for (let i = 0; i < adasheContribution.length; i++) {
      if (adasheContribution[i].name.toLowerCase() === name.toLowerCase()) {
        found = true; // We found the person, so we skip adding them
        removedName = adasheContribution[i].name;
        continue;
      }
      newList.push(adasheContribution[i]);
    }
  
    adasheContribution = newList;
  
    if (found) {
      return `Member "${removedName}" has been removed.`;
    } else {
      return "Member not found.";
    }
  }
  console.log(toRemoveMember("Dan"));
  console.log("--------------------------");
  console.log("List of members after Dan was removed from the group:", adasheContribution);



  


