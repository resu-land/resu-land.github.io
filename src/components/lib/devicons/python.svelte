<script lang="ts">
    export let containerprops: string;
    export let cssprops: string;
    export let csspaths: [string, string];
</script>

<div class="vcontainer {containerprops}">
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 13.176 13.108"
            class={cssprops}
        >
            <path
                class={csspaths[0]}
                d="M6.541 0C3.196 0 3.405 1.45 3.405 1.45l.003 1.504h3.193v.45H2.14S0 3.163 0 6.538c0 3.376 1.868 3.256 1.868 3.256h1.115V8.227s-.06-1.869 1.839-1.869h3.166s1.779.03 1.779-1.719V1.75S10.037 0 6.54 0zm-1.76 1.01a.574.574 0 0 1 .574.575.574.574 0 0 1-.574.574.574.574 0 0 1-.574-.574.574.574 0 0 1 .574-.574z"
            />
            <path
                class={csspaths[1]}
                d="M6.636 13.108c3.345 0 3.136-1.45 3.136-1.45l-.003-1.504H6.576v-.45h4.46s2.141.242 2.141-3.133c0-3.376-1.868-3.256-1.868-3.256h-1.115v1.566s.06 1.868-1.839 1.868H5.19S3.41 6.721 3.41 8.47v2.89s-.27 1.749 3.226 1.749zm1.76-1.01a.574.574 0 0 1-.574-.575.574.574 0 0 1 .574-.574.574.574 0 0 1 .574.574.574.574 0 0 1-.574.574z"
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
