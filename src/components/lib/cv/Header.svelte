<script lang="ts">
    import { faCakeCandles, faLocationDot } from '@fortawesome/free-solid-svg-icons/index.es';
    import Fa from 'svelte-fa/src/fa.svelte';
    import Content from '../blog/Content.svelte';
</script>

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
            <img src="music/a_love_supreme.jpg" alt="void" class="object-cover w-28 rounded-full" />
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
