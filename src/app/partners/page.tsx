"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const partnersData = [
  {
    id: "r2r",
    name: "Root to Rise Microschool",
    logoUrl: "/r2r.png",
    description: `Root to Rise Microschool is a holistic educational community committed to raising conscious, confident, and connected young people. We exist to reimagine education by centering cultural wisdom, wellness, creativity, and community throughout the entire learning journey.
    Our mission is to nurture rooted children who rise into their fullest potential— grounded in identity, guided by purpose, and equipped for liberation. We believe in the transformative power of ancestral wisdom, radical self-love, and collective care. Our approach to learning is shaped by the values families have long yearned for: equity, autonomy, healing, joy, and a profound commitment to culture, community care, and liberation.
    At Root to Rise, we create brave and affirming learning spaces where children —and their families—can reconnect with their innate brilliance and co-create new paradigms of education. We speak in a voice that is nurturing, grounded, and affirming. We walk beside our families with compassion and integrity, honoring each child as a whole being—mind, body, heart, and spirit.
    We proudly serve families seeking an alternative to traditional schooling, especially multicultural communities desiring an education that honors their heritage and empowers their future. Our microschool supports learners from Pre-K through 12th grade through a hybrid weekly model that combines in-person classes, virtual learning, and real-world experiences including field trips and community engagement. Our offerings include decolonial history, health and wellness, financial literacy, purpose-driven business, art and art history, college readiness, life skills, emotional intelligence, and more. We are not just a school—we are a movement for liberation- based learning.
    What sets Root to Rise apart is our deep integration of cultural relevance, emotional wellness, and purpose-centered education within a flexible, supportive microschool model. Here, education is not a system—it is a sacred journey.`,
    websiteUrl: null,
  },
];

const PartnerCard = ({ partner }: { partner: (typeof partnersData)[0] }) => {
  const paragraphs = partner.description
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  const partnerSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": partner.name,
    "description": partner.description.substring(0, 250) + "...",
    "logo": `https://ourmicroschool.com${partner.logoUrl}`,
    // "url": partner.websiteUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }}
      />
      <motion.div
        {...sectionAnimation}
        className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 mb-12"
      >
        <div className="p-6 sm:p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative rounded-lg overflow-hidden shadow-md border border-gray-100">
              <Image
                src={partner.logoUrl}
                alt={`${partner.name} Logo`}
                layout="fill"
                objectFit="contain"
                className="p-2"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                {partner.name}
              </h2>
              <p className="text-lg text-gray-600">Our Valued Partner</p>
              {partner.websiteUrl && (
                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200 mt-2 inline-block"
                >
                  Visit Website →
                </a>
              )}
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const PartnerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 sm:pt-28 md:pt-32 pb-16">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...sectionAnimation}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Our Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are proud to collaborate with organizations that share our
            commitment to innovative and holistic education.
          </p>
        </motion.div>

        {partnersData.length > 0 ? (
          partnersData.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))
        ) : (
          <motion.p
            {...sectionAnimation}
            className="text-center text-xl text-gray-500"
          >
            We are currently working on building our network of partners. Check
            back soon!
          </motion.p>
        )}
      </section>
    </div>
  );
};

export default PartnerPage;
