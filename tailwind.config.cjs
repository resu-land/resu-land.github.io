const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    darkMode: 'class',

    theme: {
        extend: {
            fontFamily: {
                nunito: ['Nunito', 'sans-serif']
            },
            colors: {
                lg_back_0: colors.neutral[100],
                lg_back_1: colors.neutral[200],
                lg_back_2: colors.neutral[300],
                lg_front_0: colors.neutral[500],
                lg_front_1: colors.neutral[900],
                lg_front_hl: colors.purple[500],
                lg_tag_0: colors.blue[600],
                lg_tag_1: colors.blue[400],

                dk_back_0: colors.neutral[900],
                dk_back_1: colors.neutral[800],
                dk_back_2: colors.neutral[700],
                dk_front_0: colors.neutral[500],
                dk_front_1: colors.neutral[400],
                dk_front_hl: colors.neutral[50],
                dk_tag_0: colors.blue[500],
                dk_tag_1: colors.blue[300],

                gn_logo_layer_0: colors.purple[800],
                gn_logo_layer_1: colors.purple[600],
                gn_logo_layer_2: colors.purple[400],

                debug: colors
            },
            animation: {
                cs_rotate: 'spin 30s linear infinite',
                cs_pulse: 'pulse 5s cubic-bezier(0.4,0,0.6,1) infinite'
            }
        }
    },

    plugins: []
};

module.exports = config;
