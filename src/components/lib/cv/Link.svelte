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
        @apply text-cv_sub_section;
    }

    .link-name {
        @apply mr-2;
        @apply flex;
        @apply place-content-center;
        @apply place-items-center;
        @apply text-cv_sub_section;
        @apply font-semibold;
    }

    .link-href {
        @apply break-all;
        @apply text-cv_link;
        @apply active:text-cv_link_alt;
        @apply sm:hover:text-cv_link_alt;
        @apply sm:active:opacity-50;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
</style>
