import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const FinanceProduct = () => {

    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <div className='bg-gray-200 rounded-2xl grid grid-cols-1 gap-5 '>
            <div className="grid grid-rows-12 grid-cols-12 gap-5 m-30">
                <div className="bg-[#222222] col-span-6 row-span-6 h-full rounded-4xl p-6">
                    <div className='h-full flex flex-col justify-between' >
                        <div className='flex justify-between' >
                            <div>
                                <h1 className='text-white text-2xl tracking-[.03em]'>Sales statistics</h1>
                                <h1 className='text-gray-400 font-extralight tracking-[.05em] text-sm' >Updated 1 days ago</h1>
                            </div>
                            <div>
                                <div className='border border-gray-500 rounded-4xl gap-4 flex text-gray-400 py-2 px-3' >
                                    <button className='text-sm' onClick={handleClick}>Monthly</button>
                                    <div className='flex'>
                                        <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-end' >
                            <div>
                                <div className='flex items-center gap-2 mb-4'>
                                    <p className='text-md text-gray-400 font-extralight tracking-[.05em] text-sm'>Visitors</p>
                                    <div className='rounded-full h-6 w-6 flex items-center justify-center bg-green-300' >
                                        <ArrowOutwardIcon sx={{ fontSize: 18 }} />
                                    </div>
                                    <div className='bg-gray-200 rounded-full'>
                                    </div>
                                </div>
                                <div className='text-5xl font-semibold text-white'>2,025</div>
                            </div>
                            <div className=''>
                                <div className='flex gap-4 h-[180px]'>
                                    <div className='bg-[#494545] p-2 rounded-2xl w-28 pr-5 text-gray-300'>September</div>
                                    <div className='bg-[#494545] p-2 rounded-2xl w-28 pr-5 text-gray-300'>November</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='m-3 flex justify-between items-center p-4 bg-yellow-400'>
                        <div>
                            <h1 className='text-white text-2xl tracking-[.03em]'>Sales statistics</h1>
                            <h1 className='text-gray-400 font-extralight tracking-[.05em] text-sm' >Updated 1 days ago</h1>
                        </div>
                        <div className='border border-gray-500 rounded-4xl gap-4 flex justify-between text-gray-400 py-2 px-4'>
                            <button className='' onClick={handleClick}>Monthly</button>
                            <div className=''>
                                <KeyboardArrowDownIcon />
                            </div>
                        </div>
                    </div> */}
                    {/* <div className='flex items-end mt-28 justify-between'>
                        <div className='m-8'>
                            <div className='flex items-center gap-2 mb-4'>
                                <p className='text-md text-gray-400 font-extralight tracking-[.05em] text-sm'>Visitors</p>
                                <div className='rounded-full h-6 w-6 flex items-center justify-center bg-green-300' >
                                    <ArrowOutwardIcon sx={{ fontSize: 18 }} />
                                </div>
                                <div className='bg-gray-200 rounded-full'>
                                </div>
                            </div>
                            <div className='text-5xl font-semibold text-white'>2,025</div>
                        </div>
                        <div className='bg-amber-100'>
                            <div className='flex '>
                                <div className='bg-gray-400'>1</div>
                                <div>2</div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="bg-gray-500 col-span-6 row-span-3 rounded-3xl">02</div>
                

                <div className="bg-white col-span-6 row-span-9 rounded-4xl p-7">
                    <div className='h-full grid grid-cols-2' >
                        {/* <div className='bg-blue-200 m-2 flex flex-col' > */}
                        <div className='flex flex-col pr-2' >
                            <div className='flex gap-5 bg-gray-500' >
                                <div className='flex flex-col items-center' >
                                    <div className='rounded-full flex bg-green-300 justify-center items-center h-15 w-15'>
                                        <TrendingUpIcon sx={{ fontSize: 24 }} />
                                    </div>
                                    <div>
                                        <div className='p-[1px] bg-gray-300 h-12 w-[1px]' ></div>
                                    </div>
                                    <div className='flex text-gray-300' >
                                        <PanoramaFishEyeIcon sx={{ fontSize: 20 }} />
                                    </div>
                                    <div>
                                        <div className='p-[1px] bg-gray-300 h-18 w-[1px] ' ></div>
                                    </div>
                                    <div className='flex text-gray-300' >
                                        <PanoramaFishEyeIcon sx={{ fontSize: 20 }} />
                                    </div>
                                    <div>
                                        <div className='p-[1px] bg-gray-300 h-18 w-[1px] ' ></div>
                                    </div>
                                    <div className='flex text-gray-300' >
                                        <PanoramaFishEyeIcon sx={{ fontSize: 20 }} />
                                    </div>
                                    <div>
                                        <div className='p-[1px] bg-gray-300 h-18 w-[1px] ' ></div>
                                    </div>
                                    <div className='flex text-gray-300' >
                                        <PanoramaFishEyeIcon sx={{ fontSize: 20 }} />
                                    </div>
                                    <div className='p-[1px] h-18 w-[1px] ' ></div>
                                </div>
                                <div className='text-2xl font-semibold'>
                                    <div>
                                        <h1>Market</h1>
                                        <h1>Forecast</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pl-2 grid-rows-2 justify-between flex' >
                            <div className='bg-green-300' >
                                <div className='' >sadf</div>
                            </div>
                            <div className=' bg-green-300' >
                                <div className=''>sadf</div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='bg-white grid grid-cols-2 grid-rows-3' >
                        <div className='flex gap-5 p-10 bg-green-300 row-span-3'>
                            <div className='rounded-full flex bg-yellow-300 justify-center items-center h-15 w-15'>
                                <TrendingUpIcon sx={{ fontSize: 30 }} />
                            </div>
                            <div className='text-xl font-semibold'>
                                <h1>Market</h1>
                                <h1>Forcast</h1>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="bg-gray-500 col-span-6 row-span-6 rounded-3xl">04</div>
            </div>


        </div>



    )
}

export default FinanceProduct