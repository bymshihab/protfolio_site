import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

// import { FaHtml5 } from "react-icons/fa6";
const Home = () => {
  return (
    <div>
      <div>
        {/* name */}
        <div>
          <h1 className="text-4xl text-center mt-4 text-wrap ">
            Hi, I am Khaled Jubair Shihab
          </h1>
        </div>

        {/* border */}
        <div className="flex justify-center">
          <div className=" border border-gray-400 mt-2 w-1/6"></div>
        </div>

        {/* images and social media */}
        <div className="flex justify-center iteams-center space-x-4 mt-10">
          <div>
            <img
              src={"/src/assets/img/image.png "}
              className="w-26 rounded-full  mt-2"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center iteams-center gap-3">
            <Link to={"https://www.linkedin.com/in/khaled-jubair/"}>
              <FaLinkedin />
            </Link>
            <Link to={"https://github.com/bymshihab"}>
              <FaGithub />
            </Link>
            <Link to={"https://twitter.com/SHIHAB2212"}>
              <BsTwitterX />
            </Link>
          </div>
        </div>

        {/* About Me */}
        <section className="bg-gray-100 py-12 mt-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-justify">
              <p className="text-base text-gray-700 leading-relaxed">
                I’m particularly skilled in developing user-friendly web apps,
                focusing on{" "}
                <strong className="underline decoration-gray-600 hover:decoration-blue-400">
                  JavaScript and libraries
                </strong>{" "}
                like React and Redux Toolkit. I prioritize responsive design
                using Bootstrap/TailwindCSS and utilize{" "}
                <strong className="underline decoration-gray-600 hover:decoration-blue-400">
                  Lazy Loading
                </strong>{" "}
                for enhanced performance. With Git, I adeptly handle code
                updates and guide teams toward peak performance. Additionally, I{" "}
                <strong className="underline decoration-gray-600 hover:decoration-blue-400">
                  {" "}
                  excel in testing
                </strong>{" "}
                from the developer side using Jest, ensuring robust and reliable
                code. My experience spans across{" "}
                <strong className="underline decoration-gray-600 hover:decoration-blue-400">
                  {" "}
                  over 10 different projects
                </strong>
                , providing me with a diverse range of challenges and solutions
                to draw from.
              </p>
            </div>
          </div>
        </section>

        {/* Exprience */}
        <section className=" py-8 px-4 sm:px-6 lg:px-8 border">
          <div className="text-center ">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Exprience
            </h2>

            <div className="flex justify-center">
              <div className=" border border-gray-400  w-1/12 mb-2"></div>
            </div>
          </div>

          <div className="space-y-2 mt-2">
            <p className="text-center text-2xl">Associate Software Engineer</p>
            <p className="text-center text-sm">NDE Steel Structures Ltd.<span className="italic">(Dec, 2022 - Present)</span></p>
          </div>
        </section>

        {/* what technologies I used:  */}
        <section className=" py-8 px-4 sm:px-6 lg:px-8 border">
          <div className="text-center ">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Skills Overview
            </h2>

            <div className="flex justify-center">
              <div className=" border border-gray-400  w-1/12 mb-4"></div>
            </div>
          </div>

          <div className="  grid grid-cols-1 md:grid-cols-2 ">
            <div className="">
              <p className="text-end mx-6">Language:</p>
            </div>
            <div className=" mx-2">
              <p>HTML, CSS, JavaScript, TypeScript</p>
            </div>
          </div>
          <div className="  grid grid-cols-1 md:grid-cols-2 ">
            <div className="">
              <p className="text-end mx-6">Library:</p>
            </div>
            <div className=" mx-2">
              <p>React, Redux Bootstrap, Tailwind CSS</p>
            </div>
          </div>
          <div className="  grid grid-cols-1 md:grid-cols-2 ">
            <div className="">
              <p className="text-end mx-6">Database:</p>
            </div>
            <div className=" mx-2">
              <p>MSSQL</p>
            </div>
          </div>


          <div className="  grid grid-cols-1 md:grid-cols-2 ">
            <div className="">
              <p className="text-end mx-6">Testing Library:</p>
            </div>
            <div className=" mx-2">
              <p>Jest</p>
            </div>
          </div>

          <div className="  grid grid-cols-1 md:grid-cols-2 ">
            <div className="">
              <p className="text-end mx-6">Concept:</p>
            </div>
            <div className=" mx-2">
              <p>OOP, Datastructure and Algorithm</p>
            </div>
          </div>
         
        </section>


   

        {/* Education */}
        <section className=" py-8 px-4 sm:px-6 lg:px-8 border">
          <div className="text-center ">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Education
            </h2>

            <div className="flex justify-center">
              <div className=" border border-gray-400  w-1/12 mb-2"></div>
            </div>
          </div>

          <div className="space-y-2 mt-2">
            <p className="text-center text-2xl">United International University</p>
            <p className="text-center text-sm">B.Sc in Computer Science and Engineering</p>
          </div>
        </section>


      </div>
    </div>
  );
};

export default Home;
