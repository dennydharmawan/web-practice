let inputString =
  'lg:hover:text-purple-heart-700 block border-b border-slate-100 py-2 pl-3 pr-4 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white';

// Split the input string into individual words
let words = inputString.split(/\s+/);

// Filter out words containing "dark"
let filteredWords = words.filter((word) => !/\bdark\b/.test(word));

// Join the remaining words back into a string
let result = filteredWords.join(' ');

console.log(result);
