<script lang="ts">
    export let cssprops: string =
        'bg-lg_back_2 text-lg_front_1 font-mono dark:bg-dk_back_2 dark:text-dk_front_1';
    export let name: string;
</script>

<div class="ctag {cssprops}">
    {name}
</div>

<style lang="postcss">
    .ctag {
        @apply mr-1.5;
        @apply my-1;
        @apply py-0.5;
        @apply px-1.5;
        @apply text-sm;
        @apply rounded-sm;
        @apply w-fit;
    }
</style>
