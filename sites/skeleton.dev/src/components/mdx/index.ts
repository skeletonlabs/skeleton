// MDX Replacement Components
// https://docs.astro.build/en/guides/markdown-content/#assigning-custom-components-to-html-elements
// https://mdxjs.com/table-of-components/
import Anchor from '@components/mdx/Anchor.astro';
import Blockquote from '@components/mdx/Blockquote.astro';
import Code from '@components/mdx/Code.astro';
import Heading1 from '@components/mdx/Heading1.astro';
import Heading2 from '@components/mdx/Heading2.astro';
import Heading3 from '@components/mdx/Heading3.astro';
import Heading4 from '@components/mdx/Heading4.astro';
import Heading5 from '@components/mdx/Heading5.astro';
import Heading6 from '@components/mdx/Heading6.astro';
import HorzRule from '@components/mdx/HorzRule.astro';
import ListOrdered from '@components/mdx/ListOrdered.astro';
import ListUnordered from '@components/mdx/ListUnordered.astro';
import Table from '@components/mdx/Table.astro';

const componentSet = {
	h1: Heading1,
	h2: Heading2,
	h3: Heading3,
	h4: Heading4,
	h5: Heading5,
	h6: Heading6,
	a: Anchor,
	blockquote: Blockquote,
	ul: ListUnordered,
	ol: ListOrdered,
	code: Code,
	hr: HorzRule,
	table: Table,
};

export default componentSet;
