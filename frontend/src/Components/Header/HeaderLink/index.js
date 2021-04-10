import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const HeaderLink = () => {
	
	let [oneClass, setOneClass] = useState("nav-link")
	let OneClick = ()=>{
		setOneClass("nav-link active-page")
		setTwoClass("nav-link")
		setThreeClass("nav-link")
	}
	
	let [twoClass, setTwoClass] = useState("nav-link")
	let TwoClick = ()=>{
		setOneClass("nav-link")
		setTwoClass("nav-link active-page")
		setThreeClass("nav-link")
	}
	
	let [threeClass, setThreeClass] = useState("nav-link")
	let ThreeClick = ()=>{
		setOneClass("nav-link")
		setTwoClass("nav-link")
		setThreeClass("nav-link active-page")
	}
	useEffect(()=>{
		setOneClass("nav-link active-page")
	},[])
  return (
    <>
      <li className='nav-item'>
<Link className={oneClass} onClick={OneClick} to='/'>Home</Link>
      </li>
      <li className='nav-item'>
      <Link className={twoClass}  onClick={TwoClick} to='/allcustomer'>All Customer</Link>
      </li>
      <li className='nav-item'>
      <Link className={threeClass}   onClick={ThreeClick} to='/alltransaction'>All Transaction</Link>
      </li>
    </>
  )
}

export default HeaderLink
