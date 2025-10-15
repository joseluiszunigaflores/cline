import { SVGProps } from "react"

const CoopelLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg fill="none" height="50" viewBox="0 0 200 50" width="200" xmlns="http://www.w3.org/2000/svg" {...props}>
		{/* Círculos del logo */}
		<circle cx="20" cy="25" fill="#FFD700" r="8" />
		<circle cx="35" cy="25" fill="#FFD700" r="6" />
		<circle cx="47" cy="25" fill="#FFD700" r="4" />

		{/* Texto Coppel */}
		<text fill="#1E40AF" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" x="65" y="35">
			Coppel
		</text>
	</svg>
)

export default CoopelLogo
