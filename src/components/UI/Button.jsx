import './Button.css'

export default function Button({ children, variant = 'outlined', href, onClick, className = '' }) {
  const classes = `btn btn--${variant} ${className}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }

  return <button className={classes} onClick={onClick}>{children}</button>
}
