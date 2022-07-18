<script lang="ts">
    import Content from '../blog/Content.svelte';
</script>

<Content cssprops="place-items-center space-y-1" ctype="cols">
    <div class="page-head-name">
        <span class="page-head-name-name"> Valentino </span>
        <span class="page-head-name-surname"> Di Giosaffatte </span>
    </div>
    <span class="font-[200]">Computer scientist</span>
</Content>

<style lang="postcss">
    .page-head-name {
        @apply text-xl;
    }
    .page-head-name-name {
        @apply font-[300];
    }
    .page-head-name-surname {
        @apply font-[600];
    }
</style>
