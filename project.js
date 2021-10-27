const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  const newItem = document.getElementById('item').value;

  // Create new li element
  const li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  itemList.appendChild(li);
}
