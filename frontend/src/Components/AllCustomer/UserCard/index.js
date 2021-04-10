import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../Loader'
import Img from '../../Images/user.jpg'

const Usercard = () => {
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
      user.map((data)=>{
		  var url_one = '/moneytransfer/'+data._id
		  var url_two = '/mytransaction/'+data._id
        return (
          <li key={data._id}>
        <div className='card-box'>
          <div id='one'>
            <img className='user-pic' src={Img} alt="user-pic"/>
          </div>
          <div id='two'>
            <div id='three'>Name: {data.name}</div>
            <div id='four'>Email: {data.email}</div>
          </div>
          <div id='five'>Amount: {data.amount}</div>
          <div id='six'>
            <div id='seven'>
              <Link to={url_one}>
              <button id='tran-btn' className='mybtn'>
                Transfer
              </button></Link>
            </div>
            <div id='eight'>
            <Link to={url_two}>
              <button id='view-btn' className='mybtn'>
                View Transaction
              </button></Link>
            </div>
          </div>
        </div>
      </li>
        )
      })
    }
    </>
  )
}

export default Usercard
