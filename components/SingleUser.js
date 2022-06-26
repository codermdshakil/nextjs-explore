import Link from 'next/link';
import React from 'react';

const SingleUser = ({ u }) => {

    const { name, email } = u;

    return (
        <div style={{ border: '1px solid red', padding: '20px', margin: '20px', borderRadius: '10px' }} >
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <Link href={`/users/${u.id}`}>
                <button>Explore</button>
            </Link>
        </div>
    );
};

export default SingleUser;