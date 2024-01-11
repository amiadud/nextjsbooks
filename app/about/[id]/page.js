import React from 'react';

const page = ({params, searchParams}) => {

    const url = {
        category: decodeURIComponent('%3Dbooks'),
        permalink: true,
        percentage: 50,
      };

      const cleanedUrl = { ...url, percentage: undefined };

    return (

        

        <div>
            {cleanedUrl}
        </div>
    );
};

export default page;