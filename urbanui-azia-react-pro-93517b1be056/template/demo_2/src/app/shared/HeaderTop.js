import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export class HeaderTop extends Component {
  closeMenu(e) {
    e.target.closest(".dropdown").classList.remove("show");
    e.target.closest(".dropdown .dropdown-menu").classList.remove("show");
  }

  toggleHeaderMenu(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("az-header-menu-show");
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      document.querySelector("body").classList.remove("az-header-menu-show");
    }
  }

  render() {
    return (
      <div className="d-flex az-header-top justify-content-between">
      <div className="az-header-left">
          <a href="#/" id="azMenuShow"  onClick={event => this.toggleHeaderMenu(event)} className="az-header-menu-icon"><span></span></a>
      </div>
      <div className="az-header-center">
        <input type="search" className="form-control" placeholder="Search for anything..." />
        <button className="btn"><i className="fas fa-search"></i></button>
      </div>
      <div className="az-header-right">
      <div className="az-header-message">
            <Link to="/apps/chat">
              <i className="typcn typcn-messages"></i>
            </Link>
          </div>
          <Dropdown className="az-header-notification">
            <Dropdown.Toggle as={"a"} className="new">
              <i className="typcn typcn-bell"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <div className="az-dropdown-header mg-b-20 d-sm-none">
                <a
                  href="#/"
                  onClick={event => this.closeMenu(event)}
                  className="az-header-arrow"
                >
                  <i className="icon ion-md-arrow-back"></i>
                </a>
              </div>
              <h6 className="az-notification-title">Notifications</h6>
              <p className="az-notification-text">
                You have 2 unread notification
              </p>
              <div className="az-notification-list">
                <div className="media new">
                  <div className="az-img-user">
                    <img
                      src={require("../../assets/images/img2.jpg")}
                      alt=""
                    ></img>
                  </div>
                  <div className="media-body">
                    <p>
                      Congratulate <strong>Socrates Itumay</strong> for work
                      anniversaries
                    </p>
                    <span>Mar 15 12:32pm</span>
                  </div>
                </div>
                <div className="media new">
                  <div className="az-img-user online">
                    <img
                      src={require("../../assets/images/img3.jpg")}
                      alt=""
                    ></img>
                  </div>
                  <div className="media-body">
                    <p>
                      <strong>Joyce Chua</strong> just created a new blog
                      post
                    </p>
                    <span>Mar 13 04:16am</span>
                  </div>
                </div>
                <div className="media">
                  <div className="az-img-user">
                    <img
                      src={require("../../assets/images/img4.jpg")}
                      alt=""
                    ></img>
                  </div>
                  <div className="media-body">
                    <p>
                      <strong>Althea Cabardo</strong> just created a new
                      blog post
                    </p>
                    <span>Mar 13 02:56am</span>
                  </div>
                </div>
                <div className="media">
                  <div className="az-img-user">
                    <img
                      src={require("../../assets/images/img5.jpg")}
                      alt=""
                    ></img>
                  </div>
                  <div className="media-body">
                    <p>
                      <strong>Adrian Monino</strong> added new comment on
                      your photo
                    </p>
                    <span>Mar 12 10:40pm</span>
                  </div>
                </div>
              </div>
              <div className="dropdown-footer">
                <a href="#/">View All Notifications</a>
              </div>
            </Dropdown.Menu>
          </Dropdown>
      </div>
    </div>
    );
  }

}

export default HeaderTop
