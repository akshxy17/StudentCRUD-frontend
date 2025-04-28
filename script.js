// const apiUrl = "http://localhost:8080/students";
// let currentStudentId = null;

// // Load Students on page load
// document.addEventListener('DOMContentLoaded', loadStudents);

// // Add Student
// document.getElementById('studentForm').addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();

//     if (!name || !email) {
//         Swal.fire('Error', 'Please fill out all fields.', 'error');
//         return;
//     }

//     const studentData = { name, email };

//     if (currentStudentId) {
//         // Update existing student
//         try {
//             const response = await fetch(`${apiUrl}/update/${currentStudentId}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(studentData)
//             });

//             if (response.ok) {
//                 Swal.fire('Success', 'Student updated successfully!', 'success');
//                 document.getElementById('studentForm').reset();
//                 loadStudents();
//                 currentStudentId = null;  // Reset after update
//             } else {
//                 Swal.fire('Error', 'Failed to update student.', 'error');
//             }
//         } catch (error) {
//             Swal.fire('Error', 'Something went wrong.', 'error');
//         }
//     } else {
//         // Add new student
//         try {
//             const response = await fetch(`${apiUrl}/add`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(studentData)
//             });

//             if (response.ok) {
//                 Swal.fire('Success', 'Student added successfully!', 'success');
//                 document.getElementById('studentForm').reset();
//                 loadStudents();
//             } else {
//                 Swal.fire('Error', 'Failed to add student.', 'error');
//             }
//         } catch (error) {
//             Swal.fire('Error', 'Something went wrong.', 'error');
//         }
//     }
// });

// // Load all students
// async function loadStudents() {
//     try {
//         const response = await fetch(apiUrl);
//         const students = await response.json();
//         const tableBody = document.getElementById('studentTable');
//         tableBody.innerHTML = "";

//         students.forEach(student => {
//             const row = `
//                 <tr>
//                     <td>${student.id}</td>
//                     <td>${student.name}</td>
//                     <td>${student.email}</td>
//                     <td>
//                         <button class="btn btn-warning btn-sm" onclick="editStudent(${student.id})">Edit</button>
//                         <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">Delete</button>
//                     </td>
//                 </tr>
//             `;
//             tableBody.innerHTML += row;
//         });
//     } catch (error) {
//         console.error("Error loading students:", error);
//     }
// }

// // Edit Student
// function editStudent(id) {
//     fetch(`${apiUrl}/${id}`)
//         .then(response => response.json())
//         .then(student => {
//             // Pre-fill the form with student data
//             document.getElementById('name').value = student.name;
//             document.getElementById('email').value = student.email;
//             currentStudentId = student.id;  // Store current student ID for update
//         })
//         .catch(error => console.error("Error fetching student:", error));
// }

// // Delete Student
// async function deleteStudent(id) {
//     const confirm = await Swal.fire({
//         title: 'Are you sure?',
//         text: "This will permanently delete the student.",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#d33',
//         cancelButtonColor: '#3085d6',
//         confirmButtonText: 'Yes, delete it!'
//     });

//     if (confirm.isConfirmed) {
//         try {
//             const response = await fetch(`${apiUrl}/delete/${id}`, {
//                 method: "DELETE",
//             });

//             if (response.ok) {
//                 Swal.fire('Deleted!', 'Student has been deleted.', 'success');
//                 loadStudents();
//             } else {
//                 Swal.fire('Error', 'Failed to delete student.', 'error');
//             }
//         } catch (error) {
//             Swal.fire('Error', 'Something went wrong.', 'error');
//         }
//     }
// }


const apiUrl = "http://localhost:8080/students";
let currentStudentId = null;

// Load Students on page load
document.addEventListener('DOMContentLoaded', loadStudents);

// Add Student
document.getElementById('studentForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
        Swal.fire('Error', 'Please fill out all fields.', 'error');
        return;
    }

    const studentData = { name, email };

    if (currentStudentId) {
        // Update existing student
        try {
            const response = await fetch(`${apiUrl}/update/${currentStudentId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(studentData)
            });

            if (response.ok) {
                Swal.fire('Success', 'Student updated successfully!', 'success');
                document.getElementById('studentForm').reset();
                loadStudents();
                currentStudentId = null;  // Reset after update
            } else {
                Swal.fire('Error', 'Failed to update student.', 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'Something went wrong.', 'error');
        }
    } else {
        // Add new student
        try {
            const response = await fetch(`${apiUrl}/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(studentData)
            });

            if (response.ok) {
                Swal.fire('Success', 'Student added successfully!', 'success');
                document.getElementById('studentForm').reset();
                loadStudents();
            } else {
                Swal.fire('Error', 'Failed to add student.', 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'Something went wrong.', 'error');
        }
    }
});

// Load all students
async function loadStudents() {
    try {
        const response = await fetch(apiUrl);
        const students = await response.json();
        const tableBody = document.getElementById('studentTable');
        tableBody.innerHTML = "";

        let serialNumber = 1; // Start serial number from 1

        students.forEach(student => {
            const row = `
                <tr>
                    <td>${serialNumber++}</td> <!-- Serial Number instead of ID -->
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editStudent(${student.id})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">Delete</button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error("Error loading students:", error);
    }
}

// Edit Student
function editStudent(id) {
    fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .then(student => {
            // Pre-fill the form with student data
            document.getElementById('name').value = student.name;
            document.getElementById('email').value = student.email;
            currentStudentId = student.id;  // Store current student ID for update
        })
        .catch(error => console.error("Error fetching student:", error));
}

// Delete Student
async function deleteStudent(id) {
    const confirm = await Swal.fire({
        title: 'Are you sure?',
        text: "This will permanently delete the student.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    });

    if (confirm.isConfirmed) {
        try {
            const response = await fetch(`${apiUrl}/delete/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                Swal.fire('Deleted!', 'Student has been deleted.', 'success');
                loadStudents();
            } else {
                Swal.fire('Error', 'Failed to delete student.', 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'Something went wrong.', 'error');
        }
    }
}
