import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.667,
  headerFontFamily: [
    "Inter",
    "Helvetica",
    "sans-serif"
  ],
  bodyFontFamily: 
  [
    "Inter",
    "Helvetica",
    "sans-serif"
  ],
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}



export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
