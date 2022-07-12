import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  render () { 
    return (
      <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-between">
        <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="!#" onClick={evt =>evt.preventDefault()}><img src={require("../../assets/images/logo-mini.svg")} alt="logo" /></a>
          <button className="navbar-toggler navbar-toggler align-self-center mr-2" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <i className="mdi mdi-menu"></i>
          </button>
          <ul className="navbar-nav">
            <li className="nav-item navbar-dropdown-large">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator border-0">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count count-varient1">7</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown navbar-dropdown-large">
                  <h6 className="p-3 mb-0 "><Trans>Notifications</Trans></h6>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face4.jpg")} alt="" className="profile-pic" />
                    </div>
                    <div className="preview-item-content">
                      <p className="mb-0"><Trans>Dany Miles</Trans> <span className="text-small text-muted"><Trans>commented on your photo</Trans></span></p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face3.jpg")} alt="" className="profile-pic" />
                    </div>
                    <div className="preview-item-content">
                      <p className="mb-0"><Trans>James</Trans> <span className="text-small text-muted"><Trans>posted a photo on your wall</Trans></span></p>
                    </div>           
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face2.jpg")} alt="" className="profile-pic" />
                      </div>
                      <div className="preview-item-content">
                        <p className="mb-0"><Trans>Alex</Trans> <span className="text-small text-muted"><Trans>just mentioned you in his post</Trans></span></p>
                    </div>
                  </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                      <p className="p-3 mb-0 "><Trans>View all activities</Trans></p>
                    </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator border-0">
                  <i className="mdi mdi-email-outline"></i>
                  <span className="count  count-varient2">5</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown navbar-dropdown-large">
                  <h6 className="p-3 mb-0 "><Trans>Messages</Trans></h6>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-item-content flex-grow">
                      <span className="badge badge-pill badge-success"><Trans>Request</Trans></span>
                      <p className="text-small text-muted ellipsis mb-0"> <Trans>Suport needed for user</Trans> 123 </p>
                    </div>
                    <p className="text-small text-muted align-self-start">4:10 <Trans>PM</Trans></p>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-item-content flex-grow">
                      <span className="badge badge-pill badge-warning"><Trans>Invoices</Trans></span>
                      <p className="text-small text-muted ellipsis mb-0"> <Trans>Invoice for order is mailed</Trans> </p>
                    </div>
                    <p className="text-small text-muted align-self-start">4:10 <Trans>PM</Trans></p>     
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-item-content flex-grow">
                      <span className="badge badge-pill badge-danger"><Trans>Projects</Trans></span>
                      <p className="text-small text-muted ellipsis mb-0"> <Trans>New project will start tomorrow</Trans> </p>
                    </div>
                    <p className="text-small text-muted align-self-start">4:10 <Trans>PM</Trans></p>
                  </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                      <h6 className="p-3 mb-0 "><Trans><Trans>See all activity</Trans></Trans></h6>
                    </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item nav-search border-0 ml-1 ml-md-3 ml-lg-5 d-none d-md-flex">
              <form className="nav-link form-inline mt-2 mt-md-0">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="mdi mdi-magnify"></i>
                    </span>
                  </div>
                </div>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item d-none d-xl-flex border-0">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                <i className="mdi mdi-earth mr-2"></i> <Trans>English</Trans>&nbsp;
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item  preview-itemd-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <Trans>French</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <Trans>Spain</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <Trans>Latin</Trans>
                  </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <Trans>Japanese</Trans>
                    </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item  nav-profile border-0">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                  <img className="nav-profile-img ml-2" alt="" src={require("../../assets/images/faces/face1.jpg")} />
                  <span className="profile-name"> <Trans>Henry Klein</Trans> </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="mdi mdi-cached text-success"></i> <Trans>Activity Log</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <i className="mdi mdi-account text-primary"></i> <Trans>Profile</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                  <i className="mdi mdi-logout text-primary"></i> <Trans>Logout</Trans>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
