// Sample user data
let users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active" },
    { id: 3, name: "Emily Johnson", email: "emily@example.com", status: "Inactive" },
    { id: 4, name: "Michael Brown", email: "michael@example.com", status: "Active" },
    { id: 5, name: "Sarah Davis", email: "sarah@example.com", status: "Inactive" },
    { id: 6, name: "David Wilson", email: "david@example.com", status: "Active" },
    { id: 7, name: "Laura Garcia", email: "laura@example.com", status: "Active" },
    { id: 8, name: "James Martinez", email: "james@example.com", status: "Inactive" },
    { id: 9, name: "Robert Rodriguez", email: "robert@example.com", status: "Active" },
    { id: 10, name: "Linda Lopez", email: "linda@example.com", status: "Inactive" },
    { id: 11, name: "Daniel Hernandez", email: "daniel@example.com", status: "Active" },
    { id: 12, name: "Jessica Young", email: "jessica@example.com", status: "Active" },
    { id: 13, name: "Thomas Allen", email: "thomas@example.com", status: "Inactive" },
    { id: 14, name: "Patricia King", email: "patricia@example.com", status: "Active" },
    { id: 15, name: "Charles Wright", email: "charles@example.com", status: "Active" },
    { id: 16, name: "Barbara Scott", email: "barbara@example.com", status: "Inactive" },
    { id: 17, name: "Steven Hill", email: "steven@example.com", status: "Active" },
    { id: 18, name: "Angela Green", email: "angela@example.com", status: "Active" },
    { id: 19, name: "Paul Adams", email: "paul@example.com", status: "Inactive" },
    { id: 20, name: "Mary Baker", email: "mary@example.com", status: "Active" }
];

// Function to render users in the table
function renderUsers(users) {
    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = ''; // Clear existing rows

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.status}</td>
            <td>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
}

// Function to show modal for adding a user
const addUserBtn = document.getElementById('addUserBtn');
const userModal = document.getElementById('userModal');
const closeModal = document.querySelector('.close');
const userForm = document.getElementById('userForm');

addUserBtn.addEventListener('click', () => {
    userModal.style.display = 'block';
    document.getElementById('modalTitle').innerText = 'Add User';
    userForm.reset();
});

// Close modal
closeModal.onclick = function() {
    userModal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === userModal) {
        userModal.style.display = "none";
    }
};

// Submit form to add/edit user
userForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('userId').value;
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const status = document.getElementById('userStatus').value;

    if (id) {
        // Edit existing user
        const userIndex = users.findIndex(user => user.id === parseInt(id));
        users[userIndex] = { id: parseInt(id), name, email, status };
    } else {
        // Add new user
        const newUser = {
            id: users.length + 1,
            name,
            email,
            status
        };
        users.push(newUser);
    }

    userModal.style.display = 'none';
    renderUsers(users);
});

// Function to show user details in modal for editing
function editUser(id) {
    const user = users.find(user => user.id === id);
    document.getElementById('userId').value = user.id;
    document.getElementById('userName').value = user.name;
    document.getElementById('userEmail').value = user.email;
    document.getElementById('userStatus').value = user.status;

    userModal.style.display = 'block';
    document.getElementById('modalTitle').innerText = 'Edit User';
}

// Function to delete user
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    renderUsers(users);
}

// Initial rendering of users
renderUsers(users);

// Chart.js setup
const ctx = document.getElementById('userGrowthChart').getContext('2d');
const userGrowthChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'User Growth',
            data: [3, 6, 9, 12, 15, 18, 21],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Second chart setup (unpaid loans)
const ctx2 = document.getElementById('unpaidLoansChart').getContext('2d');
const unpaidLoansChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Unpaid Loans',
            data: [5, 7, 4, 3, 8],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
