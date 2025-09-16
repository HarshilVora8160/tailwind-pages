import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BlueChipsNavbar = () => {
    return (
        <div className='flex justify-between border-b border-gray-100' >
            <div className='flex items-center' >
                <input type='text' className='relative w-full py-5 rounded-md px-12 text-md text-gray-400' placeholder='Search something...' />
                <div className='absolute px-5 text-gray-400' >
                    <SearchIcon sx={{ fontSize: 22 }} />
                </div>
            </div>
            <div className='flex items-center gap-10 ' >
                <NotificationsActiveIcon />
                <div className='flex gap-2' >
                    <div className='h-10 w-10 rounded-full bg-gray-400 object-cover'>
                        <div className='h-full w-full object-cover rounded-full flex justify-center items-center' ><WhatsAppIcon /></div>
                    </div>
                    <div className='text-[12px]' >
                        <h6>Joxy Inc.</h6>
                        <span className='text-gray-400' >Brand</span>
                    </div>
                </div>
                <KeyboardArrowDownIcon sx={{fontSize:18,color:"gray"}} />
            </div>
        </div>
    )
}

export default BlueChipsNavbar