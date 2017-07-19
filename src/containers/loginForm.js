import React from 'react';
import { push } from 'react-router-redux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import TextFieldGroup from '../components/textFieldGroup';
import { validationLogin } from '../other/validationLogin';
import { userLogin } from '../actions/userLogin';


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
  onSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userLogin(this.state).then(
        // console.log("9",this.state),
        // console.log("8",this.props.userLogin),
        (res) => this.props.changePage(),//push('/about-us'), //browserHistory.push('/features');
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      ).then(push('/about-us')).then(console.log('haskjdhkas'))
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

        {errors.form && <div className="alert alert-danger">{errors.form}</div>}

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
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)
export default connect(null, { userLogin })(LoginForm);