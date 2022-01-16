const Users = ({users}) => {
    // console.log(users)
    return (
        <div>
            <div className={'userList'}>
                <div>{users.id} {users.name} {users.username} {users.email}</div>
            </div>
        </div>
    );
};

export default Users;