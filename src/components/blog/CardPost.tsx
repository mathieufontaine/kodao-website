import { urlForImage } from "../../utils/sanity";
import { Post } from "../../utils/typings";

export interface Props {
  post: Post;
}

const CardPost = ({ post }: Props) => {
  console.log(post);
  return (
    <a href={`/blog/${post.slug?.current}`}>
      <div className="w-full bg-white shadow rounded-md overflow-hidden cursor-pointer transition ease-in-out mx-auto hover:shadow-4xl group">
        {post.mainImage && (
          <div className="relative pb-1/3 md:pb-1/2 group-hover:scale-105 transition">
            <img
              className="absolute"
              src={urlForImage(post.mainImage).url()}
              alt={post.title}
            />
          </div>
        )}
        <div className="p-8 overflow-hidden">
          <div className="flex items-center justify-between gap-2 ">
            <div className="flex justify-end text-white gap-2">
              {post.categories?.map((tag) => (
                <div key={tag} className="bg-accent rounded-md p-2 text-center">
                  {tag}
                </div>
              ))}
            </div>
            <p className="black">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <h4 className="mt-4">{post.title}</h4>
          {/* {
        <p className="my-3 text-sm leading-loose">
            {excerpt}
            <span className="text-gray-400 p-3">Read more..</span>
          </p>
      } */}

          <div className="flex items-center">
            <div className="relative w-10 h-10 mr-4 rounded-full overflow-hidden">
              {post.authorImage && (
                <img
                  src={urlForImage(post.authorImage).url()}
                  alt={post.authorName}
                />
              )}
            </div>
            <p className="black font-bold">{post.authorName}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardPost;
