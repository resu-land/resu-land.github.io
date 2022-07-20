<script lang="ts">
    import Content from '$components/lib/blog/Content.svelte';
    import Tag from '$components/lib/blog/Tag.svelte';

    const os: Array<string> = ['gnu/linux', 'bsd', 'unix-v*', 'plan9', 'minix', 'ros', '...'];
    const vcs = ['git', 'mercurial', '...'];
    const virt = ['docker', 'vmware', 'virtualbox', 'bochs', 'qemu', 'kvm', '...'];
    const devops = ['kubernetes', 'ansible', '...'];
    const db = ['sql', 'redis', 'mongodb', '...'];

    const tagcss: string = 'bg-lg_back_2 text-lg_front_1 font-nunito';
</script>

<Content ctype="cols" cssprops="space-y-3 col-span-1">
    <Content title="Skills / Tech" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1">
        <Content
            title="Operating systems"
            csstitle="w-full !text-base !text-cv_sub_section font-semibold"
            ctype="rows"
            cssprops="flex-wrap"
        >
            {#each os as tech}
                <Tag cssprops={tagcss} name={tech} />
            {/each}
        </Content>
        <Content
            title="Version control systems"
            csstitle="w-full !text-base !text-cv_sub_section font-semibold"
            ctype="rows"
            cssprops="flex-wrap"
        >
            {#each vcs as tech}
                <Tag cssprops={tagcss} name={tech} />
            {/each}
        </Content>
        <Content
            title="Virtualization"
            csstitle="w-full !text-base !text-cv_sub_section font-semibold"
            ctype="rows"
            cssprops="flex-wrap"
        >
            {#each virt as tech}
                <Tag cssprops={tagcss} name={tech} />
            {/each}
        </Content>
        <Content
            title="Databases"
            csstitle="w-full !text-base !text-cv_sub_section font-semibold"
            ctype="rows"
            cssprops="flex-wrap"
        >
            {#each db as tech}
                <Tag cssprops={tagcss} name={tech} />
            {/each}
        </Content>
        <Content
            title="Devops"
            csstitle="w-full !text-base !text-cv_sub_section font-semibold"
            ctype="rows"
            cssprops="flex-wrap"
        >
            {#each devops as tech}
                <Tag cssprops={tagcss} name={tech} />
            {/each}
        </Content>
    </Content>
</Content>
