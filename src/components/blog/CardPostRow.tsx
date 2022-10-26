import { urlForImage } from "../../utils/sanity";

import { Post } from "../../utils/typings";

export interface Props {
  post: Post;
}

const Row = ({ post }) => {
  return (
    <a href={`/blog/${post.slug?.current}`}>
      <div
        className="my-2 grid grid-cols-[1fr,2fr] sm:grid-cols-[1fr,3fr] gap-2 bg-white shadow rounded-md overflow-hidden cursor-pointer 
      transition ease-in-out mx-auto hover:shadow-4xl group"
      >
        {post.mainImage && (
          <div className="relative pb-1/3 group-hover:scale-105 transition">
            <img
              className="absolute"
              src={post.mainImage.asset.url}
              alt={post.title}
            />
          </div>
        )}
        <div className="p-4 md:p-4 lg:p-8 overflow-hidden">
          <div className="flex items-center justify-between gap-2 text-xs md:text-sm ">
            <div className="flex justify-end text-white gap-2">
              {post.categories?.map((tag, index) => (
                <div
                  key={index}
                  className="bg-accent rounded-md p-2 text-center"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="black">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>

          <h4 className=" md:text-xl lg:text-2xl leading-relaxed my-2 pb-0 md:my-4">
            {post.title}
          </h4>
          {/* <p className="my-3 text-sm leading-loose">
            {post.excerpt}
            <span className="text-gray-400 p-3">Read more..</span>
          </p> */}

          <div className="flex items-center">
            <div className="relative w-10 h-10 mr-4 rounded-full overflow-hidden">
              <img
                className="absolute"
                src={urlForImage(post.authorImage.asset._ref).url()}
                alt={post.authorName}
              />
            </div>
            <span className="black ont-bold">{post.authorName}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Row;
