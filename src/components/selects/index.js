// SelectTextFields.js
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: '1',
    label: 'Base',
  },
  {
    value: '2',
    label: 'iniciante',
  }
];

export default function SelectTextFields({ onTopicChange, }) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '200px' },
      }}
      noValidate
      autoComplete="on"
    >
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Topico"
          defaultValue="Curso"
          helperText="Selecione o tópico"
          variant="standard"
          required={true}
          size='small'
          onChange={(e) => onTopicChange(e.target.value)} // Chame a função de retorno de chamada ao selecionar um valor
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
