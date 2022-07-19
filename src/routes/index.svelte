<script lang="ts">
    import Article from '$components/lib/blog/Article.svelte';
    import Content from '$components/lib/blog/Content.svelte';
    import Section from '$components/lib/blog/Section.svelte';
    import Tag from '$components/lib/blog/Tag.svelte';
    import Container from '$components/ui/Container.svelte';

    import utils from '$data/utils';
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<Container cssprops="">
    <Article cssprops="space-y-8 w-full mx-auto">
        <!-- Bio -->
        <Section title="Bio" cssprops="space-y-4">
            <Content ctype="cols" cssprops="space-y-6">
                <Content ctype="cols" cssprops="space-y-2">
                    <span class="cdefault-0">{utils.rl(50)}</span>
                    <span class="cdefault-0">{utils.rl(50)}</span>
                    <span class="cdefault-0">{utils.rl(50)}</span>
                </Content>
                <Content ctype="cols" cssprops="space-y-2">
                    {#each Array(5) as _}
                        <Content ctype="rows" cssprops="space-x-4 sm:space-x-6">
                            <div class="flex flex-col">
                                <span>2012</span>
                                <span>2020</span>
                            </div>
                            <span class="cdefault-0">{utils.rl(50)}</span>
                        </Content>
                    {/each}
                </Content>
            </Content>
        </Section>

        <!-- Education -->
        <Section title="Education" cssprops="space-y-4">
            <Content ctype="cols" cssprops="space-y-4">
                <Content title="Master's Degree in Computer Science" ctype="cols" cssprops="">
                    <Content ctype="cols" cssprops="">
                        <span class="cdefault-0">University of L'Aquila</span>
                        <span class="cdefault-0">
                            Department of Information Engineering, Computer Science and Mathematics
                        </span>
                        <span class="cdefault-0 font-serif">
                            Models for incremental public transportation service design
                        </span>
                        <div>
                            <span class="cdefault-0 font-mono font-bold">110/110</span>
                            <span class="cdefault-0 font-serif font-bold">cum laude</span>
                        </div>
                    </Content>
                </Content>
                <Content
                    title="Level-1 Master Course - Mobile and Web Technologies"
                    ctype="cols"
                    cssprops=""
                >
                    <Content ctype="cols" cssprops="text-lg_front_0 dark:text-dk_front_0">
                        <span class="cdefault-0">University of L'Aquila</span>
                        <span class="cdefault-0"
                            >Department of Information Engineering, Computer Science and Mathematics
                        </span>
                        <div>
                            <span class="cdefault-0 font-mono font-bold">70/70</span>
                            <span class="cdefault-0 font-serif font-bold">cum laude</span>
                        </div>
                    </Content>
                </Content>
            </Content>
        </Section>

        <!-- Languages -->
        <Section title="Languages" cssprops="space-y-4">
            <Content ctype="cols" cssprops="space-y-4">
                <Content title="English" ctype="cols" cssprops="">
                    <Content ctype="cols" cssprops="">
                        <span class="cdefault-0">University of L'Aquila</span>
                        <span class="cdefault-0">
                            Department of Information Engineering, Computer Science and Mathematics
                        </span>
                        <div>
                            <span class="cdefault-0 font-mono font-bold">B2</span>
                            <span class="cdefault-0 font-serif font-bold">level certification</span>
                        </div>
                    </Content>
                </Content>
                <!-- temp -->
                <Content title="Spanish" ctype="cols" cssprops="">
                    <Content ctype="cols" cssprops="">
                        <div>
                            <span class="cdefault-0 font-mono font-bold">A2</span>
                            <span class="cdefault-0 font-serif font-bold">level</span>
                        </div>
                    </Content>
                </Content>
                <!-- temp -->
            </Content>
        </Section>

        <!-- Skills -->
        <Section title="Skills" cssprops="space-y-4">
            <Content ctype="cols" cssprops="space-y-4">
                <Content title="Computer science fields" ctype="cols" cssprops="space-y-3">
                    <Content ctype="rows" cssprops="flex-wrap">
                        <Tag name="operating systems" />
                        <Tag name="compiler design" />
                        <Tag name="computer graphics" />
                    </Content>
                </Content>
                <Content title="Programming languages" ctype="cols" cssprops="space-y-3">
                    <span class="cdefault-0">Expert</span>
                    <Content ctype="rows" cssprops="flex-wrap">
                        <Tag name="c" />
                        <Tag name="c++" />
                        <Tag name="python" />
                        <Tag name="go" />
                        <Tag name="sh-shells" />
                        <Tag name="c-shells" />
                        <Tag name="rc" />
                        <Tag name="asm" />
                        <Tag name="tex" />
                        <Tag name="m4" />
                        <Tag name="awk" />
                    </Content>
                    <span class="cdefault-0">Intermediate</span>
                    <Content ctype="rows" cssprops="flex-wrap">
                        <Tag name="rust" />
                        <Tag name="lua" />
                        <Tag name="javascript" />
                        <Tag name="typescript" />
                        <Tag name="dart" />
                    </Content>
                    <span class="cdefault-0">Beginner &ndash; Learning</span>
                    <Content ctype="rows" cssprops="flex-wrap">
                        <Tag name="zig" />
                        <Tag name="v" />
                        <Tag name="apl" />
                        <Tag name="haskell" />
                    </Content>
                    <span class="cdefault-0">Used</span>
                    <Content ctype="rows" cssprops="flex-wrap">
                        <Tag name="prolog" />
                        <Tag name="lisp" />
                        <Tag name="ml" />
                        <Tag name="c#" />
                        <Tag name="php" />
                        <Tag name="java" />
                        <Tag name="ruby" />
                    </Content>
                    <span class="cdefault-0">Interested</span>
                    <Content ctype="rows" cssprops="flex-wrap">
                        <Tag name="nim" />
                        <Tag name="tcl" />
                        <Tag name="smalltalk" />
                    </Content>
                </Content>
                <Content title="Misc (not complete) (wip)" ctype="cols" cssprops="space-y-3">
                    <Content ctype="rows" cssprops="flex-wrap">
                        <Tag name="git" />
                        <Tag name="mercurial" />
                        <Tag name="docker" />
                        <Tag name="kubernetes" />
                        <Tag name="ansible" />
                        <Tag name="suckless" />
                        <Tag name="vmware" />
                        <Tag name="redis" />
                        <Tag name="ros" />
                        <Tag name="angular" />
                        <Tag name="react" />
                        <Tag name="linux-arch" />
                        <Tag name="linux-gentoo" />
                        <Tag name="linux-void" />
                        <Tag name="bsd-freebsd" />
                        <Tag name="bsd-openbsd" />
                        <Tag name="qemu" />
                        <Tag name="kvm" />
                        <Tag name="bochs" />
                        <Tag name="virtualbox" />
                        <Tag name="..." />
                    </Content>
                </Content>
            </Content>
        </Section>

        <!-- Publications -->
        <Section title="Publications" cssprops="space-y-4">
            <Content ctype="cols" cssprops="space-y-4">
                <Content ctype="cols" cssprops="">
                    <!-- temp -->
                    <Content ctype="cols" cssprops="">
                        <span class="cdefault-0"> Currently working on a publication with</span>
                        <ul class="list-[circle] list-inside">
                            <li>
                                <span class="cdefault-0 font-serif"> Prof. Henry Muccini</span>
                                <span class="cdefault-0">(University of L'Aquila)</span>
                            </li>
                            <li>
                                <span class="cdefault-0 font-serif"> Prof. Mauro Caporuscio</span>
                                <span class="cdefault-0">(Linnaeus University)</span>
                            </li>
                            <li>
                                <span class="cdefault-0 font-serif"> Karthik Vaidhyanathan</span>
                                <span class="cdefault-0">(University of L'Aquila)</span>
                            </li>
                        </ul>
                        <span class="cdefault-0">Private journal</span>
                        <span class="cdefault-0">Citation as co-author</span>
                    </Content>
                    <!-- temp -->
                </Content>
            </Content>
        </Section>

        <!-- Work -->
        <Section title="Work" cssprops="space-y-4">
            <Content ctype="cols" cssprops="space-y-4">
                <!-- temp -->
                <Content ctype="cols" cssprops="">
                    <span class="cdefault-0">Work in progress &hellip;</span>
                </Content>
                <!-- temp -->
            </Content>
        </Section>
    </Article>
</Container>

<style lang="postcss">
    .cdefault-0 {
        @apply text-lg_front_0;
    }
    :global(.dark) .cdefault-0 {
        @apply text-dk_front_0;
    }

    /* .cdefault-1 {
		@apply text-lg_front_1;
	}
	:global(.dark) .cdefault-1 {
		@apply text-dk_front_1;
	} */
</style>
