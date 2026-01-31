import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li><a key={route.id} href={route.link}>{route.name}</a></li>
        </div>
    );
};

export default Link;