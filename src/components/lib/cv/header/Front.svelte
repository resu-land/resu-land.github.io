<script lang="ts">
    import Content from '$components/lib/blog/Content.svelte';
    import { faCakeCandles, faLocationDot } from '@fortawesome/free-solid-svg-icons/index.es';
    import Fa from 'svelte-fa/src/fa.svelte';
    import Separator from './Separator.svelte';

    export let pages: number;
</script>

<Content ctype="rows" cssprops="place-content-end space-x-4 sm:place-content-between">
    <span class="text-cv_text_alt">Curriculum Vitae</span>
    <span class="text-cv_text_alt">Page 1 / {pages}</span>
</Content>
<Separator />
<Content
    ctype="cols"
    cssprops="
    space-y-4
    sm:space-y-0
    sm:place-content-between
    sm:flex-row"
>
    <Content
        ctype="cols"
        cssprops="
        space-y-4
        sm:space-y-0
        sm:place-items-stretch
        sm:space-x-6
        sm:flex-row"
    >
        <div
            class="
            place-self-start
            sm:place-self-stretch"
        >
            <img src="imgs/propic.cut.jpg" alt="void" class="object-cover w-24 rounded-full" />
        </div>
        <Content
            ctype="cols"
            cssprops="
            sm:place-content-center
            place-items-start
            sm:place-items-start"
        >
            <span class="text-2xl text-cv_section">Valentino Di Giosaffatte</span>
            <span class="text-cv_text">Computer scientist / System programmer</span>
        </Content>
    </Content>
    <Content
        ctype="cols"
        cssprops="
        place-items-start 
        sm:place-content-center
        sm:place-items-end"
    >
        <div class="flex space-x-2 place-items-center text-cv_subsection">
            <Fa class="visible sm:invisible text-cv_section" icon={faCakeCandles} />
            <span>11 January 1994</span>
            <Fa class="invisible sm:visible text-cv_section" icon={faCakeCandles} />
        </div>
        <div class="flex space-x-3 place-items-center text-cv_subsection">
            <Fa class="visible sm:invisible text-cv_section" icon={faLocationDot} />
            <span>Lanciano, Chieti, Abruzzo, Italy</span>
            <Fa class="invisible sm:visible text-cv_section" icon={faLocationDot} />
        </div>
    </Content>
</Content>
