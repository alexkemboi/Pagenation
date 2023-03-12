// Generate mock data
const contacts = [];
for (let i = 1; i <= 100; i++) {
  contacts.push({
    id: i,
    name: `Contact ${i}`,
    email: `contact${i}@example.com`,
    phone: `555-123-${i.toString().padStart(2, '0')}`
  });
}

// Display the data in a table with pagination
const table = document.querySelector('#contact-list tbody');
const pagination = document.querySelector('#pagination');
const rowsPerPage = 10;
let currentPage = 1;
let totalPages = Math.ceil(contacts.length / rowsPerPage);

function displayContacts() {
  table.innerHTML = '';
  for (let i = (currentPage - 1) * rowsPerPage; i < currentPage * rowsPerPage && i < contacts.length; i++) {
    const contact = contacts[i];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${contact.name}</td>
      <td>${contact.email}</td>
      <td>${contact.phone}</td>
    `;
    table.appendChild(row);
  }
}

function updatePagination() {
  pagination.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    if (i === currentPage) {
      button.disabled = true;
    }
    button.addEventListener('click', () => {
      currentPage = i;
      displayContacts();
      updatePagination();
    });
    pagination.appendChild(button);
  }
}

displayContacts();
updatePagination();
