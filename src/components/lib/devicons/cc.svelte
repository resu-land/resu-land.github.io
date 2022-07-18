<script lang="ts">
    export let containerprops: string;
    export let cssprops: string;
    export let csspaths: [string, string, string, string, string, string];
</script>

<div class="vcontainer {containerprops}">
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 13.121 14.746"
            class={cssprops}
        >
            <g stroke-width=".051">
                <path
                    class={csspaths[0]}
                    d="M13.12 4.336a1.31 1.31 0 0 0-.16-.656 1.253 1.253 0 0 0-.475-.462C10.738 2.211 8.99 1.207 7.243.198c-.47-.271-.927-.261-1.394.014-.695.41-4.176 2.405-5.214 3.005C.208 3.465 0 3.843 0 4.335v6.077c0 .242.05.457.153.642.105.19.265.35.482.475 1.037.601 4.519 2.595 5.214 3.006.467.275.924.285 1.395.013 1.746-1.008 3.494-2.012 5.241-3.02.217-.124.377-.284.482-.474.103-.185.154-.4.154-.643l-.001-6.075"
                />
                <path
                    class={csspaths[1]}
                    d="m6.58 7.354-6.427 3.7c.106.191.266.35.482.476 1.038.6 4.52 2.595 5.214 3.005.468.276.924.285 1.395.013 1.746-1.008 3.495-2.012 5.242-3.02.216-.124.376-.284.482-.474l-6.387-3.7"
                />
                <path
                    class={csspaths[2]}
                    d="M4.677 8.45a2.168 2.168 0 0 0 3.774-.013l-1.87-1.083L4.677 8.45"
                />
                <path
                    class={csspaths[3]}
                    d="M13.12 4.336a1.31 1.31 0 0 0-.16-.656L6.58 7.354l6.387 3.7c.103-.185.154-.4.154-.643l-.001-6.075"
                />
            </g>
            <path
                class={csspaths[4]}
                d="M12.769 7.618h-.5v.5h-.498v-.5h-.5V7.12h.5v-.5h.499v.5h.499v.498m-1.821 0h-.5v.5H9.95v-.5h-.5V7.12h.5v-.5h.499v.5h.499v.498"
            />
            <path
                class={csspaths[5]}
                d="M8.451 8.437a2.169 2.169 0 0 1-3.774.013 2.16 2.16 0 0 1-.286-1.076 2.17 2.17 0 0 1 4.046-1.09l1.897-1.091a4.357 4.357 0 1 0 .011 4.342L8.451 8.437"
            />
        </svg>
    </div>
</div>

<style lang="postcss">
    .vcontainer {
        @apply transition-all;
        @apply duration-75;
    }
</style>
