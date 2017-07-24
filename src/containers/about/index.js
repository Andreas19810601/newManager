import React from 'react'
import {connect} from 'react-redux'

const About = props => (
  <div>
    <h1>After login</h1>
    <p>Der eingelogte User heißt: {props.userDisplayName}</p>
    <p>Die Rolle die dieser User ausführt ist: {props.userRole} </p>
    <p>Der login Benutzername des Users ist: {props.userName}</p>
    
  </div>
)


const mapStateToProps = state => ({
  userName: state.counter.userName,
  userDisplayName: state.counter.userDisplayName,
  userRole: state.counter.userRole,
})

export default connect(mapStateToProps)(About);   