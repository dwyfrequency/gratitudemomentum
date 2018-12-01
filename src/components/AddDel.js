import React from "react";
import { MdClose } from "react-icons/md";

export default function AddDel(props) {
  return (
    <button onClick={() => props.removeGratEntryHandler()}>
      <MdClose />
    </button>
  );
}
