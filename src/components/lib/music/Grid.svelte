<script lang="ts">
    import Content from '$components/lib/blog/Content.svelte';
    import AlbumC from '$components/lib/music/Album.svelte';
    import type { Album } from '$data/types/music';

    export let albums: Album[];
</script>

<Content
    ctype="grid"
    cssprops="
		place-items-center
		grid-cols-2
		sm:grid-cols-2
		md:grid-cols-3
		lg:grid-cols-4
		xl:grid-cols-5
		2xl:grid-cols-6
		grid-flow-row
		gap-3
		transition-all
		duration-75"
>
    {#each albums as album}
        <AlbumC
            author={album.author}
            title={album.title}
            cover={album.cover}
            year={album.year}
        />
    {/each}
</Content>
