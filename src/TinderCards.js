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

  const swiped

  return (
    <div className="tinderCards">
      <div className="tinderCards-cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => SwipeableDrawer(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          ></TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
