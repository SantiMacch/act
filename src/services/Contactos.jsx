import axios from 'axios';
export const getcontacts = (setContactos) => {
    axios.get('http://localhost:3000/contactos')
        .then(function (response) {
            setContactos(response.data)
        })
        .catch(function (error) { console.log(error) })
}

export const deletecontact = (setActTabla, id) => {
    axios.delete(`http://localhost:3000/contactos/${id}`)
        .then(function (response) {
            console.log(response)
            setActTabla(true)
        })
        .catch(function (error) { console.log(error) })
}

export const postcontacts = (setActTabla, formData) => {
    axios.post('http://localhost:3000/contactos', formData)
        .then((response) => {
            console.log(response)
            setActTabla(true)
        })
        .catch((error) => console.log(error))
}