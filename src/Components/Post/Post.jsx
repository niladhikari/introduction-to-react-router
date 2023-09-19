import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="bg-cyan-400 p-4 rounded-md text-white mt-5 flex flex-col">
      <h2 className="text-2xl font-semibold">UserId : {id}</h2>
      <h2 className="text-xl font-semibold">Title : {title}</h2>
      <h2>{body}</h2>
      <div className="flex-grow">
        <Link to={`/post/${id}`}>
          <button className="bg-blue-600 p-3 font-bold rounded-md mt-3">
            Click Me
          </button>
        </Link>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
