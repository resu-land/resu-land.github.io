<script lang="ts">
    import Content from '$components/lib/blog/Content.svelte';
    import Tag from '$components/lib/blog/Tag.svelte';
    import Link from '$components/lib/cv/Link.svelte';
    import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons/index.es';
    import {
        faBook,
        faCommentAlt,
        faEarthEurope,
        faEnvelope,
        faHeadphones,
        faPenNib,
        faPhone
    } from '@fortawesome/free-solid-svg-icons/index.es';
    import Fa from 'svelte-fa/src/fa.svelte';

    const tier1: Array<string> = [
        'c',
        'c++',
        'python',
        'go',
        'c-shells',
        'sh-shells',
        'x86-asm',
        'x86_64-asm',
        'arm_v7-asm',
        'arm_v8-asm'
    ];
    const tier2: Array<string> = ['rust', 'lua', 'javascript', 'typescript'];
    const tier3: Array<string> = ['zig', 'v', 'dart', 'apl', 'haskell'];
    const used: Array<string> = ['prolog', 'lisp', 'ml', 'c#', 'php', 'java', 'ruby'];

    const tagcss: string = 'bg-lg_back_2 text-lg_front_1 font-nunito';
</script>

<Content ctype="cols" cssprops="space-y-3 col-span-1">
    <Content title="Contacts" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1">
        <Content ctype="cols" cssprops="space-y-1">
            <Link
                cssprops=""
                name="Email"
                hrefname="9valentino4@gmail.com"
                href="mailto:9valentino4@gmail.com?subject=Object&body=Message"
            >
                <Fa class="text-cv_subsection" icon={faEnvelope} />
            </Link>
            <Link cssprops="" name="Phone" hrefname="3804629074" href="tel:3804629074">
                <Fa class="text-cv_subsection" icon={faPhone} />
            </Link>
        </Content>
    </Content>
    <Content title="Links" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1">
        <Content ctype="cols" cssprops="space-y-1">
            <Link
                cssprops=""
                name="Github"
                hrefname="github.com/resu-gh"
                href="https://www.github.com/resu-gh"
            >
                <Fa class="text-cv_subsection" icon={faGithub} />
            </Link>
            <Link
                cssprops=""
                name="Gitlab"
                hrefname="gitlab.com/resu-gl"
                href="https://www.gitlab.com/resu-gl"
            >
                <Fa class="text-cv_subsection" icon={faGitlab} />
            </Link>
            <Link
                cssprops="!space-x-1"
                name="LinkedIn"
                hrefname="linkedin.com/in/valentino-di-giosaffatte-527a61243"
                href="https://www.linkedin.com/in/valentino-di-giosaffatte-527a61243"
            >
                <Fa class="text-cv_subsection" icon={faLinkedin} />
            </Link>
            <Link
                cssprops=""
                name="Website"
                hrefname="resu-land.github.io"
                href="https://resu-land.github.io"
            >
                <Fa class="text-cv_subsection" icon={faEarthEurope} />
            </Link>
        </Content>
    </Content>
    <Content title="Languages" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1">
        <Content
            title="English"
            csstitle="!text-base !text-cv_sub_section font-semibold"
            ctype="cols"
            cssprops="space-y-1"
        >
            <Content ctype="rows" cssprops="space-x-2 place-items-center text-cv_text">
                <Fa icon={faHeadphones} />
                <span>Listening</span>
                <span class="font-semibold">C1</span>
            </Content>
            <Content ctype="rows" cssprops="space-x-2 place-items-center text-cv_text">
                <Fa icon={faCommentAlt} />
                <span>Speaking</span>
                <span class="font-semibold">B2</span>
            </Content>
            <Content ctype="rows" cssprops="space-x-2 place-items-center text-cv_text">
                <Fa icon={faBook} />
                <span>Reading</span>
                <span class="font-semibold">C1</span>
            </Content>
            <Content ctype="rows" cssprops="space-x-2 place-items-center text-cv_text">
                <Fa icon={faPenNib} />
                <span>Writing</span>
                <span class="font-semibold">C1</span>
            </Content>
        </Content>
    </Content>
    <Content title="Programming" csstitle="!text-cv_section" ctype="cols" cssprops="space-y-1">
        <Content
            title="High"
            csstitle="w-full !text-base !text-cv_sub_section font-semibold"
            ctype="rows"
            cssprops="flex-wrap"
        >
            {#each tier1 as lang}
                <Tag cssprops={tagcss} name={lang} />
            {/each}
        </Content>
        <Content
            title="Medium"
            csstitle="w-full !text-base !text-cv_sub_section font-semibold"
            ctype="rows"
            cssprops="flex-wrap"
        >
            {#each tier2 as lang}
                <Tag cssprops={tagcss} name={lang} />
            {/each}
        </Content>
        <Content
            title="Low / Learning"
            csstitle="w-full !text-base !text-cv_sub_section font-semibold"
            ctype="rows"
            cssprops="flex-wrap"
        >
            {#each tier3 as lang}
                <Tag cssprops={tagcss} name={lang} />
            {/each}
        </Content>
        <Content
            title="Used"
            csstitle="w-full !text-base !text-cv_sub_section font-semibold"
            ctype="rows"
            cssprops="flex-wrap"
        >
            {#each used as lang}
                <Tag cssprops={tagcss} name={lang} />
            {/each}
        </Content>
    </Content>
</Content>
