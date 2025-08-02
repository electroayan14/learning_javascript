// JavaScript Logic Practice Problems with Solutions

// 1. Apply 10% discount on item prices
let items = [250, 645, 300, 900, 50];
items = items.map(price => price - price * 0.1);
console.log("1. Discounted Prices:", items);

// 2. Return all even numbers from an array
let nums = [1, 2, 3, 4, 5, 6];
let evens = nums.filter(num => num % 2 === 0);
console.log("2. Even Numbers:", evens);

// 3. Find the largest number in an array
let largest = Math.max(...nums);
console.log("3. Largest Number:", largest);

// 4. Count how many times a value appears in an array
let values = [1, 2, 2, 3, 1, 4, 2];
let count = values.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log("4. Frequency Count:", count);

// 5. Find the sum of all numbers in an array
let sum = nums.reduce((acc, val) => acc + val, 0);
console.log("5. Sum:", sum);

// 6. Reverse an array without using .reverse()
let reversed = [];
for (let i = nums.length - 1; i >= 0; i--) {
  reversed.push(nums[i]);
}
console.log("6. Reversed Array:", reversed);

// 7. Return a new array without duplicates
let unique = [...new Set(values)];
console.log("7. Unique Values:", unique);

// 8. Filter names starting with a given letter
let names = ["Alice", "Bob", "Charlie", "Ankit"];
let aNames = names.filter(name => name.startsWith("A"));
console.log("8. Names Starting With A:", aNames);

// 9. Find the second-largest number in an array
let sorted = [...new Set(nums)].sort((a, b) => b - a);
let secondLargest = sorted[1];
console.log("9. Second Largest:", secondLargest);

// 10. Rotate array by k steps
let rotateByK = (arr, k) => {
  k = k % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
};
console.log("10. Rotated by 2:", rotateByK([1, 2, 3, 4], 2));

// 11. Check if string is palindrome
let isPalindrome = str => str === str.split('').reverse().join('');
console.log("11. Palindrome:", isPalindrome("racecar"));

// 12. Count number of vowels in a string
let countVowels = str => (str.match(/[aeiou]/gi) || []).length;
console.log("12. Vowel Count:", countVowels("Hello World"));

// 13. Replace all spaces with '-'
let replaced = "I am learning JS".replace(/ /g, "-");
console.log("13. Hyphenated:", replaced);

// 14. Capitalize first letter of each word
let titleCase = str => str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log("14. Title Case:", titleCase("hello world js"));

// 15. Reverse a string
let reversedStr = str => str.split('').reverse().join('');
console.log("15. Reversed String:", reversedStr("hello"));

// 16. Check if two strings are anagrams
let isAnagram = (a, b) => a.split('').sort().join('') === b.split('').sort().join('');
console.log("16. Anagram:", isAnagram("listen", "silent"));

// 17. Frequency of characters in string
let charFreq = str => str.split('').reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});
console.log("17. Char Frequency:", charFreq("hello"));

// 18. Count item frequency (object)
console.log("18. Already covered in #4");

// 19. Highest marks among students
let students = [
  { name: "Ayan", marks: 78 },
  { name: "Riya", marks: 88 },
  { name: "Kabir", marks: 95 }
];
let topStudent = students.reduce((top, curr) => curr.marks > top.marks ? curr : top);
console.log("19. Topper:", topStudent);

// 20. Group words by length
let words = ["apple", "hi", "sun", "code", "yes"];
let groupByLength = words.reduce((acc, word) => {
  let len = word.length;
  acc[len] = acc[len] || [];
  acc[len].push(word);
  return acc;
}, {});
console.log("20. Group by Length:", groupByLength);

// 21. Flatten nested array
let nested = [1, [2, [3, 4]], 5];
let flat = nested.flat(2);
console.log("21. Flattened:", flat);

// 22. Group array of objects by key
let data = [
  { dept: "IT", name: "Ayan" },
  { dept: "HR", name: "Riya" },
  { dept: "IT", name: "Kabir" }
];
let grouped = data.reduce((acc, item) => {
  acc[item.dept] = acc[item.dept] || [];
  acc[item.dept].push(item.name);
  return acc;
}, {});
console.log("22. Grouped by dept:", grouped);
