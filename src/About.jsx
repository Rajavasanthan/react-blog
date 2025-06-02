import { useEffect } from "react";

function About() {
  useEffect(() => {
    console.log("This is coming from about component while mount")
  },[])
  return (
    <section class="overflow-hidden pt-39 pb-17.5">
      <div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div class="flex flex-col lg:flex-row items-center gap-7.5 xl:gap-14">
          <div class="lg:max-w-[570px] w-full">
            <img src="https://clarity-tailwind.preview.uideck.com/images/about.png" alt="about" class="w-full" />
          </div>

          <div class="lg:max-w-[490px] w-full">
            <span class="inline-flex text-primary font-medium text-xl mb-2.5">
              Who we are
            </span>
            <h1 class="font-bold text-heading-6 sm:text-heading-4 lg:text-heading-3 text-dark mb-5">
              We provide high quality Articles &amp; blogs
            </h1>
            <p>
              Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos congue dui nec dui lobortis
              maximus.
            </p>
            <p class="mt-4.5">
              Curabitur pretium, libero vitae pharetra rhoncus, tellus urna
              auctor orci, eu dictum diam diam nec neque. Pellentesque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
