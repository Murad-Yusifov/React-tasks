import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const News = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-[80%] h-[180px] flex items-center">
        <div className="w-full flex flex-col">
          <span className="text-4xl font-bold pb-2">Popular Item in the market</span>
          <h2 className="text-4xl font-bold pb-2">
            Latest <span className="border-b border-purple-500 border-b-[4px]">News</span>
          </h2>
        </div>
      </div>
      <div className="w-[70%] flex justify-around items-center">
        {/** Card 1 */}
        <div className="w-[27%] h-[500px] cursor-pointer group">
          <div>
            <img
              className="w-full"
              src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png"
              alt=""
            />
            <div className="h-2/4 pl-4 flex flex-col justify-around gap-4">
              <div className="w-2/3 flex gap-4 p-3 pb-0 text-gray-500 text-gray-500">
                <span>By Admin</span>
                <span className="flex items-center">
                  <IoChatbubbleEllipsesOutline /> 2 Comments
                </span>
              </div>
              <p className="text-2xl group-hover:text-purple-400 transition">
                The Richland Center Shooping News and weekly shooper
              </p>
              <p className="text-gray-600">
                Let one fifth i bring fly to divided face for bearing divide
                unto seed. Winged divided light Forth.
              </p>
              <span className="text-2xl cursor-pointer relative overflow-hidden group-hover:text-purple-400 transition">
                Read More{" "}
                <FaLongArrowAltRight className="inline-block group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </div>
        </div>

        {/** Card 2 */}
        <div className="w-[27%] h-[500px] cursor-pointer group">
          <div>
            <img
              className="w-full"
              src="https://preview.colorlib.com/theme/aroma/img/blog/blog2.png"
              alt=""
            />
            <div className="h-2/4 pl-4 flex flex-col justify-around gap-4">
              <div className="w-2/3 flex gap-4 p-3 pb-0 text-gray-500">
                <span>By Admin</span>
                <span className="flex items-center">
                  <IoChatbubbleEllipsesOutline /> 2 Comments
                </span>
              </div>
              <p className="text-2xl group-hover:text-purple-400 transition">
                The Richland Center Shooping News and weekly shooper
              </p>
              <p className="text-gray-600">
                Let one fifth i bring fly to divided face for bearing divide
                unto seed. Winged divided light Forth.
              </p>
              <span className="text-2xl cursor-pointer relative overflow-hidden group-hover:text-purple-400 transition">
                Read More{" "}
                <FaLongArrowAltRight className="inline-block group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </div>
        </div>

        {/** Card 3 */}
        <div className="w-[27%] h-[500px] cursor-pointer group">
          <div>
            <img
              className="w-full"
              src="https://preview.colorlib.com/theme/aroma/img/blog/blog3.png"
              alt=""
            />
            <div className="h-2/4 pl-4 flex flex-col justify-around gap-4">
              <div className="w-2/3 flex gap-4 p-3 pb-0 text-gray-500">
                <span>By Admin</span>
                <span className="flex items-center">
                  <IoChatbubbleEllipsesOutline /> 2 Comments
                </span>
              </div>
              <p className="text-2xl group-hover:text-purple-400 transition">
                The Richland Center Shooping News and weekly shooper
              </p>
              <p className="text-gray-600">
                Let one fifth i bring fly to divided face for bearing divide
                unto seed. Winged divided light Forth.
              </p>
              <span className="text-2xl cursor-pointer relative overflow-hidden group-hover:text-purple-400 transition">
                Read More{" "}
                <FaLongArrowAltRight className="inline-block group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
