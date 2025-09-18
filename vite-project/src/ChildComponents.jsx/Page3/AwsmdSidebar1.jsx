import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';

const AwsmdSidebar1 = () => {
    return (
        <div className="p-5" >
            <div className="bg-gray-500 flex justify-between items-center gap-2" >
                <div className='flex' >
                    <img className="h-10 w-10" src="https://t3.ftcdn.net/jpg/04/35/17/68/360_F_435176826_WKljInFzobmBZD6UgRyS8gdFLlvFZgVw.jpg" alt="logo" />
                    <div>
                        <div className="text-white">Stakent</div>
                        <div className="text-white text-[10px]" >Top Staking Assets</div>
                    </div>
                </div>
                <div className='flex flex-col' >
                    <SwapVertOutlinedIcon sx={{fontSize:20, color:'white'}} />
                    {/* <ExpandLessOutlinedIcon sx={{fontSize:20}} />
                    <ExpandMoreOutlinedIcon sx={{fontSize:20}} /> */}
                </div>

            </div>
        </div>
    )
}

export default AwsmdSidebar1