<script lang="ts">
    import Left from '$components/lib/cv/Left.svelte';
    import Right from '$components/lib/cv/Right.svelte';
    import Content from '../blog/Content.svelte';
</script>

<Content
    ctype="grid"
    cssprops="
    gap-6
    grid-cols-3"
>
    <Left />
    <Right />
</Content>

<style lang="postcss">
</style>
