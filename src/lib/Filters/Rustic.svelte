<svg id="svg-filter" class="filter hidden">
    <!-- Emerald: `filter: url(#emerald)` -->
    <filter id="Rustic" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">

        <feColorMatrix type="matrix" in="SourceGraphic" result="colormatrix" values="
        0.39215686274509803 0.39215686274509803 0.39215686274509803  0 0 
        0.3333333333333333 0.3333333333333333 0.3333333333333333  0 0 
        0.30980392156862746 0.30980392156862746 0.30980392156862746  0 0  
        0 0 0 1 0" />
        
        <feComponentTransfer in="colormatrix" result="componentTransfer">
            

        </feComponentTransfer>

        <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
    </filter>
</svg>