import * as React from 'react';
import Input from '@mui/base/Input';
import { styled } from '@mui/system';

const SimpleInput = React.forwardRef(function CustomInput(props, ref) {
  return <Input slots={{ input: InputElement }} {...props} ref={ref} />;
});

export default function UnstyledInputIntroduction() {
  return <SimpleInput aria-label="Demo input" placeholder="Titulo" />;
}

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const InputElement = styled('input')(
  ({ theme }) => `
  width: 200px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === grey[300]};
  background: ${grey[900]};
  border: 1px solid ${grey[700]};
  box-shadow: 0px 2px 4px rgba(0,0,0, 0.5)
    };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${blue[600]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);
