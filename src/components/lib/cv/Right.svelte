<script lang="ts">
    import Page1Frag2 from '$components/lib/cv/content/Page1/Frag2.svelte';
    import Page2Frag2 from '$components/lib/cv/content/Page2/Frag2.svelte';

    export let page: number;
</script>

{#if page == 1}
    <Page1Frag2 />
{:else if page == 2}
    <Page2Frag2 />
{/if}
