import React from "react";
import { MdClose } from "react-icons/md";

export default function AddDel(props) {
  return (
    <button
      style={{
        backgroundColor: "Transparent",
        color: "#FFF",
        // border: "none",
        outline: "none"
      }}
      onClick={() => props.removeGratEntryHandler()}
    >
      <MdClose />
    </button>
  );
}
