import React from 'react';
import SingleUser from '../../components/SingleUser';

const index = ({users}) => {
    console.log(users)
    return (
        <div>
            <h1>All users is here : {users.length}</h1>
            {
                users.map(u => <SingleUser key={u.id} u={u} ></SingleUser>)
            }
        </div>
    );
};

export default index;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data },
    }
}