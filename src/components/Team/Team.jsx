import "./Team.css";

import surya from "../../assets/team/suriya.jpg";
import sarath from "../../assets/team/sarath.jpg";
import vivek from "../../assets/team/vivek.jpg";
import vishwa from "../../assets/team/vishwa.jpg";
import akash from "../../assets/team/akash.jpg";
import ezhumazhai from "../../assets/team/ezhumazhai.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Sarath",
    role: "Manager",
    image: sarath,
    description:
      "Managing operations, client relationships, and ensuring every project runs smoothly from start to finish.",
  },
  {
    id: 2,
    name: "Surya",
    role: "Lead Photographer",
    image: surya,
    description:
      "Capturing timeless wedding moments with creativity and emotion.",
  },
  {
    id: 3,
    name: "Vivek",
    role: "Creative Designer",
    image: vivek,
    description:
      "Designing premium albums, branding, and stunning visual concepts.",
  },
  {
    id: 4,
    name: "Vishwa",
    role: "Videographer & Editor",
    image: vishwa,
    description:
      "Creating cinematic wedding films with professional storytelling.",
  },
  {
    id: 5,
    name: "Akash",
    role: "Photographer",
    image: akash,
    description:
      "Focused on candid moments and natural storytelling photography.",
  },
  {
    id: 6,
    name: "Ezhumazhai",
    role: "Frame Making",
    image: ezhumazhai,
    description:
      "Expert in premium frame making and finishing, ensuring every memory is beautifully presented.",
  },
];

function Team() {
  return (
    <section className="team" id="team">
      <div className="team__container">
        {/* Heading */}
        <div className="team__header">
          <h2 className="team__heading">Meet Our Team</h2>

          <p className="team__subtitle">
            Behind every beautiful memory is a passionate team dedicated to
            creating timeless photographs, cinematic films, and premium frame
            craftsmanship.
          </p>
        </div>

        {/* Team Members */}
        <div className="team__grid">
          {teamMembers.map((member) => (
            <div className="team__card" key={member.id}>
              <div className="team__image">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="team__content">
                <h3 className="team__name">{member.name}</h3>

                <span className="team__role">{member.role}</span>

                <p className="team__description">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;