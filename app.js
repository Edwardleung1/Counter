// initial count
let count = 0;

// variables
const value = document.querySelector('#value');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const decrease = document.querySelector('.decrease');

// add event listener (increase btn)
increase.addEventListener('click', function(e) {
    // return the classlist
    const actions = e.currentTarget.classList;
    if(actions.contains('increase')) {
      // add 1 to count
      count++;
    } 
    // update value to count
    value.textContent = count;
});

// add event listener (decrease btn)
decrease.addEventListener('click', function(e) {
  // return the classlist
  const actions = e.currentTarget.classList;
  if(actions.contains('decrease')) {
    // subtract 1 to count
    count--;
  } 
  // update value to count
  value.textContent = count;
});

// add event listener (reset btn)
reset.addEventListener('click', function(e) {
  // return the classlist
  const actions = e.currentTarget.classList;
  if(actions.contains('reset')) {
    // reset count
    count = 0;
  } 
  // update value to count
  value.textContent = count;
});