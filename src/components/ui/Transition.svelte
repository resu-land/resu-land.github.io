<script lang="ts">
    import { fade } from 'svelte/transition';

    export let url: URL;
</script>

{#key url}
    <div class="ctransition" in:fade={{ duration: 200, delay: 0 }}>
        <slot />
    </div>
{/key}

<style lang="postcss">
    .ctransition {
        @apply flex;
        @apply flex-grow;
    }
</style>
