import React from 'react'
import isEmpty from 'lodash/isEmpty';
import RaisedButton from 'material-ui/RaisedButton';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TextFieldMaterialUI from 'components/textFieldMaterialUI'
import { setUserLogin } from 'containers/loginForm/modules'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false  // to use isLoading in this context is questionable
    }
  }


  isValid() {
    const { errors, isValid } = this.validationLogin(this.state);
    if (!isValid) {
      this.setState({ errors })
    }
    return isValid
  }


  onSubmit = (e) => {
    e.preventDefault()
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.setUserLogin(this.state) 
    }
  }

  onChange = (e) => {
    console.log({ [e.target.name]: e.target.value })
    this.setState({ [e.target.name]: e.target.value })
  }

  validationLogin = (data) => {
    let errors = {};

    if (isEmpty(data.identifier)) {
      errors.identifier = 'This field is required';
    }

    if (isEmpty(data.password)) {
      errors.password = 'This field is required';
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

         {errors.form && <div className="alert alert-danger">{errors.form}</div>} 

        <TextFieldMaterialUI
          field="identifier"
          label="Username / Email"
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
          type="text"
        />

        <TextFieldMaterialUI
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />
        
        <RaisedButton type="submit" label="Login" primary disabled={isLoading} />
      </form>
    )
  }
}

const mapStateToProps = state => ({
  userName: state.loginData.userName,
  userDisplayName: state.loginData.displayName,
  userRole: state.loginData.userRole,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setUserLogin,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)  
