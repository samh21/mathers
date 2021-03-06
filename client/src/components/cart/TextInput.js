import React from 'react';
import { Grid, TextField } from '@material-ui/core';

const TextInput = (props) => {
  const {
    name,
    label,
    value,
    required = true,
    error = null,
    onChange,
    xs = 12,
    sm = 6,
  } = props;
  return (
    <Grid item xs={xs} sm={sm}>
      <TextField
        name={name}
        label={label}
        onChange={onChange}
        value={value}
        required={required}
        size="small"
        {...(error && { error: true, helperText: error })}
      ></TextField>
    </Grid>
  );
};

export default TextInput;
