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
                    'es.array.sort',
                    'es.json.parse'
                ]
            }
        ],
        '@babel/preset-react'
    ],
    plugins: [
    ]
};
