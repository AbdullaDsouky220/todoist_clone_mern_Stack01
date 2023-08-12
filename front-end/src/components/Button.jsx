import { motion } from 'framer-motion'
import PropTypes from 'prop-types';
Button.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
  className: PropTypes.string,
  // Other props...
};
function Button({children,bg,className}) {
  return (
    <motion.button
    whileTap={{ scale: 0.92 }}
    button
    className={`font-bold  bg-${bg}-600/80 hover:bg-${bg}-700 transition duration-75 text-white ${className}`}
  >
    {children}
  </motion.button>
  )
}

export default Button