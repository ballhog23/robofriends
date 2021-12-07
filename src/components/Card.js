import React from 'react';

// destructuring props as we pass them, now we dont have to say props.name etc..
const Card = ({ name, email, id }) => {
    return (
        <div id={id} className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img
                src={`https://robohash.org/${id}?200x200`}
                alt={`${name} the robot personal headshot`}
            />
            <div>
                <h2>
                    {name}
                </h2>
                <p>
                    {email}
                </p>
            </div>
        </div>
    );
}

export default Card;