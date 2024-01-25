import React from 'react'

const Output = ({html,css,js,preview}) => {

  const srcCode = `
    <html>
    <head>
    <style>${css}</style>
    </head>
    <body>${html}
    
    <script>${js}</script>
    </body>
    </html>
    `

  return <iframe title='output' srcDoc={srcCode} style={preview ? {width : '100%', borderRadius : '5px'} : {display : 'unset'}}/>
}

export default Output
