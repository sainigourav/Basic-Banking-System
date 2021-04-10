import React, {useState, useEffect} from 'react'
import BenificiaryList from './BenificiaryList'
import From from './From'
import TransferDetails from './TransferDetails'
import './style.css'
import {useAlert} from 'react-alert'

const MoneyTransfer = (props) => {
	
	let [hide, setHide] = useState(false)
	let [block, setBlock] = useState("notShow")
	let [butn, setButn] = useState("hide")
	let [error, setError] = useState("notShow")
	let [eamount, setEamount] = useState("")
	let [beniId, setBeniId] = useState("")
	let [user, setUser] = useState([])
	let [totalamount, setTotalamount] = useState("")
  
  useEffect(()=>{
    fetch("http://localhost:8000/allcustomer").then((response)=>{
      return response.json()
    }).then((data)=>{
      setUser(data)
	  })
  },[])

  
  let ConfirmBtn = ()=>{
    if(parseInt(eamount) > 0 && beniId !== undefined ){
			  setHide(true)
			  setBlock("two-person")
			  setButn("butn btn-success")
			  setError("notShow")
			  
			  user.map((data)=>{
		  if(data._id === props.id){ 
			setTotalamount(data.amount)
		  }
	  })
			  
	}
      else
	  {
		  setError("show")
	  }
	  
  }
	
	let EAmount = (event)=>{
    
      setEamount(event.target.value)
  }
  let BenId = (value)=>{
    setBeniId(value)
  }  
  let alert = useAlert()
  let MoneyProcess = ()=>{
	  let name,email
    if(parseInt(eamount) <= parseInt(totalamount)){
		alert.success("Successfully Transfered")
		var today = new Date()
		var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds()
		var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
		user.map((data)=>{
		  if(data._id === beniId){
			  name = data.name
			  email = data.email
		  }
	  })
		fetch("http://localhost:8000/mytransaction",{
			method: 'POST',
			body: JSON.stringify({
				id : props.id,
				name : name,
				email : email,
				date : date,
				time : time,
				tranAmount : eamount
				
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		}).then((response)=>
      response.json())
	  fetch("http://localhost:8000/alltransaction",{
			method: 'POST',
			body: JSON.stringify({
				name : name,
				email : email,
				date : date,
				time : time,
				tranAmount : eamount
				
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		}).then((response)=>
      response.json())
		
	}
	else{
		alert.error("Failed! Transfer amount should be less than total amount. Refresh to try again.")
	}
  }
  
    return (
        <>
            <section id="trans-section">
            <h1>Money Transfer</h1>
            <div>
                <h4>From:</h4>
                <From id = {props.id} />
                <h4>To:</h4>
				<ul id={error} className="err">
    <li>All field are mandatory</li>
    <li>Amount should be greater than 0</li>
	<li>Amount should be less than Total Amount</li>
</ul>
                <div>
                    <BenificiaryList beniId={BenId} id = {props.id} disabled={hide}  />
                <br />
                <label>Transfer Amount:</label><br />
                <input value={eamount} onChange={EAmount} type="number" placeholder="Amount" autoComplete="off" disabled={hide} required />
                <button onClick={ConfirmBtn} className="butn btn-primary">Confirm</button>
                </div>
                <div id={block} >
                    <h3>Transfer Details</h3>
                    <TransferDetails ben_id = {beniId} transamount={eamount} id = {props.id} />           
					
                </div>
					<button onClick={MoneyProcess} className={butn}>Click to Proceed</button>
            </div>
                   
</section>
        </>
    )
}

export default MoneyTransfer
