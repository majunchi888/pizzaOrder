import { Link } from 'react-router-dom'

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block cursor-pointer rounded-full bg-yellow-400 font-semibold uppercase tracking-wide transition-colors text-stone-800  duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed text-sm'

  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'px-4 py-2 text-xs md:py-2.5 md:px-5',
    round: base + 'px-2.5 py-1 text-sm md:py-2 md:px-3.5',

    secondary:
      'inline-block text-sm cursor-pointer border-2 border-stone-300 rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300  focus:ring-stone-200 disabled:cursor-not-allowed  px-4 py-2.5 md:px-6 md:py-3.5 text-stone-400',
  }

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    )

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    )

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}

export default Button
