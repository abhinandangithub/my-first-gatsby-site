import React from "react";
import { ToggleButton } from "../ToggleButton";
import "./donate-popup.scss";
import { DonateThanks } from "./donate-thanks";
import { DonateDetails } from "./donate-details";
export const DonatePopup = ({ show, onToggle, success = false }) => {
  return (
    <div className={"donate-popup " + (show ? "active" : "")}>
      <div className={"modal " + (show ? "active" : "")}>
        <div className="modal-body">
          <ToggleButton isOpened={true} onToggle={onToggle} />
          {success ? <DonateThanks /> : <DonateDetails />}
        </div>
      </div>
    </div>
  );
};
