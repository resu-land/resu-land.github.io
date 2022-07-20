<script lang="ts">
    import Content from '$components/lib/blog/Content.svelte';

    export let page: number;
    export let pages: number;
</script>

<Content ctype="rows" cssprops="place-content-end space-x-4 sm:place-content-between">
    <span class="text-cv_text_alt">Curriculum Vitae</span>
    <span class="text-cv_text_alt">Page {page} / {pages}</span>
</Content>
