import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@material-ui/core";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Armie Hammer",
      url: "https://s2.r29static.com/bin/entry/16c/x,80/1908532/image.jpg",
    },
    {
      name: "Theo James",
      url:
        "https://filmdaily.co/wp-content/uploads/2020/07/theo-james_lede.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards-cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
