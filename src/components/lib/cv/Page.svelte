<script lang="ts">
    import Article from '$components/lib/blog/Article.svelte';
    import BodyAsymGrid from '$components/lib/cv/body/AsymGrid.svelte';
    import HeaderFront from '$components/lib/cv/header/Front.svelte';
    import Separator from '$components/lib/cv/header/Separator.svelte';
    // import HeaderTail from '$components/lib/cv/header/Tail.svelte';
    import { faPrint } from '@fortawesome/free-solid-svg-icons/index.es';
    import Fa from 'svelte-fa/src/fa.svelte';

    const pages: number = 1;
</script>

<div
    class="
    flex
    flex-col
    w-screen
    sm:w-fit
    space-y-4
    print:p-0
    print:space-y-0
    print:contents"
>
    <Article
        cssprops="
        bg-white
        py-4 px-6
        space-y-3
        font-nunito
        w-screen
        md:h-[297mm]
        md:w-[210mm]
        print:h-[297mm]
        print:w-[210mm]
        !place-content-start
        shadow-2xl
        print:shadow-none
        print:font-nunito"
    >
        <HeaderFront {pages} />
        <Separator />
        <BodyAsymGrid page={1} />
    </Article>
    <!-- <Article
        cssprops="
        bg-white
        py-4 px-6
        space-y-3
        font-nunito
        w-screen
        md:h-[297mm]
        md:w-[210mm]
        print:h-[297mm]
        print:w-[210mm]
        !place-content-start
        shadow-2xl
        print:shadow-none"
    >
        <HeaderTail page={2} {pages} />
        <Separator />
        <BodyAsymGrid page={2} />
    </Article> -->
</div>
<button
    class="
        bg-dk_back_2
        text-dk_front_hl
        rounded-sm
        fixed
        top-[50%]
        right-10
        p-3
        active:bg-dk_front_0
        sm:hover:bg-dk_front_0
        sm:active:opacity-50
        transition-all
        duration-100
        print:hidden"
    on:click={() => window.print()}
>
    <Fa icon={faPrint} />
</button>
