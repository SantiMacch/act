import React from 'react'
import { useEffect, useState } from 'react'
import { getcontacts, deletecontact} from '../services/Contactos';

const Table = ({actTabla, setActTabla}) => {
    const [contactos, setContactos] = useState([])

    // const getcontacts = () => {
    //   axios.get('http://localhost:3000/contactos')
    //     .then(function (response) {
    //       setContactos(response.data)
    //     })
    //     .catch(function (error) {console.log(error)})
    // }
  
    useEffect(() => getcontacts(setContactos), [])

    useEffect(() => {
        getcontacts(setContactos)
        setActTabla(false) 
    }, [actTabla])

    const handleDelete = (id) => {
        // axios.delete(`http://localhost:3000/contactos/${id}`)
        //     .then(function (response) {
        //         console.log(response)
        //         setActTabla(true)
        //     })
        //     .catch(function (error) { console.log(error) })
        deletecontact(setActTabla, id)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody>
                {contactos.map((contacto) => (
                    <tr key={contacto.id}>
                        <th scope="row">{contacto.name}</th>
                        <td>{contacto.lastname}</td>
                        <td>{contacto.age}</td>
                        <td>{contacto.number}</td>
                        <td><button onClick={() => handleDelete(contacto.id)}>Eliminar</button></td>
                    </tr>

                ))
                }
            </tbody>
        </table>
    )
}

export default Table
