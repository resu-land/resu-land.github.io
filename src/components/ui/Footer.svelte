<script lang="ts">
    import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons/index.es';
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons/index.es';
    import Fa from 'svelte-fa/src/fa.svelte';
</script>

<footer class="cfooter">
    <div class="cfooter-container">
        <div class="cfooter-box-scrollable">
            <div class="cfooter-menu">
                <a
                    href="mailto:fake@email.test?subject=Contact&body=Message"
                    class="cfooter-menu-a"
                >
                    <Fa icon={faEnvelope} size="lg" />
                </a>
                <a
                    href="https://www.github.com/resu-gh"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="cfooter-menu-a"
                >
                    <Fa icon={faGithub} size="lg" />
                </a>
                <a
                    href="https://www.gitlab.com/resu-gl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="cfooter-menu-a"
                >
                    <Fa icon={faGitlab} size="lg" />
                </a>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="cfooter-menu-a"
                >
                    <Fa icon={faLinkedin} size="lg" />
                </a>
            </div>
        </div>
    </div>
</footer>

<style lang="postcss">
    .cfooter {
        @apply transition-all;
        @apply duration-75;
        @apply text-lg_front_1;
        @apply bg-lg_back_1;
    }
    :global(.dark) .cfooter {
        @apply bg-dk_back_0;
        @apply text-dk_front_1;
    }

    .cfooter-container {
        @apply container;
        @apply mx-auto;
        @apply py-4;
        @apply px-6;
        @apply place-content-center;
        @apply place-items-center;
    }

    .cfooter-box-scrollable {
        /* TODO: implement drag-to-scroll */
        /* @apply cursor-grab; */
        @apply overflow-x-auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .cfooter-box-scrollable::-webkit-scrollbar {
        display: none;
    }

    .cfooter-menu {
        @apply flex;
        @apply space-x-6;
        @apply min-w-fit;
        @apply place-content-center;
    }

    .cfooter-menu-a {
        @apply active:text-lg_front_hl;
        @apply sm:hover:text-lg_front_hl;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        /* @apply transition-all; */
        /* @apply duration-75; */
    }
    :global(.dark) .cfooter-menu-a {
        @apply active:text-dk_front_hl;
        @apply sm:hover:text-dk_front_hl;
    }

    /* .cfooter-menu-button {
		@apply active:text-lg_front_hl;
		@apply sm:hover:text-lg_front_hl;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

		@apply transition-all;
		@apply duration-75;
	}
	:global(.dark) .cfooter-menu-button {
		@apply active:text-dk_front_hl;
		@apply sm:hover:text-dk_front_hl;
	} */
</style>
