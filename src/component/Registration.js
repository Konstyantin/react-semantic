import React, {Component} from 'react';
import {Button, Checkbox, Form, Select} from 'semantic-ui-react';
import {country} from "../common/country";

class Registration extends Component {
    render(){
        return(
            <div>
                <div className="ui container">
                    <h2 className="ui center aligned header">Registration component</h2>
                    <div className="login-form-container">
                        <Form>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder="Email"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input type="password" placeholder="Password"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input type="password" placeholder="Password"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Country</label>
                                <Select placeholder='Select your country' options={country} />
                            </Form.Field>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;