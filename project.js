const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

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

  // Create delete button element
  const deleteButton = document.createElement('button');

  // Add classes to delete button
  deleteButton.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteButton.appendChild(document.createTextNode('X'));

  // Append to list
  li.appendChild(deleteButton);
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter items
function filterItems(e) {
  // Convert filter text to lowercase
  const text = e.target.value.toLowerCase();
  const items = itemList.getElementsByTagName('li');

  // Convert to array
  Array.from(items).forEach(item => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
