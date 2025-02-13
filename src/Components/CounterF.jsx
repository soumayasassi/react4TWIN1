import { useState } from "react";

function CounterF(props) {
  const [cpt, setCpt] = useState(0);
  const [txt, setTxt] = useState("Bjr");
  const [msg, setMsg] = useState(props.msg);
  const decrement = () => {
    setCpt(cpt - 1);
  };
  return (
    <>
      <h2> Count Value : {cpt}</h2>
      <button onClick={() => setCpt(cpt + 1)}> increment </button>
      <button onClick={decrement}> increment </button>
    </>
  );
}

export default CounterF;
