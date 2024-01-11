"use client"

import SingleBook from '@/components/SingleBook/SingleBook';
import React, { useEffect, useState } from 'react';

const BookNamePage = ({params}) => {

    return (
        <>
         <div>
         <SingleBook BookName={params.bookName} /> 
        </div>
        </>
    );
};

export default BookNamePage;