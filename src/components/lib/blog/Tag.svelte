<script lang="ts">
    export let name: string;
</script>

<div class="ctag">
    {name}
</div>

<style lang="postcss">
    .ctag {
        @apply mr-1.5;
        @apply my-1;
        @apply py-0.5;
        @apply px-1.5;
        @apply bg-lg_back_2;
        @apply text-lg_front_1;
        @apply font-mono;
        @apply text-sm;
        @apply rounded-sm;
        @apply w-fit

        /* @apply active:opacity-50; */
        /* @apply sm:hover:opacity-80; */
        /* @apply sm:active:opacity-50; */;
    }
    :global(.dark) .ctag {
        @apply bg-dk_back_2;
        @apply text-dk_front_1;
    }
</style>
