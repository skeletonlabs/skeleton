// MDX Replacement Components
// https://docs.astro.build/en/guides/markdown-content/#assigning-custom-components-to-html-elements
// https://mdxjs.com/table-of-components/

import Heading1 from "@lib/components/mdx/Heading1.astro";
import Heading2 from "@lib/components/mdx/Heading2.astro";
import Heading3 from "@lib/components/mdx/Heading3.astro";
import Heading4 from "@lib/components/mdx/Heading4.astro";
import Heading5 from "@lib/components/mdx/Heading5.astro";
import Heading6 from "@lib/components/mdx/Heading6.astro";
import Anchor from "@lib/components/mdx/Anchor.astro";
import Blockquote from "@lib/components/mdx/Blockquote.astro";
import ListUnordered from "@lib/components/mdx/ListUnordered.astro";
import ListOrdered from "@lib/components/mdx/ListOrdered.astro";
import Code from "@lib/components/mdx/Code.astro";
import HorzRule from "@lib/components/mdx/HorzRule.astro";
import Table from "@lib/components/mdx/Table.astro";

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
