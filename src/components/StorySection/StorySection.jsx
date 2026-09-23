import { motion } from 'framer-motion';
import './StorySection.css';

// Import your images
import story1 from '../../assets/story3.png';
import story2 from '../../assets/story4.png';

const StorySection = () => {
  return (
    <section className="story-section">
      <h2 className="section-title">
        FEATURED WEDDING STORIES
      </h2>

      <div className="story-grid">

        {/* First Story */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="story-card large"
        >
          <div className="image-wrapper">
            <img src={story1} alt="Wedding Story 1" />
          </div>

          <h3>Arul & Ramya</h3>
          <p className="location">Trichy ,Tamilnadu</p>
        </motion.div>

        {/* Second Story */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="story-card"
        >
          <div className="image-wrapper">
            <img src={story2} alt="Wedding Story 2" />
          </div>

          <h3>Vignesh & Ashwini</h3>
          <p className="location">Trichy, Tamilnadu</p>
        </motion.div>

      </div>
    </section>
  );
};

export default StorySection;