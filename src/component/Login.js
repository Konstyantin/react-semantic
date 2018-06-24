import React, {Component} from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react';

class Login extends Component {

    render () {
        return (
            <div className="ui container">
                <h2 className="ui center aligned header">Login component</h2>
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
                            <Checkbox label="I agree to the Terms and Conditions"/>
                        </Form.Field>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;