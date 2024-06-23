import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";


const Menu = [
  {
    id: 1,
    name: "Placement Papers",
    link: "/#",
  },
  {
    id: 2,
    name: "Companies",
    link: "/#services",
  },
  {
    id: 3,
    name: "Services",
    link: "/#",
  },
  {
    id: 3,
    name: "About us",
    link: "/#",
  }

];

const DropdownLinks = [
  {
    id: 1,
    name: "Job By Category",
    link: "/#",
  },
  {
    id: 2,
    name: "Job By Course",
    link: "/#",
  },
  {
    id: 3,
    name: "Job By City",
    link: "/#",
  },
  {
    id: 3,
    name: "Job By Company",
    link: "/#",
  },
];

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};
const Navbar = ({ handleOrderPopup }) => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              FresherJobs.com
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search Job Title, Company,Skills"
                className="w-[275px] sm:w-[275px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-1000 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
        
            <p className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group">
           { isAuthenticated && 
                    <div>
                      <h2>Welcome {user.name}</h2>
                    </div>
           }
            </p>
           
            {
              isAuthenticated ?
              <button
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block  transition-all duration-200">
              Log out
              </span>
            </button> :
              <button
              onClick={() => loginWithRedirect()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
              >
              <span className="group-hover:block  transition-all duration-200">
              Jobseeker Login 
              </span>
              </button>

            }
           
           
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
        <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Jobs
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
