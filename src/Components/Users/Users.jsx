import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold">Our Users : {users.length}</h2>
            <div className="grid md:grid-cols-3 gap-10 mx-10">
                {
                    users.map((user) => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;