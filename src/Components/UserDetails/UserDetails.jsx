
import { useLoaderData, useNavigate } from 'react-router-dom';
const UserDetails = () => {
    const user = useLoaderData();
     const navigate = useNavigate()
    const {name, website,company} = user;
    const handleGoBack = ()=>{
        navigate(-1)
    }
    return (
        <div className="text-center text-white font-bold">
            <h2>User Name : {name}</h2>
            <p>Website : {website}</p>
            <p>Company Name : {company.name}</p>
            <button onClick={handleGoBack}
            className='bg-blue-600 p-3 font-bold rounded-md mt-3'>
                Go Back</button>
        </div>
    );
};

export default UserDetails;