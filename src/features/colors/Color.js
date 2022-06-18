import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectColor, colorAdded } from "./colorSlice";

const Color = () => {
  const dispatch = useDispatch();
  const color = useSelector(selectColor);
  useEffect(() => {
    document.body.style.background = color;
  }, [color]);
  const [hexCode, setHexCode] = useState("");
  const handleSubmit = () => {
    dispatch(colorAdded(hexCode));
    console.log(hexCode);
  };

  return (
    <section>
      <label htmlFor="hashInput"> Input a hex code:</label>
      <input
        id="hashInput"
        value={hexCode}
        onChange={(e) => {
          setHexCode(e.target.value);
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <p>{hexCode}</p>
    </section>
  );
};

export default Color;
