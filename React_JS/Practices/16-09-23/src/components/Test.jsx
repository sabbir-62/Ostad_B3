import {useRef} from 'react'

export default function Test() {
    const ref = useRef();
    
    const show = () => {
        console.log(ref.current.value)
        ref.current.value = ""
    }
  return (
    <div>
        <input ref={ref} type="text" />
        <button onClick={show}>Click</button>
    </div>
  )
}


