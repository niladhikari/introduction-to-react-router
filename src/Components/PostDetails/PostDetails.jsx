import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate()
    const {id, title, body} = post;

    const handleGoBack = ()=>{
        navigate(-1);
    }
    return (
        <div className="text-center text-white font-bold">
            <h3>Post details about: {id}</h3>
            <p>Title: {title}</p>
            <p className="font-medium"><small>{body}</small></p>
            <button onClick={handleGoBack}
            className='bg-blue-600 p-3 font-bold rounded-md mt-3'>
                Go Back</button>
        </div>
    );
};

export default PostDetails;