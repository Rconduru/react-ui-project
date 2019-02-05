import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    external: [
        'react', 
        'react-proptypes'
    ],
    plugins: [
        resolve(),
        postcss({
          modules: true
        }),
        babel({
          exclude: 'node_modules/**'
        })
    ]

};
