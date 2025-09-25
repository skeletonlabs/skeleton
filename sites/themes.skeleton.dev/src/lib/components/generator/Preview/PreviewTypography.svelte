<script>
	import { resolve } from '$app/paths';
</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
	<!-- Column 1 -->
	<div class="space-y-10">
		<div class="preset-filled-primary-500 w-56 aspect-square p-4 flex justify-center items-center">
			<span class="h1 text-8xl text-current">Aa</span>
		</div>
		<!-- Headings -->
		<div>
			<div class="space-y-5">
				<h1 class="h1">Heading 1</h1>
				<h2 class="h2">Heading 2</h2>
				<h3 class="h3">Heading 3</h3>
				<h4 class="h4">Heading 4</h4>
				<h5 class="h5">Heading 5</h5>
				<h6 class="h6">Heading 6</h6>
			</div>
		</div>
		<!-- Paragraph -->
		<div class="space-y-8">
			<p>The quick brown fox jumps over the lazy dog.</p>
			<!-- Blockquotes -->
			<blockquote class="blockquote">"The quick brown fox jumps over the lazy dog."</blockquote>
			<!-- Anchors -->
			<div><a href={resolve('/')} class="anchor">An example link</a></div>
			<!-- Code -->
			<div>Insert the <code class="code">.example</code> class here.</div>
			<!-- KBD -->
			<div>Press <kbd class="kbd">⌘</kbd> + <kbd class="kbd">C</kbd> to copy.</div>
		</div>
	</div>
	<!-- Column 2 -->
	<div class="space-y-10">
		<!-- Content -->
		<div class="space-y-4">
			<h2 class="h2">Lorem Ipsum</h2>
			<p class="text-xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Tincidunt dui ut ornare lectus sit <a class="anchor" href={resolve('/')}>amet est placerat</a>. Nulla aliquet porttitor lacus luctus
				accumsan tortor posuere. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Vitae suscipit tellus mauris a diam
				maecenas sed enim ut. Blandit aliquam etiam erat velit scelerisque in dictum. Rhoncus aenean vel elit scelerisque mauris
				pellentesque pulvinar pellentesque habitant.
			</p>
			<h3 class="h3">Elementum Pulvinar</h3>
			<p>
				Id diam vel quam elementum pulvinar etiam non quam lacus. Vel pretium lectus quam id leo in vitae turpis. Aliquet sagittis id
				consectetur purus ut faucibus pulvinar. Dui id ornare arcu odio ut sem <a class="anchor" href={resolve('/')}>nulla pharetra</a> diam.
				Nec ultrices dui sapien eget mi. Interdum varius sit amet mattis vulputate. Sed risus pretium quam vulputate dignissim suspendisse in
				est. Sed nisi lacus sed viverra tellus in hac.
			</p>
			<h4 class="h4">Consectetur Libero</h4>
			<p>
				Elementum eu facilisis sed odio morbi. Adipiscing at in tellus integer. In est ante in nibh mauris. Leo duis ut diam quam nulla
				porttitor massa id. Urna neque viverra justo nec ultrices dui sapien eget mi. Ut pharetra sit amet aliquam id diam maecenas.
				Scelerisque in dictum non consectetur. Nec feugiat nisl <a class="anchor" href={resolve('/')}>pretium fusce</a> id velit ut.
			</p>
		</div>
		<!-- Insert / Delete -->
		<div>
			<del class="del"><s>Always</s> Gonna Give You Up</del>
			<ins class="ins" cite="https://youtu.be/dQw4w9WgXcQ" datetime="10-31-2022"> Never Gonna Give You Up </ins>
		</div>
		<!-- Pre -->
		<pre class="pre">The quick brown fox jumps over the lazy dog.</pre>
	</div>
</div>
