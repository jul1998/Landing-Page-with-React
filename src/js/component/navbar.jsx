import React from "react";


export default function Navbar(){
    return(
        <>
  <nav id="navbar-example2" class="navbar fixed-top bg-dark px-4 mb-3" >
    <a class="navbar-brand" href="#">Start Boostrap</a>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading1">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading2">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading2">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading2">Contact</a>
      </li>

    </ul>
</nav>
<div id="main_content" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
  <h4 className="main_title" id="scrollspyHeading1">A warm welcome</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit scelerisque.adipiscing elit. Morbi hendrerit scelerisque. rbi hendrerit scelerisque.adipiscing elit. Morbi hendrerit sceleris </p>
  <button id="main_button" type="button" class="btn btn-primary">Call to action!</button>

</div>


        </>
    )
} 