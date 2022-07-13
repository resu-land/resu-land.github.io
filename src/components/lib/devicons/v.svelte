<script lang="ts">
    export let containerprops: string;
    export let cssprops: string;
    export let csspaths: [string, string];
</script>

<div class="vcontainer {containerprops}">
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style="isolation:isolate"
            viewBox="-0.9 -0.9 128.9 128"
            class={cssprops}
        >
            <g
                clip-path="url(#v_svg__a)"
                transform="translate(-10.52 -11.34) scale(.29589)"
                stroke-width="12"
            >
                <path
                    class={csspaths[0]}
                    d="m318.42 453.54 145.28-404c2.463-6.852-1.42-11.848-8.668-11.149l-114.25 11.006c-7.247.699-15.076 6.848-17.47 13.723l-134.47 386.1c-2.396 6.875 1.571 12.457 8.852 12.457h111.21c3.64 0 7.596-2.78 8.828-6.207z"
                />
                <path
                    class={csspaths[1]}
                    d="m44.963 38.392 114.25 11.006c7.247.699 15.084 6.845 17.49 13.717l137.32 392.33c1.202 3.437-.777 6.225-4.418 6.225h-111.91c-7.281 0-15.193-5.562-17.657-12.414L36.298 49.536c-2.463-6.852 1.42-11.848 8.668-11.149z"
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
