import React from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'

function Customeditor(props) {
    const {lang} = props;

    const handleTitClick = (text) => {
        return text.split(" ").map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(" ")
    };
    
    const [val, setVal] = useLocalStorage("Start writing your code!", '')

  return (
    <div className="pane top-pane">
    <Editor
      language={lang}
      displayName={handleTitClick(lang)}
      value={val}
      onChange={setVal}
    />
    </div>
  )
}

export default Customeditor
