import React from 'react'

const Home = () => {
    const cardData = [
        {
            avatar : "Q",
            title: "QM9 Dataset", 
            subTitle:"A comprehensive chemical space of small organic molecules",
            img:"https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            tags:"Organic Dye",
            button: "Launch 🚀"

        },
        {
            avatar : "Q",
            title: "QMugs", 
            subTitle:"comprise quantum mechanical relevant molecules ..",
            img:"https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            tags:"Small Molecule Drugs",
            button: "Launch 🚀"

        },
        {
            avatar : "S",
            title: "Sample Title", 
            subTitle:"",
            img:"https://images.unsplash.com/photo-1602755088318-39b7a7e6482a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
            tags:"sample1",
            button: "Launch 🚀"

        },
        {
            avatar : "S",
            title: "Sample Title", 
            subTitle:"",
            img:"https://images.unsplash.com/photo-1602755088318-39b7a7e6482a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
            tags:"sample1",
            button: "Launch 🚀"

        },
        {
            avatar : "S",
            title: "Sample Title", 
            subTitle:"",
            img:"https://images.unsplash.com/photo-1602755088318-39b7a7e6482a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
            tags:"sample1",
            button: "Launch 🚀"

        },
    ]
  return (
    
    <>
    <div className='flex flex-col'>
         <h1 className='dark:text-white font-bold text-3xl text-dark ml-16 mt-20'>✨Streamlit Elements</h1>
    </div>
    <div className=" mx-16 mt-11 grid gap-2 lg:grid-cols-4">
                {cardData.map((items, key) => (
                    <div className="w-full dark:bg-[#303031] bg-light-variant rounded-lg shadow-md lg:max-w-sm  hover:-translate-y-2 transform transition`" key={key}>
                        <div className='flex items-center p-2'>
                            <span className='border-transparent text-center w-9 h-9 bg-red rounded-full m-2 p-2 font-bold '>{items.avatar}</span>
                            <h4 className=" dark:text-white text-dark">
                                {items.title}
                                <p className="mb-2 text-xs font-thin dark:text-gray-300 text-dark-variant">
                            {items.subTitle}
                            </p>
                            </h4>
                        </div>
                        
                        <img
                            className="object-cover w-full h-36"
                            src={items.img}
                            alt="image"
                        />
                        <div className="p-4 flex flex-col justify-start items-start gap-3">
                        <span className='border-transparent rounded-xl px-4 p-1 text-xs bg-[#515152] text-slate-50 '>
                            {items.tags}
                        </span>
                            <button className="px-4 py-2 text-sm text-red-light border border-red-light rounded-xl hover:bg-red-light hover:text-white ">
                                {items.button}
                            </button>
                        </div>
                    </div>
                ))}
            
            </div>
            
            </>
    
  )
}

export default Home