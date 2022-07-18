<script lang="ts">
    import { faClose } from '@fortawesome/free-solid-svg-icons/index.es';
    import Fa from 'svelte-fa/src/fa.svelte';
    import { closeModal } from 'svelte-modals';
    import { fly } from 'svelte/transition';

    export let isOpen: boolean;
    export let header: string;
</script>

{#if isOpen}
    <div class="backdrop" on:click={closeModal}>
        <div role="dialog" class="modal" transition:fly={{ y: 50 }} on:introstart on:outroend>
            <div class="contents">
                <div class="header-box">
                    <div class="header-title">
                        {header}
                    </div>
                    <button class="header-close-button" on:click={closeModal}>
                        <Fa icon={faClose} size="lg" />
                    </button>
                </div>
                <div class="box-scrollable body-box">
                    <slot />
                </div>
            </div>
        </div>
    </div>
{/if}

<style lang="postcss">
    .backdrop {
        @apply fixed;
        /* maybe disable scroll? */
        @apply h-screen;
        @apply w-screen;
        @apply top-0;
        @apply bottom-0;
        @apply right-0;
        @apply left-0;
        @apply place-self-center;
        @apply bg-black;
        @apply bg-opacity-50;
        @apply z-10;
    }

    .modal {
        @apply fixed;
        @apply left-0;
        @apply right-0;
        @apply top-0;
        @apply bottom-0;
        @apply flex;
        @apply place-content-center;
        @apply place-items-center;
        @apply pointer-events-none;
        @apply p-6;
    }

    .contents {
        @apply w-full;
        @apply max-w-2xl;
        @apply h-fit;
        @apply max-h-[90%];
        @apply flex;
        @apply flex-col;
        @apply pointer-events-auto;
        @apply bg-lg_back_0;
        @apply rounded-sm;
        @apply space-y-4;
        @apply p-6;
    }
    :global(.dark) .contents {
        @apply bg-dk_back_2;
    }

    .header-box {
        @apply flex;
        @apply place-content-between;
        @apply bg-lg_back_0;
        @apply text-lg_front_1;
        @apply space-x-6;
    }
    :global(.dark) .header-box {
        @apply bg-dk_back_2;
        @apply text-dk_front_1;
    }

    .header-title {
        @apply text-lg;
        @apply uppercase;
        @apply font-bold;
        @apply text-lg_front_hl;
    }
    :global(.dark) .header-title {
        @apply text-dk_front_hl;
    }

    .header-close-button {
        @apply place-self-start;
        @apply active:text-lg_front_hl;
        @apply sm:hover:text-lg_front_hl;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        @apply transition-all;
        @apply duration-75;
    }
    :global(.dark) .header-close-button {
        @apply active:text-dk_front_hl;
        @apply sm:hover:text-dk_front_hl;
    }

    .box-scrollable {
        /* TODO: implement drag-to-scroll */
        /* @apply cursor-grab; */
        @apply overflow-y-auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .box-scrollable::-webkit-scrollbar {
        display: none;
    }

    .body-box {
        @apply flex;
        @apply flex-col;
        @apply text-lg_front_1;
    }
    :global(.dark) .body-box {
        @apply text-dk_front_1;
    }
</style>
