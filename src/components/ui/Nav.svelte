<script lang="ts">
    import { base } from '$app/paths';
    import { dark, toggle } from '$stores/theme';
    import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons/index.es';
    import Fa from 'svelte-fa/src/fa.svelte';
</script>

<nav class="cnav">
    <div class="cnav-container">
        <div class="cnav-box-scrollable">
            <div class="cnav-menu">
                <a href={`${base}/`} class="cnav-menu-a">Home</a>
                <a href={`${base}/cv`} class="cnav-menu-a">CV</a>
                <a href={`${base}/blog`} class="cnav-menu-a">Blog</a>
                <a href={`${base}/music`} class="cnav-menu-a">Music</a>
            </div>
        </div>
        <button class="cnav-menu-button" on:click={toggle}>
            {#if $dark}
                <Fa icon={faMoon} size="lg" />
            {:else}
                <Fa icon={faSun} size="lg" />
            {/if}
        </button>
    </div>
</nav>

<style lang="postcss">
    .cnav {
        @apply transition-all;
        @apply duration-75;
        @apply text-lg_front_1;
        @apply bg-lg_back_1;
    }
    :global(.dark) .cnav {
        @apply bg-dk_back_0;
        @apply text-dk_front_1;
    }

    .cnav-container {
        @apply container;
        @apply mx-auto;
        @apply place-items-center;
        @apply flex;
        @apply py-4;
        @apply px-6;
        @apply space-x-6;
        @apply place-content-between;
    }

    .cnav-box-scrollable {
        /* TODO: implement drag-to-scroll */
        /* @apply cursor-grab; */
        @apply overflow-x-auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .cnav-box-scrollable::-webkit-scrollbar {
        display: none;
    }

    .cnav-menu {
        @apply flex;
        @apply space-x-6;
        @apply min-w-fit;
        @apply place-content-center;
    }

    .cnav-menu-a {
        @apply active:text-lg_front_hl;
        @apply sm:hover:text-lg_front_hl;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        /* @apply transition-all; */
        /* @apply duration-75; */
    }
    :global(.dark) .cnav-menu-a {
        @apply active:text-dk_front_hl;
        @apply sm:hover:text-dk_front_hl;
    }

    .cnav-menu-button {
        @apply active:text-lg_front_hl;
        @apply sm:hover:text-lg_front_hl;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        /* @apply transition-all; */
        /* @apply duration-75; */
    }
    :global(.dark) .cnav-menu-button {
        @apply active:text-dk_front_hl;
        @apply sm:hover:text-dk_front_hl;
    }
</style>
