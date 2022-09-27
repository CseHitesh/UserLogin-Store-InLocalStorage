
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import User from "./User.jsx"



const ViewProfile = () => {
  const [users, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  })


  const getUsers = async () => {

    const name = await JSON.parse(localStorage.getItem("name"))
    const email = await JSON.parse(localStorage.getItem("email"))
    const password = await JSON.parse(localStorage.getItem("password"))
    const phone = await JSON.parse(localStorage.getItem("phone"))

    setUser({ name, email, password, phone })
   


  }



  useEffect(() => {
    getUsers()
  }, [])


  return (
    <>




      <div className="antialiased font-sans bg-gray-200">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8 lg:px-60">
            <div>
              <h2 className="text-2xl font-semibold leading-tight">Users</h2>
            </div>

            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Email
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        password
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Phone
                      </th>
                    </tr>
                  </thead>
                  <tbody>





                    <User name={users.name} phone={users.phone} email={users.email} password={users.password} />


                  </tbody>
                </table>


                <div
                  className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">

                  <div className="inline-flex mt-2 xs:mt-0">
                    <button
                      className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">



                      <Link to="/">HOME</Link>


                    </button>





                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>








    </>


  )
}

export default ViewProfile;