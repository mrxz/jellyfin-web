module.exports = {
    babelrcRoots: [
        // Keep the root as a root
        '.'
    ],
    sourceType: 'unambiguous',
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: 3,
                exclude: [
                    'es.array.concat',
                    'es.array.filter',
                    'es.array.index-of',
                    'es.array.last-index-of',
                    'es.array.map',
                    'es.array.reduce',
                    'es.array.reduce-right',
                    'es.array.slice',
                    'es.array.splice',
                    'es.math.hypot',
                    'es.array.sort',
                    'es.json.parse',
                    'es.object.define-property',
                    'es.object.get-own-property-descriptor',
                    'es.promise'
                ]
            }
        ],
        '@babel/preset-react'
    ],
    plugins: [
    ]
};
