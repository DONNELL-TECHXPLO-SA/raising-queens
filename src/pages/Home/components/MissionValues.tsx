import './MissionValues.css';

interface Value {
  icon: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: 'fas fa-hand-holding-heart',
    title: 'Compassion',
    description: 'Trying to understand the other person\'s circumstances; ensuring the quality of life for those in need; and keeping the fire going in everyone else\'s heart.'
  },
  {
    icon: 'fas fa-seedling',
    title: 'Thoughtfulness',
    description: 'Basing our actions on an introspection that leads to creativity, intuition and pro-activity.'
  },
  {
    icon: 'fas fa-balance-scale',
    title: 'Fairness',
    description: 'Treating all people fairly, equally, and with kindness and tolerance.'
  },
  {
    icon: 'fas fa-tasks',
    title: 'Accountability',
    description: 'These values underlie the inclusion that brings people together.'
  },
  {
    icon: 'fas fa-award',
    title: 'Excellence',
    description: 'Striving toward the best we can do and be.'
  },
  {
    icon: 'fas fa-handshake',
    title: 'Integrity / Honesty',
    description: 'Being straightforward; saying what we mean and meaning what we say; living honestly; demonstrating that everything we do can be trusted.'
  },
  {
    icon: 'fas fa-globe-africa',
    title: 'Connection to the Environment',
    description: 'Seeing the world as one living system, and showing respect for the spirit residing in everything and everyone.'
  },
  {
    icon: 'fas fa-hands-helping',
    title: 'Responsible Action',
    description: 'Acknowledging our duty and responsibility to make the world a better place, and responding in a way that fosters hopefulness for the future.'
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Education',
    description: 'Believing that our actions and decisions must be based in knowledge and research, and that we have an obligation to educate ourselves and others for the betterment of the world.'
  }
];

const MissionValues = () => {
  return (
    <section className="mission-values">
      <div className="mission">
        <h2>Our Mission and Values</h2>
        <p>
          The organisation aims to show the youth the importance of education,
          personal development, and self-worth by sharing resources that will
          encourage them to become empowered and self-reliant.
        </p>
      </div>

      <div className="values-grid">
        {values.map((value, index) => (
          <div className="value-box" key={index}>
            <i className={value.icon}></i>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionValues;
