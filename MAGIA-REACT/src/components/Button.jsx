// Button.jsx
import '../style/button.css'

const Button = ({ text, icon: Icon }) => {
  return (
    <button className="btn">
      {Icon && <Icon />}
      {text}
    </button>
  )
}

export { Button }
