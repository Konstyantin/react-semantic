import React, {Component} from 'react';
import {Button, Checkbox, Form, Select} from 'semantic-ui-react';
import {country} from "../common/country";

/**
 * Registration component
 */
class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: null
        };

        // bind submit form
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Handle submit registration form
     *
     * @param event
     */
    handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);
    }

    render(){
        return(
            <div>
                <div className="ui container">
                    <h2 className="ui center aligned header">Registration component</h2>
                    <div className="login-form-container">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder="Email" name="email"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input type="password" placeholder="Password" name="password"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Country</label>
                                <Select placeholder='Select your country' options={country} name="country" />
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