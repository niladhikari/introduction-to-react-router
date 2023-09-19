
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className='text-center'>
            <h2>Post : {posts.length}</h2>

            <div className="grid md:grid-cols-4 gap-6 mx-10">
                {
                  posts.map(post=> <Post key={post.id} post={post}></Post>)  
                }
            </div>
        </div>
    );
};

export default Posts;