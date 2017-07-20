import React from 'react';
import { push } from 'react-router-redux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import axios from 'axios'
import TextFieldGroup from '../components/textFieldGroup';
import { validationLogin } from '../other/validationLogin';
import { setUser } from '../actions/setUser';

//const LoginForm = props => (
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };


    //this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validationLogin(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  // const makeSelectMessage = () => createSelector(
  //     (state) => {return state.get('login')},
  //     (state) => {return state.get('message')}
  // );

  getData = () => {
    const dispatch = this.props.dispatch;

    axios({
  method: 'post',
  url: '/api',
  data: JSON.stringify({
    username: this.state.identifier,
    password: this.state.password
  })
})

    // fetch('/api', {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     username: this.state.identifier, password: this.state.password
    //   })
    // })
      .then(function (res) {
        if (res.successful) {
          setUser(res.user);
          // dispatch(addFlashMessage({
          //     type: 'success',
          //     text: 'Willkommen im Manager '+res.user.displayName+', Sie haben derzeit keine weiteren Nachrichten.'
          // }));
          // dispatch(addFlashMessage({
          //     type: 'error',
          //     text: "Falsch eingeloggt"
          // }));
          //redirect
          //browserHistory.push('/features');
        } else {

          console.log("If ist falsch")
        }
      })

  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.getData()
      // this.props.userLogin(this.state).then(
      //   (res) => this.props.changePage(),
      //(err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      //)
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state;

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
    );
  }
}

const mapStateToProps = state => ({
  userName: state.identifier
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
  //userLogin,
  setUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);   