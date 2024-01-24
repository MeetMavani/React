import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

const anotheruser = ' varible injected'

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  "click me to visit google",
  anotheruser,
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(

  // MyApp()
  // <MyApp />,
  // anotherElement
  // reactElement
  // <App />
  reactElement

)

