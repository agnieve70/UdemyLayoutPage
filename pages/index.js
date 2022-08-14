/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "../components/button";
import Card from "../components/card";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="w-full">
      <div className="absolute top-0 z-0 lg:h-[750px] lg:bg-none bg-gradient-to-r from-[#1d0851] to-[#543dcb] h-screen  w-full overflow-hidden">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#1d0851"></stop>
              <stop offset="95%" stopColor="#543dcb"></stop>
            </linearGradient>
          </defs>
          <path
            d="M-8.74,155.44 C198.93,36.03 346.22,254.13 501.41,66.63 L500.00,0.00 L0.00,0.00 Z"
            fill="url(#gradient)"
          ></path>
        </svg>
      </div>

      <div className="relative">
        <div className="relative z-30 lg:mt-28 mt-5 lg:ml-10 ml-0 px-10 pb-10 lg:w-1/2 w-full">
          <h1 className="text-base text-yellow1 font-semibold">HOT UDEMY COUPONS-</h1>
          <h1 className="text-white text-4xl font-bold mb-1">
            Up to <span className="text-pink1">95% Off</span> Muslim
          </h1>
          <h1 className="text-white text-4xl font-bold mb-5">
            Helalee's Udemy Courses
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            aliquid quidem esse accusamus rerum non eaque et, unde quos iusto,
            suscipit adipisci, necessitatibus tempora expedita. Ipsum libero
            alias quasi ea? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. A, itaque? Eveniet aspernatur ipsa alias veniam! Pariatur
            corrupti aut commodi ratione voluptatem, doloremque, laborum
            officiis error et porro ipsam eius delectus.
          </p>
        </div>
        <div className="absolute mt-14 z-20 top-5 right-0 drop-shadow-lg">
          <Image
            alt="udemy image"
            width={680}
            height={500}
            src="/picture1.png"
            className="lg:blur-none blur-md lg:brightness-100 brightness-50"
          />
        </div>
        <div className="relative z-10  w-full">
          <div className="bg-darkblue1 w-full lg:px-20 px-10 py-5 ">
            <div className="flex lg:w-3/5 w-full flex-wrap space-y-2 lg:justify-between justify-center items-center">
              <div>
                <h1 className="text-white">
                  <span className="text-pink1 font-bold text-lg text-center">
                    Hurry!
                  </span>{" "}
                  and save up <br />
                  to{" "}
                  <span className="text-pink1 font-bold text-center">
                    95% off
                  </span>
                </h1>
              </div>
              <div>
                <h1 className="text-white text-4xl font-bold tracking-widest">
                  03 : 42 : 17
                </h1>
                <div className="flex justify-between">
                  <p className="text-xs text-white">HOURS</p>
                  <p className="text-xs text-white">MINUTES</p>
                  <p className="text-xs text-white">SECONDS</p>
                </div>
              </div>
              <div>
                <Button title={"VIEW DEAL"} />
              </div>
            </div>
            
          </div>
          <div className="lg:w-3/5 w-full flex justify-center">
              <div>
                <span className="text-sm text-white text-center mt-3 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  30-DAY MONEY BACK GUARANTEE
                </span>
              </div>
            </div>
        </div>
        <div className="relative lg:mt-20 mt-5 lg:ml-20 z-30 lg:w-3/4 w-full">
          <div className="flex justify-start flex-wrap">
            <Card
              image={"/cardPictures/sass.png"}
              off={95}
              title={
                "The Modern Flexbox, Grid, Sass & Animations Developer Course"
              }
            />
            <Card
              image={"/cardPictures/python.jpg"}
              off={95}
              title={"Python Developer Bootcamp in 2021 - Beginner to Expert"}
            />
            <Card
              image={"/cardPictures/js.jpg"}
              off={95}
              title={
                "JavaScript Developer Bootcamp in 2021 - Beginner to Expert"
              }
            />
            <Card
              image={"/cardPictures/html_css.jpg"}
              off={95}
              title={"The Ultimate HTML5 Elements & CSS3 Properties BOOTCAMP"}
            />
          </div>
          <div className="my-8 flex justify-center">
            <Button size={"20"} outline={true} title={"VIEW MORE COURSE"} />
          </div>
          <div>
            <p className="text-sm text-center text-slate-400 lg:px-40 px-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              ipsam porro aut pariatur esse eaque mollitia repellendus, incidunt
              id, fugit corporis culpa vero excepturi error voluptatibus, ex ad
              ipsa magnam. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Architecto iure sit consequuntur optio harum sequi ab
              explicabo minus sunt possimus voluptatem, aut, facere ratione a
              beatae, placeat perferendis laborum? Nisi!
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-20 z-10 min-h-40 bg-secondary1 lg:p-20 p-5">
        <div className="flex lg:justify-start justify-center flex-wrap">
          <div className="mr-0 lg:w-1/4 w-full lg:relative flex justify-center items-baseline">
            <img
              className="rounded-full lg:w-1/2 w-3/5"
              src={"/profile.jpg"}
              alt="myprofile"
              style={{ border: "3px solid white" }}
            />
          </div>
          <div className="lg:w-2/3 w-full">
            <div className="lg:w-5/6 w-full px-5 space-y-5">
              <div className="flex lg:justify-between justify-center flex-wrap">
                <div className="space-y-5 lg:mb-0 mb-3">
                  <h1 className="text-3xl text-white font-bold lg:text-left text-center">
                    AG Nieve
                  </h1>
                  <p className="text-white lg:text-left text-center items-center">
                    Full Stack Web Developer & Instructor
                  </p>
                </div>
                <div className="bg-white lg:py-2 py-1 px-5 text-center m-auto">
                  <Image
                    src={"/logo.png"}
                    width={100}
                    height={38}
                    alt="udemyLogo"
                  />
                </div>
              </div>
              <p className="text-white">Hi Everyone!</p>
              <p className="text-white text-justify leading-7">
                I am super excited to be here among the most well-known and
                vibrant community on the planet. Udemy is all about knowledge
                and how to utilize in an efficient manner.
              </p>
              <p className="text-white text-justify leading-7">
                Well, I don't come from a Computer Science or Software
                Engineering kind of background. I have studied Mechanical
                Engineering. But, due to my passion and love for coding, I got
                into programming right after I graduated.
              </p>
              <p className="text-white text-justify leading-7">
                I come from a very poor family and country and it is very hard
                to find quality education in Afghanistan especially in the CS/SE
                field. You can imagine how hard it has been to get to where I am
                today. After I came back to my country, I started teaching Web
                Development with the goal of helping those who love to code, who
                love to create something amazing but are unable because of their
                circumstances [...]
              </p>
              <div className="flex lg:justify-between justify-center lg:flex-nowrap flex-wrap lg:space-y-0 space-y-5 lg:space-x-8 space-x-0">
                <Button
                  title={"MORE ABOUT ME"}
                  color={"bg-secondary1"}
                  addClass={"border-white border-2"}
                />
                <Button title={"VIEW ALL COURSES"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
