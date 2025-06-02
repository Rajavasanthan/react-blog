import { useEffect, useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Name changed")
  },[name])

  useEffect(() => {
    console.log("email changed")
  },[email])

  useEffect(() => {
    console.log("password Changed")
  },[password])


  return (
    <section class="pt-5 lg:pt-5 pb-15 lg:pb-20 bg-gray">
      <div class="max-w-[520px] mx-auto px-4 sm:px-8 xl:px-0">
        <div class="mt-6">
          <form>
            <div class="mb-4">
              <label
                for="name"
                class="block font-medium text-dark text-custom-sm mb-3"
              >
                Name
              </label>
              <input
                type="name"
                placeholder="Enter your name"
                class="rounded-md border border-gray-4 bg-white placeholder:text-dark-2 w-full py-3.5 px-6 outline-hidden duration-200 focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div class="mb-4">
              <label
                for="email"
                class="block font-medium text-dark text-custom-sm mb-3"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                class="rounded-md border border-gray-4 bg-white placeholder:text-dark-2 w-full py-3.5 px-6 outline-hidden duration-200 focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div class="mb-6">
              <label
                for="password"
                class="block font-medium text-dark text-custom-sm mb-3"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                class="rounded-md border border-gray-4 bg-white placeholder:text-dark-2 w-full py-3.5 px-6 outline-hidden duration-200 focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              class="w-full rounded-md text-white font-medium flex justify-center py-3.5 px-5 bg-dark hover:opacity-90 transition-all duration-200"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
