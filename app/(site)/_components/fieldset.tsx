import { clsx } from 'clsx';

export function Fieldset({
	children,
	className,
	legend,
}: React.FieldsetHTMLAttributes<HTMLFieldSetElement> & {
	legend: string;
}) {
	return (
		<fieldset className={clsx('flex flex-col gap-2', className)}>
			<legend className="sr-only">{legend}</legend>
			<span aria-hidden>{legend}</span>
			{children}
		</fieldset>
	);
}
