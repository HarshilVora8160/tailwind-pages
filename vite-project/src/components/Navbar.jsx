import DriveFileMoveOutlineIcon from '@mui/icons-material/DriveFileMoveOutline';
import TimelineIcon from '@mui/icons-material/Timeline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import Sidebar from '../ChildComponents.jsx/Page1/MuiSidebar1';

const Navbar = () => {
    return (
        <div className="" >
            <div className='md:grid grid-cols-12 flex justify-between' >
                <div className="p-2 flex items-center col-span-2 md:col-span-4 xl:col-span-2" >
                    <img className="h-15 p-2" src="https://media.istockphoto.com/id/1201144331/vector/icon-design-element-logo-for-technology-innovation-company-tech-icon-and-symbol.jpg?s=612x612&w=0&k=20&c=Q-zPPtCY9aNohWqcUTB-rEBSd3xoC6fqSEgWDgulrf8=" alt="Company Logo" />
                    <span>Minecloud</span>
                </div>
                <div className="md:flex hidden items-center gap-6 col-span-4 md:col-span-5 mx-4" >
                    <button className='flex items-center text-blue-700 gap-2 bg-white py-1 text-[12px] px-5 rounded-md' ><DriveFileMoveOutlineIcon sx={{ fontSize: 16 }} /><span>Files</span></button>
                    <button className='flex items-center gap-2 text-[12px] text-gray-400' ><TimelineIcon sx={{ fontSize: 16 }} /><span>Activity</span></button>
                    <button className='flex items-center gap-2 text-[12px] text-gray-400' ><CalendarMonthIcon sx={{ fontSize: 16 }} /><span>Calender</span></button>
                    <button className='flex items-center gap-2 text-[12px] text-gray-400' ><PermContactCalendarIcon sx={{ fontSize: 16 }} /><span>Contact</span></button>
                    {/* <h4>ugjsdhgy</h4> */}
                </div>

                <div className='xl:flex xl:col-span-5 items-center gap-4 justify-end hidden mr-5' >
                    <TextField
                        label="Search"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <div><NotificationsOutlinedIcon /></div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center ">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"
                            alt="Profile"
                        />
                    </div>
                </div>

                <div className='flex xl:hidden items-center justify-end col-span-3' >
                <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Navbar