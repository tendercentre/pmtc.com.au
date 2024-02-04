import { type DocumentRendererProps } from '@keystatic/core/renderer';
import NextLink from 'next/link';

export const documentRenderers = {
	block: {
		table: Table,
	},
	inline: {
		link({ children, href }) {
			return <NextLink href={href}>{children}</NextLink>;
		},
	},
} satisfies DocumentRendererProps['renderers'];

type TableProps = {
	head?: Array<{
		children: React.ReactNode;
		colSpan?: number;
		rowSpan?: number;
	}>;
	body: Array<
		Array<{
			children: React.ReactNode;
			colSpan?: number;
			rowSpan?: number;
		}>
	>;
};

function Table({ head, body }: TableProps) {
	return (
		<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
					<table className="m-0 min-w-full divide-y divide-gray-200">
						{head && (
							<thead>
								<tr>
									{head.map((x, i) => (
										<th
											className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500"
											colSpan={x.colSpan}
											key={i}
											rowSpan={x.rowSpan}
										>
											{x.children}
										</th>
									))}
								</tr>
							</thead>
						)}
						<tbody className="divide-y divide-gray-200 bg-white">
							{body.map((row, i) => (
								<tr key={i}>
									{row.map((x, j) => (
										<td
											className="whitespace-no-wrap px-6 py-4 text-sm font-medium leading-5"
											colSpan={x.colSpan}
											key={j}
											rowSpan={x.rowSpan}
										>
											{x.children}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
