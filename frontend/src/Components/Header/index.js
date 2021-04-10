import React from 'react'
import HeaderLink from './HeaderLink'

const Header = () => {
  return (
    <>
      <nav className='navbar-expand-lg navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <span className='navbar-brand'>
            Bank System
          </span>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <HeaderLink />
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
