import CardPostRow from "./CardPostRow";
import { getMultipleRandom } from "../../utils/helpers";
import { useState, useEffect } from "react";

import { Post } from "../../utils/typings";
interface Props {
  post: Post;
  posts: [Post];
  category: String;
}

const RelatedPosts = ({ post, posts, category }: Props) => {
  const [relatedPosts, setRelatedPosts] = useState();

  useEffect(() => {
    getRelatedPosts();
  }, []);

  const getRelatedPosts = () => {
    const filteredPosts = posts.filter(
      (el) =>
        el._id !== post._id &&
        el.categories.findIndex((cat) => cat === category) !== -1
    );
    setRelatedPosts(getMultipleRandom(filteredPosts, 3));
  };

  return (
    <section className="container p-6 md:p-10 xl:p-15">
      {relatedPosts?.length > 0 && (
        <>
          <h3 className="text-white">
            Related Articles: <span className="black">{`"${category}"`}</span>
          </h3>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-8 gap-3 mx-auto w-full">
            {relatedPosts?.map((post) => (
              <div>
                <CardPostRow post={post} />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default RelatedPosts;
