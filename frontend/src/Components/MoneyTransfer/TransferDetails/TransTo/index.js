import React, {useState, useEffect} from 'react'
import Loader from '../../../Loader'

const TransTo = (props) => {	

	let [user, setUser] = useState([])
	  let [loading, setLoading] = useState(true)
  useEffect(()=>{
    fetch("http://localhost:8000/allcustomer").then((response)=>{
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
		  if(props.ben_id == data._id)
		  {
			  return(
				<ul key={data._id} id="ul-two">
					<li>Name: {data.name}</li>
					<li>Email: {data.email}</li>
				</ul>
			  )
		  }
	  })
	}
    </> 
    )
}

export default TransTo
