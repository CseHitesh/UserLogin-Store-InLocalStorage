
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {



    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""


    })

    const [alert, setAlert] = useState({
        display: false,
        message: "Im your alert"


    })


    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const submitForm = () => {








        if (user.name && user.email && user.password && user.phone
        ) {


            if (user.name.length <= 3) {

                setAlert({ message: 'Name should be more then 3', display: true })
            }
            // else if (user.email.length > 5) {


            //     setAlert({ message: 'Enter a valid email', display: true })


            // }
            else {

                // // Get the existing data
                // const UsersInLocalStorage = localStorage.getItem('users');

                // // If no existing data, create an array
                // // Otherwise, convert the localStorage string to an array
                // const newUsersInLocalStorage = UsersInLocalStorage ? JSON.parse(UsersInLocalStorage) : user;

                // // Add new data to localStorage Array
                // // newUsersInLocalStorage.push(user)
                // // newUsersInLocalStorage = { user }

                // // Save back to localStorage
                // localStorage.setItem('users', JSON.stringify(newUsersInLocalStorage));

                // // addUser(user.name, user.age, user.phone, user.uploadProfileImage)

                // setUser({
                //     name: "",
                //     email: "",
                //     password: "",
                //     phone: ""
                // })



                localStorage.setItem('name', JSON.stringify(user.name));
                localStorage.setItem('email', JSON.stringify(user.email));
                localStorage.setItem('password', JSON.stringify(user.password));
                localStorage.setItem('phone', JSON.stringify(user.phone));

                    setUser({
                    name: "",
                    email: "",
                    password: "",
                    phone: ""
                })

                navigate('/viewuser')
            }



        } else {


            setAlert({ message: 'Please Fill All Fields', display: true })


        }




    }



    const navigate = useNavigate()

    const handleCancel = () => {

        navigate('/')

    }









    return (






        <>

            <div >

                <div className={`py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0  `} id="modal">


                    {/* alert  div start  */}


                    <div className={`bg-red-100 border mb-5 mx-auto w-11/12 md:w-2/3 max-w-lg border-red-400 text-red-700 px-4 py-3 rounded relative ${!alert.display ? 'hidden' : ''}`} role="alert">
                        <strong className="font-bold">{alert.message}</strong>

                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3"

                            onClick={() => setAlert({ ...alert, display: false })}
                        >
                            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div>


                    {/* alert div end here  */}

                    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">

                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter User Details</h1>
                            <label htmlFor="name" className="text-gray-800 text-sm font-bold  ">Name</label>
                            <input id="name" className="mb-5 mt-2 text-gray-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Ex. Hitesh" value={user.name} onChange={onChange} name='name' />

                            <label htmlFor="email" className="text-gray-800 text-sm font-bold  ">Email</label>
                            <input type='email' id="email" className="mb-5 mt-2 text-gray-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Ex. @gmail.com" value={user.email} onChange={onChange} name='email' />



                            <label htmlFor="password" className="text-gray-800 text-sm font-bold  ">Password</label>
                            <input type='password' id="password" className="mb-5 mt-2 text-gray-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Ex. Password@123" value={user.password} onChange={onChange} name='password' />


                            <label htmlFor="phone" className="text-gray-800 text-sm font-bold  ">Phone</label>
                            <input type='text' id="phone" className="mb-5 mt-2 text-gray-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Ex.. 9828123445" value={user.phone} onChange={onChange} name='phone' />


                            <div className="flex items-center justify-start w-full">
                                <button className=" hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm" onClick={submitForm}>Submit</button>
                                <button className=" ml-3 bg-gray-100  text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={handleCancel}>Cancel</button>
                            </div>

                        </div>
                    </div>
                </div>


            </div>


        </>



    )
}

export default Login