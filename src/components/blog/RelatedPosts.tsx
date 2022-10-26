import CardPostRow from "./CardPostRow";
import { getMultipleRandom } from "../../utils/helpers";

import { Post } from "../../utils/typings";
interface Props {
  posts: [Post];
  category: String;
}

const RelatedPosts = ({ posts, category }: Props) => {
  const relatedPosts = getMultipleRandom(
    posts.filter(
      (post) => post.categories.findIndex((cat) => cat === category) !== -1
    ),
    3
  );

  return (
    <section className="container p-6 md:p-10 xl:p-15">
      <h3 className="text-white">
        Related Articles: <span class="black">{`"${category}"`}</span>
      </h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-8 gap-3 mx-auto w-full">
        {relatedPosts?.map((post) => (
          <div>
            <CardPostRow post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
