module.exports = {
    multipass: true,
    js2svg: {
        indent: 4,
        pretty: true
    },
    plugins: [
        'preset-default',

        'convertStyleToAttrs',
        'prefixIds',
        'cleanupListOfValues',
        'removeRasterImages',
        'sortAttrs',
        'removeDimensions'

        // 'removeAttributesBySelector',
        // 'removeElementsByAttr',
        // 'addClassesToSVGElement',
        // 'removeOffCanvasPaths',
        // 'removeStyleElement',
        // 'removeScriptElement',
        // 'reusePaths',
    ]
};
