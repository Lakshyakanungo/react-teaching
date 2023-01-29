import React from "react";

export default function Fruits({ items }) {
  console.log(items, "<----yyayyyy");

  return (
    <div>
      Fruits
      <p>This is {items[0]}</p>
      <p>This is {items[1]}</p>
      <p>This is {items[2]}</p>
      <p>This is {items[3]}</p>
      <p>This is {items[4]}</p>
    </div>
  );
}
