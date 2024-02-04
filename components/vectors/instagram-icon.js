export function InstagramIcon(props) {
	return (
		<svg
			aria-label="Instagram"
			viewBox="0 0 512 512"
			fill="currentColor"
			{...props}
		>
			<rect width={512} height={512} rx="15%" />
			<g fill="none" stroke="#fff" strokeWidth={29}>
				<rect width={296} height={296} x={108} y={108} rx={78} />
				<circle cx={256} cy={256} r={69} />
			</g>
			<circle cx={343} cy={169} r={19} fill="#fff" />
		</svg>
	);
}
