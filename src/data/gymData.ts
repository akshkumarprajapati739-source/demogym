// ==========================================
// DEMO FITNESS CLUB - CONFIGURATION & DATA
// ==========================================

import heroImg from '../assets/images/hero_gym_dark_1791290346305.jpg';
import aboutImg from '../assets/images/about_gym_facility_1791290367693.jpg';
import trainerStrengthImg from '../assets/images/trainer_strength_coach_1791290380393.jpg';
import workoutActionImg from '../assets/images/gym_workout_action_1791290393705.jpg';
import dumbbellsImg from '../assets/images/gallery_weights_dumbbells_1791290439779.jpg';
import trainerWomanImg from '../assets/images/trainer_woman_cardio_1791290457930.jpg';
import treadmillsImg from '../assets/images/gallery_cardio_treadmills_1791290473388.jpg';
import trainerFunctionalImg from '../assets/images/trainer_functional_coach_1791290482852.jpg';

// <!-- EDIT BUSINESS INFORMATION HERE -->
export const BUSINESS_CONFIG = {
  brandName: "DEMO FITNESS CLUB",
  shortName: "DFC",
  tagline: "BUILD YOUR BODY. BUILD YOUR MIND.",
  heroHeading: "UNLEASH YOUR INNER STRENGTH",
  heroSubheading: "Train harder. Get stronger. Become the best version of yourself.",
  location: "Demo Fitness Club, 404 Athlete Boulevard, Metro Fitness District (Sample Address)",
  phoneDisplay: "+1 (800) 555-DEMO (Sample)",
  phoneRaw: "+18005553366",
  email: "contact@demofitnessclub.example (Sample)",
  operatingHours: {
    weekdays: "Monday – Saturday: 6:00 AM – 10:00 PM",
    sunday: "Sunday: 8:00 AM – 6:00 PM"
  },
  copyright: `© ${new Date().getFullYear()} Demo Fitness Club. All Rights Reserved.`
};

// <!-- EDIT WHATSAPP NUMBER HERE -->
// Configure international phone number with country code without + or spaces
export const WHATSAPP_NUMBER = "18005553366";
export const WHATSAPP_DEFAULT_MESSAGE = "Hello! I am interested in joining Demo Fitness Club. Please share membership details.";

