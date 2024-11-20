import React from 'react'
import NavBar from './components/NavBar'
import ExpandableNav from './components/Expandable'
import NavBottom from './components/NavBottom'
import FooterPage from './components/Footer'
const Layout = ({ children }) => {

    return (<>
        <NavBar />
        {children}
        <ExpandableNav />
        <NavBottom />
        <FooterPage />
    </>)
}

export default Layout