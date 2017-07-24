import React from 'react';
//import { render } from 'react-dom'
import { connect } from 'react-redux'
import LoginForm from './index.js';

const LoginPage = (props) => (

  <div className="row">
    <div className="col-md-4 col-md-offset-4">
      <LoginForm />
    </div>
  </div>

)

const mapStateToProps = state => ({
  count: state.counter.count,
})

export default connect(mapStateToProps)(LoginPage);