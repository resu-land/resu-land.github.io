<script lang="ts">
    export let containerprops: string;
    export let cssprops: string;
    export let csspaths: [string, string, string, string];
</script>

<div class="vcontainer {containerprops}">
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 13.02 13.107"
            class={cssprops}
        >
            <!-- <g stroke-width=".051"> -->
            <g stroke-width=".3">
                <path
                    class={csspaths[0]}
                    d="m3.568 3.568-.847-.847.003 6.124.01.286c.005.135.03.287.071.444l6.713 2.367 1.678-.743v-.002L3.568 3.568"
                />
                <path
                    class={csspaths[1]}
                    d="m2.805 9.575-.001-.008.001.008zm8.39 1.624-1.677.743-6.712-2.366c.128.491.412 1.044.717 1.347l2.19 2.178 4.872.006.612-1.91zM.112 6.662c-.217.231-.11.709.24 1.06l1.506 1.52.947.333a2.02 2.02 0 0 1-.07-.444l-.01-.286L2.72 2.72z"
                />
                <path
                    class={csspaths[2]}
                    d="M9.573 2.8a2.097 2.097 0 0 0-.445-.07l-.303-.01H2.721l8.476 8.477h.001l.745-1.68L9.573 2.8"
                />
                <path
                    class={csspaths[3]}
                    d="m9.565 2.798.008.002-.008-.002zm1.355.721c-.308-.31-.854-.592-1.347-.719l2.37 6.717-.745 1.68 1.818-.581.004-4.988zM9.241 1.858 7.723.351c-.351-.348-.829-.456-1.06-.24l-3.942 2.61h6.104l.303.01c.137.004.288.029.445.069z"
                />
            </g>
        </svg>
    </div>
</div>

<style lang="postcss">
    .vcontainer {
        @apply transition-all;
        @apply duration-75;
    }
</style>
