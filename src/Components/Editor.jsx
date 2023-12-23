import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import  {javascript}  from '@codemirror/lang-javascript';
import {css} from '@codemirror/lang-css'
import {html} from '@codemirror/lang-html'
import {andromeda} from '@uiw/codemirror-theme-andromeda'


const Editor = ({bgColor,symbol,name,value,setValue}) => {
   
  return (
    <div className='box'>
      <div className='editor-header'>
        <div className='editor-header-left'>
          <div style={{
            padding : '4px 10px',
            borderRadius : '5px',
            backgroundColor : bgColor,
            color : 'black',
            fontWeight : 'bold'
        }}>
          {symbol}
          </div>
          <div>
            {name}
          </div>
          </div>
        </div>
   <CodeMirror style={{color : 'black'}} 
   value={value}
   theme={andromeda}
   extensions={
   (name === 'JAVASCRIPT' &&  javascript()) ||
   (name === 'HTML' && [html()]) ||
   (name === 'CSS' && [css()])
  }
    onChange={(val,viewUpdate) => setValue(val)}>
   </CodeMirror>
   </div>
  )
}

export default Editor
