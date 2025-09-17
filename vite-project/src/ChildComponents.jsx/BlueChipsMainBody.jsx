import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import CampaignIcon from '@mui/icons-material/Campaign';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const MainBody = () => {
  const [data, setData] = useState("tiktok");

  const actionsData = [
    { icons: <ThumbUpIcon />, title: "Total Likes", points: "350,809" },
    { icons: <MarkUnreadChatAltIcon />, title: "Total Comments", points: "186,072" },
    { icons: <CampaignIcon />, title: "Total Shares", points: "120,042" },
    { icons: <VisibilityOutlinedIcon />, title: "Enggangement", points: "48,07%" },
  ]

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
              className={`${data === "tiktok" ? "text-black" : "text-gray-400"
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
              className={`${data === "instagram" ? "text-black" : "text-gray-400"
                }  flex justify-center`}
              onClick={() => setData("instagram")}
            >
              Instagram
            </li>
            <p
              className={`p-[.8px] ${data === "instagram" ? "bg-blue-700" : ""
                } `}
            ></p>
          </div>
          <div className="flex flex-col gap-1">
            <li
              className={`${data === "facebook" ? "text-black" : "text-gray-400"
                }  flex justify-center`}
              onClick={() => setData("facebook")}
            >
              Facebook
            </li>
            <p
              className={`p-[.8px] ${data === "facebook" ? "bg-blue-700" : ""
                } `}
            ></p>
          </div>
        </ul>
      </div>

      <div className="px-10 py-5 bg-gray-100 grid grid-cols-12 gap-5">
        <div className="col-span-4 grid grid-cols-2 gap-4">
          {
            actionsData?.map((ele, idx) => {
              return (
                <div className="bg-white rounded-xl">
                  <div className="p-4">
                    <div className="bg-gray-100 p-2 rounded-full w-fit mb-4">
                      {ele.icons}
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm flex px-5">{ele.title}</span>
                  <span className="text-xl flex px-5 font-semibold pb-2">{ele.points}</span>
                </div>
              )
            })
          }
        </div>

        <div className="col-span-8">
          <div className="bg-white rounded-xl grid grid-cols-12 h-full">
            <div className="col-span-3 flex flex-col justify-between" >
              <div className="p-4">
                <p className="text-sm text-gray-400" >Campaign Reach</p>
                <span className="flex text-[18px] items-end gap-1 font-semibold" >12 <p className="text-sm font-medium" >Country</p></span>

                <span className="text-gray-400 text-sm flex mt-5">User Reached</span>
                <span className="text-[18px] flex font-semibold pb-2 gap-1">180,807,839 <span className="text-sm font-medium flex items-end" >user</span></span>

                <span className="text-gray-400 text-sm flex mt-5">Period</span>
                <span className="flex text-[18px] items-end gap-1 font-semibold" >9 <p className="text-sm font-medium" >month</p></span>
              </div>
              <div className="p-4" >
                <p className="text-sm text-gray-400 mb-2" >Updated 2s ago</p>
                <span className="flex items-center text-blue-600 text-sm" ><RestartAltIcon sx={{ fontSize: 18 }} /> Click to refresh</span>
              </div>
            </div>

            <div className="col-span-9 p-4" >
              <img className="h-70 w-full" src="https://www.mapsofworld.com/maps/world-map.jpg" />
            </div>

          </div>
        </div>
      </div>

      <div className="px-10 py-5 bg-gray-100 grid grid-cols-12 gap-5">
        <div className="col-span-12 grid grid-cols-3 gap-4">
          <div>
            <div className="bg-white rounded-t-xl flex justify-between py-3 px-5">
              <span className="text-sm" >Influencer</span>
              <span className="text-sm text-blue-600">+ Add Influencer</span>
            </div>

            <div className="px-5 flex justify-between" >
              <div>
                <p className="text-[12px] text-gray-500" >NAME</p>
              </div>
              <div className="flex gap-5" >
                <p className="text-[12px] text-gray-500" >PROJECTS</p>
                <p className="text-[12px] text-gray-500" >FOLLOWER</p>
              </div>
            </div>

            <div className="bg-white rounded-b-xl flex py-3 px-5">
              <div className="flex flex-row justify-between" >
                <div><span>hasuhdfkha</span></div>
                <div><span>hasuhdfkha</span></div>
                {/* <div className="" >
                  <div className="h-8 w-8" >
                    <img className="h-full w-full object-cover rounded-full" src="https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_640.jpg" />
                  </div>
                  <span className="text-sm" >Influencer</span>
                </div>
                <div className="flex" >
                  <p>jghgsdjfghj</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-span-8">
          <div className="bg-white rounded-xl grid grid-cols-12 h-full">
            <div className="col-span-3 flex flex-col justify-between" >
              <div className="p-4">
                <p className="text-sm text-gray-400" >Campaign Reach</p>
                <span className="flex text-[18px] items-end gap-1 font-semibold" >12 <p className="text-sm font-medium" >Country</p></span>

                <span className="text-gray-400 text-sm flex mt-5">User Reached</span>
                <span className="text-[18px] flex font-semibold pb-2 gap-1">180,807,839 <span className="text-sm font-medium flex items-end" >user</span></span>

                <span className="text-gray-400 text-sm flex mt-5">Period</span>
                <span className="flex text-[18px] items-end gap-1 font-semibold" >9 <p className="text-sm font-medium" >month</p></span>
              </div>
              <div className="p-4" >
                <p className="text-sm text-gray-400 mb-2" >Updated 2s ago</p>
                <span className="flex items-center text-blue-600 text-sm" ><RestartAltIcon sx={{ fontSize: 18 }} /> Click to refresh</span>
              </div>
            </div>

            <div className="col-span-9 p-4" >
              <img className="h-70 w-full" src="https://www.mapsofworld.com/maps/world-map.jpg" />
            </div>

          </div>
        </div> */}
      </div>

    </div>
  );
};

export default MainBody;
