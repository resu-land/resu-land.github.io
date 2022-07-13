<script lang="ts">
    import { browser } from '$app/env';
    import { page } from '$app/stores';
    import Footer from '$components/ui/Footer.svelte';
    import Nav from '$components/ui/Nav.svelte';
    import Transition from '$components/ui/Transition.svelte';
    import View from '$components/ui/View.svelte';
    import { dark } from '$stores/theme';
    import { Modals } from 'svelte-modals';
    import '../app.css';
</script>

{#if browser}
    <div class:dark={$dark}>
        <Modals />
        <View>
            <Nav />
            <Transition url={$page.url}>
                <slot />
            </Transition>
            <Footer />
        </View>
    </div>
{/if}
