import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchUsers} from '../actions'

function UserHeader(props) {
    useEffect(() => {
        fetchUsers()
    }, [])
    console.log(props);
    return (
        <div>
            hello from userHeader
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return state
}


export default connect(mapStateToProps, {fetchUsers})(UserHeader)
