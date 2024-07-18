import { FormControl, FormLabel, Input } from '@mui/joy';


interface FormInputProps {
	name: string;
	label: string;
	placeholder?: string;
	required?: boolean;
	type?: 'text' | 'email';
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ name, label, required, type, placeholder }: FormInputProps) => (
	<FormControl
		required={required}
		size='lg'
		color='neutral'
		sx={{width:'100%'}}>
		<FormLabel sx={{color: 'white', fontFamily: 'Fira Sans, sans-serif'}}>{label}</FormLabel>
		<Input
			placeholder={placeholder}
			name={name}
			type={type}
			variant='outlined'
			sx={{fontFamily: 'Fira Sans, sans-serif'}}
		/>
	</FormControl>
);

export default FormInput;
