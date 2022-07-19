<script lang="ts">
    import { browser } from '$app/env';
    import '../app.css';
</script>

{#if browser}
    <slot />
{/if}
