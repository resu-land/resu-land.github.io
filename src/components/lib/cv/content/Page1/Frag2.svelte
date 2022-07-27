<script lang="ts">
    import Content from '$components/lib/blog/Content.svelte';
    import Tag from '$components/lib/blog/Tag.svelte';

    const tagcss: string = 'bg-lg_back_2 text-lg_front_1 font-nunito';
</script>

<Content ctype="cols" cssprops="space-y-3 col-span-2">
    <Content title="Interests" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1 ">
        <Content ctype="rows" cssprops="flex-wrap">
            {#each ['programming languages design', 'compilers design', 'operating systems', 'computer graphics'] as lang}
                <Tag cssprops={tagcss} name={lang} />
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
                Computation and performance of Nash equilibria on Generalized Graph K-Coloring game
            </span>
        </Content>
        <Content
            title="Classical High School"
            csstitle="!text-base !text-cv_sub_section font-semibold"
            ctype="cols"
            cssprops=""
        >
            <span class="text-cv_text"> I.I.S. Vittorio Emanuele II @ Lanciano </span>
        </Content>
    </Content>
    <Content title="Work" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1 ">
        <Content
            title="Publication - Private journal - Co-author"
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
                    <span class="text-cv_text font-serif italic"> Prof. Mauro Caporuscio</span>
                    <span class="text-cv_text"> - Linnaeus University</span>
                </li>
                <li>
                    <span class="text-cv_text font-serif italic"> Karthik Vaidhyanathan</span>
                    <span class="text-cv_text"> - University of L'Aquila</span>
                </li>
            </ul>
        </Content>
    </Content>
    <Content title="Projects" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1 ">
        <Content
            title="rcp"
            csstitle="!text-base !text-cv_sub_section font-semibold"
            ctype="cols"
            cssprops=""
        >
            <span class="text-cv_text">
                Agnostic transpiler for integrating and controlling non-Ros2 robots within Ros2
                distributed virtual environments
            </span>
            <span class="text-cv_text_alt">Python &middot; Closed source (temporarily)</span>
        </Content>
        <Content
            title="dmon"
            csstitle="!text-base !text-cv_sub_section font-semibold"
            ctype="cols"
            cssprops=""
        >
            <span class="text-cv_text">
                Agnostic distributed multithreaded monitoring system and workload generator for
                microservice-based applications
            </span>
            <span class="text-cv_text_alt">Go &middot; Closed source (temporarily)</span>
        </Content>
    </Content>
</Content>
