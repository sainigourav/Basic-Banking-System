import React from 'react'
import UserDetail from './UserDetail'
import UserHeader from './UserHeader'
import './style.css'

const AllTransaction = () => {
    return (
        <section id="all-trans">
            <span>All Transaction </span>
            <UserHeader/>
            <ol>
               <UserDetail/>
            </ol>
</section>
    )
}

export default AllTransaction
