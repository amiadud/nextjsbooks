"use client"

import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
<div
         className=" dark:bg-slate-800 mt-5 dark:shadow-slate-500  md:min-h-16 hover:shadow-none outline-none shadow-md rounded-md bg-base-200">
  <div className="hero-content mx-10 flex-col lg:flex-row-reverse">
    <img src="https://imgdb.net/storage/uploads/05ff6d0facf9606e780902835839b646ab13650d504b9f9e75b20015ef3cb0c2.png" className="md:max-w-xl rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold dark:text-white">Find Exclusive Range of Books!</h1>
      <div >
      <Link href={'/all-books'}><button className=" dark:bg-slate-100 dark:text-black mt-5 py-3 rounded-md text-white px-4 text-sm bg-violet-700 outline-none">All Book</button></Link>
      </div>
    </div>
  </div>
</div>
    );
};

export default Banner;