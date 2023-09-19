
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,username,email,phone,address} = user;
    return (
        <div className='bg-green-400 p-4 rounded-md text-white mt-5 flex-grow'>
            <h2 className='text-2xl font-semibold'>{username}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <h2>{address.city}</h2>
            <Link to={`/user/${id}`}>
                <button className='bg-blue-600 p-3 font-bold rounded-md mt-3'>Click Me</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user : PropTypes.object.isRequired
}

export default User;