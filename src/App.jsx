import { useState } from 'react'
import CreateForm from './components/CreateForm'
import Table from './components/Table'


function App() {
  const [actualizarTabla, setActualizarTabla] = useState(false)

  return (
    <div>
      <CreateForm setActTabla={setActualizarTabla}/>
      <h1>Contactos</h1>
      <Table actTabla={actualizarTabla} setActTabla={setActualizarTabla}/>
    </div>
  )
}

export default App
