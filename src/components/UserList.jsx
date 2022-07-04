import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserList({ currentUserId }) {

    const [details, setDetails] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios(`https://jsonplaceholder.typicode.com/users/${currentUserId}`)
        .then((res) => setDetails(res.data))
        .finally(setLoading(false))
    }, [currentUserId])

  return (

    <div>

        <h2>DETAILS</h2>
        <hr className='hr' />

        {loading && <div>Loading...</div>}

        {
        !loading && 
            <pre>{JSON.stringify(details,null,2)}</pre>
        }

    </div>
  )
}
export default UserList