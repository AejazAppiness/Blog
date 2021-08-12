import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from '../actions'
import {FaUserAlt} from 'react-icons/fa'
import UserHeader from './UserHeader';

function PostList(props) {
    useEffect(() => {
      props.fetchPosts()
    }, [])
    return (
        <div>
            <div>
            {props.posts.map(item => {
                return <div >
                    
                    <div className="posts">
                    <FaUserAlt />
                   <div>
                   <h2>{item.title}</h2>
                    <p>{item.body}</p>
                    {/* <UserHeader /> */}
                   </div>
                    </div>
                    <hr />
                    
                </div>
            })}
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {fetchPosts})(PostList)
