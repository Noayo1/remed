import { Link } from 'react-router-dom'
import './Button.css'

export default function Button({ children, variant = 'outlined', href, to, onClick, className = '' }) {
  const classes = `btn btn--${variant} ${className}`

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>
  }

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }

  return <button className={classes} onClick={onClick}>{children}</button>
}
