<script lang="ts">
    import Content from '$components/lib/blog/Content.svelte';
    import Entry from '$components/lib/blog/Entry.svelte';
    import type { Articles } from '$data/types/blog';

    export let articles: Articles;
</script>

<Content ctype="cols" cssprops="space-y-4">
    {#each Array.from(articles.values()) as article}
        <Entry {article} />
    {/each}
</Content>
