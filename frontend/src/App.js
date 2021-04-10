import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import AllCustomer from './Components/AllCustomer'
import Home from './Components/Home'
import Footer from './Components/Footer'
import './style.css'
import MoneyTransfer from './Components/MoneyTransfer'
import AllTransaction from './Components/AllTransaction'
import PersonalTransaction from './Components/PersonalTransaction'
import {Provider, transitions, positions} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

function App(props) {
	
	const options = {
		position: positions.TOP_CENTRE,
		timeout: 5000,
		offset: '300px',
		transition: transitions.SCALE
	} 
	
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/allcustomer' component={AllCustomer} />
        <Route exact path='/alltransaction' component={AllTransaction} />
		 <Route exact path='/mytransaction/:id' render={(props)=> <PersonalTransaction id={props.match.params.id} />}/>
		  <Provider template={AlertTemplate} {...options}>
		<Route exact path='/moneytransfer/:id' render={(props)=> <MoneyTransfer id={props.match.params.id} />}/>
			</Provider>

      </Switch>
      <Footer/>
    </>
  )
}

export default App
