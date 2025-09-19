import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';



const FinanceProduct = () => {

    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <div className='bg-gray-200 m-30 rounded-2xl h-screen grid grid-cols-1 gap-5 '>



            <div className="grid grid-rows-12 grid-cols-12 gap-5 m-20">
                <div className="bg-gray-300 col-span-6 row-span-6 h-full rounded-4xl">

                    <div className='m-3 flex justify-between'>
                        <div className='m-2'>
                            <h1 className='text-black text-2xl'>Sales Statistics</h1>
                            <h1 className='text-black italic text-lg'>Updated 1 day ago</h1>
                        </div>
                        <div className=' m-3 w-40 bg-gray-700 rounded-4xl flex justify-between'>
                            <button className='m-3' onClick={handleClick}>Monthly</button>
                            <div className='m-3'>
                                <KeyboardArrowDownIcon />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-end mt-28 justify-between'>
                        <div className='m-8'>
                            <div className='flex items-center gap-2 mb-4'>
                                <p className='text-xl'>Visitors</p>
                                <div className='rounded-full h-8 w-8 flex items-center justify-center bg-green-300' >
                                    <ArrowOutwardIcon sx={{ fontSize: 20 }} />
                                </div>
                                <div className='bg-gray-200 rounded-full'>
                                </div>
                            </div>
                            <div className='text-7xl font-semibold'>2,025</div>
                        </div>
                        <div className='bg-amber-100'>
                            <div className='flex '>
                                <div className='bg-gray-400'>1</div>
                                <div>2</div>
                            </div>
                        </div>


                    </div>






                </div>
                <div className="bg-gray-500 col-span-6 row-span-3 rounded-3xl">02</div>


                <div className="bg-white col-span-6 row-span-9 rounded-3xl">
                    <div className='grid grid-cols-12 '>
                        {/* <div className='flex flex-col justify-between h-full row-span-12 bg-gray-500 ' >
                            <div>
                                guhsagdufi
                            </div>
                            <div>
                                guhsagdufi
                            </div>
                        </div> */}
                        {/* <div class="grid grid-flow-col grid-rows-4 gap-4 bg-red-400">
                            <div class="row-span-4 ... bg-green-300 flex flex-col justify-between">
                                <div>
                                    sgf
                                </div>
                                <div>
                                    sgf
                                </div>
                            </div>
                            <div className='grid grid-cols-12 ' >
                                <div className='flex flex-row row-span-6 justify-center' >
                                    <div class=" bg-yellow-400">02</div>
                                    <div class=" bg-yellow-400">02</div>
                                </div>
                            </div>
                        </div> */}
                        <div className='col-span-6 row-span-6 justify-between bg-gray-300'>
                            <div className='flex gap-5 p-10'>
                                <div className='rounded-full flex bg-green-300 justify-center items-center h-15 w-15'>
                                    <TrendingUpIcon sx={{ fontSize: 30 }} />
                                </div>
                                <div className='text-5xl font-semibold'>
                                    <h1>Market</h1>
                                    <h1>Forcast</h1>
                                </div>
                            </div>

                            <div className='mt-20'>
                                <div className='bg-amber-200 '>01</div>
                                <div className='bg-amber-200 '>02</div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="bg-gray-500 col-span-6 row-span-6 rounded-3xl">04</div>
            </div>


        </div>



    )
}

export default FinanceProduct