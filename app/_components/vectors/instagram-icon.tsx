export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden
			fill="currentColor"
			focusable={false}
			role="img"
			viewBox="0 0 512 512"
			{...props}
		>
			<rect height={512} rx="15%" width={512} />
			<g fill="none" stroke="#fff" strokeWidth={29}>
				<rect height={296} rx={78} width={296} x={108} y={108} />
				<circle cx={256} cy={256} r={69} />
			</g>
			<circle cx={343} cy={169} fill="#fff" r={19} />
		</svg>
	);
}
