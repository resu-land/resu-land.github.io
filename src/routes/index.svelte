<script lang="ts">
    import Article from '$components/lib/blog/Article.svelte';
    import Content from '$components/lib/blog/Content.svelte';
    import Section from '$components/lib/blog/Section.svelte';
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
                        <div class="ctag">operating systems</div>
                        <div class="ctag">compiler design</div>
                        <div class="ctag">computer graphics</div>
                    </Content>
                </Content>
                <Content title="Programming languages" ctype="cols" cssprops="space-y-3">
                    <span class="cdefault-0">Expert</span>
                    <Content ctype="rows" cssprops="flex-wrap">
                        <div class="ctag">c</div>
                        <div class="ctag">c++</div>
                        <div class="ctag">python</div>
                        <div class="ctag">go</div>
                        <div class="ctag">sh-shells</div>
                        <div class="ctag">c-shells</div>
                        <div class="ctag">rc</div>
                        <div class="ctag">asm</div>
                        <div class="ctag">tex</div>
                        <div class="ctag">m4</div>
                        <div class="ctag">awk</div>
                    </Content>
                    <span class="cdefault-0">Intermediate</span>
                    <Content ctype="rows" cssprops="flex-wrap">
                        <div class="ctag">rust</div>
                        <div class="ctag">lua</div>
                        <div class="ctag">javascript</div>
                        <div class="ctag">typescript</div>
                        <div class="ctag">dart</div>
                    </Content>
                    <span class="cdefault-0">Beginner &ndash; Learning</span>
                    <Content ctype="rows" cssprops="flex-wrap">
                        <div class="ctag">zig</div>
                        <div class="ctag">v</div>
                        <div class="ctag">apl</div>
                        <div class="ctag">haskell</div>
                    </Content>
                    <span class="cdefault-0">Used</span>
                    <Content ctype="rows" cssprops="flex-wrap">
                        <div class="ctag">prolog</div>
                        <div class="ctag">lisp</div>
                        <div class="ctag">ml</div>
                        <div class="ctag">c#</div>
                        <div class="ctag">php</div>
                        <div class="ctag">java</div>
                        <div class="ctag">ruby</div>
                    </Content>
                    <span class="cdefault-0">Interested</span>
                    <Content ctype="rows" cssprops="flex-wrap">
                        <div class="ctag">nim</div>
                        <div class="ctag">tcl</div>
                        <div class="ctag">smalltalk</div>
                    </Content>
                </Content>
                <Content title="Misc (not complete) (wip)" ctype="cols" cssprops="space-y-3">
                    <Content ctype="rows" cssprops="flex-wrap">
                        <div class="ctag">git</div>
                        <div class="ctag">mercurial</div>
                        <div class="ctag">docker</div>
                        <div class="ctag">kubernetes</div>
                        <div class="ctag">ansible</div>
                        <div class="ctag">suckless</div>
                        <div class="ctag">vmware</div>
                        <div class="ctag">redis</div>
                        <div class="ctag">ros</div>
                        <div class="ctag">angular</div>
                        <div class="ctag">react</div>
                        <div class="ctag">linux-arch</div>
                        <div class="ctag">linux-gentoo</div>
                        <div class="ctag">linux-void</div>
                        <div class="ctag">bsd-freebsd</div>
                        <div class="ctag">bsd-openbsd</div>
                        <div class="ctag">qemu</div>
                        <div class="ctag">kvm</div>
                        <div class="ctag">bochs</div>
                        <div class="ctag">virtualbox</div>
                        <div class="ctag">...</div>
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
    .ctag {
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
    :global(.dark) .ctag {
        @apply bg-dk_back_2;
        @apply text-dk_front_1;
    }

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
