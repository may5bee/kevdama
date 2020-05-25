import Typography from "typography"
import twinPeaksTheme from 'typography-theme-twin-peaks'
// twinPeaksTheme.overrideThemeStyles = (options) => ({
//   'a': {
//     color: '#1533D0',
//     'background-image': 'none'
//     }
// })
// const typography = new Typography(twinPeaksTheme)

const typography = new Typography({
  baseFontSize: "21px",
  baseLineHeight: 1.7,
  headerFontFamily: [
    "Inter",
    "Helvetica",
    "sans-serif"
  ],
  bodyFontFamily: ["Palatino", "Georgia", "serif"],
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}



export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
