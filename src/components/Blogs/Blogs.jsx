import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [ totalBlogs, setTotalBlogs ] = useState({});

  const allBlogs = async () => {
    const data = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@khaledshihab221"
    );
    const json = await data.json();

    console.log(json);
    setTotalBlogs(json);
  };

  useEffect(() => {
    allBlogs();
  }, []);

  return (
    <div>
      {/* <h1>All Blogs are here: {totalBlogs.items?.length}</h1> */}
      {
        totalBlogs?.items?.map(blog => <Blog  key={blog.pubDate} blog={blog}></Blog>)
      }
    </div>
  );
};

export default Blogs;
