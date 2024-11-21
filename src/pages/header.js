import React, { useState } from "react";
import "./header.css";
import { toast } from "react-toastify";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const userRole = localStorage.getItem("userRole");
  // const hasLoggedOut = localStorage.getItem('hasLoggedOut');
  // const [windowSize,setWindowSize] = useState(window.innerWidth)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.setItem("hasLoggedOut", "LoggedOut");
    setIsLoggedIn(false);
    toast.success("You have successfully logged out");
    window.location.href = "/";
  };

  // useEffect(()=>{
  //   const handleWindowResize=()=>{
  //     setWindowSize(window.innerWidth)
  //     if(windowSize<=768){
  //       setMobileMenuOpen(true)
  //     }else{
  //       setMobileMenuOpen(false)
  //     }
  //   }

  //   window.addEventListener("resize",handleWindowResize)
  //   console.log(windowSize);
  // },[windowSize])

  return (
    <header>
      <nav className={`navbar`}>
        <div className='logo'>
          <a href='/'>Merry Meal</a>
        </div>
        <div className='toggleContainer'>
          <div onClick={toggleMobileMenu} className='menu-toggle'>
            <div className={`bar ${isMobileMenuOpen ? "active" : ""}`}></div>
            <div className={`bar ${isMobileMenuOpen ? "active" : ""}`}></div>
            <div className={`bar ${isMobileMenuOpen ? "active" : ""}`}></div>
          </div>
        </div>
        <div className='nav-links-mobile-wrapper'>
          <ul
            className={`nav-links ${
              isMobileMenuOpen ? "nav-links-mobile" : ""
            }`}
          >
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
            <li>
              <a href='/donate'>Donate</a>
            </li>
            <li>
              <a href='/terms'>T&C</a>
            </li>
            {isLoggedIn ? (
              userRole === "ADMIN" ? (
                <>
                  <li>
                    <a href='/adminMeal'>Meals Management</a>
                  </li>
                  <li>
                    <a href='/adminUser'>User Management</a>
                  </li>
                  <li>
                    <a href='/adminProfile'>Profile</a>
                  </li>

                  <li>
                    <a href='/logout' className='logout' onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : userRole === "MEMBER" ? (
                <>
                  <li>
                    <a href='/menu'>Menu</a>
                  </li>
                  <li>
                    <a href='/order'>Order</a>
                  </li>
                  <li>
                    <a href='/memberProfile'>Profile</a>
                  </li>
                  <li>
                    <a href='/logout' className='logout' onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : userRole === "PARTNER" ? (
                <>
                  <li>
                    <a href='/mealUpload'>Upload Meal</a>
                  </li>
                  <li>
                    <a href='/partnerProfile'>Profile</a>
                  </li>
                  <li>
                    <a href='/logout' className='logout' onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : userRole === "VOLUNTEER" ? (
                <>
                  <li>
                    <a href='/careGiver'>Give Care</a>
                  </li>
                  <li>
                    <a href='/getOrder'>Take Order</a>
                  </li>
                  <li>
                    <a href='/volunteerProfile'>Profile</a>
                  </li>
                  <li>
                    <a href='/logout' className='logout' onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <a href='/login'>Login</a>
                </li>
              )
            ) : (
              <li>
                <a href='/login'>Login</a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
