<!-- Noir: `filter: url(#Noir)` -->
<svg id="svg-filter-noir" class="hidden">
	<filter
		id="Noir"
		x="-20%"
		y="-20%"
		width="140%"
		height="140%"
		filterUnits="objectBoundingBox"
		primitiveUnits="userSpaceOnUse"
		color-interpolation-filters="linearRGB"
	>
		<feColorMatrix type="saturate" values="0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix1" />
		<feBlend mode="lighten" x="0%" y="0%" width="100%" height="100%" in="colormatrix1" in2="colormatrix1" result="blend" />
		<feDiffuseLighting
			surfaceScale="7.7"
			diffuseConstant="7.3"
			lighting-color="#707070"
			x="0%"
			y="0%"
			width="100%"
			height="100%"
			in="blend"
			result="diffuseLighting"
		>
			<fePointLight x="200" y="157" z="200" />
		</feDiffuseLighting>
		<feBlend mode="multiply" x="0%" y="0%" width="100%" height="100%" in="colormatrix1" in2="diffuseLighting" result="blend1" />
	</filter>
</svg>
