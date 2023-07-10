import { motion } from "framer-motion";
import articooleBannerImage from "@public/articoole-moving-background.png";

export const MotionInfiniteImage = ({ className }) => {
    return (
        <motion.div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto"
            }}
            className={className}
        >
            <motion.img
                src={articooleBannerImage.src}
                alt="Moving Background Image for Aesthetics"
                className="w-auto max-w-full object-right object-none overflow-visible h-full"
                height={300}
                aria-hidden="true"
                animate={{
                    x: ["0%", "500%", "0%"],
                    transition: {
                        duration: 60,
                        repeat: Infinity
                    }
                }}
            />
        </motion.div>
    );
};
