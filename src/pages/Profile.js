import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'

function Profile() {
    let navigate = useNavigate()
    const handleNavigation=()=>{
        navigate('/about')
    }
    const {username} = useParams()
  return (
      
    <div>
        <h2>Profile</h2>
        {username && <h3>Hi {username}</h3>}
        <button onClick={handleNavigation} >Go to About Page</button>
    </div>

  )
}

export default Profile