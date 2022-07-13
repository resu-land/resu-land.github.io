<script context="module" lang="ts">
    export function load({ error, status }) {
        return {
            props: {
                message: error.message,
                status
            }
        };
    }
</script>

<script lang="ts">
    import Container from '$components/ui/Container.svelte';
    import Error from '$components/ui/Error.svelte';

    export let message: string;
    export let status: number;
</script>

<svelte:head>
    <title>Error {status}</title>
</svelte:head>

<Container cssprops="">
    {#if status == 404}
        <Error
            {status}
            message="Oops... page not found"
        />
    {:else}
        <Error {status} {message} />
    {/if}
</Container>
