/* =============================================
   Portfolio — Category filter tabs + photo grid
   8 categories: Portraits, Pre Weddings,
   Tamil/Telugu/Brahmin/Christian/Muslim Weddings,
   Engagement
   ============================================= */
import { useState } from 'react'
import './Portfolio.css'
import img1 from '../../assets/wed1.jpg'
import img2 from '../../assets/wed2.jpg'
import img3 from '../../assets/wed3.jpg'
import img4 from '../../assets/wed4.jpg'
import img5 from '../../assets/wed5.jpg'
import img6 from '../../assets/wed6.jpg'
import img7 from '../../assets/pre1.jpg'
import img8 from '../../assets/pre2.jpg'
import img9 from '../../assets/pre3.jpg'
import img10 from '../../assets/pre4.jpg'
import img11 from '../../assets/pre5.jpg'
import img12 from '../../assets/mat1.jpg'
import img13 from '../../assets/rec1.jpg'
import img14 from '../../assets/img14.jpg'
import img15 from '../../assets/img15.jpg'
import img16 from '../../assets/img16.jpg'
import img17 from '../../assets/mat2.jpg'
import img18 from '../../assets/img18.jpg'
import img19 from '../../assets/img19.jpg'
import img20 from '../../assets/img1.jpg'
import img21 from '../../assets/hero5.jpg'
import img22 from '../../assets/img22.jpg'

const categoryPackages = {

wedding: [
{
name: 'Silver Wedding',
price: '₹35,000',
features: [
'1 Professional Photographer',
'Full Day Coverage',
'300+ Edited Photos',
'Color Corrected Images',
'Online Gallery Access',
'All High Resolution Files',
]
},
{
name: 'Gold Wedding',
price: '₹60,000',
features: [
'2 Professional Photographers',
'Full Day Coverage',
'Candid Photography',
'500+ Edited Photos',
'Premium Wedding Album',
'Online Gallery Access',
'Couple Portrait Session',
]
},
{
name: 'Premium Wedding',
price: '₹95,000',
features: [
'Photography + Videography',
'Drone Coverage',
'Cinematic Wedding Film',
'1000+ Edited Photos',
'Luxury Premium Album',
'Couple Portrait Shoot',
'Instagram Reel',
'Priority Delivery',
]
}
],

reception: [
{
name: 'Reception Basic',
price: '₹20,000',
features: [
'Stage Coverage',
'Guest Photography',
'200+ Edited Photos',
'Online Gallery',
'High Resolution Images',
]
},
{
name: 'Reception Premium',
price: '₹40,000',
features: [
'2 Photographers',
'Candid Coverage',
'Highlight Video',
'400+ Edited Photos',
'Family Portraits',
'Priority Delivery',
]
}
],

prewedding: [
{
name: 'Classic Pre Wedding',
price: '₹25,000',
features: [
'Single Outdoor Location',
'3 Hour Shoot',
'50 Edited Photos',
'Couple Portraits',
'Instagram Ready Images',
]
},
{
name: 'Premium Pre Wedding',
price: '₹50,000',
features: [
'Multiple Locations',
'Drone Shots',
'Cinematic Teaser',
'100 Edited Photos',
'Wardrobe Guidance',
'Instagram Reel',
]
}
],

postwedding: [
{
name: 'Post Wedding Shoot',
price: '₹20,000',
features: [
'Outdoor Couple Session',
'40 Edited Photos',
'Creative Portraits',
'High Resolution Images',
'Online Gallery',
]
}
],

engagement: [
{
name: 'Classic Engagement',
price: '₹18,000',
features: [
'Engagement Ceremony Coverage',
'150+ Edited Photos',
'Couple Portrait Session',
'Online Gallery',
'High Resolution Delivery',
]
},
{
name: 'Premium Engagement',
price: '₹35,000',
features: [
'2 Photographers',
'Candid Coverage',
'Highlight Reel',
'300+ Edited Photos',
'Premium Editing',
'Instagram Reel',
]
}
],

corporate: [
{
name: 'Corporate Coverage',
price: '₹15,000 onwards',
features: [
'Conference Coverage',
'Product Launch Events',
'Team Portraits',
'Speaker Coverage',
'Edited Images',
'Fast Delivery',
]
}
],

birthday: [
{
name: 'Birthday Package',
price: '₹12,000',
features: [
'2 Hours Coverage',
'100+ Edited Photos',
'Cake Cutting Coverage',
'Family Portraits',
'Kids Portrait Session',
'Online Gallery',
]
}
],

maternity: [
{
name: 'Maternity Gold',
price: '₹18,000',
features: [
'Indoor / Outdoor Shoot',
'25 Premium Edited Photos',
'Creative Concepts',
'Wardrobe Guidance',
'Couple Portraits',
'Online Gallery',
]
}
],

babyshower: [
{
name: 'Baby Shower Package',
price: '₹15,000',
features: [
'Event Coverage',
'Family Portraits',
'200+ Edited Photos',
'Traditional Moments',
'Online Gallery',
'High Resolution Images',
]
}
]

}


