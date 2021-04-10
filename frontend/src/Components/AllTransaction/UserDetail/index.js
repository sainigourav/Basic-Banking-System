import React, {useState, useEffect} from 'react'
import Loader from '../../Loader'

const UserDetail = () => {
	let [loading, setLoading] = useState(true)
	let [user, setUser] = useState([])
	
	useEffect(()=>{
    fetch("http://localhost:8000/alltransaction").then((response)=>{
      return response.json()
    }).then((data)=>{
      setLoading(false)
      setUser(data)
    })
  },[])
	
    return (
	<>
	{
		loading ? <Loader/> :
      user.map((data)=>{
		  return(
			<li key={data._id} > 
            <div id="user-grid">
                <div id="detail-one">{data.name}</div>
                <div id="detail-two">{data.email}</div>
                <div id="detail-three">{data.tranAmount}</div>
                <div id="detail-four">{data.date}</div>
                <div id="detail-five">{data.time}</div>
            </div>
        </li>
		  )
	  })
	}
	</>
    )
}

export default UserDetail
