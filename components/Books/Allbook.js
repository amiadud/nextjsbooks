"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Allbook = () => {

    const [allbooks, setAllbooks] = useState([])

    useEffect( ()=> {
        fetch(`/api/allbooks`, {
            
        })
        .then(res => res.json())
        .then(data => setAllbooks(data))
    },[])


    const handleFilter = ()=> {
        const reamings = allbooks.filter(data => data.qBooks > 0 )
        setAllbooks(reamings);
    }

    return (
        <div>

        <div className='flex justify-center mt-6'>
        <button onClick={handleFilter} className='btn btn-accent dark:text-black dark:bg-green-300 dark:outline-none dark:border-none'>Filter (Available books)</button>
        </div>

             <div className='grid grid-cols-1 md:grid-cols-3 mx-2 lg:grid-cols-4 gap-2 my-4 '>
        {
            allbooks.map(books => 
                <div className='border hover:shadow-none shadow-md rounded-md mt-4  '>
                <div className='hover:underline'>
                <Link href={`/book-details/${books?._id}`}> <img className='scale-90 h-72 w-full transition-all mt-4' src={books?.photoUrl} alt="" title="" /></Link>
                <Link href={`/book-details/${books?._id}`}><h2 className='text-center scale-90 text-xl dark:text-white font-semibold'>{books?.bookName}</h2></Link>
                </div>
                <div>
                <h2 className='text-center -mt-3 dark:text-white'><br /><span className='font-semibold'>Author Name</span> : {books?.author_name}</h2>
                <h2 className='text-center mt-3 dark:text-white'> <span className='font-semibold '>Category:</span> {books?.bookCategory}  </h2>
                </div>
                <div className='flex justify-center my-3'>
                <p className='mx-4'>{books?.ratings ? books?.ratings : '0'}</p>
                </div>
                 <div className='flex flex-col md:flex-row gap-4  mb-5 mt-2 items-center justify-center'>
                 <Link href={`/books-update/${books?._id}`}><button className='border  w-full hover:shadow capitalize rounded-md md:px-3 py-2 mx-2 md:mx-2 dark:bg-zinc-600 dark:hover:bg-zinc-300 dark:hover:text-black bg-violet-600 hover:bg-violet-800 text-white'>Update</button></Link>
                 </div>
                </div>   
                
            )
        }
   
</div>
        </div>
    );
};

export default Allbook;