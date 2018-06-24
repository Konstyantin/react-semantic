import React, {Component} from 'react';
import {Button, Checkbox, Form, Modal} from 'semantic-ui-react';

/**
 * Login
 */
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: null
        };

        // bind submit form
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Handle submit login form
     *
     * @param event
     */
    handleSubmit(event){
        event.preventDefault();

        const data = new FormData(event.target);

    }

    render () {
        return (
            <div>
                <div className="ui container">
                    <h2 className="ui center aligned header">Login component</h2>
                    <div className="sing-up-btn-container">
                        <Modal
                            trigger={<Button primary>Sing up</Button>}
                            header='Reminder!'
                            content='Call Benjamin regarding the reports.'
                            actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
                        />
                    </div>
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
                                <Checkbox label="I agree to the Terms and Conditions" name="condition"/>
                            </Form.Field>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;