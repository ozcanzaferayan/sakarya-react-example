import React from 'react'
import { NameContext } from '../App';

const MyInput = React.forwardRef((props, ref) => (
    <NameContext.Consumer>
        {({ name, setName }) => (

            <input ref={ref} type="text" onChange={(e) => setName(e.target.value)} value={name} />

        )}
    </NameContext.Consumer>
)
);

export default MyInput
