import { FormControl,  FormLabel, Textarea } from '@mui/joy';


interface FormTextareaProps {
	label: string;
	placeholder?: string;
	required?: boolean;
}

const FormTextarea = ({ label, required, placeholder }: FormTextareaProps) => (
	<FormControl
		required={required}
		size='md'
		color='neutral'>
		<FormLabel sx={{color: 'white', fontFamily: 'Fira Sans, sans-serif'}}>{label}</FormLabel>
		<Textarea
            aria-label={label}
			placeholder={placeholder}
            size='lg'
			name={label}
            minRows={5}
			variant='soft'
			sx={{fontFamily: 'Fira Sans, sans-serif'}}
		/>
	</FormControl>
);

export default FormTextarea;
