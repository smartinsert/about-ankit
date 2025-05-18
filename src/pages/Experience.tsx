import ExperienceCard from '@/components/experience-card';

const Experience = () => {
  const experiences = [
    {
      company: 'Goldman Sachs',
      position: 'Vice President - Marquee',
      duration: 'November 2022 - Present',
      location: 'Bengaluru, India',
      responsibilities: [
        'Optimized MarketFeed performance, reducing load time for 40 items per page from 4s to 200ms, significantly improving user experience.',
        'Revamped MarketFeed UI with hero images, embedded interactives, and smooth/follow features, leading to a measurable increase in 5 day average active users by 103% over a period of a year.',
        'Spearheaded initiatives to boost feed engagement, launching Marquee MarketPoll and Marquee Minute, driving increase in MAU to 153% in a span of a year.',
        'Implemented a MongoDB-based Quarkus caching solution, replacing Caffeine after a thorough cost-benefit analysis of alternatives like Redis.',
      ],
    },
    {
      company: 'Morgan Stanley',
      position: 'Senior Manager',
      duration: 'June 2020 - November 2022',
      location: 'Mumbai, India',
      responsibilities: [
        'Contributed in migrating and scaling the global settlements platforms BFF component to handle the extraordinary volume of daily transactions and 3K users on average. Implemented CORS pattern on an event-driven architecture, designing a high read-to-write ratio of 8:1 effectively.',
        'Developed a new settlement function for the global settlements platform, enabling efficient handling of transactions worth billions from existing and newly acquired sources.',
      ],
    },
    {
      company: 'Fractal Analytics',
      position: 'Senior Engineer - Theremin',
      duration: 'April 2018 - May 2020',
      location: 'Mumbai, India',
      responsibilities: [
        'Leveraged Kafka to halve vendor API calls to 900 and reduced database update time from 2 hours to 20 minutes, thereby improving the availability of the API.',
        'Engineered a high-performance PostgreSQL database for NSE and BSE securities data, enabling sub-10 second queries from a 150+ GB table.',
        'Devised and implemented an event-driven algorithmic trading framework supporting live trading, paper trading, and backtesting, seamlessly integrated with our own database through APIs.',
      ],
    },
    {
      company: 'Wealth Technology and Services Pvt. Ltd.',
      position: 'Product Development Engineer',
      duration: 'June 2016 - August 2018',
      location: 'Mumbai, India',
      responsibilities: [
        'Designed a scalable investment enterprise solution to serve over 10,000 concurrent users, enabling B2B2C deployments for multiple brokers, including one of the largest in the country with AUM exceeding $200 million, all leveraging AWS.',
      ],
    },
    {
      company: 'Edelweiss Securities Ltd.',
      position: 'Quantitative Developer',
      duration: 'June 2016 - August 2018',
      location: 'Mumbai, India',
      responsibilities: [
        'Developed a low-latency, high-throughput algorithmic trading platform with a sub-20ms round trip time(to exchange and back).',
      ],
    },
    {
      company: 'FlexTrade',
      position: 'Senior Software Engineer',
      duration: 'December 2012 - September 2015',
      location: 'Pune, India',
      responsibilities: [
        'Developed core trading system components handling order routing and execution.',
      ],
    },
  ];

  return (
    <div className='min-h-screen'>
      <section className='py-12'>
        <div className='container'>
          <h1 className='text-4xl font-bold mb-8'>Professional Experience</h1>
          <div className='space-y-6'>
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                company={exp.company}
                position={exp.position}
                duration={exp.duration}
                location={exp.location}
                responsibilities={exp.responsibilities}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
