<script lang="ts">
    import Content from '../blog/Content.svelte';
    import Tag from '../blog/Tag.svelte';
</script>

<Content ctype="cols" cssprops="space-y-3 col-span-2 ">
    <Content title="About Me" csstitle="!text-orange-500" ctype="cols" cssprops="space-y-1 ">
        <div class="text-dk_front_0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo atque perspiciatis
            possimus laboriosam aliquam veniam, necessitatibus mollitia amet laudantium ipsa ad
            voluptates repudiandae vitae eligendi quis, beatae dolorem. Itaque, id.
        </div>
    </Content>
    <Content title="Interests" csstitle="!text-orange-500" ctype="cols" cssprops="space-y-1 ">
        <Content ctype="rows" cssprops="flex-wrap">
            {#each ['programming languages design', 'compilers design', 'operating systems', 'computer graphics'] as lang}
                <Tag name={lang} />
            {/each}
        </Content>
    </Content>
    <Content title="Education" csstitle="!text-orange-500" ctype="cols" cssprops="space-y-1">
        <Content
            title="LM-18 - Master's Degree in Computer Science"
            csstitle="!text-base !text-dk_back_2"
            ctype="cols"
            cssprops=""
        >
            <span class="text-dk_front_0">
                Department of Information Engineering, Computer Science and Mathematics @ University
                of L'Aquila
            </span>
            <span class="text-dk_front_0 font-serif italic">
                Models for incremental public transportation service design
            </span>
            <div>
                <span class="text-dk_front_0 font-mono">110/110</span>
                <span class="text-dk_front_0 font-serif">cum laude</span>
            </div>
        </Content>
        <Content
            title="MU1 - Level-1 Master Course - Mobile and Web Technologies"
            csstitle="!text-base !text-dk_back_2"
            ctype="cols"
            cssprops=""
        >
            <span class="text-dk_front_0">
                Department of Information Engineering, Computer Science and Mathematics @ University
                of L'Aquila
            </span>
            <div>
                <span class="text-dk_front_0 font-mono">70/70</span>
                <span class="text-dk_front_0 font-serif">cum laude</span>
            </div>
        </Content>
    </Content>
    <Content title="Publications" csstitle="!text-orange-500" ctype="cols" cssprops="space-y-1 ">
        <Content
            title="Work in progress - Private journal - Co-author"
            csstitle="!text-base !text-dk_back_2"
            ctype="cols"
            cssprops=""
        >
            <ul class="list-[circle] list-inside">
                <li>
                    <span class="text-dk_front_0 font-serif"> Prof. Henry Muccini</span>
                    <span class="text-dk_front_0">(University of L'Aquila)</span>
                </li>
                <li>
                    <span class="text-dk_front_0 font-serif"> Prof. Mauro Caporuscio</span>
                    <span class="text-dk_front_0">(Linnaeus University)</span>
                </li>
                <li>
                    <span class="text-dk_front_0 font-serif"> Karthik Vaidhyanathan</span>
                    <span class="text-dk_front_0">(University of L'Aquila)</span>
                </li>
            </ul>
        </Content>
    </Content>
    <Content title="Projects" csstitle="!text-orange-500" ctype="cols" cssprops="space-y-1 ">
        <div class="text-dk_front_0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo atque perspiciatis
            possimus laboriosam aliquam veniam, necessitatibus mollitia amet laudantium ipsa ad
            voluptates repudiandae vitae eligendi quis, beatae dolorem. Itaque, id.
        </div>
    </Content>
</Content>

<style lang="postcss">
</style>
