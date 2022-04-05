let users = []

function AddUser({id,name,room}){
    name = name.trim().toLowerCase();
    room = name.trim().toLowerCase();

    const existingUser = users.find((user)=>user.name === name && user.room === room);

    if(existingUser){
        return { error: "user already exists!" };
    }

    const user = {
        id,
        name,
        room
    };

    users.push(user);

    return user;
}

function RemoveUser(id){

    const index = users.findIndex((user)=> user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];
    }

}

const getUserById = () => {
    const user = users.find((user) => user.id === id);
    return user;
}

module.exports = {
    AddUser,
    RemoveUser,
    getUserById
}