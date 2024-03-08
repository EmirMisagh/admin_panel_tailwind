import React from 'react'
import Header from '../../components/Header'
import NavbarEdit from '../../components/user/NavbarEdit'

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
    </div>
  )
}

export default UserEdit