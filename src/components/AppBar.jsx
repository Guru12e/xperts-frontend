// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// import '../styles/colors.scss';

// export default function AppBar() {

//     const [isTab, setisTab] = useState(window.innerWidth <= 824);
//     const [isMobile, setisMobile] = useState(window.innerWidth <= 640);

//     useEffect(() => {
//         const handleResize = () => {
//             setisTab(window.innerWidth <= 824);
//             setisMobile(window.innerWidth <= 640)
//         }

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         }
//     }, []);

//     const navigate = useNavigate();
//     function handleRegister() {
//         navigate('/role');
//     }

//     function handleLogin() {
//         navigate('/login');
//     }

//     return (
//         <>

//             <div className='bg-[var(--navy)] px-5 py-3 flex justify-between items-center sm:px-10 sm:py-4'>

//                 <p className='text-xl text-[var(--teal)] font-bold sm:text-2xl lg:text-3xl'>
//                     ConnectAL.
//                     {isTab && <br />}
//                     {!isTab && <span className='text-xl text-[var(--dull-white)] font-normal mx-1 sm:mx-3 sm:text-2xl lg:text-3xl'>|</span>}
//                     <span className='text-xs text-[var(--dull-white)] font-normal sm:text-base lg:text-lg'>Connect, Learn, Grow: Your Alumni Network</span>
//                 </p>

//                 {isMobile ?
//                     <div className='text-[var(--dull-white)]'>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                         </svg>
//                     </div> :
//                     <div>
//                         <button className='primary-btn mr-5' onClick={handleRegister}>
//                             Register
//                         </button>
//                         <button className='primary-btn' onClick={handleLogin}>
//                             Login
//                         </button>
//                     </div>
//                 }

//             </div>

//         </>
//     )
// }

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/colors.scss';

export default function AppBar() {

    const [isTab, setisTab] = useState(window.innerWidth <= 824);
    const [isMobile, setisMobile] = useState(window.innerWidth <= 640);
    const [isSidebarOpen, setisSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setisTab(window.innerWidth <= 824);
            setisMobile(window.innerWidth <= 640);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const navigate = useNavigate();

    function handleRegister() {
        navigate('/role');
    }

    function handleLogin() {
        navigate('/login');
    }

    function toggleSidebar() {
        setisSidebarOpen(!isSidebarOpen);
    }

    return (
        <>
            <div className='bg-[var(--navy)] px-5 py-3 flex justify-between items-center sm:px-10 sm:py-4'>
                <p className='text-xl text-[var(--teal)] font-bold sm:text-2xl lg:text-3xl'>
                    ConnectAL.
                    {isTab && <br />}
                    {!isTab && <span className='text-xl text-[var(--dull-white)] font-normal mx-1 sm:mx-3 sm:text-2xl lg:text-3xl'>|</span>}
                    <span className='text-xs text-[var(--dull-white)] font-normal sm:text-base lg:text-lg'>Connect, Learn, Grow: Your Alumni Network</span>
                </p>

                {isMobile ?
                    <div className='text-[var(--dull-white)] cursor-pointer' onClick={toggleSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div> :
                    <div>
                        <button className='primary-btn mr-5' onClick={handleRegister}>
                            Register
                        </button>
                        <button className='primary-btn' onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                }
            </div>

            {isSidebarOpen && (
                <div className="w-2/3 fixed inset-0 bg-[var(--deep-blue)] text-[var(--dull-white)] p-6">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Features</li>
                        <li>Join Now</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            )}
        </>
    )
}
