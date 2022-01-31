import React from "react";
import { list } from "../Data";
import AddItems from "./AddItems";
function ItemList() {
  return (
    <div>
      <ol>
        {list.map((name) => (
          <li key={name.id}> {name.itemname} </li>
        ))}
      </ol>
      <AddItems />
    </div>
  );
}

export default ItemList;
