import { z, defineCollection } from 'astro:content'

const chipsSchema = z.object({
    label: z.string(),
    href: z.string(),
    icon: z.string().optional(),
    preset: z.string().optional(),
})

const componentsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        srcCore: z.string().optional(),
        srcSvelte: z.string().optional(),
        srcReact: z.string().optional(),
        srcAlly: z.string().optional(),
        showDocsUrl: z.boolean().optional(),
        chips: z.array(chipsSchema).optional(),
    }),
})

export const collections = {
    components: componentsCollection,
}
