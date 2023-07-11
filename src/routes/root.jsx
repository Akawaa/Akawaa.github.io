import '../App.css'
import { Outlet } from 'react-router-dom'

function Root() {

  return (
    <div className = "App">
        <main>
            <Outlet />
            <footer>
                <p>This website was created by me using React, CSS, and JavaScript.</p>
            </footer>
        </main>
    </div>
  )
}

export default Root