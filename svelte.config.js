import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import path from 'path';
import preprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config.js';

const dev =
    process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [
        '.svelte',
        ...mdsvexConfig.extensions
    ],

    preprocess: [
        preprocess({
            postcss: true
        }),
        mdsvex(mdsvexConfig)
    ],

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false
        }),
        vite: {
            resolve: {
                alias: {
                    $components: path.resolve(
                        'src/components'
                    ),
                    $stores:
                        path.resolve(
                            'src/stores'
                        ),
                    $data: path.resolve(
                        'src/data'
                    ),
                    $assets:
                        path.resolve('src/assets')
                }
            }
        },
        prerender: {
            default: true
        },
        paths: {
            base: dev ? '' : ''
        }
    }
};

export default config;
