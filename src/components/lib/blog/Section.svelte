<script lang="ts">
    import { fly } from 'svelte/transition';

    export let cssprops: string;
    export let title: string = '';
</script>

<section
    class="csection {cssprops}"
    in:fly={{ y: 50, duration: 100, delay: 0 }}
>
    {#if title}
        <span class="csection-title">{title}</span
        >
    {/if}
    <slot />
</section>

<style lang="postcss">
    .csection {
        @apply flex;
        @apply flex-col;
        @apply place-content-center;
    }

    .csection-title {
        @apply text-3xl;
        @apply text-lg_front_hl;
    }
    :global(.dark) .csection-title {
        @apply text-dk_front_hl;
    }
</style>
