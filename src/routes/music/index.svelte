<script lang="ts">
    import Article from '$components/lib/blog/Article.svelte';
    import Section from '$components/lib/blog/Section.svelte';

    import Timeline from '$components/lib/music/Timeline.svelte';
    import Container from '$components/ui/Container.svelte';
    import { timeline } from '$data/lib/music';
</script>

<svelte:head>
    <title>Music</title>
</svelte:head>

<Container cssprops="">
    <Article
        cssprops="space-y-8 w-full max-w-2xl mx-auto"
    >
        <Section cssprops="space-y-4">
            <Timeline {timeline} />
        </Section>
    </Article>
</Container>
