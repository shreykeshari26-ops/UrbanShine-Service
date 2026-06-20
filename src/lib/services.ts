export type ServiceCategory = 'Commercial Services' | 'Residential Services' | 'Specialized Pressure Services';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDescription: string;
  fullDescription: string;
  checklist: string[];
  mockPricing: string;
  highlight?: boolean;
}

export const servicesData: ServiceItem[] = [
  // Commercial Services
  {
    id: 'corporate-office',
    category: 'Commercial Services',
    title: 'Corporate Office Deep Cleaning',
    shortDescription: 'Professional cleaning to maintain a productive and healthy environment for your team.',
    fullDescription: 'Our Corporate Office Deep Cleaning service ensures your workspace is spotless, sanitary, and welcoming for both employees and clients. We go beyond surface cleaning to sanitize high-touch areas, deep clean carpets, and ensure all restrooms and breakrooms are pristine.',
    checklist: [
      'Disinfection of high-touch surfaces (doorknobs, elevator buttons, shared equipment)',
      'Deep carpet extraction and hard floor polishing',
      'Comprehensive breakroom and restroom sanitization',
      'Dusting and wiping of all workstations and monitors',
      'Trash removal and recycling management'
    ],
    mockPricing: 'Starting from $250 / visit (depending on sq ft)',
    highlight: true,
  },
  {
    id: 'restaurant-kitchen',
    category: 'Commercial Services',
    title: 'Restaurant Kitchen Sanitization',
    shortDescription: 'Rigorous degreasing and sanitization for commercial kitchens to meet health standards.',
    fullDescription: 'Keep your kitchen safe and compliant with our specialized restaurant sanitization services. We tackle stubborn grease, sanitize food prep areas, and clean exhaust hoods to reduce fire risks and maintain the highest hygiene standards.',
    checklist: [
      'Exhaust hood and filter degreasing',
      'Appliance interior and exterior deep cleaning (ovens, fryers, grills)',
      'Floor scrubbing and drain cleaning',
      'Sanitization of all food preparation surfaces',
      'Walk-in cooler and freezer deep cleaning'
    ],
    mockPricing: 'Starting from $400 / deep clean',
  },
  {
    id: 'post-construction',
    category: 'Commercial Services',
    title: 'Post-Construction Cleanup',
    shortDescription: 'Thorough removal of dust, debris, and residues after renovation or new builds.',
    fullDescription: 'Turn your construction site into a ready-to-use space. Our post-construction cleanup removes all traces of sawdust, drywall dust, paint splatters, and construction debris so you can unveil your new property flawlessly.',
    checklist: [
      'Comprehensive dust removal from all surfaces, walls, and ceilings',
      'Window cleaning, including scraping of paint and stickers',
      'Deep scrubbing and sealing of newly laid floors',
      'Fixture and hardware polishing',
      'Final detail cleaning for immediate occupancy'
    ],
    mockPricing: 'Starting from $0.20 / sq ft',
  },
  {
    id: 'industrial-factory',
    category: 'Commercial Services',
    title: 'Industrial & Factory Operations',
    shortDescription: 'Heavy-duty cleaning for warehouses, factories, and industrial facilities.',
    fullDescription: 'We provide robust cleaning solutions tailored for industrial environments. From concrete floor scrubbing to high-ceiling dusting, we ensure your facility is safe, clean, and optimized for smooth operations.',
    checklist: [
      'Concrete floor scrubbing and degreasing',
      'High-level dusting of pipes, rafters, and lighting',
      'Machinery exterior wiping and degreasing',
      'Industrial waste removal and floor sweeping',
      'Restroom and locker room deep sanitization'
    ],
    mockPricing: 'Custom Quote Required',
  },
  {
    id: 'retail-stores',
    category: 'Commercial Services',
    title: 'Retail Stores & Showrooms',
    shortDescription: 'Immaculate presentation cleaning for retail spaces and showrooms to impress customers.',
    fullDescription: 'First impressions matter. Our retail cleaning service guarantees gleaming floors, spotless windows, and dust-free displays, ensuring your products shine and your customers enjoy a premium shopping experience.',
    checklist: [
      'Streak-free interior and exterior window cleaning',
      'Hard floor sweeping, mopping, and high-gloss buffing',
      'Display case and shelving dusting and polishing',
      'Fitting room deep cleaning and mirror polishing',
      'Entrance and vestibule detailing'
    ],
    mockPricing: 'Starting from $150 / visit',
  },
  {
    id: 'logistics-warehouse',
    category: 'Commercial Services',
    title: 'Logistics & Warehouse Upkeep',
    shortDescription: 'Large-scale sweeping, scrubbing, and organizational cleaning for logistics hubs.',
    fullDescription: 'Maintain a safe and efficient warehouse environment. Our team utilizes industrial-grade sweepers and scrubbers to remove dirt, tire marks, and debris from expansive logistics centers.',
    checklist: [
      'Large-area floor sweeping and auto-scrubbing',
      'Pallet racking dusting and debris removal',
      'Loading dock deep cleaning and pressure washing',
      'Office and break area sanitization within the warehouse',
      'Spill cleanup and hazard removal'
    ],
    mockPricing: 'Starting from $0.10 / sq ft',
  },

  // Residential Services
  {
    id: 'move-in-out',
    category: 'Residential Services',
    title: 'Move-In/Move-Out Deep Clean',
    shortDescription: 'Get your full deposit back or step into a spotless new home. We handle the heavy lifting.',
    fullDescription: 'Transitioning between homes is stressful enough. Let us handle the cleaning. We ensure the property you are leaving is spotless for the next occupants, or the new home you are moving into is perfectly sanitized and fresh.',
    checklist: [
      'Inside and outside of all cabinets and drawers',
      'Deep cleaning of all kitchen appliances (oven, fridge, microwave)',
      'Baseboard, door frame, and switch plate detailing',
      'Thorough bathroom scrubbing and sanitization',
      'Floor vacuuming and wet mopping throughout'
    ],
    mockPricing: 'Starting from $200 (varies by bedrooms)',
  },
  {
    id: 'recurring-home',
    category: 'Residential Services',
    title: 'Recurring Premium Home Upkeep',
    shortDescription: 'Standard cleaning to keep your home fresh, tidy, and welcoming week after week.',
    fullDescription: 'Enjoy a consistently clean home with our recurring service. Available weekly, bi-weekly, or monthly, this service covers all the essential cleaning tasks to keep your living space comfortable and pristine.',
    checklist: [
      'Dusting of all accessible surfaces and furniture',
      'Vacuuming carpets and sweeping/mopping hard floors',
      'Kitchen counter, sink, and stovetop wipe-down',
      'Bathroom toilet, tub, shower, and mirror cleaning',
      'Emptying all interior trash bins'
    ],
    mockPricing: 'Starting from $120 / visit',
    highlight: true,
  },
  {
    id: 'carpet-sofa',
    category: 'Residential Services',
    title: 'Carpet & Sofa Deep Shampooing',
    shortDescription: 'Revitalize your carpets and upholstery with deep extraction that removes stains and odors.',
    fullDescription: 'Breathe new life into your fabrics. Our deep shampooing and hot water extraction process removes embedded dirt, stubborn stains, allergens, and pet odors from carpets, rugs, and upholstered furniture.',
    checklist: [
      'Pre-treatment of heavily soiled areas and spots',
      'Hot water extraction (steam cleaning) of carpets',
      'Deep shampooing of sofas, loveseats, and armchairs',
      'Odor neutralizer application',
      'Fabric grooming for rapid drying'
    ],
    mockPricing: 'Starting from $80 / room or $100 / sofa',
  },
  {
    id: 'luxury-villa',
    category: 'Residential Services',
    title: 'Luxury Villa Care',
    shortDescription: 'Meticulous, white-glove cleaning tailored for expansive and high-end residential properties.',
    fullDescription: 'Our Luxury Villa Care service provides elite, discreet, and highly detailed cleaning for premium properties. We handle delicate surfaces, high-end appliances, and expensive fixtures with the utmost care and specialized products.',
    checklist: [
      'Careful dusting of delicate art, chandeliers, and antiques',
      'Polishing of marble, granite, and premium stone surfaces',
      'Detailed care for high-end wood finishes',
      'Comprehensive patio and outdoor kitchen wipe-down',
      'Maid-style bedroom making and linen changing'
    ],
    mockPricing: 'Starting from $400 / visit',
  },
  {
    id: 'window-glass',
    category: 'Residential Services',
    title: 'Window & Glass Detailing',
    shortDescription: 'Crystal clear, streak-free window cleaning for interior and exterior glass surfaces.',
    fullDescription: 'Let the light in with our professional window detailing. We remove dirt, smudges, hard water stains, and grime from all your glass surfaces, ensuring a perfectly clear and sparkling view.',
    checklist: [
      'Interior and exterior glass washing and squeegeeing',
      'Window sill and track vacuuming and wiping',
      'Screen removal, washing, and replacement',
      'Glass door and mirror polishing',
      'Hard water stain treatment (if necessary)'
    ],
    mockPricing: 'Starting from $10 / windowpane',
  },

  // Specialized Pressure Services
  {
    id: 'exterior-jet-washing',
    category: 'Specialized Pressure Services',

    title: 'High-PSI Exterior Jet Washing',
    shortDescription: 'Powerful pressure washing to restore driveways, patios, and exterior walls.',
    fullDescription: 'Eradicate years of built-up grime, mold, mildew, and dirt from your property\'s exterior. Our high-PSI jet washing restores concrete, brick, stone, and siding to their original brilliance.',
    checklist: [
      'Driveway and walkway pressure washing',
      'Patio and deck deep cleaning',
      'Exterior siding and brick soft-washing',
      'Fence and retaining wall restoration',
      'Mold and algae treatment application'
    ],
    mockPricing: 'Starting from $150',
    highlight: true,
  },
  {
    id: 'temp-steam',
    category: 'Specialized Pressure Services',
    title: 'High-Temp Steam Sanitization',
    shortDescription: 'Chemical-free, ultra-high temperature steam cleaning to kill 99.9% of bacteria and viruses.',
    fullDescription: 'Achieve the highest level of sanitation without harsh chemicals. Our high-temperature steam cleaning effectively sanitizes floors, grout, mattresses, and bathroom fixtures, instantly neutralizing pathogens.',
    checklist: [
      'Tile and grout deep steam cleaning',
      'Mattress steam sanitization and allergen reduction',
      'Bathroom fixture and shower glass steaming',
      'Kitchen appliance and counter sterilization',
      'Hardwood floor gentle steam mopping'
    ],
    mockPricing: 'Starting from $180',
  },
  {
    id: 'hvac-duct',
    category: 'Specialized Pressure Services',
    title: 'HVAC & Air Duct Disinfection',
    shortDescription: 'Improve indoor air quality by clearing dust and debris from your ventilation systems.',
    fullDescription: 'Breathe easier with clean air ducts. Our specialized equipment reaches deep into your HVAC system to remove accumulated dust, pet dander, and mold spores, significantly improving your indoor air quality and system efficiency.',
    checklist: [
      'Negative pressure vacuuming of all ductwork',
      'Register and grill removal and washing',
      'Air handler and coil wiping',
      'EPA-approved antimicrobial fogging',
      'System performance check post-cleaning'
    ],
    mockPricing: 'Starting from $350 / system',
  },
  {
    id: 'high-rise-facade',
    category: 'Specialized Pressure Services',
    title: 'High-Rise Facade Restoration',
    shortDescription: 'Specialized access cleaning for tall buildings and complex exterior architecture.',
    fullDescription: 'Our certified rope access and lift operators safely clean the exteriors of multi-story buildings. We provide comprehensive facade washing and window cleaning for high-rise residential and commercial properties.',
    checklist: [
      'Rope-access exterior window squeegeeing',
      'Facade pressure washing and stain removal',
      'Bird deterrent installation and cleanup',
      'Awning and canopy deep cleaning',
      'Post-construction high-rise glass detailing'
    ],
    mockPricing: 'Custom Quote Required',
  }
];

export const getServicesByCategory = (category: ServiceCategory) => {
  return servicesData.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return servicesData.find(service => service.id === id);
};
