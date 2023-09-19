import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div className="text-center text-white font-bold">
            <h3>Post details about: {id}</h3>
            <p>Title: {title}</p>
            <p className="font-medium"><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;