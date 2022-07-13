<script lang="ts">
    export let cssprops: string;
</script>

<article class="carticle {cssprops}">
    <slot />
</article>

<style lang="postcss">
    .carticle {
        @apply flex;
        @apply flex-col;
        @apply place-content-center;
    }
</style>
