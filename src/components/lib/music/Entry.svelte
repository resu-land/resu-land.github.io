<script lang="ts">
    import Content from '$components/lib/blog/Content.svelte';
    import Grid from '$components/lib/music/Grid.svelte';
    import type { Album } from '$data/types/music';
    import { fly } from 'svelte/transition';

    export let year: number;
    export let albums: Album[];
</script>

<Content ctype="cols" cssprops="space-y-6">
    <span
        class="centry-year"
        in:fly={{
            y: 50,
            duration: 200,
            delay: 0
        }}>{year}</span
    >
    <Grid {albums} />
</Content>

<style lang="postcss">
    .centry-year {
        @apply text-3xl;
        @apply text-lg_front_hl;
    }
    :global(.dark) .centry-year {
        @apply text-dk_front_hl;
    }
</style>
