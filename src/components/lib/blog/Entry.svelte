<script lang="ts">
    import { base } from '$app/paths';
    import Content from '$components/lib/blog/Content.svelte';
    import type { Article } from '$data/types/blog';

    export let article: Article;
</script>

<Content ctype="cols" cssprops="space-y-2">
    <a class="entry-title" href={`${base}/blog/articles/${article.link}`}>{article.title}</a>
    <Content ctype="rows" cssprops="flex-wrap">
        {#each article.tags as tag}
            <div class="entry-tag">{tag.id}</div>
        {/each}
    </Content>
</Content>

<style lang="postcss">
    .entry-tag {
        @apply mr-1.5;
        @apply my-1;
        @apply py-0.5;
        @apply px-1.5;
        @apply bg-lg_back_2;
        @apply text-lg_front_1;
        @apply font-mono;
        @apply text-sm;
        @apply rounded-sm;

        /* @apply active:opacity-50; */
        /* @apply sm:hover:opacity-80; */
        /* @apply sm:active:opacity-50; */
    }
    :global(.dark) .entry-tag {
        @apply bg-dk_back_2;
        @apply text-dk_front_1;
    }

    .entry-title {
        @apply text-lg;
        @apply text-lg_front_1;
        @apply active:text-lg_front_hl;
        @apply sm:hover:text-lg_front_hl;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        /* @apply transition-all; */
        /* @apply duration-100; */
    }
    :global(.dark) .entry-title {
        @apply text-dk_front_1;
        @apply active:text-dk_front_hl;
        @apply sm:hover:text-dk_front_hl;
    }
</style>
