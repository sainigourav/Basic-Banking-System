import React, {useState, useEffect} from 'react'
import Loader from '../../../Loader'

const TransFrom = (props) => {
	
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
		  if(props.id == data._id)
		  {
			  return(
				<ul key={data._id} id="ul-one">
					<li>From: {data.name}</li>
					<li>Email: {data.email}</li>
					<li>Transfer Amount: {props.transamount}</li>
				</ul>
			  )
		  }
	  })
	}
    </> 
    )
}

export default TransFrom
