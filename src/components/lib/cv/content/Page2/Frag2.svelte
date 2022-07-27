<script lang="ts">
    import Content from '$components/lib/blog/Content.svelte';
</script>

<Content ctype="cols" cssprops="space-y-3 col-span-2 ">
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
    <Content title="About Me" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1">
        <div class="text-cv_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo atque perspiciatis
            possimus laboriosam aliquam veniam, necessitatibus mollitia amet laudantium ipsa ad
            voluptates repudiandae vitae eligendi quis, beatae dolorem. Itaque, id.
        </div>
    </Content>
    <Content title="Pubblications" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1 ">
        <Content
            title="Publication 1"
            csstitle="!text-base !text-cv_sub_section font-semibold"
            ctype="cols"
            cssprops=""
        >
            <span class="text-cv_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in expedita vero
                adipisci excepturi suscipit, illo nesciunt modi, repellat magnam minima aliquid.
            </span>
        </Content>
    </Content>
</Content>
