import { useState } from 'react'
import Advice from './components/Advice';
import Card from './components/Card'

export interface AdviceQuery {
  id?: number;
  advice?: string;
}



function App() {
  const [adviceQuery, setAdviceQuery] = useState({})

  return (
    <Card>
      <Advice  />
    </Card>
  )
}

export default App
