import React from "react";
import Card from "./Card";


const CardList = ({ robots }) => {

  const CardComponant = robots.map((user, i) => {
    return (
      <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />)
  })

  return (
    <div>
      {CardComponant}
    </div>

  )
}
export default CardList