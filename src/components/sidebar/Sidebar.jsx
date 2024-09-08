import "./sidebar.scss"
import NavList from "./navlist/NavList"
import ToggleBtn from "./togglebtn/ToggleBtn"
import { useState } from "react"
import { motion } from "framer-motion"

const variants = {
    open: {
        clipPath: "circle(1800px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav className="sidebar" animate={isOpen ? "open" : "closed"}>
       <motion.div className="background" variants={variants}>
        <NavList />
       </motion.div>
       <ToggleBtn setIsOpen={setIsOpen} />
    </motion.nav>
  )
}

export default Sidebar