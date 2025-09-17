import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const MainBody = () => {
  const [data, setData] = useState("tiktok");

  return (
    <div>
      <div className="flex justify-between py-5 px-10">
        <div className="flex gap-3 items-center">
          <div className="text-gray-400">
            <KeyboardArrowLeftIcon />
          </div>
          <div className="h-9 w-9 rounded-full bg-red-600 object-cover">
            <div className="h-full w-full object-cover rounded-full flex justify-center items-center text-white">
              <FormatColorTextIcon />
            </div>
          </div>
          <div className="">
            <p className="font-semibold">Blue Chips Chicago</p>
            <span className="text-gray-400 text-sm">
              Diam nullam quis nunc et pretium augue.
            </span>
          </div>
        </div>
        <div className="flex items-end">
          <ul className="flex gap-5 items-end">
            <li className="flex gap-2 text-sm items-center text-gray-400">
              Status{" "}
              <button className="bg-green-100 text-green-600 py-1 px-3 rounded-md">
                Active
              </button>
            </li>
            <li className="flex text-sm items-center text-gray-400">
              Created on{" "}
              <span className="py-1 px-3 rounded-md text-black">
                August 20, 2021
              </span>
            </li>
            <li>
              <MoreVertIcon sx={{ color: "gray" }} />
            </li>
          </ul>
        </div>
      </div>

      <div className="px-20 border-b border-gray-200">
        <ul className="flex gap-8 text-sm">
          <div className="flex flex-col gap-1">
            <li
              className={`${
                data === "tiktok" ? "text-black" : "text-gray-400"
              }  flex justify-center`}
              onClick={() => setData("tiktok")}
            >
              Tiktok
            </li>
            <p
              className={`p-[.8px] ${data === "tiktok" ? "bg-blue-700" : ""} `}
            ></p>
          </div>
          <div className="flex flex-col gap-1">
            <li
              className={`${
                data === "instagram" ? "text-black" : "text-gray-400"
              }  flex justify-center`}
              onClick={() => setData("instagram")}
            >
              Instagram
            </li>
            <p
              className={`p-[.8px] ${
                data === "instagram" ? "bg-blue-700" : ""
              } `}
            ></p>
          </div>
          <div className="flex flex-col gap-1">
            <li
              className={`${
                data === "facebook" ? "text-black" : "text-gray-400"
              }  flex justify-center`}
              onClick={() => setData("facebook")}
            >
              Facebook
            </li>
            <p
              className={`p-[.8px] ${
                data === "facebook" ? "bg-blue-700" : ""
              } `}
            ></p>
          </div>
        </ul>
      </div>

      <div className="px-10 py-5 bg-gray-100 grid grid-cols-12 ">
        <div className="col-span-2">
          <div className="col-span-2 bg-gray-300 p-3">
            <div className="bg-gray-600 rounded-xl col-span-2">
              <div className="p-5">
                <div className="bg-gray-100 p-2 rounded-full w-fit mb-5">
                  <ThumbUpIcon />
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-sm flex px-5">
                  Total Likes
                </span>
                <p className="text-2xl flex px-5 font-semibold pb-2">350,809</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl col-span-2">
              <div className="p-5">
                <div className="bg-gray-100 p-2 rounded-full w-fit mb-5">
                  <ThumbUpIcon />
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-sm flex px-5">
                  Total Likes
                </span>
                <p className="text-2xl flex px-5 font-semibold pb-2">350,809</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-8">
          <div className="col-span-4 bg-gray-300 p-3">
            <div className="bg-gray-600 rounded-xl col-span-2">
              <div className="p-5">
                <div className="bg-gray-100 p-2 rounded-full w-fit mb-5">
                  <ThumbUpIcon />
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-sm flex px-5">
                  Total Likes
                </span>
                <p className="text-2xl flex px-5 font-semibold pb-2">350,809</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
