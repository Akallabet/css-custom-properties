import { node, string } from 'prop-types'

export const Button = ({ children }) => <button>{children}</button>

Button.propTypes = {
  children: node.isRequired,
}
