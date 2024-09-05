import React, { useState } from 'react'
import { postcontacts } from '../services/Contactos'
const CreateForm = ({setActTabla}) => {
    const [formData, setFormData] = useState()

    // const postcontacts = () => {
    //     axios.post('http://localhost:3000/contactos', formData)
    //       .then( (response) => {
    //         console.log(response)
    //         setActTabla(true)
    //       })
    //       .catch( (error) => console.log(error))
    // }

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (formData.age >= 150 ) {
            alert('La edad no puede ser mayor a 150 años')
            return
        }

        if (formData.name.length <= 4 || !isNaN(parseInt(formData.name))) {
            alert('El nombre debe tener al menos 5 caracteres y no debe ser un numero')
            return
        }

        if (formData.lastname.length <= 4 || !isNaN(parseInt(formData.lastname))) {
            alert('El apellido debe tener al menos 5 caracteres y no debe ser un numero')
            return
        }

        if (formData.number.length <= 3 ) {
            alert('El numero debe tener si o si los primeros tres numero de area')
            return
        }
        //comprobacion de telefono debe tener si o si los primero tres numeros de area un guion y el numero de telefono

        postcontacts(setActTabla, formData)
        setFormData({})
      }
  


    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <label>
                        Nombre
                        <input
                            name="name"
                            placeholder="Nombre"
                            value={formData?.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Apellido
                        <input
                            name="lastname"
                            placeholder="Apellido"
                            value={formData?.lastname}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Edad
                        <input
                            type="number"
                            name="age"
                            placeholder="Edad"
                            value={formData?.age}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Numero
                        <input
                            type="number"
                            name="number"
                            placeholder="Numero"
                            value={formData?.number}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            </fieldset>

            <input
                type="submit"
                value="Guardar"
            />
        </form>
    )
}

export default CreateForm
