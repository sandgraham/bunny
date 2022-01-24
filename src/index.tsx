import { StrictMode } from 'react'
import { render } from 'react-dom'
import './base.css'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)

function App() {
  return <div>bunny goes hop hop</div>
}
