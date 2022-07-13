<script lang="ts">
    import { fly } from 'svelte/transition';

    export let author: string;
    export let title: string;
    export let cover: string;
    export let year: number;
</script>

<div
    class="album-container"
    in:fly={{ y: 50, duration: 200, delay: 0 }}
>
    <button class="album-link">
        <img
            class="album"
            src={`/music/${cover}`}
            alt={title}
        />
        <span class="sr-only">{author}</span>
        <span class="sr-only">{year}</span>
    </button>
</div>

<style lang="postcss">
    .album-container {
        @apply rounded-sm;
    }

    .album-link {
        -webkit-tap-highlight-color: rgba(
            0,
            0,
            0,
            0
        );
    }
    .album {
        @apply object-contain;
        @apply rounded-sm;
        @apply sm:hover:opacity-70;
        @apply active:opacity-70;
        @apply active:opacity-50;
        @apply transition-all;
        @apply duration-75;
        @apply bg-lg_front_0;
        @apply p-0.5;
    }
    :global(.dark) .album {
        @apply bg-dk_front_0;
    }
</style>
