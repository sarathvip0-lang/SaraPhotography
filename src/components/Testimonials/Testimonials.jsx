/* =============================================
   Testimonials — 3 rotating sets of 3 reviews
   ============================================= */
import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    body: 'Thank you zerowatts to capture best moments of our wedding & reception. We loved the pre-wedding shoots and the tradition pictures. It was amazing working with you. Team of photographers are very flexible to work with. Great effort on end to end follow up to make sure we received albums.',
    couple: 'Theebica + Purushoth',
  },
  {
    id: 2,
    body: 'We had the pleasure of working with Zerowatts Photography for our engagement, reception, and wedding events in May 2024, and we couldn\'t be happier with the results! From start to finish, their team demonstrated incredible professionalism and creativity.',
    couple: 'Jeevitha + Pawan',
  },
  {
    id: 3,
    body: 'We have booked Zerowatts for engagement, pre-wedding shoot, reception and wedding. They did a wonderful job and made us feel really comfortable. Overall experience with them all as topnotch! Would really love to work with them again.',
    couple: 'Pratibha + Ashwanth',
  },
  {
    id: 4,
    body: 'Had pleased experience with zero Watts photography right from the pre-wedding photoshoot till the wedding events! Great teamwork and the crew members were super friendly and talented! The album and photos quality came out beautifully! Thank you team.',
    couple: 'Pooja + Raveen',
  },
  {
    id: 5,
    body: 'I want to personally thank Zero Watts for their incredible effort in capturing every beautiful moment of the event. The deliverables were exactly as promised and turned out amazing. It was a pleasure working with them. I would definitely recommend their services to everyone!',
    couple: 'Divyashree + Narayanan',
  },
  {
    id: 6,
    body: 'We loved the team, their efforts to get good pictures even when the bride and groom were cranky is highly appreciable. One can see the efforts the team goes through to deliver good quality services. They kept us comfortable throughout the event, Thank you Team ZW.',
    couple: 'Subathra + Animesh',
  },
  {
    id: 7,
    body: 'The candid and traditional photography teams were exceptional, perfectly balancing spontaneous moments with the more classic shots. The videography was just stunning, and every important detail was covered flawlessly. You\'ve helped us relive our big day in the best way possible!',
    couple: 'Nivya + Manoj',
  },
  {
    id: 8,
    body: 'Wonderful experience with Zerowatts! From pre-shoot till wedding we had smooth experience. The pictures were well captured and they make amazing viral reels! Highly recommend Zero Watts Photography to anyone seeking a talented and professional photography team!',
    couple: 'Aishwarya + Rahul',
  },
  {
    id: 9,
    body: 'Great photographers — done outstanding job. We are fully satisfied with photos and videos. Especially wedding teaser was awesome. Professional staff and showed patience throughout event. Praveen followed up regularly until all deliverables are met. Really recommend.',
    couple: 'Amrin + Saleem Pasha',
  },
]

/* Group into pages of 3 */
const pages = [
  testimonials.slice(0, 3),
  testimonials.slice(3, 6),
  testimonials.slice(6, 9),
]

export default function Testimonials() {
  const [page, setPage] = useState(0)

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials__container">
        <span className="section-label" id="testimonials-heading">Testimonials</span>

        <div className="testimonials__grid">
          {pages[page].map((t) => (
            <article key={t.id} className="testimonial-card">
              {/* Quotation mark */}
              <span className="testimonial-card__quote" aria-hidden="true">"</span>
              <p className="testimonial-card__body">{t.body}</p>
              <footer className="testimonial-card__footer">
                <p className="testimonial-card__couple">{t.couple}</p>
              </footer>
            </article>
          ))}
        </div>

        {/* Page dots */}
        <div className="testimonials__dots" role="tablist" aria-label="Testimonial page">
          {pages.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot${i === page ? ' testimonials__dot--active' : ''}`}
              onClick={() => setPage(i)}
              role="tab"
              aria-selected={i === page}
              aria-label={`Testimonials page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
