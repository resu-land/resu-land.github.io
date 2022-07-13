<script lang="ts">
</script>

<div class="cview">
    <slot />
</div>

<style lang="postcss">
    .cview {
        @apply min-h-screen;
        @apply flex;
        @apply flex-col;

        @apply text-lg_front_1;
        @apply bg-lg_back_0;

        @apply transition-all;
        @apply duration-75;
    }
    :global(.dark) .cview {
        @apply bg-dk_back_1;
        @apply text-dk_front_1;
    }
</style>
