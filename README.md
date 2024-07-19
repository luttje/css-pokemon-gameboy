# Pokémon GameBoy CSS

Inspired by: https://github.com/nostalgic-css/NES.css

This is a joke CSS-framework and it is not intended for use in production. You can [see a demo here](https://luttje.github.io/css-pokemon-gameboy/). The demo performs poorly on mobile devices or small resolutions.

## Using the distribution

1. Download [the latest release](https://github.com/luttje/css-pokemon-gameboy/releases)

2. The css is in the `styles` directory. All other assets are inlined into the css.

3. The release contains a `template.html` to get your started.

    -OR-

    Append the following include on the page where you want this style:

    ```html
    <link rel="stylesheet" href="./styles/css-pokemon-gameboy.css">
    ```

4. See the [demo](https://luttje.github.io/css-pokemon-gameboy/), [index.html](./index.html) or [.scss-files](./src/scss/) for all possible classes and effects.

## Compile it yourself

### Compiling

1. Start a terminal/command prompt in the root directory of this repository

2. Run `npm install` to install the dependencies

3. To build the demo run `npm run build` to build the distribution files to the `dist` directory (preview the demo with `npm run preview`)

   -OR-

    Run `npm run dev` in the to watch for changes in the `src` directory and automatically build new distributions.

4. To build the css files run `npm run build:css` to build the css file with all needed static files to the `dist-release` directory

## Third-party Licenses

**The images in this repository are the property of Nintendo. The style is also property of Nintendo.**

You can view the licenses related to third-party code in [LICENSES-THIRD-PARTY.md](LICENSES-THIRD-PARTY.md) or on their respective websites.
