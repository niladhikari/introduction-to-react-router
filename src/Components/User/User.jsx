
import PropTypes from 'prop-types';

const User = ({user}) => {
    const {username,email,phone,address} = user;
    return (
        <div className='bg-amber-400 p-4 rounded-md text-white mt-5'>
            <h2 className='text-2xl font-semibold'>{username}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <h2>{address.city}</h2>
        </div>
    );
};

User.propTypes = {
    user : PropTypes.object.isRequired
}

export default User;