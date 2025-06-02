import { useEffect, useState } from "react";
import { Link } from "react-router";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogPosts = async () => {
    try {
      const blogData = await fetch(
        "https://6461c1c2491f9402f4aa0565.mockapi.io/blogs"
      );
      const blogList = await blogData.json();
      setBlogs(blogList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <section class="pt-34 pb-17.5">
      <div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div class="max-w-[770px] mx-auto w-full text-center mb-12.5">
          <h1 class="font-bold text-heading-6 sm:text-heading-4 lg:text-heading-3 text-dark mb-4">
            Archive
          </h1>
          <p>See all posts we have ever written.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7.5">
          {blogs.map((blog) => {
            return (
              <div class="group">
                <div class="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                  <img src={blog.bannerImage} alt="image" class="w-full" />
                </div>

                <h4>
                  <Link
                    to={`/blog/${blog.id}`}
                    class="block text-dark font-bold text-xl mb-3.5"
                  >
                    <span class="bg-linear-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                      {blog.title}
                    </span>
                  </Link>
                </h4>
                <p>{blog.description}</p>

                <div class="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                  <div class="flex items-center gap-2.5">
                    <div class="flex items-center gap-3">
                      <div class="flex w-6 h-6 rounded-full overflow-hidden">
                        <img src={blog.author.image} alt="user" />
                      </div>
                      <p class="text-sm">{blog.author.name}</p>
                    </div>

                    <span class="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>

                    <p class="text-sm">{blog.date}</p>
                  </div>
                  <span class="inline-flex text-blue bg-blue/[0.08] font-medium text-sm py-1 px-3 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BlogList;
