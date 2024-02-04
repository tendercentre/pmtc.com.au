'use client';

import { clsx } from 'clsx';
import { createContext, forwardRef, useContext, useId } from 'react';

const FieldContext = createContext<string | undefined>(undefined);

export function Field({
	children,
	label,
	labelVisibility = 'visible',
}: {
	children: React.ReactNode;
	label: string;
	labelVisibility?: 'visible' | 'hidden';
}) {
	const id = useId();
	return (
		<FieldContext.Provider value={id}>
			<div className="flex flex-col gap-2">
				<label
					className={labelVisibility === 'hidden' ? 'sr-only' : 'self-start'}
					htmlFor={id}
				>
					{label}
				</label>
				{children}
			</div>
		</FieldContext.Provider>
	);
}

function useFieldContext() {
	const context = useContext(FieldContext);
	if (!context) {
		throw new Error('useFieldContext must be used within a Field');
	}
	return context;
}

export const Input = forwardRef<
	HTMLInputElement,
	Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'>
>(function Input({ className, type = 'text', ...consumerProps }, forwardedRef) {
	const id = useFieldContext();
	return (
		<input
			className={clsx(
				'rounded',
				'border-gray-300',
				'focus-visible:outline-none',
				'focus-visible:ring-2',
				'focus-visible:ring-blue-700',
				'focus-visible:ring-offset-2',
				'focus-visible:ring-offset-white',
				'focus-visible:border-gray-300',
				className,
			)}
			id={id}
			ref={forwardedRef}
			type={type}
			{...consumerProps}
		/>
	);
});

export const Textarea = forwardRef<
	HTMLTextAreaElement,
	Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'>
>(function Textarea({ className, ...consumerProps }, forwardedRef) {
	const id = useFieldContext();
	return (
		<textarea
			className={clsx(
				'rounded',
				'border-gray-300',
				'focus-visible:outline-none',
				'focus-visible:ring-2',
				'focus-visible:ring-blue-700',
				'focus-visible:ring-offset-2',
				'focus-visible:ring-offset-white',
				'focus-visible:border-gray-300',
				className,
			)}
			id={id}
			ref={forwardedRef}
			{...consumerProps}
		/>
	);
});
