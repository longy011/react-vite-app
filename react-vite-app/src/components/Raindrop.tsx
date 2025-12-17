import { easeIn, motion } from "motion/react";
import raindrop from "../assets/raindrop.png";

interface RaindropProps {
  y_start: number;
  x_start: number;
  delay_start?: number;
}

const Raindrop = ({ y_start, x_start, delay_start }: RaindropProps) => {
  return (
    <motion.div
      style={{ position: "absolute" }}
      initial={{ y: y_start, x: x_start }}
      animate={{ y: 150 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.2,
        ease: easeIn,
        delay: delay_start,
      }}
    >
      <motion.img
        src={raindrop}
        alt="raindrop"
        style={{ height: 10 }}
      ></motion.img>
    </motion.div>
  );
};

export default Raindrop;
