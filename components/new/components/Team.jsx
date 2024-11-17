import { motion } from 'framer-motion';
import { Phone, Mail, Award } from 'lucide-react';

const agents = [
  {
    id: 'a1',
    name: 'Mr Kevin .C. Onuoha',
    title: 'Managing Director',
    photo: './kevin.jpeg',
    email: 'kplusreliable@gmail.com',
    phone: '(+234) 8155273175',
  },
  {
    id: 'a2',
    name: 'Mr Miles',
    title: 'Regional Asst. Manager/Asset Consultant',
    photo: './sochi.jpeg',
    email: 'atuegwusochima@gmail.com',
    phone: '(+234) 9076459842',
  },
  {
    id: 'a3',
    name: 'Miss Amarachi Okugo',
    title: 'Regional Asst. Manager/Lagos Chap.',
    photo: './ama.jpeg',
    email: 'amarachiokugo@gmail.com',
    phone: '(+234) 7048504307',
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced agents are here to help you find your perfect property
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{agent.name}</h3>
                <p className="text-[#ba9b0e] mb-4">{agent.title}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>{agent.email}</span>
                  </div>
                  {/* <div className="flex items-center text-gray-600">
                    <Award className="w-5 h-5 mr-2" />
                    <span>{agent.listingsCount} Active Listings</span>
                  </div> */}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  {/* <p className="text-sm text-gray-600 mb-2">Specializations:</p> */}
                  {/* <div className="flex flex-wrap gap-2">
                    {agent.specializations.map(spec => (
                      <span
                        key={spec}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}