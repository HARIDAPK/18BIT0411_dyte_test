//import React from 'react';
import React, { useEffect,useState } from "react";
import Editor from './components/Editor';

const App=()=>{
  const[html,setHtml]=useState("");
  const[css,setCss]=useState("");
  const[js,setjs]=useState("");
  const[srcDoc,setSrcDoc]=useState("");

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setSrcDoc(`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `);
    },250);
    return ()=>{
      clearTimeout(timeout);
    };
  },[html,css,js]);

  return(
    <>
    <div className="panel top-panel"> 
      <Editor title="HTML" language="xml" value={html} onChange={setHtml}/>
      <Editor title="CSS" language="css" value={css} onChange={setCss}/>    
      <Editor title="JS" language="javascript" value={js} onChange={setjs}/>        
    </div>
    <div className="panel">
      <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" width="100%" height="100%"/>
    </div>
    </>
  );
};
export default App