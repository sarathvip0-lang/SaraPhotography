import { motion } from "framer-motion";
import "./TenPartNarrative.css";

// Import your images
import img1 from "../../assets/featured/img1.jpg";
import img2 from "../../assets/featured/img2.jpg";
import img3 from "../../assets/featured/img3.jpg";
import img4 from "../../assets/featured/img6.jpg";
import img5 from "../../assets/featured/img5.jpg";
import img6 from "../../assets/featured/img4.png";

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 1.1,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const TenPartNarrative = () => {

  const images = [

    {
      id: 1,
      class: "item-1",
      url: img1,
    },

    {
      id: 2,
      class: "item-2",
      url: img2,
    },

    {
      id: 3,
      class: "item-3",
      url: img3,
    },

    {
      id: 4,
      class: "item-4",
      url: img4,
    },

    {
      id: 5,
      class: "item-5",
      url: img5,
    },

    {
      id: 6,
      class: "item-6",
      url: img6,
    },

  ];

  return (

    <section className="narrative-section">

      {/* TOP TITLE */}
      <motion.div
        className="top-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Captured Moments
      </motion.div>

      {/* GRID */}
      <motion.div
        className="narrative-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {images.map((img) => (

          <motion.div
            key={img.id}
            className={`narrative-item ${img.class}`}
            variants={imageVariants}

            whileHover={{
              scale: 1.03,
            }}

            transition={{
              duration: 0.7,
              ease: [0.19, 1, 0.22, 1],
            }}
          >

            {/* IMAGE */}
            <motion.img
              src={img.url}
              alt="Gallery"

              whileHover={{
                scale: 1.08,
              }}

              transition={{
                duration: 1.2,
                ease: [0.19, 1, 0.22, 1],
              }}
            />

          </motion.div>

        ))}

      </motion.div>

    </section>
  );
};

export default TenPartNarrative;