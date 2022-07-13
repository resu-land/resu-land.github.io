<script lang="ts">
    export let cssprops: string;
</script>

<svg
    version="1.0"
    viewBox="0 0 526.36401 477.03693"
    class="all {cssprops}"
>
    <g
        fill-rule="evenodd"
        stroke="#000"
        stroke-linejoin="round"
    >
        <path
            class="path1"
            d="m220.900198.70643 185.55359 330.25875-206.2649.11485-39.56378 70.71366 365.21799.05698L303.040688.5l-82.14049.20643z"
        />
        <path
            class="path2"
            d="M220.890038.67931.5 401.78563l40.406098 72.73099 182.83761-331.33004 102.02541 187.88837h80.8122L220.890038.67931z"
        />
        <path
            class="path3"
            d="m223.785908 143.24908 40.29125 74.21925-103.62832 184.37916 365.41516.18957-38.47047 74.49986-446.47101-2.04687 182.86339-331.24097z"
        />
    </g>
</svg>

<style lang="postcss">
    .all {
        @apply stroke-2;
        @apply place-self-center;
    }

    .path1 {
        @apply fill-gn_logo_layer_2;
        @apply stroke-gn_logo_layer_2;
    }
    .path2 {
        @apply fill-gn_logo_layer_1;
        @apply stroke-gn_logo_layer_1;
    }
    .path3 {
        @apply fill-gn_logo_layer_0;
        @apply stroke-gn_logo_layer_0;
    }

    :global(.dark) .path1 {
        @apply fill-gn_logo_layer_2;
        @apply stroke-gn_logo_layer_2;
    }
    :global(.dark) .path2 {
        @apply fill-gn_logo_layer_1;
        @apply stroke-gn_logo_layer_1;
    }
    :global(.dark) .path3 {
        @apply fill-gn_logo_layer_0;
        @apply stroke-gn_logo_layer_0;
    }
</style>
