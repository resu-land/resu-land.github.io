<script lang="ts">
    import Content from '$components/lib/blog/Content.svelte';
    import Entry from '$components/lib/music/Entry.svelte';
    import type { Timeline } from '$data/types/music';

    export let timeline: Timeline;
</script>

<Content ctype="cols" cssprops="space-y-8">
    {#each Array.from(timeline.entries()) as [year, albums]}
        <Entry {year} {albums} />
    {/each}
</Content>
