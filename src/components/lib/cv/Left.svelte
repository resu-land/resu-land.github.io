<script lang="ts">
    import Page1Frag1 from '$components/lib/cv/content/Page1/Frag1.svelte';
    import Page2Frag1 from '$components/lib/cv/content/Page2/Frag1.svelte';

    export let page: number;
</script>

{#if page == 1}
    <Page1Frag1 />
{:else if page == 2}
    <Page2Frag1 />
{/if}
