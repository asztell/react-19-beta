import { useState } from 'react'
import './web-components/wc'
import './App.css'

// function blockSync(ms: number) {
//   const start = Date.now()
//   let now = start
//   while (now - start < ms) {
//     now = Date.now()
//   }
// }

// function SlowComponent() {
//   blockSync(3000)
//   return <div>Slow component</div>
// }

// const MemoSlowComponent = React.memo(SlowComponent)

function App() {
  // const [count, setCount] = useState(0)
  {
    /* <MemoSlowComponent /> */
  }
  const [color, setColor] = useState('gray')

  function getColor() {
    const color_wc = document
      .getElementsByTagName('web-component')[0]
      .getAttribute('color')
    console.log('color_wc', color_wc)
    const inputs = document.getElementsByTagName('input')
    console.log('inputs', inputs)
    if (inputs) {
      const color_input = inputs[0].getAttribute('color')
      console.log('color_input', color_input)
    }
  }

  return (
    <>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <SlowComponent />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      <button onClick={getColor}>get color</button>
      <br />
      <button onClick={() => setColor('red')}>click</button>
      <div style={{ height: '5rem', width: '5rem', background: color }}></div>
      <web-component color={color} />
    </>
  )
}

export default App
