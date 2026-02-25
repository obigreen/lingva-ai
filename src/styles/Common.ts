import {theme} from "./Theme";

type FontPropsStyle = {
    famaly?: string
    weight?: number
    lineHeight?: number
    color?: string

    minW: number
    maxW: number
}

export const font = ({famaly, weight, color, lineHeight, minW, maxW}: FontPropsStyle) => `
font-famaly: ${famaly || "Poppins"};
font-weight: ${weight || 400};
line-height: ${lineHeight || 1.2};
color: ${color || theme.color.backround};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${maxW} - ${minW}) + ${minW}px);
`

type FluidFontStyle = {
    minSize: number
    maxSize: number
    minViewport?: number
    maxViewport?: number
}

export const fluidFont = ({minSize, maxSize, minViewport = 360, maxViewport = 1440}: FluidFontStyle) => `
font-size: clamp(
    ${minSize}px,
    calc(${minSize}px + (${maxSize - minSize}) * ((100vw - ${minViewport}px) / (${maxViewport - minViewport}))),
    ${maxSize}px
);
`
