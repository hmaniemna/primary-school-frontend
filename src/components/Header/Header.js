import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import {nav} from "react-bootstrap"
const Header =()=>{
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-white" >
    <div class="container-fluid" >
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
        <a class="navbar-brand" href="/" className='bigTitle' class="navbar-nav mr-auto">
      المدرسة الإبتدائيّة
      <img src="https://cdn1.vectorstock.com/i/thumb-large/26/70/children-education-logo-happy-kids-education-vector-35392670.jpg" alt="" width="50" height="50" class="d-inline-block align-text-top"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" className="title">
<<<<<<< HEAD

=======
>>>>>>> 04a225d03b638b34ee940213a923e808503a051a
    <ul class="navbar-nav me-auto">
        <li class="nav-item active">
        <button type="button" class="btn btn-white"  ><a href="/Login/LoginAdmin" className='tinyTitle'> دخول الإداريين</a></button>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-white"  ><a href="/Login/LoginTeacher" className='tinyTitle'> دخول المعلمون</a></button>
        </li>
      </ul>
<<<<<<< HEAD

      

=======
<<<<<<< HEAD

      <button type="button" class="btn btn-light" ><a href="/Login/LoginAdmin"> دخول الإداريين</a></button>
      <button type="button" class="btn btn-light" ><a href="/Login/LoginTeacher"> دخول المعلمون</a></button> 

=======
>>>>>>> 290eba09050be8f8ca10825ee25b9df50eb2b8da
>>>>>>> 04a225d03b638b34ee940213a923e808503a051a
    </div>
  </div>
</nav>

  )
}
export default Header;
