import a from '@/components/mdx/a.astro';
import blockquote from '@/components/mdx/blockquote.astro';
import code from '@/components/mdx/code.astro';
import h1 from '@/components/mdx/h1.astro';
import h2 from '@/components/mdx/h2.astro';
import h3 from '@/components/mdx/h3.astro';
import h4 from '@/components/mdx/h4.astro';
import h5 from '@/components/mdx/h5.astro';
import h6 from '@/components/mdx/h6.astro';
import hr from '@/components/mdx/hr.astro';
import ol from '@/components/mdx/ol.astro';
import table from '@/components/mdx/table.astro';
import ul from '@/components/mdx/ul.astro';

export const components = {
	a: a,
	h1: h1,
	h2: h2,
	h3: h3,
	h4: h4,
	h5: h5,
	h6: h6,
	hr: hr,
	ol: ol,
	ul: ul,
	code: code,
	table: table,
	blockquote: blockquote,
};
