import React, {SyntheticEvent} from 'react';
import {TextField} from "@material-ui/core";
import styled from "styled-components";

interface State {
    query: string;
}

const FormStyled= styled.form`
    position: sticky;
    top: 0;
    background: white;
`;

export default function SearchBar({onSubmit}:any): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null {

    const [values, setValues] = React.useState<State>({
        query: '',
    });

    const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <FormStyled onSubmit={(event:SyntheticEvent)=>{
            onSubmit(values.query);
            event.preventDefault();
            return false;
        }}>
            <TextField
                id="outlined-name"
                label="חיפוש"
                value={values.query}
                onChange={handleChange('query')}
                margin="normal"
                variant="outlined"
                fullWidth
            />
        </FormStyled>
    );
}


