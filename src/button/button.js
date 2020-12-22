import { node } from 'prop-types'

import './button.css'

export const Button = ({ children }) => <button>{children}</button>

Button.propTypes = {
  children: node.isRequired,
}
