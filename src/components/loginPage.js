import React from 'react';
//import { render } from 'react-dom'
import { connect } from 'react-redux'
import LoginForm from '../containers/loginForm';

const LoginPage = (props) => (
  
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm />
            
        </div>
        {/* {props.count} */}
      </div> 
  
)


const mapStateToProps = state => ({
  count: state.counter.count,
})

export default connect(mapStateToProps)(LoginPage);


// class LoginPage extends React.Component {
//   render() {
//     return (
//       <div className="row">
//         <div className="col-md-4 col-md-offset-4">
//           <LoginForm />
//         </div>
//       </div>
//     );
//   }
// }
// export default Loginpage