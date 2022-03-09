const quicksort = require('./quicksort');
const mergesort = require('./mergesort');
const insertion = require('./insertion');
const selection = require('./selection');
const bubble = require('./bubble');
const performance = require('./performance');
const generateRandoms = require('./generateRandoms');

const numbers = generateRandoms(100000, 0, 1000000);

performance("Quick Sort", quicksort, [numbers, 0, numbers.length-1]);
performance("Merge Sort", mergesort, [numbers, 0, numbers.length-1]);
performance("Insertion Sort", insertion, [numbers]);
performance("Selection Sort", selection, [numbers]);
performance("Bubble Sort", bubble, [numbers]);
