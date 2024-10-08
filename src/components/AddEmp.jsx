import React, { useState } from 'react'
import Swal from 'sweetalert2';

function AddEmp() {
    const [user, setUser] = useState(
        {
            "name": '',
            "email": ""
        }
    )

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUser(({ ...user, [name]: value }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        fetch("http://localhost:3000/users",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                },
            body: JSON.stringify(user),
        }).then(
            Swal.fire({
                title: `${user.name} add successfully`,
                text: "Your file has been deleted.",
                icon: "success"
              })
        )
    }
    return (
        <div>
            <h1>Add new Employee</h1>

            <form>
                <label htmlFor="name">Enter Name</label> <br />
                <input type="text" name="name" id="name" onChange={(e) => handleChange(e)} /> <br /> <br />
                <label htmlFor="name">Enter Email</label> <br />
                <input type="text" name="email" id="email" onChange={(e) => handleChange(e)} /> <br /><br />

                <button type="submit" onClick={handleSubmit}>Add Employee</button>
            </form>
        </div>
    )
}

export default AddEmp