<script lang="ts">
    import { base } from '$app/paths';
    import Logo from '$components/ui/Logo.svelte';

    export let status: number;
    export let message: string;
</script>

<div class="cerror">
    <a href={`${base}/`} class="cerror-back">
        <Logo cssprops="w-24" />
    </a>
    <div class="cerror-box">
        <span class="cerror-status">{status}</span>
        <span class="cerror-msg">{message}</span>
    </div>
</div>

<style lang="postcss">
    .cerror {
        @apply transition-all;
        @apply duration-75;
        @apply text-inherit;
        @apply bg-inherit;
        @apply flex;
        @apply flex-col;
        @apply place-items-center;
        @apply place-content-center;
        @apply flex-grow;
        @apply space-y-8;
    }
    :global(.dark) .cerror {
        @apply bg-inherit;
        @apply text-inherit;
    }

    .cerror-back {
        @apply active:opacity-50;
        @apply sm:hover:opacity-70;
        @apply sm:active:opacity-50;
        @apply transition-all;
        @apply duration-75;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .cerror-box {
        @apply flex;
        @apply flex-col;
        @apply place-items-center;
        @apply place-content-center;
        @apply space-y-4;
    }

    .cerror-status {
        @apply text-5xl;
        @apply text-lg_front_hl;
    }
    :global(.dark) .cerror-status {
        @apply text-dk_front_hl;
    }

    .cerror-msg {
        @apply text-lg;
        @apply text-lg_front_1;
    }
    :global(.dark) .cerror-msg {
        @apply text-dk_front_1;
    }
</style>
