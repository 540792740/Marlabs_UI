import React, {userEffect} from 'react';
import {fetchUsers} from "../redux/user/userActions";
import {connect} from "react-redux";

function UserContainer({fetchUsers}) {
    userEffect(()=>{
        fetchUsers()
    }, []);

    return userData.loading?
        (<h3>Loading.....</h3>):
        userData.error?
            (<h3>Userdata.error</h3>):
            (
                <div>
                    <h3>User List</h3>
                    <div>
                        {userData && userData.users &&
                        userData.users.map(user => <p>user.name</p>)}
                    </div>
                </div>
            )
}
const mapStateToProps = state => {
    return{
        userData: state.user
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        fetchUsers:()=>dispatch(fetchUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
