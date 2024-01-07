import * as React from 'react';
import Input from '@mui/base/Input';
import { styled } from '@mui/system';

// SimpleInput component
const SimpleInput = React.forwardRef(function CustomInput({ onInputChange, ...props }, ref) {
  return <Input slots={{ input: InputElement }} {...props} onChange={(e) => onInputChange && onInputChange(e.target.value)} ref={ref} />;
});

export default function UnstyledInputIntroduction({ name, onInputChange }) {

  const handleChange = (event) => {
    const value = event.target.value;
    onInputChange(value);
  };

  return (
    <SimpleInput
      required={true}
      autoFocus={true}
      aria-label="input"
      placeholder={name}
      onInputChange={onInputChange} // Pass the callback function
    />
  );
}

const InputElement = styled('input')(
  ({ theme }) => `
  width: 200px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: #C7D0DD;
  background: #1C2025;
  border: 1px solid #434D5B;
  box-shadow: 0px 2px 4px rgba(0,0,0, 0.5)
    };

  &:hover {
    border-color: #ffffff;
  }

  &:focus {
    border-color: #FFFFFF;
    box-shadow: 0 0 0 3px #FFFFFF;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);
