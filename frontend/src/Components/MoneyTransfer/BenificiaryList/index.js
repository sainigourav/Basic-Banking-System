import React, {useState, useEffect} from 'react'
import Loader from '../../Loader'

const BenificiaryList = (props) => {
  let IdSelector = (event)=>{
	   props.beniId(event.target.value)
}
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
        <select onChange={IdSelector} disabled={props.disabled}>
            <option value="" disabled selected hidden >Select Benificiary</option>
		{
		user.map((data)=>{
			if(data._id !== props.id)
			return(
				<option value={data._id} key = {data._id}>{data.name}</option>
			) 
		})}
        </select>
		</>
    )
}

export default BenificiaryList
