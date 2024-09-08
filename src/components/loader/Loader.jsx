import "./loader.scss";
import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <div className="loader">
        <motion.div className="box" 
            animate = {{ scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]    
        }}
        transition = {{ duration: 2, ease: "easeInOut", repeat: Infinity, times: [0, 0.2, 0.5, 0.8, 1], repeatDelay: 1 }} />
    </div>
  )
}
