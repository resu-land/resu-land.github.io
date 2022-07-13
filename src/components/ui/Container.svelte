<script lang="ts">
    export let cssprops: string;
</script>

<div class="ccontainer {cssprops}">
    <slot />
</div>

<style lang="postcss">
    .ccontainer {
        @apply container;
        @apply mx-auto;
        @apply flex-grow;
        @apply p-8;

        @apply flex;
        @apply flex-col;
    }
</style>
