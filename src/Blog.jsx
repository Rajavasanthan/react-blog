import { useParams } from "react-router";

function Blog() {
  const blogs = [
    {
      id: 1,
      category: "Technology",
      title: "Start here for a quick overview of everything you need to know",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam at justo ullamcorper vulputate. Donec mattis aliquam urna",
      date: "Aug 28, 2025",
      timeToRead: "1 min read",
      bannerImage:
        "https://clarity-tailwind.preview.uideck.com/images/blog-single-01.png",
      author: {
        image: "https://clarity-tailwind.preview.uideck.com/images/user-01.png",
        name: "Adrio Devid",
      },
      content: `As discussed in the introduction post, one of the best things about Ghost is just how much you can customize to turn your site into something unique. Everything about your layout and design can be changed, so you're not stuck with yet another clone of a social network profile.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam at justo ullamcorper vulputate. Donec mattis aliquam urna, sed placerat dolor volutpat vel. Maecenas posuere sem purus, quis feugiat.

Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Curabitur pretium, libero vitae pharetra rhoncus, tellus urna auctor orci, eu dictum diam diam nec neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce congue dui nec dui lobortis maximus. Morbi bibendum, nisi vel cursus.

Adipiscing elit. Nulla id quam at justo ullamcorper vulputate. Donec mattis aliquam urna, sed placerat dolor volutpat vel. Maecenas quis feugiat.

`,
    },
    {
      id: 2,
      category: "Technology",
      title: "On average, over 20 million videos are uploaded to YouTube daily",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id quam at justo ullamcorper vulputate. Donec mattis aliquam urna",
      date: "Aug 30, 2025",
      timeToRead: "2 min read",
      bannerImage:
        "https://fastly.picsum.photos/id/382/1030/550.jpg?hmac=TTCTJW-_dwiNLibPJsqcnEMOXh1ocRZi5fiuViL3ka8",
      author: {
        image: "https://clarity-tailwind.preview.uideck.com/images/user-01.png",
        name: "Adrio Devid",
      },
      content:
        "The table shows how YouTube's video count grew from 0.5 billion in 2015 to 5.1 billion in 2025. The biggest jumps happened in 2023 and 2025, with 800 million new videos each year. This growth shows how YouTube keeps expanding as a major place for online content. With over 360 hours of new videos added every minute or 518,400 hours daily. And know that the average video is about 12 minutes long, approximately 2.6 million videos are uploaded each day. This results in 77.76 million videos a month and 946 million videos per year, nearly reaching a billion",
    },
    {
      id: 3,
      category: "Technology",
      title: "Amount of YouTube Videos From 2015 to Now",
      description:
        "The list of YouTube channels with the most uploaded videos highlights creators who produce an impressive volume of content.",
      date: "Aug 12, 2025",
      timeToRead: "5 min read",
      bannerImage:
        "https://fastly.picsum.photos/id/870/1030/550.jpg?hmac=_Tfd1IqMrgZVCHGc1aLpu7-V3uf9cn7VB4DmP37UYhA",
      author: {
        image: "https://clarity-tailwind.preview.uideck.com/images/user-01.png",
        name: "Adrio Devid",
      },
      content: `These 20 channels alone account for an impressive 19.02 million videos. The channel with the most uploads, Roel Van de Paar, was recognized by Guinness World Records for the most YouTube uploads in 2022. He primarily uploads tech-related content. However, some of the channels here may not be entirely legitimate, as they could be bots that mass upload insignificant content.


Around 83 million people use YouTube daily, contributing to a total of 1 billion hours of views content each day. While the amount of daily users has not increased significantly related to the amount of videos, there has still been a 24,5% increase in users in the last 5 years.

Globally, more than 1 billion hours of video content are consumed each day, highlighting YouTube's vast reach and influence.

In the United States, 62% of users access YouTube daily, showcasing its widespread appeal.

        `,
    },
  ];
  const params = useParams();
  const blog = blogs.find(b => b.id == params.id)
  return (
    <section class="pt-31.5 pb-17.5">
      <div class="max-w-[1030px] mx-auto px-4 sm:px-8 xl:px-0">
        <div class="max-w-[770px] mx-auto text-center">
          <a
            href="category.html"
            class="inline-flex text-blue bg-blue/[0.08] font-medium text-custom-sm py-1 px-3 rounded-full mb-1"
          >
            {blog.category}
          </a>
          <h1 class="font-bold text-2xl sm:text-4xl lg:text-custom-2 text-dark mb-5">
            {blog.title}
          </h1>
          <p class="text-body">
            {blog.description}
          </p>

          <div class="flex items-center justify-center gap-4 mt-7.5">
            <div class="flex w-12.5 h-12.5 rounded-full overflow-hidden">
              <img src={blog.author.image} alt="user" />
            </div>

            <div class="text-left">
              <h4 class="font-medium text-custom-lg text-dark mb-1">
                {blog.author.name}
              </h4>
              <div class="flex items-center gap-1.5">
                <p>{blog.date}</p>
                <span class="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                <p>{blog.timeToRead}</p>
              </div>
            </div>
          </div>
        </div>

        <img src={blog.bannerImage} alt="blog" class="mt-10 mb-11" />

        <div class="max-w-[770px] mx-auto">
          <div>
           
          </div>

       {blog.content}

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
