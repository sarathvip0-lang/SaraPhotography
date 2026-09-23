import { useState } from 'react'
import './Packages.css'

const packageCategories = [

{
id: 'wedding',
title: 'Wedding',
packages: [
{
name: 'Silver Wedding',
price: '₹35,000',
features: [
'1 Professional Photographer',
'Full Day Coverage',
'300+ Edited Photos',
'Color Correction',
'Traditional Photography',
'Bride & Groom Portraits',
'Family Group Photos',
'Online Gallery Access'
]
},
{
name: 'Gold Wedding',
price: '₹75,000',
features: [
'2 Professional Photographers',
'Full Day Coverage',
'Candid Photography',
'600+ Edited Photos',
'Premium Wedding Album',
'Bride & Groom Couple Shoot',
'Family Portrait Session',
'Priority Delivery',
'Instagram Highlights'
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
'Luxury Wedding Album',
'Bridal Portrait Session',
'Reception Coverage',
'Instagram Reel',
'Same Day Highlights',
'Priority Premium Delivery'
]
}
]
},

{
id: 'reception',
title: 'Reception',
packages: [
{
name: 'Reception Basic',
price: '₹20,000',
features: [
'Stage Coverage',
'Guest Photography',
'200+ Edited Photos',
'Family Portraits',
'Color Corrected Images',
'Online Gallery'
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
'Couple Portrait Session',
'Family Group Photos',
'Priority Delivery',
'Instagram Reel'
]
}
]
},

{
id: 'prewedding',
title: 'Pre Wedding',
packages: [
{
name: 'Classic Pre Wedding',
price: '₹25,000',
features: [
'Single Outdoor Location',
'3 Hour Shoot',
'50 Edited Photos',
'Couple Portraits',
'Creative Poses',
'Social Media Ready Images'
]
},
{
name: 'Premium Pre Wedding',
price: '₹50,000',
features: [
'Multiple Locations',
'Drone Coverage',
'Cinematic Teaser',
'100+ Edited Photos',
'Wardrobe Guidance',
'Creative Concepts',
'Instagram Reel',
'Premium Retouching'
]
}
]
},

{
id: 'postwedding',
title: 'Post Wedding',
packages: [
{
name: 'Post Wedding Premium',
price: '₹20,000',
features: [
'Outdoor Couple Shoot',
'Creative Portrait Session',
'40+ Edited Photos',
'Premium Retouching',
'Online Gallery',
'High Resolution Delivery'
]
}
]
},

{
id: 'engagement',
title: 'Engagement',
packages: [
{
name: 'Classic Engagement',
price: '₹18,000',
features: [
'Engagement Coverage',
'150+ Edited Photos',
'Couple Portrait Session',
'Online Gallery',
'Family Group Photos',
'High Resolution Delivery'
]
},
{
name: 'Premium Engagement',
price: '₹35,000',
features: [
'2 Photographers',
'Candid Photography',
'300+ Edited Photos',
'Highlight Reel',
'Premium Editing',
'Couple Shoot',
'Instagram Reel',
'Priority Delivery'
]
}
]
},

{
id: 'corporate',
title: 'Corporate Event',
packages: [
{
name: 'Corporate Coverage',
price: '₹15,000 onwards',
features: [
'Conference Coverage',
'Product Launch Coverage',
'Team Portraits',
'Speaker Photography',
'Edited Images',
'Branding Photos',
'Fast Delivery'
]
}
]
},

{
id: 'birthday',
title: 'Birthday',
packages: [
{
name: 'Birthday Celebration',
price: '₹12,000',
features: [
'2 Hours Coverage',
'100+ Edited Photos',
'Cake Cutting Coverage',
'Family Portraits',
'Kids Portrait Session',
'Event Highlights',
'Online Gallery'
]
}
]
},

{
id: 'maternity',
title: 'Maternity',
packages: [
{
name: 'Maternity Gold',
price: '₹18,000',
features: [
'Indoor / Outdoor Shoot',
'25 Premium Edited Photos',
'Creative Concepts',
'Wardrobe Guidance',
'Couple Portraits',
'Fine Art Editing',
'Online Gallery'
]
}
]
},

{
id: 'babyshower',
title: 'Baby Shower',
packages: [
{
name: 'Baby Shower Premium',
price: '₹15,000',
features: [
'Event Coverage',
'Family Portraits',
'200+ Edited Photos',
'Traditional Moments',
'Decoration Coverage',
'Online Gallery',
'High Resolution Images'
]
}
]
}

]


export default function Packages() {
const [openCategory, setOpenCategory] = useState(null)

const toggleCategory = (id) => {
setOpenCategory(openCategory === id ? null : id)
}

return ( <section className="packages-section" id="packages"> <div className="packages-container">


    <div className="section-heading">
      <span className="section-heading__eyebrow">Pricing</span>
      <h2 className="section-heading__title">Photography Packages</h2>
    </div>

    {packageCategories.map((category) => (
      <div key={category.id} className="package-category">

        <button
          className="package-header"
          onClick={() => toggleCategory(category.id)}
        >
          <span>{category.title}</span>

          <span className="package-icon">
            {openCategory === category.id ? '−' : '+'}
          </span>
        </button>

        {openCategory === category.id && (
          <div className="package-content">

            {category.packages.map((pkg) => (
              <div className="package-card" key={pkg.name}>

                <div className="package-card__top">
                  <h3>{pkg.name}</h3>
                  <span className="package-price">
                    {pkg.price}
                  </span>
                </div>

                <ul className="package-features">
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

              </div>
            ))}

          </div>
        )}

      </div>
    ))}

  </div>
</section>


)
}
