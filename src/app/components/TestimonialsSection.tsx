import AnimateOnScroll from './AnimateOnScroll';

const IBM = "'IBM Plex Sans', sans-serif";

const featured = {
  quote: "socialrumr caught a brewing PR crisis 3 hours before it hit mainstream media. That window was everything.",
  name: "Priya Mehta",
  title: "VP Communications, Unilever",
  avatar: "https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
};

const reviews = [
  {
    quote: "We used to stitch together 4 different tools. Now everything lives in one place and our team actually uses it every day.",
    name: "James Okafor",
    title: "Head of Brand, Diageo",
    avatar: "https://images.unsplash.com/photo-1575299833801-85ce40813bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    quote: "The sentiment trend data alone changed how we brief our agency. We stopped guessing and started showing them receipts.",
    name: "Sara Lindqvist",
    title: "Social Media Director, IKEA",
    avatar: "https://images.unsplash.com/photo-1758273706443-a47ffc6a578b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    quote: "I was sceptical about another listening tool. Two weeks in I cancelled two other subscriptions. That says it all.",
    name: "Marcus Webb",
    title: "Digital Strategy Lead, Publicis",
    avatar: "https://images.unsplash.com/photo-1724627559305-b943589fbddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full px-8 py-24" style={{ background: '#f7faf8' }}>
      <div className="max-w-5xl mx-auto">

        {/* Featured quote */}
        <AnimateOnScroll direction="up">
          <div className="text-center mb-12">
            <p style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              color: '#0a1c12',
              fontFamily: IBM,
              lineHeight: 1.2,
              maxWidth: '720px',
              margin: '0 auto 32px',
            }}>
              &ldquo;{featured.quote}&rdquo;
            </p>
            <div className="flex flex-col items-center gap-2">
              <img
                src={featured.avatar}
                alt={featured.name}
                className="w-12 h-12 rounded-full object-cover"
                style={{ border: '2px solid #c6e8d5' }}
              />
              <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0a1c12', fontFamily: IBM }}>{featured.name}</p>
              <p style={{ fontSize: '0.78rem', color: '#6b9080', fontFamily: IBM }}>{featured.title}</p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Divider */}
        <div className="w-full mb-12" style={{ height: '1px', background: 'rgba(15,51,36,0.08)' }} />

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map(({ quote, name, title, avatar }, i) => (
            <AnimateOnScroll key={name} delay={i * 100} direction="up">
              <div
                className="rounded-2xl p-6 flex flex-col gap-6 h-full"
                style={{ background: '#ffffff', border: '1px solid rgba(15,51,36,0.07)', boxShadow: '0 1px 3px rgba(15,51,36,0.04)' }}
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#0f3324">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p style={{ fontSize: '0.83rem', color: '#2e4d3d', fontFamily: IBM, lineHeight: 1.75, flex: 1 }}>
                  &ldquo;{quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                    style={{ border: '1.5px solid #c6e8d5' }}
                  />
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.8rem', color: '#0a1c12', fontFamily: IBM }}>{name}</p>
                    <p style={{ fontSize: '0.7rem', color: '#6b9080', fontFamily: IBM }}>{title}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}