const categories = [
  { id: 'all', label: 'All' },

  { id: 'wedding', label: 'Wedding' },
  { id: 'reception', label: 'Reception' },
  { id: 'prewedding', label: 'Pre Wedding' },
  { id: 'postwedding', label: 'Post Wedding' },
  { id: 'engagement', label: 'Engagement' },

  { id: 'corporate', label: 'Corporate Event' },
  { id: 'birthday', label: 'Birthday' },

  { id: 'maternity', label: 'Maternity' },
  { id: 'babyshower', label: 'Baby Shower' },
]

const categoryDescriptions = {
  all: 'Explore our complete collection of weddings, celebrations and special moments.',

  wedding:
    'Timeless wedding photography capturing emotions, traditions and unforgettable moments.',

  reception:
    'Elegant reception coverage filled with celebrations, candid moments and grand memories.',

  prewedding:
    'Creative pre-wedding sessions that beautifully tell your love story.',

  postwedding:
    'Romantic post-wedding portraits captured without the rush of the wedding day.',

  engagement:
    'Memorable engagement photography celebrating the beginning of a beautiful journey.',

  corporate:
    'Professional corporate event photography for conferences, launches and business gatherings.',

  birthday:
    'Fun and vibrant birthday photography capturing every joyful celebration.',

  maternity:
    'Beautiful maternity portraits celebrating motherhood and new beginnings.',

  babyshower:
    'Heartwarming baby shower photography filled with love, laughter and family moments.'
}
const categoryOffers = [

{
id: 'wedding',
title: 'Wedding Exclusive Offer',
gift: 'Free Premium Photo Frame',
description:
'Book any Wedding Package and receive a complimentary premium framed photograph along with priority editing and delivery.'
},

{
id: 'reception',
title: 'Reception Special Offer',
gift: 'Free Highlight Reel',
description:
'Receive a professionally edited highlight reel showcasing the best moments from your reception celebration.'
},

{
id: 'prewedding',
title: 'Pre Wedding Bonus',
gift: 'Free Instagram Reel',
description:
'Get a cinematic Instagram reel perfect for sharing your pre-wedding memories with friends and family.'
},

{
id: 'postwedding',
title: 'Post Wedding Gift',
gift: 'Free Couple Portrait Print',
description:
'Enjoy a beautifully printed premium portrait from your post-wedding session at no additional cost.'
},

{
id: 'engagement',
title: 'Engagement Complimentary Gift',
gift: 'Free Couple Frame',
description:
'Receive a complimentary framed engagement portrait to preserve your special memories forever.'
},

{
id: 'corporate',
title: 'Corporate Value Add',
gift: 'Free Team Portrait Session',
description:
'Professional team portraits included with corporate event coverage for branding and marketing purposes.'
},

{
id: 'birthday',
title: 'Birthday Celebration Bonus',
gift: 'Free Premium Photo Collage',
description:
'A customized photo collage featuring your best birthday moments delivered in digital format.'
},

{
id: 'maternity',
title: 'Maternity Special Gift',
gift: 'Free Fine Art Print',
description:
'Receive a premium fine art print of your favorite maternity portrait as a keepsake.'
},

{
id: 'babyshower',
title: 'Baby Shower Complimentary Gift',
gift: 'Free Family Portrait Retouch',
description:
'One professionally retouched family portrait delivered in high resolution for printing and sharing.'
}

]


const portfolioItems = [
  { id: 1, cat: 'wedding', src: img1 },
  { id: 2, cat: 'wedding', src: img3 },
  { id: 3, cat: 'wedding', src: img2 },
  { id: 4, cat: 'wedding', src: img4 },
  { id: 5, cat: 'wedding', src: img5 },
  { id: 6, cat: 'wedding', src: img6 },

  { id: 7, cat: 'prewedding', src: img7 },
  { id: 8, cat: 'prewedding', src: img8 },
  { id: 9, cat: 'prewedding', src: img9 },
  { id: 10, cat: 'prewedding', src: img10 },
  { id: 11, cat: 'prewedding', src: img11 },
  { id: 12, cat: 'maternity', src: img12 },
    { id: 17, cat: 'maternity', src: img17 },

  { id: 13, cat: 'postwedding', src: img13 },
  { id: 14, cat: 'postwedding', src: img14 },
  { id: 15, cat: 'postwedding', src: img15 },
  { id: 16, cat: 'postwedding', src: img16 },


  { id: 18, cat: 'prewedding', src: img18 },

  { id: 20, cat: 'corporate', src: img20 },
  { id: 21, cat: 'babyshower', src: img21 },
  { id: 22, cat: 'engagement', src: img22 },
]

