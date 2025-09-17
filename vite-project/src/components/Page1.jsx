import DriveFileMoveOutlineIcon from "@mui/icons-material/DriveFileMoveOutline";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AutoDeleteOutlinedIcon from "@mui/icons-material/AutoDeleteOutlined";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

import DiscFullOutlinedIcon from "@mui/icons-material/DiscFullOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import BasicTable from "./MuiTable";
import Navbar from "./Navbar";

const Page1 = () => {
  const accessData = [
    {
      fileImage: <FolderZipIcon sx={{ fontSize: 30 }} />,
      title: "Studio Work",
      description: "2.3 GB . 23 items",
    },
    {
      fileImage: <FolderZipIcon sx={{ fontSize: 30 }} />,
      title: "Source",
      description: "1.2 MB . 1 item",
    },
    {
      fileImage: <FolderZipIcon sx={{ fontSize: 30 }} />,
      title: "Studio Work",
      description: "241 MB . 8 items",
    },
    {
      fileImage: <FolderZipIcon sx={{ fontSize: 30 }} />,
      title: "Great Studios Pitch...",
      description: "12.3 MB . pptx",
    },
  ];

  return (
    <div className="bg-[#ECECEC] h-screen px-5 py-2">
      <Navbar />
      <div className="grid grid-cols-12 px-4 gap-5">
        {/* First component */}
        <div className="col-span-2 bg-white p-4 rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between px-2 text-blue-700 bg-blue-200 text-sm py-2 rounded-md">
              <div className="flex items-center gap-4 ">
                <DriveFileMoveOutlineIcon sx={{ fontSize: 16 }} />
                All Files
              </div>
              <div>
                <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 18 }} />
              </div>
            </div>
            {/* <div className='flex items-center text-blue-700 gap-2 bg-blue-200 py-1 text-sm px-2 rounded-md ' ><DriveFileMoveOutlineIcon sx={{ fontSize: 16 }} /> <span>Files</span> <span><KeyboardArrowDownOutlinedIcon /></span></div> */}
            <div className="flex items-center gap-2 py-3 text-sm px-2 rounded-md ">
              <ScheduleOutlinedIcon sx={{ fontSize: 16 }} /> Recent
            </div>
            <div className="flex items-center  gap-2  py-3 text-sm px-2 rounded-md ">
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 16 }} /> Favorites
            </div>
            <div className="flex items-center  gap-2  py-3 text-sm px-2 rounded-md ">
              <ShareOutlinedIcon sx={{ fontSize: 16 }} /> Shared
            </div>
            <div className="flex items-center  gap-2  py-3 text-sm px-2 rounded-md ">
              <LocalOfferOutlinedIcon sx={{ fontSize: 16 }} /> Tags
            </div>
          </div>
          <div className="flex-col">
            <div className="flex items-center gap-2 py-3 text-sm px-2 rounded-md ">
              <SettingsOutlinedIcon sx={{ fontSize: 16 }} /> Settings
            </div>
            <div className="flex items-center  gap-2  py-3 text-sm px-2 rounded-md ">
              <AutoDeleteOutlinedIcon sx={{ fontSize: 16 }} /> Deleted Files
            </div>
            <div className="border border-gray-300 rounded-md px-2">
              <div className="flex items-center  gap-2  py-3 text-sm px-2 rounded-md ">
                <DiscFullOutlinedIcon sx={{ fontSize: 16 }} /> Storage{" "}
                <ChevronRightOutlinedIcon sx={{ fontSize: 16 }} />
              </div>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden ">
                <div className="h-full bg-blue-700 w-[10%] rounded-full"></div>
              </div>
              <div className="text-[10px] text-gray-500 py-2">
                42 GB used from 256 GB
              </div>
            </div>
          </div>
        </div>
        {/* <div className='col-span-1' ></div> */}
        {/* Second component */}
        <div className="col-span-7 ">
          <div className="bg-white h-45 rounded-2xl p-4 mb-5">
            <span className="pb-4 flex">Quick Access</span>
            <div className=" grid grid-cols-12 gap-3">
              {accessData?.map((ele, idx) => {
                return (
                  <div className="col-span-3 border rounded-2xl border-gray-300 p-3">
                    <span>{ele.fileImage}</span>
                    <div className="text-[12px] py-1">{ele.title}</div>
                    <div className="text-[12px] text-gray-400">
                      {ele.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 h-auto">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-500">
                  Home <ChevronRightOutlinedIcon sx={{ fontSize: 18 }} />
                </span>
                <span className="text-sm text-gray-500">
                  Concept Font{" "}
                  <ChevronRightOutlinedIcon sx={{ fontSize: 18 }} />
                </span>
                <span className="text-sm">Maszeh</span>
              </div>
              <div className="flex items-center gap-5">
                <span>
                  <WidgetsIcon />
                </span>
                <button className="flex items-center text-white text-sm bg-blue-700 h-8 gap-2 px-3 rounded-md">
                  <AddIcon sx={{ fontSize: 18 }} /> Add New
                </button>
              </div>
            </div>
            <div className="my-5">
              <BasicTable />
            </div>
          </div>
        </div>

        {/* Third component */}
        <div className="col-span-3   bg-white p-4 rounded-xl">
          <div>
            <span>
              <FolderZipIcon sx={{ fontSize: 30 }} />
            </span>
            <span>
              <ClearIcon sx={{ fontSize: 18 }} />
            </span>
          </div>
          <div>
            <div className="flex items-center justify-between px-2 text-blue-700 bg-blue-200 text-sm py-2 rounded-md">
              <div className="flex items-center gap-4 ">
                <DriveFileMoveOutlineIcon sx={{ fontSize: 16 }} />
                All Files
              </div>
              <div>
                <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 18 }} />
              </div>
            </div>
            <div className="flex items-center text-blue-700 gap-2 bg-blue-200 py-1 text-sm px-2 rounded-md justify-between">
              <DriveFileMoveOutlineIcon sx={{ fontSize: 16 }} />
              <span>
                <ClearIcon sx={{ fontSize: 18 }} />
              </span>
            </div>
            <div className="flex items-center gap-2 py-3 text-sm px-2 rounded-md ">
              <ScheduleOutlinedIcon sx={{ fontSize: 16 }} /> Recent
            </div>
            <div className="flex items-center  gap-2  py-3 text-sm px-2 rounded-md ">
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 16 }} /> Favorites
            </div>
            <div className="flex items-center  gap-2  py-3 text-sm px-2 rounded-md ">
              <ShareOutlinedIcon sx={{ fontSize: 16 }} /> Shared
            </div>
            <div className="flex items-center  gap-2  py-3 text-sm px-2 rounded-md ">
              <LocalOfferOutlinedIcon sx={{ fontSize: 16 }} /> Tags
            </div>
          </div>
          <div className="flex-col">
            <div className="flex items-center gap-2 py-3 text-sm px-2 rounded-md ">
              <SettingsOutlinedIcon sx={{ fontSize: 16 }} /> Settings
            </div>
            <div className="flex items-center  gap-2  py-3 text-sm px-2 rounded-md ">
              <AutoDeleteOutlinedIcon sx={{ fontSize: 16 }} /> Deleted Files
            </div>
            <div className="border border-gray-300 rounded-md px-2">
              <div className="flex items-center  gap-2  py-3 text-sm px-2 rounded-md ">
                <DiscFullOutlinedIcon sx={{ fontSize: 16 }} /> Storage{" "}
                <ChevronRightOutlinedIcon sx={{ fontSize: 16 }} />
              </div>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden ">
                <div className="h-full bg-blue-700 w-[10%] rounded-full"></div>
              </div>
              <div className="text-[10px] text-gray-500 py-2">
                42 GB used from 256 GB
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
