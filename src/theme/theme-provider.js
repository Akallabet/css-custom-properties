import { node, oneOf } from 'prop-types'

import './root.css'
import './light.css'
import './dark.css'

const themes = {
  light: 'light',
  dark: 'dark',
}

export const ThemeProvider = ({ theme, children }) => {
  return <div data-theme={themes[theme]}>{children}</div>
}

ThemeProvider.propTypes = {
  theme: oneOf(Object.keys(themes)),
  children: node.isRequired,
}

ThemeProvider.defaultProps = {
  theme: themes.light,
}
