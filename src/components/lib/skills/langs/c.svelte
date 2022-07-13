<script lang="ts">
    import { openModal } from 'svelte-modals';
    import CModal from './cmodal.svelte';

    const handleOpen = () => {
        openModal(CModal, {
            header: 'c programming language'
        });
    };
</script>

<button
    on:click={handleOpen}
    class="active:opacity-50 sm:hover:opacity-80 sm:active:opacity-50 ctech"
>
    c
</button>

<style lang="postcss">
    .ctech {
        @apply mr-1.5;
        @apply my-1;
        @apply py-0.5;
        @apply px-1.5;
        @apply bg-lg_back_2;
        @apply text-lg_front_1;
        @apply font-mono;
        @apply text-sm;
        @apply rounded-sm;
        @apply sm:text-base;
    }
    :global(.dark) .ctech {
        @apply bg-dk_back_2;
        @apply text-dk_front_1;
    }
</style>
