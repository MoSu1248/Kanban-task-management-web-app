import React from "react";
import Cross from "../../../assets/icon-cross.svg?react";
import Elipsis from "../../../assets/icon-vertical-ellipsis.svg?react";

export default function ViewTaskPopup() {
  return (
    <form className="overlay__container">
      <div className="overlay__header">
        <h3>
          Research pricing points of various competitors and trial different
          business models
        </h3>
        <button className="overlay__options">
          <Elipsis />
        </button>
      </div>
      <label className="overlay__label" htmlFor="addTitle">
        We know what we're planning to build for version one. Now we need to
        finalise the first pricing model we'll use. Keep iterating the subtasks
        until we have a coherent proposition.
      </label>
      <label className="overlay__label" htmlFor="addTitle">
        Subtasks (2 of 3)
      </label>
      <div class="checkbox-container">
        <input type="checkbox" id="terms" name="terms" value="accepted" />
        <label for="terms">
          Research competitor pricing and business models
        </label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="terms" name="terms" value="accepted" />
        <label for="terms">
          Outline a business model that works for our solution
        </label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="terms" name="terms" value="accepted" />
        <label for="terms">
          Talk to potential customers about our proposed solution and ask for
          fair price expectancy
        </label>
      </div>
    </form>
  );
}