export default function Portfolio() {
  const [active,   setActive]   = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'all'
    ? portfolioItems
    : portfolioItems.filter(p => p.cat === active)

  const openLightbox  = (item) => setLightbox(item)
  const closeLightbox = ()     => setLightbox(null)

  const navigate = (dir) => {
    const list = active === 'all' ? portfolioItems : portfolioItems.filter(p => p.cat === active)
    const idx  = list.findIndex(p => p.id === lightbox.id)
    setLightbox(list[(idx + dir + list.length) % list.length])
  }

  return (
    <section className="portfolio" id="portfolio" aria-labelledby="portfolio-heading">

      {/* ---- Header ---- */}
      <div className="portfolio__header">
        <span className="section-label">Our Work</span>
        <h2 className="portfolio__heading" id="portfolio-heading">Portfolio</h2>
        <p className="portfolio__sub">
          From intimate portraits to grand celebrations — every frame tells a story.
        </p>
      </div>

      {/* ---- Filter tabs ---- */}
      <div className="portfolio__filters" role="tablist" aria-label="Portfolio categories">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`portfolio__filter-btn${active === cat.id ? ' portfolio__filter-btn--active' : ''}`}
            onClick={() => setActive(cat.id)}
            role="tab"
            aria-selected={active === cat.id}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="portfolio__category-info">

  <p>{categoryDescriptions[active]}</p>
</div>

      {/* ---- Photo grid ---- */}
      <div className="portfolio__grid" key={active}>
  {filtered.map((item, i) => (
    <button
      key={item.id}
      className="portfolio__item"
      style={{ animationDelay: `${i * 40}ms` }}
      onClick={() => openLightbox(item)}
      aria-label={item.alt}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="portfolio__img"
      />

      <div className="portfolio__overlay">
        <span className="portfolio__overlay-icon">+</span>
      </div>
    </button>
  ))}
</div>
{active !== 'all' && categoryPackages[active] && (

  <section className="portfolio-packages">


<h3 className="portfolio-packages__title">
  {categories.find(c => c.id === active)?.label} Packages
</h3>

<div className="portfolio-packages__scroll">

  {categoryPackages[active].map(pkg => (
    <div className="portfolio-package-card" key={pkg.name}>

      <h4>{pkg.name}</h4>

      <div className="portfolio-package-price">
        {pkg.price}
      </div>

      <ul>
        {pkg.features.map(feature => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

    </div>
  ))}

</div>


  </section>

)}
{active !== 'all' && (
  <section className="offers-section">

    <div className="offers-header">
      <span className="section-label">Special Benefits</span>
      <h2>Complimentary Offers</h2>
    </div>

    <div className="offers-grid">

      {categoryOffers
        .filter((offer) => offer.id === active)
        .map((offer) => (
          <div className="offer-card" key={offer.id}>

            <span className="offer-badge">
              Complimentary
            </span>

            <h3>{offer.title}</h3>

            <div className="offer-gift">
              🎁 {offer.gift}
            </div>

            <p>{offer.description}</p>

          </div>
      ))}

    </div>

  </section>
)}

      {/* ---- Lightbox ---- */}
      {lightbox && (
        <div
          className="portfolio__lightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          onKeyDown={e => {
            if (e.key === 'Escape')     closeLightbox()
            if (e.key === 'ArrowRight') navigate(1)
            if (e.key === 'ArrowLeft')  navigate(-1)
          }}
          tabIndex={-1}
        >
          <button className="portfolio__lb-close" onClick={closeLightbox} aria-label="Close">✕</button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="portfolio__lb-img"
            onClick={e => e.stopPropagation()}
          />
          <button className="portfolio__lb-nav portfolio__lb-nav--prev"
            onClick={e => { e.stopPropagation(); navigate(-1) }} aria-label="Previous">‹</button>
          <button className="portfolio__lb-nav portfolio__lb-nav--next"
            onClick={e => { e.stopPropagation(); navigate(1) }}  aria-label="Next">›</button>
        </div>
      )}
    </section>
  )
}
