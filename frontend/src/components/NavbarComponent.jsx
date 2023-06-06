import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ContextRootState } from '../context/RootStoreContext'

const NavbarComponent = () => {
    const context = useContext(ContextRootState)
    console.log(context.testValue)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" href="#">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" href="#">{context.testValue}</Link>
          <Link className="nav-link" href="#">Features</Link>
          <Link className="nav-link" href="#">Pricing</Link>
          <Link className="nav-link disabled">{context.testValue}</Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavbarComponent
