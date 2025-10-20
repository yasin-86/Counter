function Button({label,handleclick}) {
    return(
        <button onClick={handleclick} className="button">
        {label}
      </button>
    )
}
export default Button;