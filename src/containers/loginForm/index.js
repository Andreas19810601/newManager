import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TextFieldGroup from '../../components/textFieldGroup'
import { validationLogin } from '../../other/validationLogin'
import { setUserLogin } from '../../actions/setUserLogin'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    }
  }

  isValid() {
    const { errors, isValid } = validationLogin(this.state);
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
      this.props.changePage()
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        {/* {errors.form && <div className="alert alert-danger">{errors.form}</div>} */}

        <TextFieldGroup
          field="identifier"
          label="Username / Email"
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />
        <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
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
