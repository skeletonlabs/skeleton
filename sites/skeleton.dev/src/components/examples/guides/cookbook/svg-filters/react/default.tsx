export default function Default() {
	return (
		<div className="w-full grid grid-cols-3 gap-4">
			{/* Apollo */}
			<div className="flex flex-col items-center space-y-2">
				<img
					src={`https://picsum.photos/seed/skeleton/320`}
					className="rounded-container"
					alt="Apollo filter"
					loading="lazy"
					style={{ filter: 'url(#Apollo)' }}
				/>
				<span className="badge preset-tonal">#Apollo</span>
				<svg id="svg-filter-apollo" className="absolute -left-full w-0 h-0">
					<filter id="Apollo" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feColorMatrix values="0.8 0.6 -0.4 0.1 0, 0 1.2 0.05 0 0, 0 -1 3 0.02 0, 0 0 0 50 0" result="final" in="SourceGraphic"></feColorMatrix>
					</filter>
				</svg>
			</div>

			{/* BlueNight */}
			<div className="flex flex-col items-center space-y-2">
				<img
					src={`https://picsum.photos/seed/skeleton/320`}
					className="rounded-container"
					alt="BlueNight filter"
					loading="lazy"
					style={{ filter: 'url(#BlueNight)' }}
				/>
				<span className="badge preset-tonal">#BlueNight</span>
				<svg id="svg-filter-bluenight" className="filter absolute -left-full w-0 h-0">
					<filter id="BlueNight" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feColorMatrix
							type="matrix"
							values="1.000 0.000 0.000 0.000 0.000
                    0.000 1.000 0.000 0.000 0.05
                    0.000 0.000 1.000 0.000 0.400
                    0.000 0.000 0.000 1.000 0.000"
						></feColorMatrix>
					</filter>
				</svg>
			</div>

			{/* Emerald */}
			<div className="flex flex-col items-center space-y-2">
				<img
					src={`https://picsum.photos/seed/skeleton/320`}
					className="rounded-container"
					alt="Emerald filter"
					loading="lazy"
					style={{ filter: 'url(#Emerald)' }}
				/>
				<span className="badge preset-tonal">#Emerald</span>
				<svg id="svg-filter-emerald" className="filter absolute -left-full w-0 h-0">
					<filter id="Emerald" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feColorMatrix
							type="matrix"
							in="SourceGraphic"
							result="colormatrix"
							values=".16 .185 .129 0 0 .16 .185 .129 0 0 .16 .185 .129 0 0 0 0 0 0.33 0"
						></feColorMatrix>
						<feComponentTransfer in="colormatrix" result="componentTransfer">
							<feFuncR type="table" tableValues="0.03 0.9"></feFuncR>
							<feFuncG type="table" tableValues="0.57 1"></feFuncG>
							<feFuncB type="table" tableValues="0.49 0.53"></feFuncB>
							<feFuncA type="table" tableValues="0 1"></feFuncA>
						</feComponentTransfer>
						<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"></feBlend>
					</filter>
				</svg>
			</div>

			{/* GreenFall */}
			<div className="flex flex-col items-center space-y-2">
				<img
					src={`https://picsum.photos/seed/skeleton/320`}
					className="rounded-container"
					alt="GreenFall filter"
					loading="lazy"
					style={{ filter: 'url(#GreenFall)' }}
				/>
				<span className="badge preset-tonal">#GreenFall</span>
				<svg id="svg-filter-greenfall" className="filter absolute -left-full w-0 h-0">
					<filter
						id="GreenFall"
						x="-20%"
						y="-20%"
						width="140%"
						height="140%"
						filterUnits="objectBoundingBox"
						primitiveUnits="userSpaceOnUse"
						colorInterpolationFilters="linearRGB"
					>
						<feColorMatrix
							type="matrix"
							values="0.5 -0.4 0.3332 0 0 0 0.4 0.3 0 0 0 0 0.5 0 0 0 0 0 500 -20"
							x="0%"
							y="0%"
							width="100%"
							height="100%"
							in="SourceGraphic"
							result="colormatrix"
						></feColorMatrix>
					</filter>
				</svg>
			</div>

			{/* Noir */}
			<div className="flex flex-col items-center space-y-2">
				<img
					src={`https://picsum.photos/seed/skeleton/320`}
					className="rounded-container"
					alt="Noir filter"
					loading="lazy"
					style={{ filter: 'url(#Noir)' }}
				/>
				<span className="badge preset-tonal">#Noir</span>
				<svg id="svg-filter-noir" className="filter absolute -left-full w-0 h-0">
					<filter
						id="Noir"
						x="-20%"
						y="-20%"
						width="140%"
						height="140%"
						filterUnits="objectBoundingBox"
						primitiveUnits="userSpaceOnUse"
						colorInterpolationFilters="linearRGB"
					>
						<feColorMatrix type="saturate" values="0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix1"></feColorMatrix>
						<feBlend mode="lighten" x="0%" y="0%" width="100%" height="100%" in="colormatrix1" in2="colormatrix1" result="blend"></feBlend>
						<feBlend
							mode="multiply"
							x="0%"
							y="0%"
							width="100%"
							height="100%"
							in="colormatrix1"
							in2="diffuseLighting"
							result="blend1"
						></feBlend>
					</filter>
				</svg>
			</div>

			{/* NoirLight */}
			<div className="flex flex-col items-center space-y-2">
				<img
					src={`https://picsum.photos/seed/skeleton/320`}
					className="rounded-container"
					alt="NoirLight filter"
					loading="lazy"
					style={{ filter: 'url(#NoirLight)' }}
				/>
				<span className="badge preset-tonal">#NoirLight</span>
				<svg id="svg-filter-noirlight" className="filter absolute -left-full w-0 h-0">
					<filter
						id="NoirLight"
						x="-20%"
						y="-20%"
						width="140%"
						height="140%"
						filterUnits="objectBoundingBox"
						primitiveUnits="userSpaceOnUse"
						colorInterpolationFilters="linearRGB"
					>
						<feColorMatrix type="saturate" values="0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix2"></feColorMatrix>
						<feBlend mode="saturation" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="colormatrix2" result="blend2"></feBlend>
						<feBlend mode="screen" x="0%" y="0%" width="100%" height="100%" in="colormatrix2" in2="blend2" result="blend3"></feBlend>
						<feColorMatrix type="luminanceToAlpha" x="0%" y="0%" width="100%" height="100%" in="blend3" result="colormatrix3"></feColorMatrix>
						<feBlend mode="exclusion" x="0%" y="0%" width="100%" height="100%" in="blend3" in2="colormatrix3" result="blend5"></feBlend>
					</filter>
				</svg>
			</div>

			{/* Rustic */}
			<div className="flex flex-col items-center space-y-2">
				<img
					src={`https://picsum.photos/seed/skeleton/320`}
					className="rounded-container"
					alt="Rustic filter"
					loading="lazy"
					style={{ filter: 'url(#Rustic)' }}
				/>
				<span className="badge preset-tonal">#Rustic</span>
				<svg id="svg-filter-rustic" className="filter absolute -left-full w-0 h-0">
					<filter id="Rustic" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feColorMatrix
							type="matrix"
							in="SourceGraphic"
							result="colormatrix"
							values="0.39215686274509803 0.39215686274509803 0.39215686274509803  0 0
					0.3333333333333333 0.3333333333333333 0.3333333333333333  0 0
					0.30980392156862746 0.30980392156862746 0.30980392156862746  0 0
					0 0 0 1 0"
						></feColorMatrix>
					</filter>
				</svg>
			</div>

			{/* Summer84 */}
			<div className="flex flex-col items-center space-y-2">
				<img
					src={`https://picsum.photos/seed/skeleton/320`}
					className="rounded-container"
					alt="Summer84 filter"
					loading="lazy"
					style={{ filter: 'url(#Summer84)' }}
				/>
				<span className="badge preset-tonal">#Summer84</span>
				<svg id="svg-filter-summer84" className="filter absolute -left-full w-0 h-0">
					<filter id="Summer84" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feColorMatrix
							type="matrix"
							values="1.300 0.200 0.000 0.000 0.000
					0.300 0.600 0.200 0.000 0.000
					0.200 1.000 0.200 0.000 0.000
					0.000 0.000 0.000 1.000 0.000"
						></feColorMatrix>
					</filter>
				</svg>
			</div>

			{/* XPro */}
			<div className="flex flex-col items-center space-y-2">
				<img
					src={`https://picsum.photos/seed/skeleton/320`}
					className="rounded-container"
					alt="XPro filter"
					loading="lazy"
					style={{ filter: 'url(#XPro)' }}
				/>
				<span className="badge preset-tonal">#XPro</span>
				<svg id="svg-filter-xpro" className="filter absolute -left-full w-0 h-0">
					<filter id="XPro" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feColorMatrix
							type="matrix"
							values="1.70 -0.20 0.00 0.00 0.00
                    0.10 0.800 0.30 0.00 0.00
                    0.20 0.300 0.50 0.00 0.00
                    0.00 0.00 0.00 1.00 0.00"
						></feColorMatrix>
					</filter>
				</svg>
			</div>
		</div>
	);
}
