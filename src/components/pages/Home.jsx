import Veggie from "../Veggie"
import Popular from "../Popular"
import { motion } from "framer-motion"


function Home() {
  return (
    <motion.div>
        <Veggie/>
        <Popular/>
    </motion.div>
  )
}

export default Home