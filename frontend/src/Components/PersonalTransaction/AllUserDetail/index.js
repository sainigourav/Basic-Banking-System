import React, {useState, useEffect} from 'react'
import Loader from '../../Loader'

const AllUserDetail = (props) => {
	let [loading, setLoading] = useState(true)
	let [user, setUser] = useState([])
	
	
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
      user.map((data,index)=>{
		  if(data._id === props.id){
			  if(data.mytransaction !== undefined){
			 return (
			  data.mytransaction.map((value,indx)=>{
			return( <li key={indx}> 
            <div id="user-grid">
                <div id="detail-one">{value.name}</div>
                <div id="detail-two">{value.email}</div>
                <div id="detail-three">{value.tranAmount}</div>
                <div id="detail-four">{value.date}</div>
                <div id="detail-five">{value.time}</div>
            </div>
        </li>)
			  }
			 )
			  )}
			else{
				return <h1>No Transaction Found!!</h1>
			}
		  }
	  })
	}
	</>
    )
}

export default AllUserDetail
