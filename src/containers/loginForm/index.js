import React from 'react'
import isEmpty from 'lodash/isEmpty'
import RaisedButton from 'material-ui/RaisedButton'
//import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUserLogin, setUserLoginData } from 'containers/loginForm/modules'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {},
        }
    }

    isValid() {
        const { errors, isValid } = this.validationLogin(this.state)
        if (!isValid) {
            this.setState({ errors })
        }
        return isValid
    }

    onSubmit = e => {
        e.preventDefault()
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true })
            this.props.setUserLogin(this.props)
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    validationLogin = data => {
        let errors = {}

        if (isEmpty(data.identifier)) {
            errors.identifier = 'This field is required'
        }

        if (isEmpty(data.password)) {
            errors.password = 'This field is required'
        }
        return {
            errors,
            isValid: isEmpty(errors)
        }
    }

    render() {
        const { errors, identifier, password, isLoading } = this.state

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>

                {errors.form &&
                    <div className="alert alert-danger">
                        {errors.form}
                    </div>}
                <div>
                    <TextField
                        onUpdateInput={this.handleUpdateInput}
                        name="identifier"
                        floatingLabelText="Username / Email"
                        value={identifier}
                        type="text"
                        errorText={errors.identifier}
                        onChange={this.onChange}
                        onBlur={e => this.props.setUserLoginData('userName', e.target.value)}
                        
                    />
                </div>

                <div>
                    <TextField
                        onUpdateInput={this.handleUpdateInput}
                        name="password"
                        floatingLabelText="Password"
                        value={password}
                        type="password"
                        errorText={errors.password}
                        onChange={this.onChange}
                        onBlur={e => this.props.setUserLoginData('userPassword', e.target.value)}
                    />
                </div>
                <RaisedButton
                    type="submit"
                    label="Login"
                    primary
                    disabled={isLoading}
                />
            </form>
        )
    }
}

const mapStateToProps = state => ({
    userName: state.loginData.userName,
    userDisplayName: state.loginData.displayName,
    userRole: state.loginData.userRole,
    userPassword: state.loginData.userPassword,
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        setUserLogin,
        setUserLoginData
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
