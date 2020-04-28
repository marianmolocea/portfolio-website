import React from "react";
import "./PopUpProject.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function PopUpProject({
  handleClose,
  img,
  title,
  stack,
  description,
  liveUrl,
  gitUrl,
}) {
  return (
    <div className="PopUpProject">
      <div className="popup-container">
        <button className="close-icon" onClick={() => handleClose()}>
          <IoIosCloseCircleOutline />
        </button>
        <img src={img} alt="" className="popup-img" />
        <div className="description-container">
          <h2 className="title">{title}</h2>
          <div className="stack">
            {stack.map((el) => (
              <div className="tag">{el}</div>
            ))}
          </div>
          <div className="description">{description}</div>
          <div className="ctaButtons">
            <a
              href={liveUrl}
              className="linkBtn"
              target="blank"
              rel="noopener noreferrer"
            >
              View live project
            </a>
            <a
              href={gitUrl}
              className="linkBtn"
              target="blank"
              rel="noopener noreferrer"
            >
              View source code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
