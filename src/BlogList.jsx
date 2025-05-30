import { Link } from "react-router";

function BlogList() {
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
         
         {
          blogs.map((blog) => {
            return  <div class="group">
            <div class="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
              <img
                src={blog.bannerImage}
                alt="image"
                class="w-full"
              />
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
            <p>
             {blog.description}
            </p>

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
          })
         }

        </div>
      </div>
    </section>
  );
}

export default BlogList;
