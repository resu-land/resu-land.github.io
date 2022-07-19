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
</script>

<Content ctype="cols" cssprops="space-y-3 col-span-1">
    <Content title="Contacts" csstitle="!text-lg_front_hl" ctype="cols" cssprops="space-y-1">
        <Content ctype="cols" cssprops="space-y-1">
            <Link
                cssprops=""
                name="Email"
                hrefname="fake@email.test"
                href="mailto:fake@email.test?subject=Contact&body=Message"
            >
                <Fa icon={faEnvelope} />
            </Link>
            <Link cssprops="" name="Phone" hrefname="123-456-7890" href="tel:123-456-7890">
                <Fa icon={faPhone} />
            </Link>
        </Content>
    </Content>
    <Content title="Links" csstitle="!text-lg_front_hl" ctype="cols" cssprops="space-y-1">
        <Content ctype="cols" cssprops="space-y-1">
            <Link
                cssprops=""
                name="Github"
                hrefname="github.com/resu-gh"
                href="https://www.github.com/resu-gh"
            >
                <Fa icon={faGithub} />
            </Link>
            <Link
                cssprops=""
                name="Gitlab"
                hrefname="gitlab.com/resu-gl"
                href="https://www.gitlab.com/resu-gl"
            >
                <Fa icon={faGitlab} />
            </Link>
            <Link
                cssprops=""
                name="LinkedIn"
                hrefname="linkedin.com/in/valentino-di-giosaffatte-527a61243"
                href="https://www.linkedin.com/in/valentino-di-giosaffatte-527a61243"
            >
                <Fa icon={faLinkedin} />
            </Link>
            <Link
                cssprops=""
                name="Website"
                hrefname="resu-land.github.io"
                href="https://resu-land.github.io"
            >
                <Fa icon={faEarthEurope} />
            </Link>
        </Content>
    </Content>
    <Content title="Languages" csstitle="!text-lg_front_hl" ctype="cols" cssprops="space-y-1">
        <Content
            title="English"
            csstitle="!text-base !text-dk_back_2"
            ctype="cols"
            cssprops="space-y-1"
        >
            <Content ctype="rows" cssprops="space-x-2 place-items-center text-dk_front_0">
                <div class="flex"><Fa icon={faHeadphones} /></div>
                <div>Listening</div>
                <div class="font-semibold">C2</div>
            </Content>
            <Content ctype="rows" cssprops="space-x-2 place-items-center text-dk_front_0">
                <div class="flex"><Fa icon={faCommentAlt} /></div>
                <div>Speaking</div>
                <div class="font-semibold">B1</div>
            </Content>
            <Content ctype="rows" cssprops="space-x-2 place-items-center text-dk_front_0">
                <div class="flex"><Fa icon={faBook} /></div>
                <div>Reading</div>
                <div class="font-semibold">C2</div>
            </Content>
            <Content ctype="rows" cssprops="space-x-2 place-items-center text-dk_front_0">
                <div class="flex"><Fa icon={faPenNib} /></div>
                <div>Writing</div>
                <div class="font-semibold">C2</div>
            </Content>
        </Content>
    </Content>
    <Content title="Programming" csstitle="!text-lg_front_hl" ctype="cols" cssprops="space-y-1">
        <Content
            title="High"
            csstitle="w-full !text-base !text-dk_back_2"
            ctype="rows"
            cssprops="flex-wrap"
        >
            {#each ['c', 'c++', 'python', 'go', 'c-shells', 'sh-shells', 'x86-asm', 'x86_64-asm', 'arm_v7-asm', 'arm_v8-asm'] as lang}
                <Tag name={lang} />
            {/each}
        </Content>
        <Content
            title="Medium"
            csstitle="w-full !text-base !text-dk_back_2"
            ctype="rows"
            cssprops="flex-wrap"
        >
            {#each ['rust', 'lua', 'javascript', 'typescript'] as lang}
                <Tag name={lang} />
            {/each}
        </Content>
        <Content
            title="Low / Learning"
            csstitle="w-full !text-base !text-dk_back_2"
            ctype="rows"
            cssprops="flex-wrap"
        >
            {#each ['zig', 'v', 'dart', 'apl', 'haskell'] as lang}
                <Tag name={lang} />
            {/each}
        </Content>
        <Content
            title="Used"
            csstitle="w-full !text-base !text-dk_back_2"
            ctype="rows"
            cssprops="flex-wrap"
        >
            {#each ['prolog', 'lisp', 'ml', 'c#', 'php', 'java', 'ruby'] as lang}
                <Tag name={lang} />
            {/each}
        </Content>
    </Content>
</Content>

<style lang="postcss">
</style>
