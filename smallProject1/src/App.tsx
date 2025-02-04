import { useState } from 'react'
import FormData from './FormData';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div>
      <FormData/>
    </div>
   </>
  );
}

export default App
