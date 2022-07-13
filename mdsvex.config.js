import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
    extensions: ['.svelte.md', '.md', '.svx'],

    smartypants: {
        dashes: 'oldschool'
    },

    layout: {
        article_template:
            './src/components/lib/blog/markdown/Template.svelte'
    },

    remarkPlugins: [],
    rehypePlugins: []
});

export default config;
