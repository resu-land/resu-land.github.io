<script lang="ts">
    import Content from '../blog/Content.svelte';
    import Tag from '../blog/Tag.svelte';
</script>

<Content ctype="cols" cssprops="space-y-3 col-span-2 ">
    <Content title="About Me" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1 ">
        <div class="text-cv_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo atque perspiciatis
            possimus laboriosam aliquam veniam, necessitatibus mollitia amet laudantium ipsa ad
            voluptates repudiandae vitae eligendi quis, beatae dolorem. Itaque, id.
        </div>
    </Content>
    <Content title="Interests" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1 ">
        <Content ctype="rows" cssprops="flex-wrap">
            {#each ['programming languages design', 'compilers design', 'operating systems', 'computer graphics'] as lang}
                <Tag name={lang} />
            {/each}
        </Content>
    </Content>
    <Content title="Education" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1">
        <Content
            title="LM-18 - Master's Degree in Computer Science"
            csstitle="!text-base !text-cv_sub_section font-semibold"
            ctype="cols"
            cssprops=""
        >
            <span class="text-cv_text">
                Department of Information Engineering, Computer Science and Mathematics @ University
                of L'Aquila
            </span>
            <span class="text-cv_text_alt font-serif italic">
                Models for incremental public transportation service design
            </span>
            <div>
                <span class="text-cv_text_alt">110 / 110</span>
                <span class="text-cv_text_alt">cum laude</span>
            </div>
        </Content>
        <Content
            title="MU1 - Level-1 Master Course - Mobile and Web Technologies"
            csstitle="!text-base !text-cv_sub_section font-semibold"
            ctype="cols"
            cssprops=""
        >
            <span class="text-cv_text">
                Department of Information Engineering, Computer Science and Mathematics @ University
                of L'Aquila
            </span>
            <div>
                <span class="text-cv_text_alt">70 / 70</span>
                <span class="text-cv_text_alt">cum laude</span>
            </div>
        </Content>
        <Content
            title="L-31 - Bachelor's Degree in Computer Science"
            csstitle="!text-base !text-cv_sub_section font-semibold"
            ctype="cols"
            cssprops=""
        >
            <span class="text-cv_text">
                Department of Information Engineering, Computer Science and Mathematics @ University
                of L'Aquila
            </span>
            <span class="text-cv_text_alt font-serif italic">
                Computation and performance of Nash equilibria on Generalized Graph K-Coloring games
            </span>
        </Content>
    </Content>
    <Content title="Publications" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1 ">
        <Content
            title="Work in progress - Private journal - Co-author"
            csstitle="!text-base !text-cv_sub_section font-semibold"
            ctype="cols"
            cssprops=""
        >
            <ul class="list-[circle] list-inside">
                <li>
                    <span class="text-cv_text font-serif italic"> Prof. Henry Muccini</span>
                    <span class="text-cv_text"> - University of L'Aquila</span>
                </li>
                <li>
                    <span class="text-cv_text font-serif"> Prof. Mauro Caporuscio</span>
                    <span class="text-cv_text"> - Linnaeus University</span>
                </li>
                <li>
                    <span class="text-cv_text font-serif"> Karthik Vaidhyanathan</span>
                    <span class="text-cv_text"> - University of L'Aquila</span>
                </li>
            </ul>
        </Content>
    </Content>
    <Content title="Projects" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1 ">
        <Content
            title="Work in progress - Private journal - Co-author"
            csstitle="!text-base !text-cv_sub_section font-semibold"
            ctype="cols"
            cssprops=""
        >
            <ul class="list-[circle] list-inside">
                <li>
                    <span class="text-cv_text font-serif italic"> Prof. Henry Muccini</span>
                    <span class="text-cv_text"> - University of L'Aquila</span>
                </li>
                <li>
                    <span class="text-cv_text font-serif"> Prof. Mauro Caporuscio</span>
                    <span class="text-cv_text"> - Linnaeus University</span>
                </li>
                <li>
                    <span class="text-cv_text font-serif"> Karthik Vaidhyanathan</span>
                    <span class="text-cv_text"> - University of L'Aquila</span>
                </li>
            </ul>
        </Content>
    </Content>
    <Content
        title="Skills"
        csstitle="w-full !text-cv_section"
        ctype="rows"
        cssprops="space-y-1 flex-wrap"
    >
        {#each Array.from('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo atque perspiciatis') as lang}
            <Tag name={lang} />
        {/each}
    </Content>
    <Content title="Work" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1 ">
        <div class="text-cv_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo atque perspiciatis
            possimus laboriosam aliquam veniam, necessitatibus mollitia amet laudantium ipsa ad
            voluptates repudiandae vitae eligendi quis, beatae dolorem. Itaque, id.
        </div>
    </Content>
</Content>

<style lang="postcss">
</style>
