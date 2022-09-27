import React from 'react'
import { useNavigate } from 'react-router-dom'


const User = ({ name, phone, email, password }) => {





    const navigate = useNavigate()









    return (
        <>


            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {name}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{email}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {password}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {phone}
                    </p>
                </td>

            </tr>



            {/* {
                update == "open" && <UpdateUser updatingUser={{ imgUrl, name, phone, age, id }} />


            }


            {
                console.log(update)
            } */}
        </>

    )
}

export default User