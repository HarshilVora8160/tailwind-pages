import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CampaignIcon from '@mui/icons-material/Campaign';
import PaymentsIcon from '@mui/icons-material/Payments';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import MemoryIcon from '@mui/icons-material/Memory';

import SwapVertIcon from '@mui/icons-material/SwapVert';

const BlueChipsLeftSidebar = () => {
    return (
        <div className='bg-white h-screen' >
            <div className='px-2 border border-gray-100 rounded-md mb-2' >
                <div className="flex gap-3 items-center my-2" >
                    <div className='h-10 w-10' >
                        <img className="h-full w-full object-cover rounded-lg" src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>
                    <div>
                        <span className="text-[14px] flex gap-1">Justinus <span> Lhaksana</span></span>
                        <div className="text-[12px] text-gray-400" >justinusl@mail.com</div>
                    </div>
                    <div>
                        <SwapVertIcon sx={{ fontSize: 18 }} />
                    </div>
                </div>
            </div>
            <div className='flex items-center' >
                <input type='text' className='relative border border-gray-100 w-full py-2 rounded-md px-8 text-sm text-gray-400' placeholder='Search...' />
                <div className='absolute px-2 text-gray-400' >
                    <SearchIcon sx={{ fontSize: 18 }} />
                </div>
            </div>
            <div className='flex flex-col justify-between' >
                <div>
                    <ul className='flex flex-col my-3' >
                        <li className='py-2 rounded-md text-gray-400 text-[14px] flex items-center gap-2 px-2 hover:bg-gray-200 hover:text-black' ><WidgetsIcon sx={{ fontSize: 18 }} /> Home</li>
                        <li className='py-2 rounded-md text-gray-400 text-[14px] flex items-center gap-2 px-2 hover:bg-gray-200 hover:text-black' ><CampaignIcon sx={{ fontSize: 18 }} /> Campaign</li>
                        <li className='py-2 rounded-md text-gray-400 text-[14px] flex items-center gap-2 px-2 hover:bg-gray-200 hover:text-black' ><PaymentsIcon sx={{ fontSize: 18 }} /> Payments</li>
                        <li className='py-2 rounded-md text-gray-400 text-[14px] flex items-center gap-2 px-2 hover:bg-gray-200 hover:text-black' ><MovieFilterIcon sx={{ fontSize: 18 }} /> Influencer</li>
                        <li className='py-2 rounded-md text-gray-400 text-[14px] flex items-center gap-2 px-2 hover:bg-gray-200 hover:text-black' ><SettingsIcon sx={{ fontSize: 18 }} /> Settings</li>
                        <li className='py-2 rounded-md text-gray-400 text-[14px] flex items-center gap-2 px-2 hover:bg-gray-200 hover:text-black' ><PaymentsIcon sx={{ fontSize: 18 }} /> Connected Services</li>
                        <li className='py-2 rounded-md text-gray-400 text-[14px] flex items-center gap-2 px-2 hover:bg-gray-200 hover:text-black' ><PaymentsIcon sx={{ fontSize: 18 }} /> Password & Security</li>
                        <li className='py-2 rounded-md text-gray-400 text-[14px] flex items-center gap-2 px-2 hover:bg-gray-200 hover:text-black' ><GroupsIcon sx={{ fontSize: 18 }} /> Team</li>
                    </ul>
                    <div className='p-[0.3px] bg-gray-300' ></div>
                    <ul className='flex flex-col my-3' >
                        <li className='py-2 rounded-md text-gray-400 text-[14px] flex items-center gap-2 px-2 hover:bg-gray-200 hover:text-black' ><CampaignIcon sx={{ fontSize: 18 }} />Campaign</li>
                        <li className='py-2 rounded-md text-gray-400 text-[14px] flex items-center gap-2 px-2 hover:bg-gray-200 hover:text-black' ><PaymentsIcon sx={{ fontSize: 18 }} />Payments</li>
                        <li className='py-2 rounded-md text-gray-400 text-[14px] flex items-center gap-2 px-2 hover:bg-gray-200 hover:text-black' ><MovieFilterIcon sx={{ fontSize: 18 }} />Influencer</li>
                    </ul>
                    <div className='p-[.3px] bg-gray-300' ></div>
                </div>

                <div className='flex border-0 justify-center text-center' >
                    <div className='bg-blue-500 p-3 text-white rounded-xl' >
                        <h1>Become Pro Access</h1>
                        <p className='text-[10px] mt-1 mb-2 text-blue-300' >Try your experience for using more features</p>
                        <div className='flex justify-center items-center bg-blue-400 rounded-md' >
                            <button className='flex items-center text-[14px] py-2 gap-2' > <MemoryIcon sx={{fontSize:18}} /> Upgrade Pro</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlueChipsLeftSidebar