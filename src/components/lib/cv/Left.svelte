<script lang="ts">
    import Link from '$components/lib/cv/Link.svelte';
    import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons/index.es';
    import { faEarthEurope, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons/index.es';
    import Fa from 'svelte-fa/src/fa.svelte';
    import Content from '../blog/Content.svelte';
</script>

<Content ctype="cols" cssprops="space-y-2 col-span-1">
    <Content title="Contacts" ctype="cols" cssprops="space-y-1">
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
    <Content title="Links" ctype="cols" cssprops="space-y-1">
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
        <Content title="Languages" ctype="cols" cssprops="space-y-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aliquid minima placeat eum,
            modi dolorem necessitatibus iste quis vero quisquam ducimus dolore adipisci laudantium,
            commodi maxime expedita eius qui illo.
        </Content>
        <Content title="Programming" ctype="cols" cssprops="space-y-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aliquid minima placeat eum,
            modi dolorem necessitatibus iste quis vero quisquam ducimus dolore adipisci laudantium,
            commodi maxime expedita eius qui illo.
        </Content>
    </Content>
</Content>

<style lang="postcss">
</style>
