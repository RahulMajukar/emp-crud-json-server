import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function EmployeeList() {
    const [employees, setEmployees] = React.useState([])

    useEffect(() => {
        fetchApiData()
    }, [])


    const fetchApiData = () => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setEmployees(data))
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" })
            .then(fetchApiData)
    }

    const showDeleteAlert = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div>
            <div className="heading">
                <h1>Employee List</h1>

                <Link to="/add">
                    <button>Add Employee</button>
                </Link>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Employee Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(data =>
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <th>
                                    <Link to={`/edit/${data.id}`}>
                                        <button>Edit</button>
                                    </Link>

                                    <button onClick={() => showDeleteAlert(data.id)}>Delete</button>
                                </th>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList