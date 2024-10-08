import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function EditUser() {
    const { id } = useParams()
    const [employees, setEmployees] = useState({})

    const [user, setUser] = useState(
        {
            "name": '',
            "email": ""
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployees(({ ...employees, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        fetch(`http://localhost:3000/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(employees),
        }).then(
            Swal.fire({
                title: `${user.name} Edited successfully`,
                text: "Your file has been deleted.",
                icon: "success"
            })
        )
    }


    useEffect(() => {
        fetchApiData()
    }, [])


    const fetchApiData = () => {
        fetch(`http://localhost:3000/users/${id}`)
            .then(response => response.json())
            .then(data => setEmployees(data))
    }
    return (
        <div>
            <h1>Add new Employee</h1>

            <form>
                <input type="hidden" name="id" value={id} />

                <label htmlFor="name">Enter Name</label> <br />
                <input type="text" name="name" id="name" onChange={(e) => handleChange(e)} value={employees.name} /> <br /> <br />
                <label htmlFor="name">Enter Email</label> <br />
                <input type="text" name="email" id="email" onChange={(e) => handleChange(e)} value={employees.email} /> <br /><br />

                <button type="submit" onClick={handleSubmit}>Edit Employee</button>
            </form>
        </div>
    )
}

export default EditUser