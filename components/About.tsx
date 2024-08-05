import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="bg-[#004D43]">
      <div className="bg-[#CDEA68] py-28 w-full rounded-t-[1rem]">
        <h2 className="text-6xl px-20 leading-[4vw] font-extralight">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to
          <span className="underline"> raise funds</span>,
          <span className="underline"> sell products</span>,
          <span className="underline"> explain complex ideas</span>, and
          <span className="underline"> hire great people</span>.
        </h2>

        <div className="w-full border-t-[1px] flex border-zinc-500 h-[49vh] mt-20 pt-10 px-20 text-lg ">
          <div className="left w-1/2">What you can expect:</div>
          <div className="right w-1/2 flex gap-60">
            <p className="w-[18vw]">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people. <br />
              <br />
              <br />
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
            <div className="mt-28 ">
              <h1>Socials</h1>
              <br />
              <div className="flex flex-col underline">
                {[
                  {
                    name: "Instagram",
                    link: "https://www.instagram.com/ochi_design/",
                  },
                  {
                    name: "Behance",
                    link: "https://www.behance.net/ochi_design",
                  },
                  {
                    name: "Facebook",
                    link: "https://www.facebook.com/OCHI-presentation-design-103605044779378/",
                  },
                  {
                    name: "Linkedin",
                    link: "https://www.linkedin.com/company/56403597",
                  },
                ].map((item) => (
                  <a href={item.link} className="text-start" key={item.name}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t-[1px] border-zinc-500 h-[60vh] pt-5 px-20 text-lg">
          <div className="flex">
            <div className="left w-1/2">
              <h1 className="text-6xl">Our approach:</h1>
              <br />
              <motion.button
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="bg-black rounded-full px-6 text-white flex gap-12 items-center  py-6"
              >
                READ MORE
                <motion.div
                  whileHover={{ scale: 4 }}
                  className="cricle h-3 w-3 rounded-full bg-white"
                ></motion.div>
              </motion.button>
            </div>

            <motion.div className="right w-1/2">
              <motion.img
                src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                alt="Description of the image"
                className="bg-center bg-cover rounded-3xl w-full"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
