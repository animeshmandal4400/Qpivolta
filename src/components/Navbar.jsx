import React,{useState} from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
const Home = () => {
  
  const [showSidebar, setShowSidebar] = useState(false);
    const handleToggle = () => {
      setShowSidebar(!showSidebar);
    }

  return (
    <>
    {showSidebar ? (
           ""
        
    ) : (
      <ArrowForwardIosIcon
        className="flex text-4xl dark:text-white text-dark  items-center cursor-pointer fixed left-10 top-6 z-50"
        onClick={handleToggle}
      />
        
    )}

<div
  className={` w-64 bg-white dark:bg-dark-variant py-3 text-white fixed flex justify-center z-40  ease-in-out duration-300 ${
    showSidebar ? "translate-y-0 " : "translate-x-full -translate-x-full"
  }`}
>
<div className=" h-screen py-3 pr-4 flex justify-center" >
           
      <CloseIcon onClick={handleToggle} className=" z-50 relative dark:text-white text-bg-dark cursor-pointer left-56  "/>

            <span className='absolute my-10 border rounded p-2 text-white shadow-md bg-[#292929] cursor-pointer '>
            Login
            </span>
            <div className='flex flex-col justify-center  gap-4 dark:text-gray-300 text-bg-dark'>
            <p className='border-4 dark:border-dark-variant border-gray-300 px-20 py-4 rounded-md dark:bg-dark-variant bg-gray-300 border-l-red-light dark:border-l-red-light shadow-xl dark:hover:bg-red-light hover:bg-red-light dark:hover:border-red-light hover:border-red-light transition duration-500 ease-in-out cursor-pointer'>Home</p>
            <p className='border-4 dark:border-dark-variant border-gray-300 px-20 py-4 rounded-md dark:bg-dark-variant bg-gray-300 border-l-red-light dark:border-l-red-light shadow-xl dark:hover:bg-red-light hover:bg-red-light dark:hover:border-red-light hover:border-red-light transition duration-500 ease-in-out cursor-pointer'>Element</p>
            <p className='border-4 dark:border-dark-variant border-gray-300 px-20 py-4 rounded-md dark:bg-dark-variant bg-gray-300 border-l-red-light dark:border-l-red-light shadow-xl dark:hover:bg-red-light hover:bg-red-light dark:hover:border-red-light hover:border-red-light transition duration-500 ease-in-out cursor-pointer'>search</p>
            </div>
        </div>

</div>

  </>
  )
}

export default Home 