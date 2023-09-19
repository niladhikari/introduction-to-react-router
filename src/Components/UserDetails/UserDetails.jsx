
import { useLoaderData } from 'react-router-dom';
const UserDetails = () => {
    const user = useLoaderData();
     
    const {name, website,company} = user;
    return (
        <div className="text-center text-white font-bold">
            <h2>User Name : {name}</h2>
            <p>Website : {website}</p>
            <p>Company Name : {company.name}</p>
        </div>
    );
};

export default UserDetails;