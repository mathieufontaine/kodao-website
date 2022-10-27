import CardPost from "./CardPost";
import { Post } from "../../utils/typings";
import { useState, useEffect } from "react";

interface Props {
  posts: [Post];
  post?: Post;
}

const LatestPosts = ({ posts, post }: Props) => {
  const [latestPosts, setLatestPosts] = useState(posts.slice(0, 3));

  useEffect(() => {
    getLatestPosts();
  }, []);

  const getLatestPosts = () => {
    if (!post) setLatestPosts(posts.slice(0, 3));
    else {
      const postsArray = [];
      for (let i = 0; i < posts.length; i++) {
        if (postsArray.length < 3 && post._id !== posts[i]._id) {
          postsArray.push(posts[i]);
        }
      }
      setLatestPosts(postsArray);
    }
  };

  return (
    <section className="container p-6 md:p-10 xl:p-15 bg-white">
      <h3>Latest Articles</h3>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full">
        {latestPosts.map((post) => (
          <div key={post._id}>
            <CardPost post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
