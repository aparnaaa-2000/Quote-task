import React from 'react'
import './navbar.css'

export default function  Navbar() {
  return (
    <nav class="navbar bg-body-primary" >
    <div class="container-fluid">
      <a class="navbar-brand" href='/'  id='home' >HOME</a>
      <a class="navbar-brand" href='/bookmark'  id='book'>BOOKMARKS</a>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </nav>
  )
}
