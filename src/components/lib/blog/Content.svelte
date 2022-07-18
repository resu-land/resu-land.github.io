<script lang="ts">
    import { fly } from 'svelte/transition';

    export let cssprops: string;
    export let ctype: string;
    export let title: string = '';

    let css: string;

    switch (ctype) {
        case 'grid':
            css = 'grid';
            break;
        case 'rows':
            css = 'flex';
            break;
        case 'cols':
            css = 'flex flex-col';
            break;
        default:
            css = '';
            break;
    }
</script>

<section class="{css} {cssprops}" in:fly={{ y: 50, duration: 100, delay: 0 }}>
    {#if title}
        <span class="ccontent-title">{title}</span>
    {/if}
    <slot />
</section>

<style lang="postcss">
    .ccontent-title {
        @apply text-xl;
        @apply text-lg_front_1;
    }
    :global(.dark) .ccontent-title {
        @apply text-dk_front_1;
    }
</style>
