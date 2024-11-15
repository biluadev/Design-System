import {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radio,
    space
} from '@ignite-ui/tokens'

import { createStitches } from '@stitches/react'

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config
} = createStitches({
    theme: {
        colors,
        fonts,
        fontSizes,
        fontWeights,
        lineHeights,
        radio,
        space
    },
})