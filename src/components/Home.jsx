import React from 'react'
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div >

            <div className={`py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0  `} id="modal">




                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">

                        <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">  User Login </h1>







                        <div className="flex items-center justify-start w-full">
                            <button className=" hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm" >
                            

                                <Link to="/login">Login</Link>
                            
                            </button>



                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home