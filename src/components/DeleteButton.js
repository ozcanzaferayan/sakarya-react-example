import React from 'react'
import { URLS } from '../constants/Urls';

const DeleteButton = (props) => {
    const handleDelete = (id) => {
        fetch(`${URLS.NAMES_ENDPOINT}/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() => {
                props.setNames(prevNames => (
                    prevNames.filter(person => person.id !== id)
                )
                );
            })
    }
    return (
        <button onClick={() => handleDelete(props.person.id)}>X</button>
    )
}

export default DeleteButton
