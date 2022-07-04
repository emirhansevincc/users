import axios from 'axios'
import React, { useState,useEffect } from 'react'

function Users({ setcurrentUserId }) {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axios("https://jsonplaceholder.typicode.com/users")
        .then((res => setUsers(res.data)))
        .finally(setLoading(false))
    },[])
    // console.log(users)

  return (

    <div>
        <h2>USERS</h2>
        <hr  className='hr'/>
        {loading && <div>Loading...</div>}

        {
            users.map((item) => (
                <div 
                    key={item.id} 
                    className='items'
                    onClick={() => {setcurrentUserId(item.id)}}
                >{item.name}
                </div>
            ))
        }

    </div>

  )
}

export default Users