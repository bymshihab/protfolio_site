import parse from "html-react-parser";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Blog = (blog) => {
  const { title, guid, description } = blog.blog;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  // console.log(blog);
  return (
    <div className="mt-5 card  bg-base-100 border border-gray-200 shadow-lg space-y-2 m-2  p-5">
      <p className="text-3xl font-bold">{title}</p>

      <Link
        className="mt-2 flex w-36 border items-center p-1 hover:bg-gray-100 hover:underline"
        to={guid}
      >
        <p>Medium Post</p>
        <span className="mx-2">
          <GoArrowUpRight />
        </span>
      </Link>

      {showFullDescription ? (
        <p> {parse(description)}</p>
      ) : (
        <p>{parse(description.slice(0, 200))}...</p>
      )}

      <button className="btn btn-primary" onClick={toggleDescription}>
        {showFullDescription ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default Blog;
