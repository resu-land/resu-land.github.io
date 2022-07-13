<script lang="ts">
    import Article from '$components/lib/blog/Article.svelte';

    import Library from '$components/lib/blog/Library.svelte';
    import Section from '$components/lib/blog/Section.svelte';
    import Container from '$components/ui/Container.svelte';
    import { articles } from '$data/lib/blog';
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<Container cssprops="">
    <Article cssprops="space-y-8 w-full mx-auto">
        <Section cssprops="space-y-4">
            <Library {articles} />
        </Section>
    </Article>
</Container>
