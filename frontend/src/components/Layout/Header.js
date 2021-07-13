import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            <div class="container">
                <a class="navbar-brand" href="Dashboard.html">
                    WORKSUM
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span class="navbar-toggler-icon" />
                </button>
    
                <div class="collapse navbar-collapse" id="mobile-nav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/dashboard">
                                Dashboard
                            </a>
                        </li>
                    </ul>
    
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link " href="register.html">
                                Sign Up
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="login.html">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
        )
    }
}
export default Header
