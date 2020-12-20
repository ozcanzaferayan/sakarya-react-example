import React from 'react'
import { URLS } from '../constants/Urls';

const AddButton = ({ name, setNames, setName, inputRef }) => {
    const handleClick = () => {
        console.log("PERSON", name)
        const person = {
            name: name
        };
        fetch(URLS.NAMES_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        })
            .then(res => res.json())
            .then(person => {
                return setNames(prevState => {
                    setName("");
                    return [...prevState, person];
                }
                )
            })
            .then(() => inputRef.current.focus())
    }
    return (
        <button onClick={handleClick}>Add</button>
    )
}

export default AddButton
