import React from 'react'
import AllUserDetail from './AllUserDetail'
import DetailHeader from './DetailHeader'
import './style.css'

const PersonalTransaction = (props) => {
    return (
        <section id="all-trans">
            <span>My Transaction </span>
            <DetailHeader/>
            <ol>
               <AllUserDetail id={props.id} />
            </ol>
</section>

    )
}

export default PersonalTransaction
