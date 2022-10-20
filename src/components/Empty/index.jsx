import React from "react";
import EmptyBox from "@/assets/empty-box.png";
import "./index.css";

export function Empty() {
  return (
    <div className="empty">
      <img src={EmptyBox} alt="empty box" className="empty__img" />
      <h3 className="empty__title">No match</h3>
    </div>
  );
}
