import { useState } from "react";

const alert = () => {

  const [toggle, setToggle] = useState(true);

  const handlebtn = () => {
    setToggle(!toggle)
  };

  return (
    <div className="a">
      <button onClick={(e) => handlebtn(e)}>Toggle</button>
      <br />
      {toggle && <p>wesh bro!.</p>}
    </div>
  );
};

export default alert;
