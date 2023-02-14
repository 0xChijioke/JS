'use client';
import styles from "../styles";
import { TypingText, TitleText, NewFeatures } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "utils/motion";
import { newFeatures } from "../constants";


const World = () => (
  <section className={`${styles.paddings} rela
   z-10`}>
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg;flex-row flex-col gap-8`}>
        <TypingText title={"| People on the world"} textStyles="text-center" />
        <TitleText
          title={<>Track friends</>}
          textStyles="text-center" />
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="relative mt-[60px] flex w-full ">
              <img
                src="/map.png"
                alt="map"
              />
          </motion.div>
    </motion.div>
  </section>
);

export default World;
