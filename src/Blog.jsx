import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Blog() {
  const params = useParams();
  const [blog, setBlog] = useState();
  const fetchIndividualBlog = async (id) => {
    try {
      const getBlogData = await fetch(
        `https://6461c1c2491f9402f4aa0565.mockapi.io/blogs/${id}`
      );
      const getBlogDetails = await getBlogData.json();
      setBlog(getBlogDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchIndividualBlog(params.id);
  }, []);
  return (
    <section class="pt-31.5 pb-17.5">
      <div class="max-w-[1030px] mx-auto px-4 sm:px-8 xl:px-0">
        <div class="max-w-[770px] mx-auto text-center">
          <a
            href="category.html"
            class="inline-flex text-blue bg-blue/[0.08] font-medium text-custom-sm py-1 px-3 rounded-full mb-1"
          >
            {blog?.category}
          </a>
          <h1 class="font-bold text-2xl sm:text-4xl lg:text-custom-2 text-dark mb-5">
            {blog?.title}
          </h1>
          <p class="text-body">{blog?.description}</p>

          <div class="flex items-center justify-center gap-4 mt-7.5">
            <div class="flex w-12.5 h-12.5 rounded-full overflow-hidden">
              <img src={blog?.author.image} alt="user" />
            </div>

            <div class="text-left">
              <h4 class="font-medium text-custom-lg text-dark mb-1">
                {blog?.author.name}
              </h4>
              <div class="flex items-center gap-1.5">
                <p>{blog?.date}</p>
                <span class="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                <p>{blog?.timeToRead}</p>
              </div>
            </div>
          </div>
        </div>

        <img src={blog?.bannerImage} alt="blog" class="mt-10 mb-11" />

        <div class="max-w-[770px] mx-auto">
          <div></div>

          {blog?.content}

          <button class="flex justify-center font-medium text-dark border border-dark rounded-md py-3 px-7.5 hover:bg-dark hover:text-white ease-in duration-200 mx-auto mt-10">
            View all Posts
          </button>

          <div class="border-t border-gray-3 pt-10 mt-12.5">
            <div class="flex flex-col sm:flex-row sm:items-center gap-9">
              <div class="max-w-[133px] w-full h-[133px] rounded-full flex items-center justify-center border border-gray-3">
                <a
                  href="author.html"
                  class="max-w-[97px] w-full h-[97px] shadow-img rounded-full overflow-hidden"
                >
                  <img src="images/user-01.png" alt="user" />
                </a>
              </div>

              <div>
                <h4 class="font-medium text-custom-lg text-dark mb-3">
                  Adrio Devid
                </h4>
                <p>
                  Breakfast procuring no end happiness allowance assurance
                  frank. Met simplicity nor difficulty unreserved who.
                </p>
                <a
                  href="author.html"
                  class="flex text-custom-sm text-primary mt-4"
                >
                  View profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
