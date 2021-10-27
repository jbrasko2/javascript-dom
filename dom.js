// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');

// header.style.borderBottom = '3px solid black';

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // htmlCollection requires for loop, not forEach or map.
// // htmlCollection is not the same as an array
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// querySelector

const header = document.querySelector('#main-header');
header.style.borderBottom = '4px solid #ccc';

const input = document.querySelector('input'); // grabs first input by default
input.value = 'Hello World';

const submit = document.querySelector('input[type="submit"]');
submit.value = 'Send';

const item = document.querySelector('.list-group-item');
item.style.color = 'red';

const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

const secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
