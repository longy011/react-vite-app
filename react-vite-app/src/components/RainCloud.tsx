import Raindrop from "./Raindrop";
import cloud from "../assets/cloud.png";
import { motion } from "motion/react";

const drops = [
  { y_start: -100, x_start: 0, delay_start: 0.2 },
  { y_start: -90, x_start: 70, delay_start: 1.3 },
  { y_start: -110, x_start: 170, delay_start: 0.2 },
  { y_start: -110, x_start: 35, delay_start: 0 },
  { y_start: -110, x_start: 170, delay_start: 0.8 },
  { y_start: -110, x_start: 135, delay_start: 0.3 },
  { y_start: -110, x_start: 180, delay_start: 1 },
  { y_start: -110, x_start: 235, delay_start: 0.2 },
];

const RainCloud = () => {
  return (
    <motion.div
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      drag
      dragConstraints={{
        left: -200,
        right: 200,
        top: -100,
        bottom: 100,
      }}
      dragElastic
    >
      <motion.img src={cloud} alt="Cloud" style={{ height: 200 }} />
      {drops.map((d, i) => (
        <Raindrop key={i} {...d} />
      ))}
    </motion.div>
  );
};

export default RainCloud;
