<script lang="ts">
    import Content from '$components/lib/blog/Content.svelte';
    import Left from '$components/lib/cv/Left.svelte';
    import Right from '$components/lib/cv/Right.svelte';

    export let page: number;
</script>

<Content
    ctype="grid"
    cssprops="
    gap-6
    grid-cols-1
    sm:grid-cols-3
    print:grid-cols-3"
>
    <Left {page} />
    <Right {page} />
</Content>
