import React from 'react';
import "@/app/dashboard/news.css"
const newsData = [
  {
    title: 'Battery Technology Breakthrough in 2025',
    date: 'August 18, 2025',
    summary: 'A new battery technology promises to double the energy density and halve the charging time for electric vehicles.',
    link: '#',
    image: '/news/battery-breakthrough.jpg',
    big: true,
  },
  {
    title: 'Solar Integration with Smart Grids',
    date: 'August 10, 2025',
    summary: 'Cities are adopting smart grids that seamlessly integrate solar and battery storage for reliable green energy.',
    link: '#',
    image: '/news/solar-grid.jpg',
  },
  {
    title: 'EV Charging Stations Expansion',
    date: 'August 2, 2025',
    summary: 'Major expansion of EV charging stations announced across Europe and North America.',
    link: '#',
    image: '/news/ev-charging.jpg',
  },
];

const News = () => (
  <section className="news-section" style={{ padding: '2rem 0' }}>
    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>Latest News</h2>
    <div className="news-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
      {newsData.map((news, idx) =>
        news.big ? (
          <article
            key={idx}
            className="news-card big-news"
            style={{
              background: '#fff',
              borderRadius: '1rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
              padding: '2rem',
              maxWidth: 600,
              minWidth: 320,
              flex: '1 1 100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            <img src={news.image} alt={news.title} style={{ width: 200, height: 140, objectFit: 'cover', borderRadius: '0.75rem' }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{news.title}</h3>
              <div style={{ fontSize: '1rem', color: '#888', marginBottom: '0.75rem' }}>{news.date}</div>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.25rem' }}>{news.summary}</p>
              <a href={news.link} style={{ color: '#fff', background: '#0070f3', padding: '0.6rem 1.5rem', borderRadius: '2rem', fontWeight: 600, textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,112,243,0.08)' }}>Read More</a>
            </div>
          </article>
        ) : (
          <article key={idx} className="news-card" style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', padding: '1.5rem', maxWidth: 340, minWidth: 260, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={news.image} alt={news.title} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: '0.75rem', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', textAlign: 'center' }}>{news.title}</h3>
            <div style={{ fontSize: '0.95rem', color: '#888', marginBottom: '0.75rem' }}>{news.date}</div>
            <p style={{ fontSize: '1rem', marginBottom: '1rem', textAlign: 'center' }}>{news.summary}</p>
            <a href={news.link} style={{ color: '#0070f3', textDecoration: 'underline', fontWeight: 500 }}>Read more</a>
          </article>
        )
      )}
    </div>
  </section>
);

export default News;