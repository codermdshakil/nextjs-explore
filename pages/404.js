import Link from 'next/link';
import React from 'react';
const NotFound = () => {
    return (
        <div>
            <h2>Oppss Page Not Found</h2>
            <Link href='/'><a style={{color:'red', fontSize:'40px', fontWeight:'bolder'}} > Back to Home</a></Link>
        </div>
    );
};

export default NotFound;