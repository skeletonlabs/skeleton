<script lang="ts">
  import Avatar from '$lib/components/Avatar/Avatar.svelte';

  const imgSrc =
    'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop';
  const verticalImgSrc =
    'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=64&h=128&auto=format&fit=crop';
  const horizontalImgSrc =
    'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<h1 class="h1">Avatars</h1>

<!-- Filter example -->
<!-- NoirLight: `filter: url(#NoirLight)` -->
<svg id="svg-filter-noirlight" class="absolute -left-full h-0 w-0 filter">
  <filter
    id="NoirLight"
    x="-20%"
    y="-20%"
    width="140%"
    height="140%"
    filterUnits="objectBoundingBox"
    primitiveUnits="userSpaceOnUse"
    color-interpolation-filters="linearRGB"
  >
    <feColorMatrix type="saturate" values="0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix2" />
    <feBlend mode="saturation" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="colormatrix2" result="blend2" />
    <feBlend mode="screen" x="0%" y="0%" width="100%" height="100%" in="colormatrix2" in2="blend2" result="blend3" />
    <feColorMatrix type="luminanceToAlpha" x="0%" y="0%" width="100%" height="100%" in="blend3" result="colormatrix3" />
    <feBlend mode="exclusion" x="0%" y="0%" width="100%" height="100%" in="blend3" in2="colormatrix3" result="blend5" />
  </filter>
</svg>

<!-- imageSrc -->
<h3 class="h3">imageSrc</h3>
<Avatar src={imgSrc} alt="skeleton" />

<!-- Initials -->
<h3 class="h3">Initials</h3>
<Avatar font="text-4xl" classes="flex justify-center items-center h-16">SK</Avatar>

<!-- Icon -->
<h3 class="h3">Icon</h3>
<Avatar classes="flex justify-center items-center h-16">💀</Avatar>

<!-- filter -->
<h3 class="h3">Filter</h3>
<Avatar src={imgSrc} alt="skeleton" filter="#NoirLight" />

<!-- non-square aspect-ratio -->
<h3 class="h3">non-square aspect-ratio</h3>
<div class="flex space-x-4">
  <Avatar size="w-16 h-32" src={verticalImgSrc} alt="skeleton" />
  <Avatar size="w-64 h-32" rounded="rounded-md" src={horizontalImgSrc} alt="skeleton" />
</div>
