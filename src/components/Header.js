import React, { Fragment, useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function Header() {
  // if localStorage.getItem("name") is null, then set name to "Dynamic Fitness"
  const [name, setName] = useState(localStorage.getItem("name") || "Dynamic Fitness");
  const [display, setDisplay] = useState(false);

  const handleNameChange = (newName) => {
    setName(newName);
    // store newName in localStorage so page refreshes don't reset name to "Dynamic Fitness"
    localStorage.setItem("name", newName);
  }

  
function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    });
  }, []);

  let displayConditional = null;
  let displayHamburgerMenu = null;
  if (display) {
    displayConditional = 
    <div>
      <NavLink to="/my-profile" style={({ isActive }) =>
        isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "white"} : { textDecoration: "none", "paddingRight": "1em", color: "white" } }
        onClick={() => handleNameChange("My Profile")}>
          My Profile
      </NavLink>
      <NavLink to="/start-workout" style={({ isActive }) =>
        isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "white"} : { textDecoration: "none", "paddingRight": "1em", color: "white" } }
        onClick={() => handleNameChange("Start Workout")}>
          Start Workout
      </NavLink>
      <NavLink to="/create-workout" style={({ isActive }) =>
        isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "white"} : { textDecoration: "none", "paddingRight": "1em", color: "white" } }
        onClick={() => handleNameChange("Create Workout")}>
          Create Workout
      </NavLink>
      <NavLink to="/calories" style={({ isActive }) =>
        isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "white"} : { textDecoration: "none", "paddingRight": "1em", color: "white" } }
        onClick={() => handleNameChange("Calorie Tracker")}>
          Track Calories
      </NavLink>
    </div>

    // WIP: Hamburger Menu
    // displayHamburgerMenu = 
    // <div className="fixed top-32 w-56 text-right">
    //   <Menu as="div" className="relative inline-block text-left">
    //     <div>
    //       <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //           <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //         </svg>
    //       </Menu.Button>
    //     </div>
    //     <Transition
    //       as={Fragment}
    //       enter="transition ease-out duration-100"
    //       enterFrom="transform opacity-0 scale-95"
    //       enterTo="transform opacity-100 scale-100"
    //       leave="transition ease-in duration-75"
    //       leaveFrom="transform opacity-100 scale-100"
    //       leaveTo="transform opacity-0 scale-95"
    //     >
    //       <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //         <div className="px-1 py-1 ">
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 className={`${
    //                   active ? 'bg-violet-500 text-white' : 'text-gray-900'
    //                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //               >
    //                 {active ? (
    //                   <EditActiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 ) : (
    //                   <EditInactiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 )}
    //                 Edit
    //               </button>
    //             )}
    //           </Menu.Item>
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 className={`${
    //                   active ? 'bg-violet-500 text-white' : 'text-gray-900'
    //                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //               >
    //                 {active ? (
    //                   <DuplicateActiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 ) : (
    //                   <DuplicateInactiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 )}
    //                 Duplicate
    //               </button>
    //             )}
    //           </Menu.Item>
    //         </div>
    //         <div className="px-1 py-1">
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 className={`${
    //                   active ? 'bg-violet-500 text-white' : 'text-gray-900'
    //                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //               >
    //                 {active ? (
    //                   <ArchiveActiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 ) : (
    //                   <ArchiveInactiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 )}
    //                 Archive
    //               </button>
    //             )}
    //           </Menu.Item>
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 className={`${
    //                   active ? 'bg-violet-500 text-white' : 'text-gray-900'
    //                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //               >
    //                 {active ? (
    //                   <MoveActiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 ) : (
    //                   <MoveInactiveIcon
    //                     className="mr-2 h-5 w-5"
    //                     aria-hidden="true"
    //                   />
    //                 )}
    //                 Move
    //               </button>
    //             )}
    //           </Menu.Item>
    //         </div>
    //         <div className="px-1 py-1">
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 className={`${
    //                   active ? 'bg-violet-500 text-white' : 'text-gray-900'
    //                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //               >
    //                 {active ? (
    //                   <DeleteActiveIcon
    //                     className="mr-2 h-5 w-5 text-violet-400"
    //                     aria-hidden="true"
    //                   />
    //                 ) : (
    //                   <DeleteInactiveIcon
    //                     className="mr-2 h-5 w-5 text-violet-400"
    //                     aria-hidden="true"
    //                   />
    //                 )}
    //                 Delete
    //               </button>
    //             )}
    //           </Menu.Item>
    //         </div>
    //       </Menu.Items>
    //     </Transition>
    //   </Menu>
    // </div>
  }

  return(
    <React.Fragment>
      <div className="font-semibold" style={{ "paddingLeft": "1.5em", "paddingRight": "1.5em", display: "flex", "backgroundColor": "black" }}>
        <h1 className="align-middle flex text-4xl" style={{ "alignSelf": "center", color: "white", "flex": "1" }}>{name}</h1>

        <div style={{ "marginLeft": "auto", display: "flex", "justifyContent": "space-between", alignItems: "center", height: "100px" }}>
          {/* <NavLink to="/" style={({ isActive }) =>
            isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "white"} : { textDecoration: "none", "paddingRight": "1em", "paddingLeft": "40ef", color: "white" } }
            onClick={() => handleNameChange("Dynamic Fitness")}>
            Home
          </NavLink> */}

          {displayConditional}
          
          {/* change to="/login-logout" after finishing Home page */}
          <NavLink to="/" style={({ isActive }) =>
          isActive ? {textDecoration: "underline", "paddingLeft": ".2em", color: "white"} : { textDecoration: "none", "paddingLeft": ".2em", color: "white" } } 
          onClick={() => handleNameChange("Login/Logout")}>
            Login/Logout
          </NavLink>

          { displayHamburgerMenu }
        </div>

      </div>
    </React.Fragment>
  );
}

export default Header;