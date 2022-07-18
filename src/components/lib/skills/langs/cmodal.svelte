<script lang="ts">
    import IconC from '$components/lib/devicons/c.svelte';
    import Modal from '$components/ui/Modal.svelte';

    export let header: string;
</script>

<Modal {header} isOpen>
    <div class="flex flex-col space-y-4">
        <IconC
            containerprops="flex place-content-center place-items-center"
            cssprops="h-16"
            csspaths={[
                'fill-lg_front_1 dark:fill-dk_front_1',
                'fill-lg_front_1 dark:fill-dk_front_1',
                'fill-lg_front_1 dark:fill-dk_front_1',
                'fill-lg_front_1 dark:fill-dk_front_1',
                'fill-lg_back_0 dark:fill-dk_back_1'
            ]}
        />
        {#each Array(15) as _}
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo autem dolor.
                Sunt voluptas ipsa nostrum, laborum laboriosam explicabo asperiores consequuntur a
                mollitia, dolorum, facere harum exercitationem delectus ut saepe.
            </div>
        {/each}
    </div>
</Modal>
