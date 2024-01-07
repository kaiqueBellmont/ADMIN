import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


export default function GenericSelect({ contextName, data }) {
  const [value, setValue] = useState('');

  return (
    <>
      <TextField
        id={`standard-select-currency-${contextName}`}
        select
        label={contextName}
        defaultValue={""}
        helperText={`Selecione o ${contextName}`}
        variant="standard"
        required={true}
        size='small'
        onChange={e => setValue(e.target.value)}
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}
