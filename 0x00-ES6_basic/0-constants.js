// 0-constants.js

// Use 'const' for taskFirst as the value will not be reassigned
export function taskFirst() {
    const task = 'I prefer const when I can.'; // task will not change
    return task;
  }
  
  // Function to return the last part of the string
  export function getLast() {
    return ' is okay';
  }
  
  // Use 'let' for taskNext as the value will be modified later
  export function taskNext() {
    let combination = 'But sometimes let'; // combination will be updated
    combination += getLast(); // combination is reassigned with a new value
  
    return combination;
  }
  