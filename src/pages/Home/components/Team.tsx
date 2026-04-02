import './Team.css';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Nthabiseng Kgafela',
    role: 'Founder & CEO',
    bio: 'Leads the foundation\'s vision and strategy to empower women and build lasting impact.',
    image: '/images/Nthabiseng Kgafela - Founder & CEO.JPG'
  },
  {
    name: 'Lesego Mamabolo',
    role: 'Project Manager',
    bio: 'Oversees programs and projects, ensuring they run smoothly and create real change.',
    image: '/images/Lesego Mamabolo - Project Manager.jpg'
  },
  {
    name: 'Omphile Malete',
    role: 'Marketing Coordinator',
    bio: 'Drives our voice through campaigns and outreach, connecting women to opportunities.',
    image: '/images/Omphile Malete - Marketing Coordinator.jpg'
  }
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2 className="title">Meet the Team</h2>
        <p className="description">
          Our dedicated team works tirelessly to create opportunities, build community,
          and empower the next generation of youth.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
