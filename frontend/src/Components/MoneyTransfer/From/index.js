import React, {useState, useEffect} from 'react'

const From = (props) => {
	var id = props.id
  let [user, setUser] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/allcustomer").then((response)=>{
      return response.json()
    }).then((data)=>{
      setUser(data)
    })
  },[])
   
    return (
	<>
	{
		user.map((data)=>{
			if(id == data._id){
				return (
				
				<div key={data._id} id="from">
				<ul>
					<li><h5>Name:</h5> {data.name}</li>
					<li><h5>Email:</h5> {data.email}</li>
					<li><h5>Total Amount:</h5> {data.amount}</li>
				</ul>
				</div>
				
				)
		}
		})
	}
	</>
    )
}

export default From
