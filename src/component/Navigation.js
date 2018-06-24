import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import About from './About';
import Home from './Home';
import Login from "./Login";
import Registration from "./Registration";

class Navigation extends Component {

    state = {activeItem: 'home'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render(){

        const {activeItem} = this.state;

        return (
            <div>
                <Router>
                    <div>
                        <Menu>
                            <Menu.Item name='home' active={activeItem === 'home'} as={Link} to="/" onClick={this.handleItemClick} />
                            <Menu.Item name='about' active={activeItem === 'about'} as={Link} to="/about" onClick={this.handleItemClick}/>

                            <Menu.Menu position='right'>
                                <Menu.Item name="login" active={activeItem === "login"} as={Link} to="/login" onClick={this.handleItemClick}/>
                                <Menu.Item name="registration" active={activeItem === "registration"} as={Link} to="/registration" onClick={this.handleItemClick}/>
                            </Menu.Menu>
                        </Menu>

                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/login" component={Login} />
                        <Route path="/registration" component={Registration} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Navigation;