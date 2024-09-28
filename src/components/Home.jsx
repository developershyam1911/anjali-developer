import React, { useState } from "react";
import feartured1 from "../../public/assets/images/featured/featured-1.jpg";
import { BsMenuApp } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";
const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="navbar-area">
        <div className="mobile-responsive-nav">
          <div className="container">
            <div className="mobile-responsive-menu mean-container">
              <div className="mean-bar">
                <a
                  href="#nav"
                  className="meanmenu-reveal meanclose"
                  style={{
                    right: "0px",
                    left: "auto",
                    textAlign: "center",
                    textIndent: "0px",
                    fontSize: "18px",
                  }}
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? "X" : <MdOutlineMenu size={25} />}
                </a>
                {isMenuOpen && (
                  <nav className="mean-nav">
                    <div className="others-options">
                      <form className="search-form">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                        />
                        <button type="submit" className="src-btn">
                          <i className="ri-search-line"></i>
                        </button>
                      </form>
                    </div>

                    <ul className="navbar-nav m-auto">
                      {/* <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle active">
                          Home
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Home One
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="index-2.html" className="nav-link active">
                              Home Two
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="index-3.html" className="nav-link">
                              Home Three
                            </a>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          style={{ fontSize: "18px" }}
                        >
                          +
                        </a>
                      </li> */}

                      {/* <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle">
                          Pages
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="about-us.html" className="nav-link">
                              About Us
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="my-account.html" className="nav-link">
                              My Account
                            </a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link dropdown-toggle">
                              Dashboard
                            </a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a href="dashboard.html" className="nav-link">
                                  Dashboard
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="my-profile.html" className="nav-link">
                                  My Profile
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="edit-profile.html"
                                  className="nav-link"
                                >
                                  Edit Profile
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="add-#" className="nav-link">
                                  Add Listing
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="message.html" className="nav-link">
                                  Message
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="agents-list.html" className="nav-link">
                                  Agents List
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="my-listings.html" className="nav-link">
                                  My Listings
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="booking.html" className="nav-link">
                                  Booking
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="reviews.html" className="nav-link">
                                  Reviews
                                </a>
                              </li>
                            </ul>
                            <a
                              className="mean-expand"
                              href="#"
                              style={{ fontSize: "18px" }}
                            >
                              +
                            </a>
                          </li>

                          <li className="nav-item">
                            <a href="pricing-plan.html" className="nav-link">
                              Pricing Plan
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="faq.html" className="nav-link">
                              FAQ
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="gallery.html" className="nav-link">
                              Gallery
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="privacy-policy.html" className="nav-link">
                              Privacy Policy
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="terms-conditions.html"
                              className="nav-link"
                            >
                              Terms And Conditions
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="coming-soon.html" className="nav-link">
                              Coming Soon
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="404.html" className="nav-link">
                              404 Page
                            </a>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          style={{ fontSize: "18px" }}
                        >
                          +
                        </a>
                      </li> */}

                      {/* <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle">
                          Listings
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Listing
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="listing-map.html" className="nav-link">
                              Listing Map
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Single Listing
                            </a>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          style={{ fontSize: "18px" }}
                        >
                          +
                        </a>
                      </li> */}
                      {/* 
                      <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle">
                          Agents
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Agents
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Single Agents
                            </a>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          style={{ fontSize: "18px" }}
                        >
                          +
                        </a>
                      </li> */}

                      {/* <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle">
                          Blog
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="blog.html" className="nav-link">
                              Blog
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="single-blog.html" className="nav-link">
                              Single Blog
                            </a>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          style={{ fontSize: "18px" }}
                        >
                          +
                        </a>
                      </li> */}

                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Buy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Rent
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Projects
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Agents
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Contact
                        </a>
                      </li>
                    </ul>

                    <div className="others-options style">
                      <ul>
                        <li>
                          <a href="#" className="wishlist">
                            <i className="ri-heart-line"></i>
                            <span>0</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="login">
                            <i className="ri-user-line"></i>
                            <span>Log In or Sign Up</span>
                          </a>
                        </li>
                        <li className="mean-last">
                          <a href="#" className="default-btn btn-radius">
                            Add Listing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                )}
              </div>
              <div className="logo">
                <a href="#">
                  <img
                    src="assets/images/logo.png"
                    className="main-logo"
                    alt="logo"
                  />
                  <img
                    src="assets/images/logo.png"
                    className="white-logo"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mobile-responsive-nav">
          <div className="container">
            <div className="mobile-responsive-menu mean-container">
              <div className="logo">
                <a href="#">
                  <img
                    src="assets/images/logo.png"
                    className="main-logo"
                    alt="logo"
                  />
                  <img
                    src="assets/images/white-logo.png"
                    className="white-logo"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div> */}

        <div className="desktop-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="#">
                <img
                  src="assets/images/logo.png"
                  className="main-logo"
                  alt="logo"
                  style={{ height: "70px", width: "70px" }}
                />
                <img
                  src="assets/images/logo.png"
                  className="white-logo"
                  alt="logo"
                />
              </a>

              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <div className="others-options">
                  <form className="search-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <button type="submit" className="src-btn">
                      <i className="ri-search-line"></i>
                    </button>
                  </form>
                </div>

                <ul className="navbar-nav m-auto">
                  {/* <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggle active">
                      Home
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link active">
                          Home One
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-2.html" className="nav-link">
                          Home Two
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-3.html" className="nav-link">
                          Home Three
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggle">
                      Pages
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="about-us.html" className="nav-link">
                          About Us
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="my-account.html" className="nav-link">
                          My Account
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle">
                          Dashboard
                        </a>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="dashboard.html" className="nav-link">
                              Dashboard
                            </a>
                          </li>

                          <li className="nav-item">
                            <a href="my-profile.html" className="nav-link">
                              My Profile
                            </a>
                          </li>

                          <li className="nav-item">
                            <a href="edit-profile.html" className="nav-link">
                              Edit Profile
                            </a>
                          </li>

                          <li className="nav-item">
                            <a href="add-#" className="nav-link">
                              Add Listing
                            </a>
                          </li>

                          <li className="nav-item">
                            <a href="message.html" className="nav-link">
                              Message
                            </a>
                          </li>

                          <li className="nav-item">
                            <a href="agents-list.html" className="nav-link">
                              Agents List
                            </a>
                          </li>

                          <li className="nav-item">
                            <a href="my-listings.html" className="nav-link">
                              My Listings
                            </a>
                          </li>

                          <li className="nav-item">
                            <a href="booking.html" className="nav-link">
                              Booking
                            </a>
                          </li>

                          <li className="nav-item">
                            <a href="reviews.html" className="nav-link">
                              Reviews
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a href="pricing-plan.html" className="nav-link">
                          Pricing Plan
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">
                          FAQ
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="gallery.html" className="nav-link">
                          Gallery
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="privacy-policy.html" className="nav-link">
                          Privacy Policy
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="terms-conditions.html" className="nav-link">
                          Terms And Conditions
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="coming-soon.html" className="nav-link">
                          Coming Soon
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="404.html" className="nav-link">
                          404 Page
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* 
                  <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggle">
                      Listings
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Listing
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="listing-map.html" className="nav-link">
                          Listing Map
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Single Listing
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggle">
                      Agents
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Agents
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Single Agents
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggle">
                      Blog
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog.html" className="nav-link">
                          Blog
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="single-blog.html" className="nav-link">
                          Single Blog
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Buy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      New
                    </a>
                  </li>{" "}
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Agents
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Contact Us
                    </a>
                  </li>
                </ul>

                <div className="others-options style">
                  <ul>
                    <li>
                      <a href="#" className="wishlist">
                        <i className="ri-heart-line"></i>
                        <span>0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="login">
                        <i className="ri-user-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="default-btn">
                        Add Listing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* <div className="switch-wrapper">
          <div className="container-fluid">
            <div className="switch-btn">
              <label>
                <input className="switch" type="checkbox" id="darkSwitch" />
                <div>
                  <div className="moon">
                    <img src="assets/images/dark.png" alt="" />
                  </div>
                  <div className="sun">
                    <img src="assets/images/light.png" alt="" />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div> */}

        <div className="others-option-for-responsive">
          <div className="container">
            {/* <div className="dot-menu">
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div> */}

            <div className="container">
              <div className="option-inner">
                <div className="others-options justify-content-center d-flex align-items-center">
                  <ul>
                    <li>
                      <a href="#" className="wishlist">
                        <i className="ri-heart-line"></i>
                        <span>0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="login">
                        <i className="ri-user-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="default-btn">
                        Add Listing
                      </a>
                    </li>
                    <li>
                      <form className="search-form">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                        />
                        <button type="submit" className="src-btn">
                          <i className="ri-search-line"></i>
                        </button>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-area pt-100 bg-color-f4fafe">
        <div className="container-fluid">
          <div className="row align-items-end">
            <div className="col-xl-7">
              <div className="banner-content pb-100">
                <span className="top-title wow animate__animated animate__fadeInUp delay-0-2s">
                  Start Your Journey
                </span>
                <h1 className="wow animate__animated animate__fadeInUp delay-0-4s">
                  Easy Way to Find Your Property
                </h1>
                <p className="wow animate__animated animate__fadeInUp delay-0-6s">
                  We are a great agency for buying and selling your property
                  with confidence. So you can easily buy and sell through our
                  company
                </p>

                <div className="banner-rent-sale-form">
                  <form className="rent-sale-form wow animate__animated animate__fadeInUp delay-0-8s">
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item status">
                        <span>Property Status:</span>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="for-rent-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#for-rent"
                          type="button"
                          role="tab"
                          aria-controls="for-rent"
                          aria-selected="false"
                        >
                          For Rent
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="for-sall-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#for-sall"
                          type="button"
                          role="tab"
                          aria-controls="for-sall"
                          aria-selected="false"
                        >
                          For Sale
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="for-rent"
                        role="tabpanel"
                        aria-labelledby="for-rent-tab"
                      >
                        <div className="row">
                          <div className="col-lg-5">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="What are you looking for?"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="form-group">
                              <select
                                className="form-select form-control"
                                aria-label="Default select example"
                              >
                                <option selected>All location</option>
                                <option value="1">United Kingdom</option>
                                <option value="2">United States</option>
                                <option value="3">Canada</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="form-group mb-0">
                              <button className="default-btn">Search</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="for-sall"
                        role="tabpanel"
                        aria-labelledby="for-sall-tab"
                      >
                        <div className="row">
                          <div className="col-lg-5">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="What are you looking for?"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="form-group">
                              <select
                                className="form-select form-control"
                                aria-label="Default select example"
                              >
                                <option selected>All location</option>
                                <option value="1">United Kingdom</option>
                                <option value="2">United States</option>
                                <option value="3">Canada</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="form-group mb-0">
                              <button className="default-btn">Search</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <ul className="agents-list wow animate__animated animate__fadeInUp delay-0-8s">
                    <li>
                      <a href="#">
                        <img
                          src="assets/images/agents/agent-1.jpg"
                          alt="Image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assets/images/agents/agent-2.jpg"
                          alt="Image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assets/images/agents/agent-3.jpg"
                          alt="Image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assets/images/agents/agent-4.jpg"
                          alt="Image"
                        />
                      </a>
                    </li>
                  </ul>

                  <p className="all-agents wow animate__animated animate__fadeInUp delay-0-8s">
                    2k+ Agents. <a href="#">See All Listings</a>
                  </p>

                  <ul className="social-link">
                    <li className="call">
                      <a href="tel:+1-719-504-1984">
                        <i className="ri-phone-fill"></i>
                      </a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp delay-0-2s">
                      <a href="https://facebook.com/" target="_blank">
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp delay-0-4s">
                      <a href="https://twitter.com/" target="_blank">
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp delay-0-6s">
                      <a href="https://linkedin.com/" target="_blank">
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp delay-0-8s">
                      <a href="https://instagram.com/" target="_blank">
                        <i className="ri-instagram-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-5">
              <div className="banner-img wow animate__animated animate__fadeInUp delay-0-6s">
                <img src="assets/images/banner/banner-img-1.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-area pt-100 pb-70">
        <div className="container">
          <div className="section-title left-title">
            <h2>Featured Properties</h2>
          </div>

          <div className="featured-slide row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="single-featured-item wow animate__animated animate__fadeInUp delay-0-2s">
                    <div className="featured-img">
                      <img
                        src="assets/images/featured/featured-1.jpg"
                        alt="Image"
                      />
                      <span>Rent</span>
                      <ul className="d-flex justify-content-between">
                        <li>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-half-line"></i>
                        </li>
                        <li>
                          <button type="submit">
                            <i className="ri-heart-line"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="featured-content">
                      <div className="d-flex justify-content-between">
                        <h3>
                          <a href="#">House For Rent</a>
                        </h3>
                        <h3 className="price">$ 600,000</h3>
                      </div>
                      <p>
                        <i className="ri-map-pin-fill"></i>
                        77 Morris St. Ridgewood, NJ 67655
                      </p>
                      <ul>
                        <li>
                          <i className="ri-hotel-bed-fill"></i>5 Bed
                        </li>
                        <li>
                          <i className="ri-wheelchair-fill"></i>5 Bath
                        </li>
                        <li>
                          <i className="ri-ruler-2-line"></i>
                          1000 Sqft
                        </li>
                      </ul>

                      <a href="#" className="agent-user">
                        <img
                          src="assets/images/agents/agent-5.jpg"
                          alt="Image"
                        />
                        <span>By Darlene Small</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="single-featured-item wow animate__animated animate__fadeInUp delay-0-4s">
                    <div className="featured-img">
                      <img
                        src="assets/images/featured/featured-2.jpg"
                        alt="Image"
                      />
                      <span>Sale</span>
                      <ul className="d-flex justify-content-between">
                        <li>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-half-line"></i>
                        </li>
                        <li>
                          <button type="submit">
                            <i className="ri-heart-line"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="featured-content">
                      <div className="d-flex justify-content-between">
                        <h3>
                          <a href="#">House For Sall</a>
                        </h3>
                        <h3 className="price">$ 900,000</h3>
                      </div>
                      <p>
                        <i className="ri-map-pin-fill"></i>
                        7788 Randall Mill Drive Waldorf, MD 22666
                      </p>
                      <ul>
                        <li>
                          <i className="ri-hotel-bed-fill"></i>6 Bed
                        </li>
                        <li>
                          <i className="ri-wheelchair-fill"></i>5 Bath
                        </li>
                        <li>
                          <i className="ri-ruler-2-line"></i>
                          1200 Sqft
                        </li>
                      </ul>

                      <a href="#" className="agent-user">
                        <img
                          src="assets/images/agents/agent-6.jpg"
                          alt="Image"
                        />
                        <span>By Florence Prada</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="single-featured-item wow animate__animated animate__fadeInUp delay-0-6s">
                    <div className="featured-img">
                      <img
                        src="assets/images/featured/featured-3.jpg"
                        alt="Image"
                      />
                      <span>Rent</span>
                      <ul className="d-flex justify-content-between">
                        <li>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-half-line"></i>
                        </li>
                        <li>
                          <button type="submit">
                            <i className="ri-heart-line"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="featured-content">
                      <div className="d-flex justify-content-between">
                        <h3>
                          <a href="#">House For Rent</a>
                        </h3>
                        <h3 className="price">$ 700,000</h3>
                      </div>
                      <p>
                        <i className="ri-map-pin-fill"></i>
                        33 Winding Way Ave. New Bern, NC 28280
                      </p>
                      <ul>
                        <li>
                          <i className="ri-hotel-bed-fill"></i>5 Bed
                        </li>
                        <li>
                          <i className="ri-wheelchair-fill"></i>4 Bath
                        </li>
                        <li>
                          <i className="ri-ruler-2-line"></i>
                          1150 Sqft
                        </li>
                      </ul>

                      <a href="#" className="agent-user">
                        <img
                          src="assets/images/agents/agent-7.jpg"
                          alt="Image"
                        />
                        <span>By Anthony Nguyen</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="single-featured-item wow animate__animated animate__fadeInUp delay-0-8s">
                    <div className="featured-img">
                      <img
                        src="assets/images/featured/featured-4.jpg"
                        alt="Image"
                      />
                      <span>Sale</span>
                      <ul className="d-flex justify-content-between">
                        <li>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-half-line"></i>
                        </li>
                        <li>
                          <button type="submit">
                            <i className="ri-heart-line"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="featured-content">
                      <div className="d-flex justify-content-between">
                        <h3>
                          <a href="#">House For Sall</a>
                        </h3>
                        <h3 className="price">$ 600,000</h3>
                      </div>
                      <p>
                        <i className="ri-map-pin-fill"></i>
                        77 Morris St. Ridgewood, NJ 67655
                      </p>
                      <ul>
                        <li>
                          <i className="ri-hotel-bed-fill"></i>3 Bed
                        </li>
                        <li>
                          <i className="ri-wheelchair-fill"></i>3 Bath
                        </li>
                        <li>
                          <i className="ri-ruler-2-line"></i>
                          1050 Sqft
                        </li>
                      </ul>

                      <a href="#" className="agent-user">
                        <img
                          src="assets/images/agents/agent-1.jpg"
                          alt="Image"
                        />
                        <span>By Darlene Small</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-featured-item wow animate__animated animate__fadeInUp delay-0-8s">
                    <div className="featured-img">
                      <img
                        src="assets/images/featured/featured-4.jpg"
                        alt="Image"
                      />
                      <span>Sale</span>
                      <ul className="d-flex justify-content-between">
                        <li>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-half-line"></i>
                        </li>
                        <li>
                          <button type="submit">
                            <i className="ri-heart-line"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="featured-content">
                      <div className="d-flex justify-content-between">
                        <h3>
                          <a href="#">House For Sall</a>
                        </h3>
                        <h3 className="price">$ 600,000</h3>
                      </div>
                      <p>
                        <i className="ri-map-pin-fill"></i>
                        77 Morris St. Ridgewood, NJ 67655
                      </p>
                      <ul>
                        <li>
                          <i className="ri-hotel-bed-fill"></i>3 Bed
                        </li>
                        <li>
                          <i className="ri-wheelchair-fill"></i>3 Bath
                        </li>
                        <li>
                          <i className="ri-ruler-2-line"></i>
                          1050 Sqft
                        </li>
                      </ul>

                      <a href="#" className="agent-user">
                        <img
                          src="assets/images/agents/agent-1.jpg"
                          alt="Image"
                        />
                        <span>By Darlene Small</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-featured-item wow animate__animated animate__fadeInUp delay-0-8s">
                    <div className="featured-img">
                      <img
                        src="assets/images/featured/featured-4.jpg"
                        alt="Image"
                      />
                      <span>Sale</span>
                      <ul className="d-flex justify-content-between">
                        <li>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-half-line"></i>
                        </li>
                        <li>
                          <button type="submit">
                            <i className="ri-heart-line"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="featured-content">
                      <div className="d-flex justify-content-between">
                        <h3>
                          <a href="#">House For Sall</a>
                        </h3>
                        <h3 className="price">$ 600,000</h3>
                      </div>
                      <p>
                        <i className="ri-map-pin-fill"></i>
                        77 Morris St. Ridgewood, NJ 67655
                      </p>
                      <ul>
                        <li>
                          <i className="ri-hotel-bed-fill"></i>3 Bed
                        </li>
                        <li>
                          <i className="ri-wheelchair-fill"></i>3 Bath
                        </li>
                        <li>
                          <i className="ri-ruler-2-line"></i>
                          1050 Sqft
                        </li>
                      </ul>

                      <a href="#" className="agent-user">
                        <img
                          src="assets/images/agents/agent-1.jpg"
                          alt="Image"
                        />
                        <span>By Darlene Small</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="can-help-area bg-color-f1f8f9 pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>See How Rello Can Help</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-can-help wow animate__animated animate__fadeInUp delay-0-2s">
                <img src="assets/images/can-help/can-help-1.png" alt="Image" />
                <h3>Rent a Home</h3>
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Donec rutrum congue leo eget malesuada.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-can-help wow animate__animated animate__fadeInUp delay-0-4s">
                <img src="assets/images/can-help/can-help-2.png" alt="Image" />
                <h3>Sale a Home</h3>
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Donec rutrum congue leo eget malesuada.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-can-help wow animate__animated animate__fadeInUp delay-0-6s">
                <img src="assets/images/can-help/can-help-3.png" alt="Image" />
                <h3>Experience Agent</h3>
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Donec rutrum congue leo eget malesuada.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-can-help wow animate__animated animate__fadeInUp delay-0-8s">
                <img src="assets/images/can-help/can-help-4.png" alt="Image" />
                <h3>Member Support</h3>
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Donec rutrum congue leo eget malesuada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="properties-area ptb-100">
        <div className="container">
          <div className="properties-filter">
            <div className="section-title left-title">
              <h2>Recent Properties</h2>
            </div>
            <div className="shorting-menu">
              <button className="filter" data-filter="all">
                All Properties
              </button>

              <button className="filter" data-filter=".for-sale">
                For Sale
              </button>

              <button className="filter" data-filter=".for-rent">
                For Rent
              </button>
            </div>
          </div>

          <div className="">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-md-6 mix for-rent mb-3">
                <div className="single-properties-item wow animate__animated animate__fadeInUp delay-0-2s">
                  <div className="properties-img">
                    <a href="#">
                      <img
                        src="assets/images/properties/properties-1.jpg"
                        alt="Image"
                      />
                    </a>
                    <span>Rent</span>
                  </div>
                  <div className="properties-content">
                    <div className="d-flex justify-content-between">
                      <a href="#">
                        <h3>House For Rent</h3>
                      </a>
                      <h3 className="price">$ 240,000</h3>
                    </div>
                    <p>
                      <i className="ri-map-pin-fill"></i>
                      666 E. Hilldale Court Salem, MA 09990
                    </p>
                    <ul className="feature-list">
                      <li>
                        <i className="ri-hotel-bed-fill"></i>3 Bed
                      </li>
                      <li>
                        <i className="ri-wheelchair-fill"></i>3 Bath
                      </li>
                      <li>
                        <i className="ri-ruler-2-line"></i>
                        950 Sqft
                      </li>
                    </ul>

                    <ul className="user d-flex justify-content-between align-items-center">
                      <li>
                        <a href="#" className="agent-user">
                          <img
                            src="assets/images/agents/agent-1.jpg"
                            alt="Image"
                          />
                          <span>By Peggy Beatty</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-line"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mix for-sale mb-3">
                <div className="single-properties-item wow animate__animated animate__fadeInUp delay-0-4s">
                  <div className="properties-img">
                    <a href="#">
                      <img
                        src="assets/images/properties/properties-2.jpg"
                        alt="Image"
                      />
                    </a>
                    <span>Sale</span>
                  </div>
                  <div className="properties-content">
                    <div className="d-flex justify-content-between">
                      <a href="#">
                        <h3>House For Sale</h3>
                      </a>
                      <h3 className="price">$ 300,000</h3>
                    </div>
                    <p>
                      <i className="ri-map-pin-fill"></i>
                      7755 West White Drive Carmel, NY 10555
                    </p>
                    <ul className="feature-list">
                      <li>
                        <i className="ri-hotel-bed-fill"></i>4 Bed
                      </li>
                      <li>
                        <i className="ri-wheelchair-fill"></i>4 Bath
                      </li>
                      <li>
                        <i className="ri-ruler-2-line"></i>
                        1050 Sqft
                      </li>
                    </ul>

                    <ul className="user d-flex justify-content-between align-items-center">
                      <li>
                        <a href="#" className="agent-user">
                          <img
                            src="assets/images/agents/agent-2.jpg"
                            alt="Image"
                          />
                          <span>By Thomas Jones</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-line"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mix for-rent mb-3">
                <div className="single-properties-item wow animate__animated animate__fadeInUp delay-0-6s">
                  <div className="properties-img">
                    <a href="#">
                      <img
                        src="assets/images/properties/properties-3.jpg"
                        alt="Image"
                      />
                    </a>
                    <span>Rent</span>
                  </div>
                  <div className="properties-content">
                    <div className="d-flex justify-content-between">
                      <a href="#">
                        <h3>House For Rent</h3>
                      </a>
                      <h3 className="price">$ 450,000</h3>
                    </div>
                    <p>
                      <i className="ri-map-pin-fill"></i>
                      991 Hill St. Clemmons, NC 77711
                    </p>
                    <ul className="feature-list">
                      <li>
                        <i className="ri-hotel-bed-fill"></i>5 Bed
                      </li>
                      <li>
                        <i className="ri-wheelchair-fill"></i>5 Bath
                      </li>
                      <li>
                        <i className="ri-ruler-2-line"></i>
                        1000 Sqft
                      </li>
                    </ul>

                    <ul className="user d-flex justify-content-between align-items-center">
                      <li>
                        <a href="#" className="agent-user">
                          <img
                            src="assets/images/agents/agent-3.jpg"
                            alt="Image"
                          />
                          <span>By Erin Patterson</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-line"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mix for-sale mb-3">
                <div className="single-properties-item wow animate__animated animate__fadeInUp delay-0-8s">
                  <div className="properties-img">
                    <a href="#">
                      <img
                        src="assets/images/properties/properties-4.jpg"
                        alt="Image"
                      />
                    </a>
                    <span>Sale</span>
                  </div>
                  <div className="properties-content">
                    <div className="d-flex justify-content-between">
                      <a href="#">
                        <h3>House For Sale</h3>
                      </a>
                      <h3 className="price">$ 750,000</h3>
                    </div>
                    <p>
                      <i className="ri-map-pin-fill"></i>
                      33 Winding Way Ave. New Bern, NC 2888
                    </p>
                    <ul className="feature-list">
                      <li>
                        <i className="ri-hotel-bed-fill"></i>5 Bed
                      </li>
                      <li>
                        <i className="ri-wheelchair-fill"></i>5 Bath
                      </li>
                      <li>
                        <i className="ri-ruler-2-line"></i>
                        1500 Sqft
                      </li>
                    </ul>

                    <ul className="user d-flex justify-content-between align-items-center">
                      <li>
                        <a href="#" className="agent-user">
                          <img
                            src="assets/images/agents/agent-4.jpg"
                            alt="Image"
                          />
                          <span>By Johnnie Hedrick</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-line"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mix for-rent mb-3">
                <div className="single-properties-item wow animate__animated animate__fadeInUp delay-0-2s">
                  <div className="properties-img">
                    <a href="#">
                      <img
                        src="assets/images/properties/properties-5.jpg"
                        alt="Image"
                      />
                    </a>
                    <span>Rent</span>
                  </div>
                  <div className="properties-content">
                    <div className="d-flex justify-content-between">
                      <a href="#">
                        <h3>House For Rent</h3>
                      </a>
                      <h3 className="price">$ 200,000</h3>
                    </div>
                    <p>
                      <i className="ri-map-pin-fill"></i>
                      66 River Street Plainfield, NJ 07000
                    </p>
                    <ul className="feature-list">
                      <li>
                        <i className="ri-hotel-bed-fill"></i>2 Bed
                      </li>
                      <li>
                        <i className="ri-wheelchair-fill"></i>2 Bath
                      </li>
                      <li>
                        <i className="ri-ruler-2-line"></i>
                        750 Sqft
                      </li>
                    </ul>

                    <ul className="user d-flex justify-content-between align-items-center">
                      <li>
                        <a href="#" className="agent-user">
                          <img
                            src="assets/images/agents/agent-5.jpg"
                            alt="Image"
                          />
                          <span>By Dan Valentine</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-line"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mix for-sale mb-3">
                <div className="single-properties-item wow animate__animated animate__fadeInUp delay-0-4s">
                  <div className="properties-img">
                    <a href="#">
                      <img
                        src="assets/images/properties/properties-6.jpg"
                        alt="Image"
                      />
                    </a>
                    <span>Sale</span>
                  </div>
                  <div className="properties-content">
                    <div className="d-flex justify-content-between">
                      <a href="#">
                        <h3>House For Sale</h3>
                      </a>
                      <h3 className="price">$ 950,000</h3>
                    </div>
                    <p>
                      <i className="ri-map-pin-fill"></i>
                      4477 Kingston Lane Mokena, IL 66448
                    </p>
                    <ul className="feature-list">
                      <li>
                        <i className="ri-hotel-bed-fill"></i>6 Bed
                      </li>
                      <li>
                        <i className="ri-wheelchair-fill"></i>6 Bath
                      </li>
                      <li>
                        <i className="ri-ruler-2-line"></i>
                        1750 Sqft
                      </li>
                    </ul>

                    <ul className="user d-flex justify-content-between align-items-center">
                      <li>
                        <a href="#" className="agent-user">
                          <img
                            src="assets/images/agents/agent-6.jpg"
                            alt="Image"
                          />
                          <span>By Maria Garber</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-line"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mix for-rent mb-3">
                <div className="single-properties-item wow animate__animated animate__fadeInUp delay-0-6s">
                  <div className="properties-img">
                    <a href="#">
                      <img
                        src="assets/images/properties/properties-7.jpg"
                        alt="Image"
                      />
                    </a>
                    <span>Rent</span>
                  </div>
                  <div className="properties-content">
                    <div className="d-flex justify-content-between">
                      <a href="#">
                        <h3>House For Rent</h3>
                      </a>
                      <h3 className="price">$ 350,000</h3>
                    </div>
                    <p>
                      <i className="ri-map-pin-fill"></i>
                      166 Mill Lane Riverview, FL 33366
                    </p>
                    <ul className="feature-list">
                      <li>
                        <i className="ri-hotel-bed-fill"></i>3 Bed
                      </li>
                      <li>
                        <i className="ri-wheelchair-fill"></i>3 Bath
                      </li>
                      <li>
                        <i className="ri-ruler-2-line"></i>
                        1000 Sqft
                      </li>
                    </ul>

                    <ul className="user d-flex justify-content-between align-items-center">
                      <li>
                        <a href="#" className="agent-user">
                          <img
                            src="assets/images/agents/agent-7.jpg"
                            alt="Image"
                          />
                          <span>By John Bilodeau</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-line"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mix for-sale mb-3">
                <div className="single-properties-item wow animate__animated animate__fadeInUp delay-0-8s">
                  <div className="properties-img">
                    <a href="#">
                      <img
                        src="assets/images/properties/properties-8.jpg"
                        alt="Image"
                      />
                    </a>
                    <span>Sale</span>
                  </div>
                  <div className="properties-content">
                    <div className="d-flex justify-content-between">
                      <a href="#">
                        <h3>House For Sale</h3>
                      </a>
                      <h3 className="price">$ 900,000</h3>
                    </div>
                    <p>
                      <i className="ri-map-pin-fill"></i>
                      444 King St. Coachella, CA 22233
                    </p>
                    <ul className="feature-list">
                      <li>
                        <i className="ri-hotel-bed-fill"></i>5 Bed
                      </li>
                      <li>
                        <i className="ri-wheelchair-fill"></i>5 Bath
                      </li>
                      <li>
                        <i className="ri-ruler-2-line"></i>
                        1600 Sqft
                      </li>
                    </ul>

                    <ul className="user d-flex justify-content-between align-items-center">
                      <li>
                        <a href="#" className="agent-user">
                          <img
                            src="assets/images/agents/agent-8.jpg"
                            alt="Image"
                          />
                          <span>By Karyn Freeze</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-line"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-12 text-center">
                <a href="#" className="default-btn">
                  View All Listing
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-area bg-color-fbf3f3 ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="why-chooses-content">
                <div className="wow animate__animated animate__fadeInUp delay-0-2s">
                  <h2>Why Choose Our Properties</h2>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Sed porttitor lectus nibh. Praesent sapien massa,
                    convallis a pellentesque nec, egestas non nisi curabitur non
                    nulla sit amet.
                  </p>
                </div>

                <ul>
                  <li className="wow animate__animated animate__fadeInUp delay-0-4s">
                    <i className="flaticon-insurance"></i>
                    <h3>Property Insurance</h3>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. Sed porttitor lectus nibh. Praesent sapien
                      massa, convallis a pellentesque nec diam sit amet quam
                      vehicula elementum sed diam sit amet.
                    </p>
                  </li>
                  <li className="wow animate__animated animate__fadeInUp delay-0-6s">
                    <i className="flaticon-interest-rate"></i>
                    <h3>Best Interest Rates</h3>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. Sed porttitor lectus nibh. Praesent sapien
                      massa, convallis a pellentesque nec diam sit amet quam
                      vehicula elementum sed diam sit amet.
                    </p>
                  </li>
                  <li className="wow animate__animated animate__fadeInUp delay-0-8s">
                    <i className="flaticon-commission"></i>
                    <h3>Lowest Commission</h3>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. Sed porttitor lectus nibh. Praesent sapien
                      massa, convallis a pellentesque nec diam sit amet quam
                      vehicula elementum sed diam sit amet.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="single-why-choose-item wow animate__animated animate__fadeInUp delay-0-6s">
                <div className="why-choose-img">
                  <a href="#">
                    <img src="assets/images/why-choose-img.jpg" alt="Image" />
                  </a>
                  <span>Featured</span>
                  <button type="submit" className="wishlist">
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
                <div className="why-choose-content">
                  <div className="d-flex justify-content-between">
                    <a href="#">
                      <h3>House For Sale</h3>
                    </a>
                    <h3 className="price">$ 300,000</h3>
                  </div>
                  <p>
                    <i className="ri-map-pin-fill"></i>
                    7755 West White Drive Carmel, NY 10555
                  </p>
                  <ul className="feature-list">
                    <li>
                      <i className="ri-hotel-bed-fill"></i>4 Bed
                    </li>
                    <li>
                      <i className="ri-wheelchair-fill"></i>4 Bath
                    </li>
                    <li>
                      <i className="ri-ruler-2-line"></i>
                      1050 Sqft
                    </li>
                  </ul>

                  <ul className="user d-flex justify-content-between align-items-center">
                    <li>
                      <a href="#" className="agent-user">
                        <img
                          src="assets/images/agents/agent-2.jpg"
                          alt="Image"
                        />
                        <span>By Thomas Jones</span>
                      </a>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-half-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="meet-our-agents-area pt-100 pb-70">
        <div className="container">
          <div className="section-title left-title">
            <h2>Meet Our Agents</h2>
          </div>

          <div className="agents-slide row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  <div className="single-agents wow animate__animated animate__fadeInUp delay-0-2s">
                    <div className="agents-img">
                      <img src="assets/images/agents/agent-9.jpg" alt="Image" />
                      <span>8 Listing</span>
                      <p>Rello RealEstate Agency</p>
                    </div>

                    <div className="agents-content">
                      <div className="d-flex justify-content-between align-items-center align-items-center">
                        <h3>
                          <a href="#">Edward Mccoy</a>
                        </h3>

                        <div className="team-social">
                          <a href="#" className="control">
                            <i className="ri-share-fill"></i>
                          </a>

                          <ul>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <i className="ri-facebook-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                target="_blank"
                              >
                                <i className="ri-instagram-line"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                              >
                                <i className="ri-linkedin-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/" target="_blank">
                                <i className="ri-twitter-fill"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <ul className="info">
                        <li>
                          <a href="tel:+1-719-504-1984">
                            <i className="ri-phone-fill"></i>
                            +1 719-504-1984
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@gmail.com">
                            <i className="ri-mail-line"></i>
                            info@gmail.com
                          </a>
                        </li>
                      </ul>

                      <a href="#" className="read-more">
                        Read More
                        <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="single-agents wow animate__animated animate__fadeInUp delay-0-4s">
                    <div className="agents-img">
                      <img
                        src="assets/images/agents/agent-10.jpg"
                        alt="Image"
                      />
                      <span>5 Listing</span>
                      <p>Pelody RealEstate Agency</p>
                    </div>

                    <div className="agents-content">
                      <div className="d-flex justify-content-between align-items-center align-items-center">
                        <h3>
                          <a href="#">Edward Mccoy</a>
                        </h3>

                        <div className="team-social">
                          <a href="#" className="control">
                            <i className="ri-share-fill"></i>
                          </a>

                          <ul>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <i className="ri-facebook-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                target="_blank"
                              >
                                <i className="ri-instagram-line"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                              >
                                <i className="ri-linkedin-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/" target="_blank">
                                <i className="ri-twitter-fill"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <ul className="info">
                        <li>
                          <a href="tel:+1-719-504-1984">
                            <i className="ri-phone-fill"></i>
                            +1 719-504-1985
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@gmail.com">
                            <i className="ri-mail-line"></i>
                            info@rello.com
                          </a>
                        </li>
                      </ul>

                      <a href="#" className="read-more">
                        Read More
                        <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="single-agents wow animate__animated animate__fadeInUp delay-0-6s">
                    <div className="agents-img">
                      <img
                        src="assets/images/agents/agent-11.jpg"
                        alt="Image"
                      />
                      <span>3 Listing</span>
                      <p>Ripeco RealEstate Agency</p>
                    </div>

                    <div className="agents-content">
                      <div className="d-flex justify-content-between align-items-center align-items-center">
                        <h3>
                          <a href="#">Edward Mccoy</a>
                        </h3>

                        <div className="team-social">
                          <a href="#" className="control">
                            <i className="ri-share-fill"></i>
                          </a>

                          <ul>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <i className="ri-facebook-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                target="_blank"
                              >
                                <i className="ri-instagram-line"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                              >
                                <i className="ri-linkedin-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/" target="_blank">
                                <i className="ri-twitter-fill"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <ul className="info">
                        <li>
                          <a href="tel:+1-719-504-1984">
                            <i className="ri-phone-fill"></i>
                            +1 719-504-1986
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@rello.com">
                            <i className="ri-mail-line"></i>
                            info@rello.com
                          </a>
                        </li>
                      </ul>

                      <a href="#" className="read-more">
                        Read More
                        <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="single-agents wow animate__animated animate__fadeInUp delay-0-8s">
                    <div className="agents-img">
                      <img
                        src="assets/images/agents/agent-12.jpg"
                        alt="Image"
                      />
                      <span>9 Listing</span>
                      <p>Centura RealEstate Agency</p>
                    </div>

                    <div className="agents-content">
                      <div className="d-flex justify-content-between align-items-center align-items-center">
                        <h3>
                          <a href="#">Edward Mccoy</a>
                        </h3>

                        <div className="team-social">
                          <a href="#" className="control">
                            <i className="ri-share-fill"></i>
                          </a>

                          <ul>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <i className="ri-facebook-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                target="_blank"
                              >
                                <i className="ri-instagram-line"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                              >
                                <i className="ri-linkedin-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/" target="_blank">
                                <i className="ri-twitter-fill"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <ul className="info">
                        <li>
                          <a href="tel:+1-719-504-1987">
                            <i className="ri-phone-fill"></i>
                            +1 719-504-1987
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@rello.com">
                            <i className="ri-mail-line"></i>
                            info@rello.com
                          </a>
                        </li>
                      </ul>

                      <a href="#" className="read-more">
                        Read More
                        <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="single-agents wow animate__animated animate__fadeInUp delay-0-2s">
                    <div className="agents-img">
                      <img
                        src="assets/images/agents/agent-13.jpg"
                        alt="Image"
                      />
                      <span>9 Listing</span>
                      <p>Centura RealEstate Agency</p>
                    </div>

                    <div className="agents-content">
                      <div className="d-flex justify-content-between align-items-center align-items-center">
                        <h3>
                          <a href="#">Edward Mccoy</a>
                        </h3>

                        <div className="team-social">
                          <a href="#" className="control">
                            <i className="ri-share-fill"></i>
                          </a>

                          <ul>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <i className="ri-facebook-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                target="_blank"
                              >
                                <i className="ri-instagram-line"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                              >
                                <i className="ri-linkedin-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/" target="_blank">
                                <i className="ri-twitter-fill"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <ul className="info">
                        <li>
                          <a href="tel:+1-719-504-1987">
                            <i className="ri-phone-fill"></i>
                            +1 719-504-1987
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@rello.com">
                            <i className="ri-mail-line"></i>
                            info@rello.com
                          </a>
                        </li>
                      </ul>

                      <a href="#" className="read-more">
                        Read More
                        <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="single-agents wow animate__animated animate__fadeInUp delay-0-2s">
                    <div className="agents-img">
                      <img
                        src="assets/images/agents/agent-13.jpg"
                        alt="Image"
                      />
                      <span>9 Listing</span>
                      <p>Centura RealEstate Agency</p>
                    </div>

                    <div className="agents-content">
                      <div className="d-flex justify-content-between align-items-center align-items-center">
                        <h3>
                          <a href="#">Edward Mccoy</a>
                        </h3>

                        <div className="team-social">
                          <a href="#" className="control">
                            <i className="ri-share-fill"></i>
                          </a>

                          <ul>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <i className="ri-facebook-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                target="_blank"
                              >
                                <i className="ri-instagram-line"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                              >
                                <i className="ri-linkedin-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/" target="_blank">
                                <i className="ri-twitter-fill"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <ul className="info">
                        <li>
                          <a href="tel:+1-719-504-1987">
                            <i className="ri-phone-fill"></i>
                            +1 719-504-1987
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@rello.com">
                            <i className="ri-mail-line"></i>
                            info@rello.com
                          </a>
                        </li>
                      </ul>

                      <a href="#" className="read-more">
                        Read More
                        <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="single-agents wow animate__animated animate__fadeInUp delay-0-2s">
                    <div className="agents-img">
                      <img
                        src="assets/images/agents/agent-13.jpg"
                        alt="Image"
                      />
                      <span>9 Listing</span>
                      <p>Centura RealEstate Agency</p>
                    </div>

                    <div className="agents-content">
                      <div className="d-flex justify-content-between align-items-center align-items-center">
                        <h3>
                          <a href="#">Edward Mccoy</a>
                        </h3>

                        <div className="team-social">
                          <a href="#" className="control">
                            <i className="ri-share-fill"></i>
                          </a>

                          <ul>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <i className="ri-facebook-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                target="_blank"
                              >
                                <i className="ri-instagram-line"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                              >
                                <i className="ri-linkedin-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/" target="_blank">
                                <i className="ri-twitter-fill"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <ul className="info">
                        <li>
                          <a href="tel:+1-719-504-1987">
                            <i className="ri-phone-fill"></i>
                            +1 719-504-1987
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@rello.com">
                            <i className="ri-mail-line"></i>
                            info@rello.com
                          </a>
                        </li>
                      </ul>

                      <a href="#" className="read-more">
                        Read More
                        <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="single-agents wow animate__animated animate__fadeInUp delay-0-2s">
                    <div className="agents-img">
                      <img
                        src="assets/images/agents/agent-13.jpg"
                        alt="Image"
                      />
                      <span>9 Listing</span>
                      <p>Centura RealEstate Agency</p>
                    </div>

                    <div className="agents-content">
                      <div className="d-flex justify-content-between align-items-center align-items-center">
                        <h3>
                          <a href="#">Edward Mccoy</a>
                        </h3>

                        <div className="team-social">
                          <a href="#" className="control">
                            <i className="ri-share-fill"></i>
                          </a>

                          <ul>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <i className="ri-facebook-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                target="_blank"
                              >
                                <i className="ri-instagram-line"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                              >
                                <i className="ri-linkedin-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/" target="_blank">
                                <i className="ri-twitter-fill"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <ul className="info">
                        <li>
                          <a href="tel:+1-719-504-1987">
                            <i className="ri-phone-fill"></i>
                            +1 719-504-1987
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@rello.com">
                            <i className="ri-mail-line"></i>
                            info@rello.com
                          </a>
                        </li>
                      </ul>

                      <a href="#" className="read-more">
                        Read More
                        <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="discover-area bg-color-f2f7fd pt-100 pb-70">
        <div className="container">
          <div className="section-title left-title">
            <h2>Discover The Neighborhoods</h2>
          </div>

          <div className="discover-slide d-flex ">
            <div className="single-discover wow animate__animated animate__fadeInUp delay-0-2s p-2">
              <a href="#">
                <img src="assets/images/discover/discover-1.jpg" alt="Image" />
                <h3>Los Angeles</h3>
                <span>185 Properties</span>
              </a>
            </div>

            <div className="single-discover wow animate__animated animate__fadeInUp delay-0-4s p-2  ">
              <a href="#">
                <img src="assets/images/discover/discover-2.jpg" alt="Image" />
                <h3>Chicago</h3>
                <span>245 Properties</span>
              </a>
            </div>

            <div className="single-discover wow animate__animated animate__fadeInUp delay-0-6s p-2">
              <a href="#">
                <img src="assets/images/discover/discover-3.jpg" alt="Image" />
                <h3>Houston</h3>
                <span>105 Properties</span>
              </a>
            </div>

            <div className="single-discover wow animate__animated animate__fadeInUp delay-0-8s p-2">
              <a href="#">
                <img src="assets/images/discover/discover-4.jpg" alt="Image" />
                <h3>New York</h3>
                <span>325 Properties</span>
              </a>
            </div>

            <div className="single-discover wow animate__animated animate__fadeInUp delay-0-2s p-2">
              <a href="#">
                <img src="assets/images/discover/discover-5.jpg" alt="Image" />
                <h3>Austin</h3>
                <span>230 Properties</span>
              </a>
            </div>

            <div className="single-discover wow animate__animated animate__fadeInUp delay-0-4s p-2">
              <a href="#">
                <img src="assets/images/discover/discover-6.jpg" alt="Image" />
                <h3>Boston</h3>
                <span>145 Properties</span>
              </a>
            </div>
            {/* 
            <div className="single-discover wow animate__animated animate__fadeInUp delay-0-8s p-2">
              <a href="#">
                <img src="assets/images/discover/discover-7.jpg" alt="Image" />
                <h3>Los Angeles</h3>
                <span>185 Properties</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="client-say-area ptb-100">
        <div className="container">
          <div className="section-title left-title">
            <h2>What Our Clients Say</h2>
          </div>
          <div className="client-say-slide ">
            <div className="row">
              <div className="col-lg-3">
                <div className="client-say-img"></div>
              </div>
              <div className="col-lg-9">
                <div className="client-say-content">
                  <p>
                    “Pellentesque in ipsum id orci porta dapibus. Donec
                    sollicitudin molestie malesuada. Nulla quis lorem ut libero
                    malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Quisque velit nisi, pretium ut lacinia in,
                    elementum id enim. Vestibulum ac diam sit amet quam vehicula
                    elementum sed sit amet dui. Vivamus suscipit tortor eget
                    felis porttitor volutpat molestie malesuada. Nulla quis
                    lorem ut libero malesuada feugiat Lorem ipsum dolor.”
                  </p>
                  <h3>Laverne Hewitt</h3>
                  <span>Happy Customer</span>
                  <ul>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                  </ul>

                  <i className="ri-double-quotes-r quotes"></i>
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-lg-3">
                <div className="client-say-img"></div>
              </div>
              <div className="col-lg-9">
                <div className="client-say-content">
                  <p>
                    “Pellentesque in ipsum id orci porta dapibus. Donec
                    sollicitudin molestie malesuada. Nulla quis lorem ut libero
                    malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Quisque velit nisi, pretium ut lacinia in,
                    elementum id enim. Vestibulum ac diam sit amet quam vehicula
                    elementum sed sit amet dui. Vivamus suscipit tortor eget
                    felis porttitor volutpat molestie malesuada. Nulla quis
                    lorem ut libero malesuada feugiat Lorem ipsum dolor.”
                  </p>
                  <h3>Laverne Hewitt</h3>
                  <span>Happy Customer</span>
                  <ul>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                  </ul>

                  <i className="ri-double-quotes-r quotes"></i>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="app-area bg-1 ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="app-content wow animate__animated animate__fadeInLeft delay-0-2s">
                <h2>
                  Download today and get your free copy from Apple and Play
                  Store
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="app-btn wow animate__animated animate__fadeInRight delay-0-2s">
                <a href="#" target="_blank">
                  <img src="assets/images/play-store.png" alt="Image" />
                </a>
                <a href="#" target="_blank">
                  <img src="assets/images/apple-store.png" alt="Image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-area bg-color-f9fcff pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget wow animate__animated animate__fadeInUp delay-0-2s">
                <a href="#">
                  <img
                    src="assets/images/logo.png"
                    className="main-logo"
                    alt="Image"
                    style={{ height: "90px", width: "90px" }}
                  />
                  <img
                    src="assets/images/logo.png"
                    className="white-logo"
                    alt="Image"
                    style={{ height: "90px", width: "90px" }}
                  />
                </a>

                <p>
                  We are a great agency for buying and selling your property
                  with confidence. So you can easily buy and sell through our
                  company.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget wow animate__animated animate__fadeInUp delay-0-4s">
                <h3>Contacts Info</h3>

                <ul className="contact-info">
                  <li>
                    <i className="ri-map-pin-fill"></i>
                    7755 Grand Ave, Coconut Grove, Merrick Way, KY 44555
                  </li>
                  <li>
                    <i className="ri-phone-fill"></i>
                    <a href="tel:+1-719-504-1984">+1 719-504-1984</a>
                  </li>
                  <li>
                    <i className="ri-mail-fill"></i>
                    <a href="mailto:info@gmail.com">info@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget wow animate__animated animate__fadeInUp delay-0-6s">
                <h3>Helpful Links</h3>

                <ul className="help-link">
                  <li>
                    <i className="ri-arrow-right-s-fill"></i>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <i className="ri-arrow-right-s-fill"></i>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <i className="ri-arrow-right-s-fill"></i>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <i className="ri-arrow-right-s-fill"></i>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget wow animate__animated animate__fadeInUp delay-0-8s">
                <h3>Newsletter</h3>
                <p>
                  Stay Informed through our newsletter & get offers any time!
                </p>

                <form className="newsletter-form" data-toggle="validator">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email address"
                    name="EMAIL"
                    required
                    autocomplete="off"
                  />

                  <button className="submit-btn" type="submit">
                    <i className="ri-arrow-right-line"></i>
                  </button>

                  <div id="validator-newsletter" className="form-result"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow animate__animated animate__fadeInLeft delay-0-2s">
              <p>
                Copyright @<span id="year"></span> Shyam Misrha. All Rights
                Reserved by{" "}
                <a hhref="#" target="_blank">
                  Vaishnavi Technology
                </a>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="language wow animate__animated animate__fadeInRight delay-0-2s">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Language</option>
                  <option value="1">English</option>
                  <option value="2">Arabic</option>
                  <option value="3">Germany</option>
                </select>
                <i className="ri-global-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="go-top">
        <i className="ri-arrow-up-s-fill"></i>
        <i className="ri-arrow-up-s-fill"></i>
      </div>
    </>
  );
};

export default Home;
