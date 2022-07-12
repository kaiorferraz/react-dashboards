import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Header from './shared/Header';
import HeaderTopBar from './shared/HeaderTop';
import Footer from './shared/Footer';

class App extends Component {
  toggleHeaderMenu(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("az-header-menu-show");
  }
  state = {}
  componentDidMount() {
    this.onRouteChanged();
  }
  render () {
    let headerComponent = !this.state.isFullPageLayout ? <Header/> : '';
    let footerComponent = !this.state.isFullPageLayout ? <Footer/> : '';
    let HeaderTopComponent = !this.state.isFullPageLayout ? <HeaderTopBar/> : '';
    return (
      <div className="d-flex">
        <div className="az-sidebar">
          { headerComponent }
        </div>
        <div className="w-100">
          <div className="az-content-wrapper">
            { HeaderTopComponent }
            <AppRoutes/>
          </div>
          { footerComponent }
          <div className="az-navbar-backdrop" onClick={event => this.toggleHeaderMenu(event)}></div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/general-pages/signin', '/general-pages/signup', '/general-pages/page-404'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true
        })
        document.querySelector('.az-sidebar').classList.add('d-none');
        break;
      } else {
        this.setState({
          isFullPageLayout: false
        })
        document.querySelector('.az-sidebar').classList.remove('d-none');
      }
    }
  }

}

export default withRouter(App);
