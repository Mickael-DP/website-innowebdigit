import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy';
import { Box, TextField, Typography } from '@mui/material';

interface FormInputProps {
	label: string;
	placeholder?: string;
	required?: boolean;
	type?: 'text' | 'email';
}

const FormInput = ({ label, required, type, placeholder }: FormInputProps) => (
	<FormControl
		required={required}
		size='lg'
		color='neutral'>
		<FormLabel sx={{color: 'white'}}>{label}</FormLabel>
		<Input
			placeholder={placeholder}
			name={label}
			type={type}
			variant='outlined'
		/>
	</FormControl>
);

export default FormInput;
