import React from 'react'
import isEmpty from 'lodash/isEmpty';
import RaisedButton from 'material-ui/RaisedButton';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TextFieldGroup from '../../components/textFieldGroup' // funktioniert in gegensatz zu materialui
import TextFieldMaterialUI from '../../components/textFieldMaterialUI'
import { setUserLogin } from '../../actions/setUserLogin'

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
      this.props.changePage() //TODO switch Statement ASYNC with userRole 
      
    }
  }

  onChange = (e) => {
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

        {/* {errors.form && <div className="alert alert-danger">{errors.form}</div>} */}

        <TextFieldMaterialUI
          field="identifier"
          label="Username / Email"
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
        />

        <TextFieldMaterialUI
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />
        {/* <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
        <div className="form-group"><button><RaisedButton label="Login" primary={true}/></button></div> */}
        
        <RaisedButton type="submit" label="Login" primary={true} disabled={isLoading} />
      </form>
    )
  }
}

const mapStateToProps = state => ({
  userName: state.counter.userName,
  userDisplayName: state.counter.displayName,
  userRole: state.counter.userRole,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
  setUserLogin,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)  
