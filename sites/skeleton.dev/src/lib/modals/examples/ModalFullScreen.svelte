<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cButton = 'fixed top-4 right-4 z-50 font-bold shadow-xl';
</script>

{#if $modalStore[0]}
	<!-- Button -->
	<button class="btn-icon variant-filled {cButton}" on:click={parent.onClose}>×</button>
	<div class="modal-example-fullscreen {cBase}">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat
			nibh sed pulvinar proin gravida hendrerit lectus a. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Enim facilisis
			gravida neque convallis a. Tellus elementum sagittis vitae et leo duis. Porta non pulvinar neque laoreet suspendisse interdum
			consectetur libero id. A arcu cursus vitae congue mauris rhoncus aenean vel. Fames ac turpis egestas sed tempus urna. Integer feugiat
			scelerisque varius morbi enim nunc. Turpis egestas integer eget aliquet nibh praesent tristique. Ut morbi tincidunt augue interdum
			velit euismod in pellentesque massa. Cursus risus at ultrices mi. Nunc non blandit massa enim. Nec feugiat nisl pretium fusce id.
			Purus viverra accumsan in nisl nisi scelerisque. Arcu bibendum at varius vel pharetra vel turpis. Condimentum vitae sapien
			pellentesque habitant morbi tristique. Vitae suscipit tellus mauris a diam maecenas sed enim. Neque volutpat ac tincidunt vitae semper
			quis lectus nulla at. Lectus nulla at volutpat diam ut venenatis. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
			Interdum consectetur libero id faucibus nisl tincidunt. Sollicitudin ac orci phasellus egestas tellus. Vulputate enim nulla aliquet
			porttitor. Quis viverra nibh cras pulvinar mattis nunc sed. Nulla porttitor massa id neque aliquam vestibulum. Morbi tempus iaculis
			urna id volutpat lacus laoreet. Nunc mattis enim ut tellus elementum sagittis. Dui sapien eget mi proin sed libero enim sed faucibus.
			Sollicitudin tempor id eu nisl nunc. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Tellus cras adipiscing enim
			eu. Ut ornare lectus sit amet. Dictum at tempor commodo ullamcorper. Fermentum et sollicitudin ac orci phasellus egestas tellus
			rutrum. Rutrum tellus pellentesque eu tincidunt. Viverra orci sagittis eu volutpat odio facilisis. Id cursus metus aliquam eleifend mi
			in nulla posuere sollicitudin. Sed id semper risus in. Condimentum lacinia quis vel eros. Eu ultrices vitae auctor eu augue ut. Rutrum
			tellus pellentesque eu tincidunt tortor aliquam. Praesent tristique magna sit amet. Eget est lorem ipsum dolor sit amet consectetur
			adipiscing elit. Et tortor consequat id porta nibh venenatis. Sed arcu non odio euismod lacinia. Pellentesque eu tincidunt tortor
			aliquam nulla facilisi cras fermentum odio. Vel pharetra vel turpis nunc eget lorem dolor. Turpis egestas maecenas pharetra convallis
			posuere morbi leo urna molestie. Cursus sit amet dictum sit amet. A cras semper auctor neque vitae tempus quam pellentesque. Facilisi
			etiam dignissim diam quis enim lobortis. Quam id leo in vitae turpis massa sed elementum. Eget lorem dolor sed viverra ipsum nunc
			aliquet bibendum. Tincidunt augue interdum velit euismod in pellentesque. Ut porttitor leo a diam sollicitudin tempor id. Elementum eu
			facilisis sed odio morbi. Nulla at volutpat diam ut venenatis tellus. Nibh sed pulvinar proin gravida hendrerit. Id semper risus in
			hendrerit gravida rutrum. Vestibulum lorem sed risus ultricies tristique nulla. Nunc aliquet bibendum enim facilisis gravida neque
			convallis. Elementum nibh tellus molestie nunc non blandit massa enim. Integer vitae justo eget magna fermentum. Amet purus gravida
			quis blandit turpis cursus in. Et odio pellentesque diam volutpat. Arcu bibendum at varius vel pharetra vel turpis. At consectetur
			lorem donec massa. Condimentum lacinia quis vel eros donec ac odio tempor. Morbi non arcu risus quis varius quam. Neque vitae tempus
			quam pellentesque nec nam aliquam sem. Quam lacus suspendisse faucibus interdum posuere. Lectus arcu bibendum at varius vel pharetra
			vel. Sed lectus vestibulum mattis ullamcorper velit. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Sollicitudin nibh
			sit amet commodo nulla facilisi nullam vehicula. Interdum posuere lorem ipsum dolor sit. Posuere morbi leo urna molestie. Viverra nibh
			cras pulvinar mattis. Egestas diam in arcu cursus euismod quis. Faucibus a pellentesque sit amet porttitor eget dolor. Fusce ut
			placerat orci nulla pellentesque dignissim enim sit amet. Ipsum consequat nisl vel pretium lectus quam. Enim nulla aliquet porttitor
			lacus luctus accumsan tortor. Tristique senectus et netus et malesuada fames. A erat nam at lectus urna duis convallis. Tellus cras
			adipiscing enim eu turpis egestas pretium aenean. Amet nisl suscipit adipiscing bibendum est ultricies. Purus faucibus ornare
			suspendisse sed nisi lacus sed. Ornare arcu dui vivamus arcu felis. Sem viverra aliquet eget sit amet tellus cras adipiscing. Pharetra
			diam sit amet nisl suscipit adipiscing. Ornare arcu odio ut sem. Accumsan tortor posuere ac ut consequat semper. Venenatis lectus
			magna fringilla urna. Sed pulvinar proin gravida hendrerit lectus a. Nibh ipsum consequat nisl vel. Sed libero enim sed faucibus
			turpis in eu mi. Tempus urna et pharetra pharetra massa. Blandit turpis cursus in hac habitasse. Id diam maecenas ultricies mi eget
			mauris. Nibh ipsum consequat nisl vel pretium. Volutpat maecenas volutpat blandit aliquam etiam. Id cursus metus aliquam eleifend mi
			in nulla posuere sollicitudin. Congue mauris rhoncus aenean vel elit scelerisque mauris. Facilisis sed odio morbi quis commodo odio
			aenean. Ut eu sem integer vitae. Morbi leo urna molestie at elementum eu facilisis sed odio. Natoque penatibus et magnis dis. Pharetra
			diam sit amet nisl suscipit adipiscing bibendum est. Diam vel quam elementum pulvinar etiam. Id ornare arcu odio ut sem nulla
			pharetra. A lacus vestibulum sed arcu non odio euismod lacinia at. Varius vel pharetra vel turpis nunc eget lorem. Dapibus ultrices in
			iaculis nunc sed augue lacus viverra vitae. Aliquam ut porttitor leo a. Est ultricies integer quis auctor elit sed vulputate mi.
			Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Amet mauris commodo quis imperdiet massa. Accumsan in nisl nisi
			scelerisque eu. Ultrices in iaculis nunc sed augue. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Vel
			risus commodo viverra maecenas accumsan lacus vel. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Est sit amet
			facilisis magna etiam tempor orci eu lobortis. Rhoncus mattis rhoncus urna neque viverra justo nec. Velit dignissim sodales ut eu.
			Odio aenean sed adipiscing diam donec. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. In eu mi bibendum neque
			egestas congue quisque egestas. Ridiculus mus mauris vitae ultricies leo. Risus feugiat in ante metus. Amet porttitor eget dolor morbi
			non arcu risus. Porta nibh venenatis cras sed felis. Porta lorem mollis aliquam ut. Interdum posuere lorem ipsum dolor sit amet
			consectetur adipiscing elit. Pulvinar etiam non quam lacus. Elementum facilisis leo vel fringilla. Faucibus et molestie ac feugiat sed
			lectus vestibulum mattis ullamcorper. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Sed blandit libero volutpat sed
			cras ornare arcu dui. Suscipit tellus mauris a diam. Sit amet massa vitae tortor condimentum lacinia. Interdum posuere lorem ipsum
			dolor. Diam phasellus vestibulum lorem sed risus. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Tincidunt lobortis feugiat
			vivamus at augue eget. Posuere ac ut consequat semper. Malesuada fames ac turpis egestas integer eget. Arcu odio ut sem nulla
			pharetra. Montes nascetur ridiculus mus mauris vitae ultricies. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Amet
			volutpat consequat mauris nunc congue. Aenean sed adipiscing diam donec adipiscing tristique risus. Sed pulvinar proin gravida
			hendrerit lectus. At in tellus integer feugiat scelerisque. Aliquam id diam maecenas ultricies mi. Lectus nulla at volutpat diam ut
			venenatis tellus. Pellentesque nec nam aliquam sem et tortor consequat id porta. Gravida dictum fusce ut placerat orci nulla. Viverra
			tellus in hac habitasse platea dictumst vestibulum. Orci a scelerisque purus semper eget duis at. Dui id ornare arcu odio ut sem nulla
			pharetra diam. Suscipit tellus mauris a diam. Cursus turpis massa tincidunt dui ut. Nec feugiat in fermentum posuere urna. Porta nibh
			venenatis cras sed felis eget. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Quis vel eros donec ac odio tempor
			orci dapibus ultrices. Ac turpis egestas maecenas pharetra convallis posuere. Nulla facilisi morbi tempus iaculis urna. Nisl nisi
			scelerisque eu ultrices vitae auctor. Hac habitasse platea dictumst vestibulum. Pellentesque massa placerat duis ultricies lacus sed.
			Sed odio morbi quis commodo odio. Id porta nibh venenatis cras sed felis eget velit aliquet. Sed viverra ipsum nunc aliquet. Euismod
			in pellentesque massa placerat duis ultricies lacus sed turpis. Gravida rutrum quisque non tellus orci ac auctor. Massa sed elementum
			tempus egestas sed sed risus pretium. In iaculis nunc sed augue lacus viverra vitae. Suspendisse potenti nullam ac tortor vitae purus
			faucibus ornare. Donec pretium vulputate sapien nec sagittis. Amet facilisis magna etiam tempor orci eu. Egestas tellus rutrum tellus
			pellentesque eu tincidunt. Lobortis feugiat vivamus at augue eget arcu dictum. Varius sit amet mattis vulputate enim nulla aliquet.
			Fermentum dui faucibus in ornare quam. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Senectus et netus et
			malesuada. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Rutrum tellus pellentesque eu tincidunt tortor aliquam.
			Pellentesque habitant morbi tristique senectus et netus et. Non tellus orci ac auctor. Enim lobortis scelerisque fermentum dui
			faucibus. Posuere lorem ipsum dolor sit. Auctor augue mauris augue neque. Fermentum leo vel orci porta. Nullam vehicula ipsum a arcu
			cursus vitae congue. At elementum eu facilisis sed odio morbi. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Vitae
			suscipit tellus mauris a diam maecenas. Eu volutpat odio facilisis mauris sit. Vel fringilla est ullamcorper eget nulla facilisi. Odio
			pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Semper eget duis at tellus at urna condimentum mattis
			pellentesque. Tempor nec feugiat nisl pretium. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Dui id ornare
			arcu odio ut sem nulla pharetra diam. Pretium nibh ipsum consequat nisl. Commodo sed egestas egestas fringilla phasellus faucibus.
			Adipiscing diam donec adipiscing tristique. Lorem mollis aliquam ut porttitor leo a diam. In fermentum posuere urna nec tincidunt
			praesent. Quis varius quam quisque id. Eget velit aliquet sagittis id. Condimentum id venenatis a condimentum vitae sapien. Accumsan
			in nisl nisi scelerisque eu. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Convallis posuere morbi leo urna. Lectus
			magna fringilla urna porttitor rhoncus dolor purus non. Leo vel orci porta non pulvinar neque. Ipsum consequat nisl vel pretium lectus
			quam id leo. Facilisi cras fermentum odio eu feugiat. Tristique magna sit amet purus gravida. Sed felis eget velit aliquet sagittis id
			consectetur. Gravida rutrum quisque non tellus orci ac. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. At
			elementum eu facilisis sed odio morbi quis commodo odio. Fermentum leo vel orci porta non pulvinar. Amet consectetur adipiscing elit
			ut aliquam. Pulvinar elementum integer enim neque. Quis lectus nulla at volutpat diam ut venenatis tellus in. Tristique senectus et
			netus et malesuada fames ac turpis egestas. Quisque id diam vel quam elementum pulvinar etiam non. Nibh tortor id aliquet lectus proin
			nibh. In tellus integer feugiat scelerisque varius morbi enim. Sit amet dictum sit amet justo donec. Scelerisque viverra mauris in
			aliquam. Sit amet risus nullam eget felis eget nunc. Pharetra sit amet aliquam id. Sit amet massa vitae tortor. Pellentesque habitant
			morbi tristique senectus et netus et malesuada fames. Vel risus commodo viverra maecenas. Leo vel orci porta non pulvinar. Nunc sed id
			semper risus in hendrerit. Aliquam sem et tortor consequat id porta nibh venenatis. Tristique sollicitudin nibh sit amet commodo nulla
			facilisi nullam. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Mauris rhoncus aenean vel elit. Posuere lorem
			ipsum dolor sit. Arcu bibendum at varius vel pharetra vel. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
			Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sed id semper risus in hendrerit gravida
			rutrum quisque non. Euismod quis viverra nibh cras pulvinar mattis nunc. Felis imperdiet proin fermentum leo vel orci. Posuere morbi
			leo urna molestie at elementum eu. Sagittis orci a scelerisque purus. Viverra mauris in aliquam sem fringilla ut morbi tincidunt
			augue. Scelerisque in dictum non consectetur a erat. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Sit
			amet facilisis magna etiam tempor orci eu lobortis elementum. Venenatis urna cursus eget nunc scelerisque. Tincidunt nunc pulvinar
			sapien et ligula ullamcorper. In est ante in nibh mauris cursus. Pellentesque adipiscing commodo elit at imperdiet. Leo in vitae
			turpis massa sed. Scelerisque purus semper eget duis at tellus at urna condimentum. Etiam sit amet nisl purus in mollis nunc sed id.
			Amet massa vitae tortor condimentum lacinia quis vel. Amet purus gravida quis blandit turpis cursus in hac. Tincidunt id aliquet risus
			feugiat. Ipsum dolor sit amet consectetur adipiscing elit. Lobortis mattis aliquam faucibus purus in. Aliquet risus feugiat in ante
			metus. Pretium fusce id velit ut tortor pretium. Amet mauris commodo quis imperdiet massa tincidunt. Diam donec adipiscing tristique
			risus nec feugiat in. Mattis rhoncus urna neque viverra. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Nunc eget lorem dolor
			sed. Aliquet risus feugiat in ante metus dictum at tempor. Bibendum arcu vitae elementum curabitur. Mi ipsum faucibus vitae aliquet
			nec ullamcorper sit amet. Etiam tempor orci eu lobortis elementum. Rutrum quisque non tellus orci. Lacus laoreet non curabitur gravida
			arcu ac.
		</p>
	</div>
{/if}
