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
// const header = document.querySelector('#main-header');
// header.style.borderBottom = '4px solid #ccc';

// const input = document.querySelector('input'); // grabs first input by default
// input.value = 'Hello World';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// querySelectorAll
// const titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Howdy';

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// Create div, insert into DOM
// const newDiv = document.createElement('div');

// newDiv.className = 'hello';

// newDiv.setAttribute('title', 'Hello Div');

// const newDivText = document.createTextNode('Hello World');

// newDiv.appendChild(newDivText);

// const container = document.querySelector('header #container');
// const h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);

// const button = document
//   .getElementById('button')
//   .addEventListener('click', e => buttonClick(e));

// const buttonClick = e => {
//   // document.getElementById('header-title').textContent = 'changed';
//   // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//   // console.log(e.target);
//   // console.log(e.target.id);
//   // console.log(e.target.className);
//   // const output = document.getElementById('output');
//   // output.innerHTML = '<h3>' + e.target.id + '</h3>';
//   // console.log(e.type);
//   // console.log(e.clientX);
//   // console.log(e.clientY);
//   // console.log(e.offsetX);
//   // console.log(e.offsetY);
// };

// const button = document.getElementById('button');
// const box = document.getElementById('box');

// button.addEventListener('dblclick', e => runEvent(e));
// button.addEventListener('mousedown', e => runEvent(e));
// button.addEventListener('mouseup', e => runEvent(e));

// function runEvent(e) {
//   console.log('EVENT TYPE: ' + e.type);

//   box.style.backgroundColor = 'rgb(' + e.offsetX + ',' + e.offsetY + ', 40)';
// }

// box.addEventListener('mousemove', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent); // fires when hovering over content
// box.addEventListener('mouseout', runEvent);

const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelectorAll('form');

itemInput.addEventListener('keydown', runEvent);

function runEvent(e) {
  document.getElementById('output').innerHTML =
    '<h3>' + e.target.value + '</h3>';
}
