import React, { useEffect } from 'react'
import { URLS } from '../constants/Urls';
import DeleteButton from './DeleteButton';


const PersonList = ({ setNames, names }) => {
    useEffect(() => {
        fetch(URLS.NAMES_ENDPOINT)
            .then(res => res.json())
            .then(data => setNames(data))
    }, []);
    return (
        <ul>
            {
                names.map((person) =>
                    <li key={person.id}>{person.id} {person.name} &nbsp;
              <DeleteButton person={person} setNames={setNames} />
                    </li>
                )
            }
        </ul>
    )
}

export default PersonList
