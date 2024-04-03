import {users} from "./data";

export async function GET(_request: Request) {
    const userId = 1;
    const user = users.find((user) => {
        return user.id === userId
    })
    console.log('users',users);
    
    return Response.json(user);
}