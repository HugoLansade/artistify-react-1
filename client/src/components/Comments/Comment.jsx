import React from "react";

export default function Comment({message}) {
  return (
    <div>
      <h2>{message.author} :</h2>
      <p>{message.message}</p>
    </div>
  );
}