// <!-- EDIT SOCIAL LINKS HERE -->
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/demofitnessclub",
  facebook: "https://facebook.com/demofitnessclub",
  youtube: "https://youtube.com/demofitnessclub",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`
};

export const IMAGES = {
  hero: heroImg,
  about: aboutImg,
  trainerStrength: trainerStrengthImg,
  workoutAction: workoutActionImg,
  dumbbells: dumbbellsImg,
  trainerWoman: trainerWomanImg,
  treadmills: treadmillsImg,
  trainerFunctional: trainerFunctionalImg
};

// HERO STATISTICS
export const HERO_STATS = [
  { value: 10, suffix: "+", label: "Years Experience", description: "Pioneering athletic training excellence" },
  { value: 2500, suffix: "+", label: "Active Members", description: "Dedicated community chasing results" },
  { value: 15, suffix: "+", label: "Expert Trainers", description: "Certified coaches across strength & mobility" },
  { value: 50, suffix: "+", label: "Weekly Classes", description: "HIIT, Powerlifting, Mobility & Conditioning" }
];

// WHY CHOOSE US (6 items)
export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Premium Equipment",
    description: "Modern strength, power cages, selectorized machines and Olympic platforms engineered for peak performance.",
    icon: "Dumbbell"
  },
  {
    number: "02",
    title: "Expert Trainers",
    description: "Professional certified trainers who help you master biomechanics, avoid injury, and maximize progressive overload.",
    icon: "Award"
  },
  {
    number: "03",
    title: "Personalized Plans",
    description: "Workout periodization and nutrition roadmaps calibrated around your specific body composition and goals.",
    icon: "Target"
  },
  {
    number: "04",
    title: "Modern Environment",
    description: "A motivating, energetic, acoustic-treated, and ultra-hygienic fitness environment built for focused output.",
    icon: "Flame"
  },
  {
    number: "05",
    title: "Flexible Timings",
    description: "Extended access hours from dawn to night designed to fit seamless executive, student, and athlete schedules.",
    icon: "Clock"
  },
  {
    number: "06",
    title: "Real Results",
    description: "No gimmicks or vanity shortcuts. Focus on scientific consistency, metabolic health, and sustainable power.",
    icon: "TrendingUp"
  }
];

// FITNESS PROGRAMS (6 programs)
export interface ProgramItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  intensity: string;
  duration: string;
  focus: string[];
}

export const PROGRAMS: ProgramItem[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    tagline: "Power & Biomechanical Mastery",
    description: "Build foundational power, compound lift proficiency, and explosive functional athletic performance.",
    image: workoutActionImg,
    intensity: "High",
    duration: "60 Mins",
    focus: ["Squat & Deadlift Technique", "Barbell Mechanics", "CNS Adaptation"]
  },
  {
    id: "weight-loss",
    name: "Weight Loss",
    tagline: "Metabolic Conditioning",
    description: "Structured high-energy workouts focused on fat oxidation, endurance stamina, and cardiovascular longevity.",
    image: treadmillsImg,
    intensity: "High",
    duration: "45 Mins",
    focus: ["HIIT Intervals", "Caloric Deficit Protocol", "EPOC Elevation"]
  },
  {
    id: "muscle-building",
    name: "Muscle Building",
    tagline: "Hypertrophy & Symmetry",
    description: "Progressive volume training programs engineered for clean muscular density, fiber recruitment, and definition.",
    image: dumbbellsImg,
    intensity: "Medium - High",
    duration: "60 Mins",
    focus: ["Hypertrophy Rep Ranges", "Time Under Tension", "Isolation & Compound Splits"]
  },
  {
    id: "cardio-training",
    name: "Cardio Training",
    tagline: "Aerobic Capacity & Heart Health",
    description: "Improve VO2 max, stamina, lung capacity, and cardiovascular resilience on state-of-the-art turf and equipment.",
    image: treadmillsImg,
    intensity: "Adaptive",
    duration: "45 Mins",
    focus: ["Zone 2 Base Building", "Sled Pushes & Rower Sprints", "Stamina Drills"]
  },
  {
    id: "functional-training",
    name: "Functional Training",
    tagline: "Agility, Balance & Kinetic Flow",
    description: "Improve multi-planar movement, core stability, joint health, and real-world athletic durability.",
    image: trainerFunctionalImg,
    intensity: "Medium",
    duration: "50 Mins",
    focus: ["Kettlebell Complexes", "Rotational Power", "Injury Prevention"]
  },
  {
    id: "personal-training",
    name: "Personal Training",
    tagline: "1-on-1 Dedicated Coaching",
    description: "Exclusive customized guidance, real-time form correction, and accountable progression with an elite trainer.",
    image: trainerStrengthImg,
    intensity: "Customized",
    duration: "60 Mins",
    focus: ["Individual Assessment", "Tailored Nutrition", "Direct Accountability"]
  }
];

// TRAINERS (Sample Profiles)
export interface TrainerItem {
  id: string;
  name: string;
  position: string;
  bio: string;
  specialty: string;
  image: string;
  experience: string;
  instagram: string;
  linkedin: string;
}

export const TRAINERS: TrainerItem[] = [
  {
    id: "alex-morgan",
    name: "Alex Morgan",
    position: "Head Strength Coach",
    bio: "Former collegiate athlete with 10+ years coaching Olympic weightlifting and strength conditioning.",
    specialty: "Powerlifting & Hypertrophy",
    image: trainerStrengthImg,
    experience: "10+ Years",
    instagram: "#",
    linkedin: "#"
  },
  {
    id: "ryan-carter",
    name: "Ryan Carter",
    position: "Fitness & Conditioning Coach",
    bio: "Metabolic conditioning specialist focused on explosive cardio endurance and athletic transformation.",
    specialty: "HIIT & Athletic Endurance",
    image: workoutActionImg,
    experience: "7+ Years",
    instagram: "#",
    linkedin: "#"
  },
  {
    id: "mia-johnson",
    name: "Mia Johnson",
    position: "Personal Trainer & Mobility",
    bio: "Kinesthesiology graduate dedicated to body recomposition, biomechanics, and core stability.",
    specialty: "Functional Movement & Body Sculpting",
    image: trainerWomanImg,
    experience: "6+ Years",
    instagram: "#",
    linkedin: "#"
  },
  {
    id: "daniel-smith",
    name: "Daniel Smith",
    position: "Functional Training Coach",
    bio: "Specializes in multi-planar movement, kettlebells, and bulletproofing joints for lifelong mobility.",
    specialty: "Agility & Injury Prevention",
    image: trainerFunctionalImg,
    experience: "8+ Years",
    instagram: "#",
    linkedin: "#"
  }
];

// <!-- EDIT MEMBERSHIP PRICES HERE -->
export interface MembershipPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  currency: string;
  popular?: boolean;
  features: string[];
  buttonText: string;
  description: string;
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "basic",
    name: "BASIC",
    monthlyPrice: 999,
    currency: "₹",
    features: [
      "Full Gym Floor Access",
      "Dedicated Cardio Zone",
      "Locker & Shower Access",
      "Basic Fitness Assessment",
      "Free High-Speed Wi-Fi"
    ],
    buttonText: "GET STARTED",
    description: "Essential access for disciplined individuals seeking focused workout sessions."
  },
  {
    id: "pro",
    name: "PRO",
    monthlyPrice: 1999,
    currency: "₹",
    popular: true,
    features: [
      "All Basic Inclusions",
      "Full Strength & Heavy Barbell Zone",
      "Comprehensive Biometric Assessment",
      "Unlimited Group Fitness Classes",
      "Dedicated Trainer Floor Guidance",
      "Guest Pass (1 per month)"
    ],
    buttonText: "CHOOSE PRO",
    description: "The premier tier for serious fitness enthusiasts striving for accelerated progress."
  },
  {
    id: "elite",
    name: "ELITE",
    monthlyPrice: 3499,
    currency: "₹",
    features: [
      "All Pro Inclusions",
      "4 One-on-One Personal Training Sessions/mo",
      "Custom Macro & Nutrition Meal Plan",
      "Monthly 3D Body Composition Scan",
      "Sauna & Recovery Lounge Access",
      "24/7 Priority Coach Messaging Support"
    ],
    buttonText: "GO ELITE",
    description: "The complete transformation package with personal mentorship and recovery suite."
  }
];

// GALLERY ITEMS (8 items)
export const GALLERY_ITEMS = [
  { id: 1, title: "Heavy Dumbbell Arsenal", category: "Equipment", image: dumbbellsImg, tag: "Free Weights" },
  { id: 2, title: "Modern Strength Racks", category: "Strength", image: aboutImg, tag: "Olympic Platforms" },
  { id: 3, title: "Power Barbell Platform", category: "Strength", image: workoutActionImg, tag: "Deadlifts" },
  { id: 4, title: "High-Tech Treadmills & Cardio", category: "Cardio", image: treadmillsImg, tag: "Aerobic Zone" },
  { id: 5, title: "Atmospheric Training Floor", category: "Facility", image: heroImg, tag: "Club Floor" },
  { id: 6, title: "Coach Guided Technique", category: "Coaching", image: trainerStrengthImg, tag: "1-on-1 Form" },
  { id: 7, title: "Athletic Conditioning Area", category: "Functional", image: trainerFunctionalImg, tag: "Kettlebells" },
  { id: 8, title: "Precision Performance Lab", category: "Coaching", image: trainerWomanImg, tag: "Mobility & Core" }
];

// TESTIMONIALS (Sample Reviews)
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Vikram Rathore",
    role: "Member for 2 Years",
    rating: 5,
    quote: "Demo Fitness Club gives me the motivation and structure I needed to stay consistent. The dark atmospheric lighting and elite equipment make every workout feel like game day.",
    metric: "-14kg Fat Lost · Deadlift PR: 180kg"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Member for 14 Months",
    rating: 5,
    quote: "The trainers genuinely understand anatomy and progression. I went from suffering lower back pain to deadlifting with zero discomfort. An absolute top-tier environment.",
    metric: "Squat +40kg · Improved Mobility"
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Member for 9 Months",
    rating: 5,
    quote: "I've tried multiple gyms in the city, but none match the hygiene, discipline, and community of DFC. The equipment is always spotlessly maintained.",
    metric: "Consistent 5 Days/Week"
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Member for 1 Year",
    rating: 5,
    quote: "The Pro tier group classes are intense and energizing. Coaches correct your form on the spot instead of letting you get away with sloppy mechanics.",
    metric: "VO2 Max +24% · 10k Run PR"
  }
];

// PROGRESS METRICS
export const PROGRESS_METRICS = [
  { title: "Strength", percentage: 85, description: "Barbell compound power & motor unit recruitment" },
  { title: "Endurance", percentage: 72, description: "Cardiorespiratory stamina & recovery kinetics" },
  { title: "Consistency", percentage: 92, description: "Session adherence rate among active members" },
  { title: "Mobility", percentage: 68, description: "Full joint range of motion & injury resilience" }
];
