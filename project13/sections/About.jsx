'use client';
import { TypingText } from "@/components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "utils/motion";
import styles from "../styles";


const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
        <TypingText title="| About Metaverse"
        textStyles="text-center" />
        <motion.p 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
            The 
            <span className="font-extrabold text-white">metaverse</span>&nbsp;
             is a shared virtual world that blurs the lines between physical and digital reality. It's a
             <span className="font-extrabold text-white"> collective space &nbsp;</span>where users can interact, create, and explore with their avatars in a 
             <span className="font-extrabold text-white"> boundless and immersive environment</span> . The metaverse offers new opportunities for collaboration, communication, and entertainment, as well as the potential to revolutionize industries ranging from gaming to education, commerce, and more. It's a constantly evolving digital space where the possibilities are limited only by the imaginations of its users.
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
          />
    </motion.div>
  </section>
);

export default About;
