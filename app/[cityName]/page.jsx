import HomePage from "@/components/HomePage";
import { notFound } from "next/navigation";

const validCities = [
  "delhi", "mumbai", "bangalore", "bengaluru", "hyderabad", "chennai", "kolkata", 
  "pune", "jaipur", "ahmedabad", "surat", "lucknow", "kanpur", "nagpur", 
  "indore", "thane", "bhopal", "visakhapatnam", "patna", "vadodara", 
  "ghaziabad", "ludhiana", "agra", "nashik", "faridabad", "meerut", "rajkot", 
  "varanasi", "srinagar", "aurangabad", "dhanbad", "amritsar", "navi-mumbai", 
  "allahabad", "prayagraj", "howrah", "ranchi", "gwalior", "jabalpur", 
  "coimbatore", "vijayawada", "jodhpur", "madurai", "raipur", "kota", 
  "guwahati", "chandigarh", "solapur", "hubballi", "dharwad", "bareilly", 
  "moradabad", "mysore", "mysuru", "gurgaon", "gurugram", "aligarh", "jalandhar", 
  "tiruchirappalli", "bhubaneswar", "salem", "warangal", "thiruvananthapuram", 
  "bhiwandi", "saharanpur", "guntur", "amravati", "bikaner", "noida", 
  "jamshedpur", "bhilai", "cuttack", "firozabad", "kochi", "nellore", 
  "bhavnagar", "dehradun", "durgapur", "asansol", "rourkela", "nanded", 
  "kolhapur", "ajmer", "akola", "gulbarga", "jamnagar", "ujjain", "loni", 
  "siliguri", "jhansi", "ulhasnagar", "jammu", "mangalore", "mangaluru", 
  "erode", "belgaum", "ambattur", "tirunelveli", "malegaon", "gaya", 
  "jalgaon", "udaipur", "maheshtala", "tirupur", "davangere", "kozhikode", 
  "akbarpur", "nizamabad", "parbhani", "tumkur", "hisar", "ozhukarai", 
  "bihar-sharif", "panipat", "darbhanga", "bally", "aizawl", "dewas", 
  "ichalkaranji", "karnal", "bathinda", "jalna", "eluru", "kirari-suleman-nagar", 
  "barasat", "purnia", "satna", "mau", "sonipat", "farrukhabad", "sagar", 
  "durg", "imphal", "ratlam", "hapur", "arah", "karimnagar", 
  "anantapur", "etawah", "ambernath", "north-dumdum", "bharatpur", "begusarai", 
  "new-delhi", "gandhidham", "baranagar", "tiruvottiyur", "pondicherry", 
  "katni", "secunderabad", "naihati", "yamunanagar", "bidhannagar", "pallavaram", 
  "bidar", "munger", "panchkula", "burhanpur", "raurkela-industrial-township", 
  "kharagpur", "dindigul", "gandhinagar", "hospet", "nangloi-jat", "malda", 
  "ongole", "deoghar", "chapra", "haldia", "khandwa", "nandyal", "chittoor", 
  "morena", "amroha", "anand", "bhind", "bhalswa-jahangir-pur", "madhyamgram", 
  "bhiwani", "navi-mumbai-panvel-raigad", "baharampur", "ambala", "morvi", 
  "fatehpur", "rae-bareli", "khora", "bhusawal", "orai", "bahraich", "vellore", 
  "mahsana", "sambhal", "raiganj", "sirsa", "danapur", "serampore", "sultan-pur-majra", 
  "guntakal", "bhadrak", "chinsurah", "shivpuri", "surendranagar-dudhrej", 
  "unnao", "hugli-chinsurah", "alappuzha", "kottayam", "shimla", "kakinada","nuh",
  "connaught-place", "dwarka", "rohini", "pitampura", "janakpuri", "saket", "vasant-kunj", 
  "hauz-khas", "defence-colony", "greater-kailash", "lajpat-nagar", "nehru-place", "mayur-vihar",
  "bandra", "andheri", "juhu", "powai", "dadar", "borivali", "goregaon", "malad", 
  "santacruz", "worli", "lower-parel", "chembur", "ghatkopar", "mulund", "colaba",
  "whitefield", "indiranagar", "koramangala", "jayanagar", "marathahalli", "electronic-city", 
  "hsr-layout", "hebbal", "banashankari", "malleswaram", "rajajinagar", "yelahanka", "bellandur",
  "gachibowli", "hitech-city", "jubilee-hills", "banjara-hills", "kukatpally", "madhapur",
  "kondapur", "begumpet", "ameerpet", "dilsukhnagar",
  "adyar", "anna-nagar", "t-nagar", "velachery", "mylapore", "nungambakkam", "guindy", "tambaram",
  "salt-lake", "new-town", "park-street", "ballygunge", "dum-dum", "lake-town",
  "wakad", "hinjewadi", "baner", "kothrud", "viman-nagar", "hadapsar", "magarpatta", "pimpri-chinchwad",
  "manesar", "sohna-road", "dlf-cyber-city", "golf-course-road", "sector-62-noida", "sector-18-noida",
  "gomti-nagar", "hazratganj", "aliganj", "indira-nagar",
  "bodakdev", "satellite", "sg-highway", "maninagar", "thaltej"
];

export async function generateMetadata({ params }) {
  const { cityName } = await params;

  if (!cityName || !validCities.includes(cityName.toLowerCase())) {
    return {
      title: "Page Not Found",
    };
  }

  const formattedCity = cityName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Digital Marketing Agency in ${formattedCity} | SEO, Ads & Web Design`,
    description: `Looking for the best digital marketing agency in ${formattedCity}? Digital Synk offers expert SEO, PPC, Social Media, and Web Development services to grow your business in ${formattedCity}.`,
    alternates: {
      canonical: `https://digitalsynk.com/${cityName}`,
    },
  };
}

export default async function CityPage({ params }) {
  const { cityName } = await params;

  if (!cityName) return null;

  if (!validCities.includes(cityName.toLowerCase())) {
    notFound();
  }
  
  const city = cityName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return <HomePage city={city} />;
}
