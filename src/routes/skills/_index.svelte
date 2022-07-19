<script lang="ts">
    import Article from '$components/lib/blog/Article.svelte';
    import Content from '$components/lib/blog/Content.svelte';
    import Section from '$components/lib/blog/Section.svelte';
    import Icons from '$components/lib/devicons';
    import C from '$components/lib/skills/langs/c.svelte';
    import Container from '$components/ui/Container.svelte';
    import { faCodeCommit, faCrown, faHeart } from '@fortawesome/free-solid-svg-icons/index.es';
    import Fa from 'svelte-fa/src/fa.svelte';
</script>

<svelte:head>
    <title>Skills</title>
</svelte:head>

<Container cssprops="">
    <Article cssprops="space-y-10 w-full max-w-2xl mx-auto">
        <Section title="Programming Languages" cssprops="space-y-4">
            <Content ctype="cols" cssprops="space-y-4 pl-5">
                <Content title="Expert" ctype="cols" cssprops="space-y-2">
                    <Content ctype="rows" cssprops="flex-wrap">
                        <C />
                    </Content>
                </Content>
            </Content>
        </Section>

        <Section title="Programming Languages" cssprops="space-y-6">
            <Content ctype="cols" cssprops="space-y-4 pl-5">
                <Content ctype="cols" cssprops="space-y-8">
                    <Content ctype="rows" cssprops="space-x-4 sm:space-x-6">
                        <Icons.lua
                            containerprops=""
                            cssprops="h-16"
                            csspaths={[
                                'fill-lg_front_1 dark:fill-dk_front_1',
                                'fill-lg_back_0 dark:fill-dk_back_1',
                                'fill-lg_front_1 dark:fill-dk_front_1'
                            ]}
                        />
                        <Content ctype="cols" cssprops="place-content-between">
                            <Fa icon={faHeart} class="text-lg_front_1 dark:text-dk_front_1" />
                            <Fa icon={faCrown} class="text-lg_front_1 dark:text-dk_front_1" />
                            <Fa icon={faCodeCommit} class="text-lg_front_1 dark:text-dk_front_1" />
                        </Content>
                        <div class="flex flex-col flex-1 place-content-between">
                            <div class="flex space-x-3 place-items-center">
                                <div class="flex text-xs font-bold">40</div>
                                <div
                                    class="bg-lg_front_1 dark:bg-dk_front_1 w-full rounded-sm flex"
                                >
                                    <div
                                        class="bg-lg_front_hl dark:bg-dk_front_0 rounded-sm text-xs font-bold flex place-items-center place-content-center w-[40%] p-1.5"
                                    />
                                </div>
                            </div>

                            <div class="flex space-x-3 place-items-center">
                                <div class="flex text-xs font-bold">70</div>
                                <div
                                    class="bg-lg_front_1 dark:bg-dk_front_1 w-full rounded-sm flex"
                                >
                                    <div
                                        class="bg-lg_front_hl dark:bg-dk_front_0 rounded-sm text-xs font-bold flex place-items-center place-content-center w-[72%] p-1.5"
                                    />
                                </div>
                            </div>

                            <div class="flex space-x-3 place-items-center">
                                <div class="flex text-xs font-bold">60</div>
                                <div
                                    class="bg-lg_front_1 dark:bg-dk_front_1 w-full rounded-sm flex"
                                >
                                    <div
                                        class="bg-lg_front_hl dark:bg-dk_front_0 rounded-sm text-xs font-bold flex place-items-center place-content-center w-[60%] p-1.5"
                                    />
                                </div>
                            </div>
                        </div>
                    </Content>
                </Content>
            </Content>
        </Section>
    </Article>
</Container>
