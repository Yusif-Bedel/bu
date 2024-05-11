import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../layout/admin/Header/Header'
import Footer from '../../layout/admin/Footer/Footer'


const AdminRoot = () => {
  return (
    <React.Fragment>
    <Header/>
    <Outlet/>
    <Footer/>
  </React.Fragment>
  )
}

export default AdminRoot;