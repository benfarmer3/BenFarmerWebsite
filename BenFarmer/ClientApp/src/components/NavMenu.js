import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../CSS/NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark d-none d-lg-block">
                <div class="container-fluid">
                    <a class="navbar-brand nav-link" target="_blank">
                        <strong>Ben Farmer</strong>
                    </a>
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
                        aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarExample01">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavItem>
                                <NavLink tag={Link} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/test">Test</NavLink>
                            </NavItem>
                            <li class="nav-item">
                                <a class="nav-link" href="#test" 
                                    target="_blank">Test other</a>
                            </li>
                        </ul>

                        <ul class="navbar-nav list-inline">
                            <li class="">
                                <a class="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                                    target="_blank">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li class="">
                                <a class="nav-link" href="https://www.facebook.com/mdbootstrap" rel="nofollow" target="_blank">
                                    <i class="fab fa-instagram-f"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
  }
}
