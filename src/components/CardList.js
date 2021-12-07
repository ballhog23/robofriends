import React from "react";
import Card from "./Card";

// argument robots is from robots.js array of objects
// we used destructuring because we just simply need that array and nothing else from the file
const CardList = ({ robots }) => {
    return (
        <div>
            {
                // return an array of Robots using robots array
                robots.map((user, i) => {
                    return (
                        <Card
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                            // provide a unique key for React, in our case the id property of the object
                            // we use a key to minimize the amount of DOM manipulation
                            key={robots[i].id}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;