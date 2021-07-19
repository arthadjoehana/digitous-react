import React from 'react';

class UserInfo extends React.Component {
    render(){
        return(
            <div className="userInfo">
                <p>{this.props.username}</p>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.website}</p>
            </div>
        )
    }
}

export default UserInfo;