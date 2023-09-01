import {useEffect,useState} from "react"
import "./header.css"

export const Header = () => {
  const [theme, setTheme] = useState("light")

  const modeToggle = () => {
    if(theme === "light") {
      setTheme("other")
    }
    else if (theme === "other") {
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }

  useEffect(() =>{
    document.body.classList = theme
  })
  return(
    <header className="bg-success">
      <div className="container">
        <div className="header-inner p-3 d-flex justify-content-between">
          <h1>React-Todo-APP</h1>
          <button onClick={modeToggle} className="btn btn-danger px-3 py-1">Mode</button>
        </div>
      </div>
    </header>
  )
}