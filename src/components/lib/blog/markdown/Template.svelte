<script>
    import Content from '$components/lib/blog/Content.svelte';
    import Section from '$components/lib/blog/Section.svelte';
    import Container from '$components/ui/Container.svelte';

    /** @type {string} title */ export let title;
    /** @type {string} date */ export let date;
</script>

<Container cssprops="">
    <Section {title} cssprops="space-y-4">
        {new Date(date).toDateString()}
        <Content ctype="rows" cssprops="flex-wrap">
            <div class="entry-tag">todo</div>
            <div class="entry-tag">dynamic</div>
            <div class="entry-tag">tags</div>
            <div class="entry-tag">list</div>
        </Content>
        <Content ctype="cols" cssprops="space-y-2">
            <slot />
        </Content>
    </Section>
</Container>

<style lang="postcss">
    .entry-tag {
        @apply mr-1.5;
        @apply my-1;
        @apply py-0.5;
        @apply px-1.5;
        @apply bg-lg_back_2;
        @apply text-lg_front_1;
        @apply font-mono;
        @apply text-sm;
        @apply rounded-sm;

        /* @apply active:opacity-50; */
        /* @apply sm:hover:opacity-80; */
        /* @apply sm:active:opacity-50; */
    }
</style>
