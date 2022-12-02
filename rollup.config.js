import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts'

const pkg = require('./package.json');

const plugins = [
    peerDepsExternal(), 
    resolve(), 
    commonjs(), 
    terser()
];

const external = [ 
    // ...Object.keys(pkg.dependencies || {}),
    // ...Object.keys(pkg.peerDependencies || {}),
]

export default [
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist',
            format: 'cjs',
            exports: 'named',
            preserveModules: true,
            preserveModulesRoot: 'src',
            sourcemap: true,
        },
        plugins: [
            ...plugins,
            typescript({ 
                tsconfig: './tsconfig.build.json', 
                declarationDir: 'dist' 
            }),
        ],
        external
    },
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist/esm',
            format: 'esm',
            preserveModules: true,
            preserveModulesRoot: 'src',
            sourcemap: true,
        },
        plugins: [
            ...plugins,
            typescript({
                tsconfig: './tsconfig.build.json',
                declarationDir: 'dist/esm',
            }),
        ],
        external,
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: pkg.types, format: "esm" }],
        plugins: [dts()]
    }
];
