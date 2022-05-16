import React, { useState } from "react";
import Customeditor from "./Customeditor";

function Dropdown() {
    const [lang, setLang] = useState('text')

  function handleOnChange(e) {
    console.log(e.target.value);
    setLang(e.target.value)
}
return (
    <>
    <div>
    <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleOnChange}
      >
        <option selected value="null">
          Select your language!
          </option>
        <option value="python" >Python</option>
        <option value="java">Java</option>
        <option value="xml">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">Javascript</option>
      </select>
    </div>
    <Customeditor lang={lang}/>
    </>
  );
}

export default Dropdown;
