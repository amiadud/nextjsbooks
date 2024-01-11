"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const SingleBook = ({BookName}) => {

    const [singleBooks, setSingleBooks] = useState([])

    useEffect( ()=> {
        fetch(`/api/categorybooks?bookCategory=${BookName}`, {
        })
        .then(res => res.json())
        .then(data => setSingleBooks(data))
      },[])

    return (
        <>
        <div>
               <h2 className='text-3xl dark:text-white capitalize text-center my-3'> All Books</h2>
               <hr />
           </div>
           <div className='grid grid-cols-2 md:grid-cols-3 mx-2 lg:grid-cols-4 gap-2 my-4 '>
                       {
                           singleBooks.map(books => 
                               <div data-aos="zoom-in-up" className='border hover:shadow-none shadow-md rounded-md mt-4  '>
                               <div className='hover:underline'>
                               <Link href={`/book-details/${books?._id}`}> <img className='scale-90 h-72 w-full transition-all mt-4' src={books?.photoUrl} alt="" title="" /></Link>
                               <Link href={`/book-details/${books?._id}`}><h2 className='  dark:text-white text-center scale-90 text-xl font-semibold'>{books?.bookName}</h2></Link>
                               </div>
                            
                               <div>
                               <h2 className='text-center -mt-3 dark:text-white'><br /><span className='font-semibold'>Author Name</span> : {books?.author_name}</h2>
                               <h2 className='text-center mt-3 dark:text-white'> <span className='font-semibold '>Category:</span> {books?.bookCategory}  </h2>
                               </div>
                             
                               <div className='flex justify-center my-2 '>
                               <p className='mx-4'>{books?.ratings ? books?.ratings : '0'}</p>
                               </div>
                                <div className='flex flex-col md:flex-row gap-4  mb-5 mt-2 items-center justify-center'>
                                <Link href={`/book-details/${books?._id}`}> <button className='border hover:shadow capitalize rounded-md md:px-3 btn-sm md:btn-sm bg-violet-600 hover:bg-violet-800 dark:bg-slate-200 dark:text-black text-white'>Details</button></Link>
                                </div>
                               </div>   
                               
                           )
                       }
                  
       </div>
       </>
    );
};

export default SingleBook;