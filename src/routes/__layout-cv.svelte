<script lang="ts">
    import { browser } from '$app/env';
    import { dark } from '$stores/theme';
    import '../app.css';
</script>

{#if browser}
    <div class:dark={$dark} class="frame">
        <slot />
    </div>
{/if}

<style lang="postcss">
    .frame {
        @apply h-screen;
        @apply w-screen;
        @apply bg-dk_back_0;
    }
</style>
