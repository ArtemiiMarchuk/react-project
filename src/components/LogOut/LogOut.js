import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logOut} from "../../store/actions/auth"
import {Redirect} from 'react-router-dom'

class LogOut extends Component{
    componentDidMount() {
        this.props.logOut()
    }

    render() {
        return(
            <Redirect to={'/'}/>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(LogOut)