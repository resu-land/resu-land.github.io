<script lang="ts">
    export let name: string;
    export let hrefname: string;
    export let href: string;
    export let cssprops: string;
</script>

<div class="link-container {cssprops}">
    <div class="link-icon">
        <slot />
    </div>
    <div class="link-name">{name}</div>
    <div class="link-href">
        <a {href}>{hrefname}</a>
    </div>
</div>

<style lang="postcss">
    .link-container {
        @apply flex;
        @apply flex-wrap;
    }

    .link-icon {
        @apply mr-2;
        @apply flex;
        @apply place-content-center;
        @apply place-items-center;
        @apply text-blue-600;
    }

    .link-name {
        @apply mr-2;
        @apply flex;
        @apply place-content-center;
        @apply place-items-center;
        @apply text-blue-600;
        @apply font-[600];
    }

    .link-href {
        @apply break-all;
        @apply text-blue-500;
    }
</style>
