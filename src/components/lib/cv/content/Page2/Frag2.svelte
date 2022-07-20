<script lang="ts">
    import Content from '$components/lib/blog/Content.svelte';
</script>

<Content ctype="cols" cssprops="space-y-3 col-span-2 ">
    <Content title="Projects" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1 ">
        <Content
            title="Project 1"
            csstitle="!text-base !text-cv_sub_section font-semibold"
            ctype="cols"
            cssprops=""
        >
            <span class="text-cv_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in expedita vero
                adipisci excepturi suscipit, illo nesciunt modi, repellat magnam minima aliquid.
            </span>
        </Content>
        <Content
            title="Project 2"
            csstitle="!text-base !text-cv_sub_section font-semibold"
            ctype="cols"
            cssprops=""
        >
            <span class="text-cv_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in expedita vero
                adipisci excepturi suscipit, illo nesciunt modi, repellat magnam minima aliquid
                autem hic fugit labore perspiciatis quae libero vitae.
            </span>
        </Content>
    </Content>
    <Content title="Work" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1 ">
        <Content
            title="Work 1"
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
