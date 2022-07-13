<script lang="ts">
    export let containerprops: string;
    export let cssprops: string;
    export let csspaths: [string];
</script>

<div class="vcontainer {containerprops}">
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 117.12"
            class={cssprops}
        >
            <g stroke-width="0">
                <path
                    class={csspaths[0]}
                    d="m15.895 25.098 22.589-6.693-15.06 18.405z"
                />
                <path
                    class={csspaths[0]}
                    d="m25.935 79.477-9.203 4.183-6.693 14.222H0V18.405h38.484l-10.876 9.203-4.183 9.202h-5.02v42.667z"
                    shape-rendering="crispEdges"
                />
                <path
                    class={csspaths[0]}
                    d="m3.346 88.68 22.589-9.203-15.896 18.405zm27.608-51.87L46.85 18.405l5.02 11.713z"
                />
                <path
                    class={csspaths[0]}
                    d="M46.85 18.405h46.013V36.81H30.954L46.85 26.771z"
                    shape-rendering="crispEdges"
                />
                <path
                    class={csspaths[0]}
                    d="m75.294 87.006 21.752-7.529L81.15 97.882z"
                />
                <path
                    class={csspaths[0]}
                    d="m97.046 79.477-13.386 7.53-2.51 10.875H35.137V79.477z"
                    shape-rendering="crispEdges"
                />
                <path
                    class={csspaths[0]}
                    d="M43.503 97.882 2.51 117.124l81.987-98.719L125.49 0zm58.562-60.235 15.896-19.242-.837 15.059z"
                />
                <path
                    class={csspaths[0]}
                    d="M109.595 79.477v-41.83h-7.53l8.366-7.53 7.53-11.712H128v79.477H88.68l11.712-10.039 4.183-8.366z"
                    shape-rendering="crispEdges"
                />
                <path
                    class={csspaths[0]}
                    d="m88.68 97.882 15.895-18.405 4.183 12.549z"
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
