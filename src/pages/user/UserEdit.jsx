import React from 'react'
import Header from '../../components/Header'
import NavbarEdit from '../../components/user/NavbarEdit'
import { Route, Routes } from "react-router-dom";
import Accont from './Accont';
import Security from './Security';

function UserEdit() {
  return (
    <div>
        <div>
        <Header
          title={"Create a new user"}
          address1={"Dashbourd"}
          address2={"User"}
          address3={"New User"}
        />
      </div>
      <div>
        <NavbarEdit />
      </div>
      <div className="mt-9">
        <Routes>
          <Route path="/" element={<Accont />} />
          <Route path="/edit" element={<Accont />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </div>
    </div>
  )
}

export default UserEdit