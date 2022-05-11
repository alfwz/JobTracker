import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import NavLinks from './NavLinks'
import { useAppContext } from '../context/appContext'
import Logo from '../components/Logo'

const BigSidebar = () => {
  const {showSidebar} =useAppContext()
  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className='content'>
          <header>
            <Logo></Logo>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar