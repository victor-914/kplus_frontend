import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 'r1',
    name: 'John Smith',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Outstanding service! Sarah helped us find our dream home in record time. Her knowledge of the local market was invaluable.',
    property: 'Modern Waterfront Villa',
    date: '2024-02-15'
  },
  {
    id: 'r2',
    name: 'Lisa Anderson',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Michael made the entire process smooth and stress-free. His attention to detail and professionalism are unmatched.',
    property: 'Downtown Luxury Condo',
    date: '2024-02-10'
  },
  {
    id: 'r3',
    name: 'David Wilson',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Emily went above and beyond to help us find the perfect investment property. Her market insights were spot on.',
    property: 'Commercial Office Space',
    date: '2024-02-05'
  }
];

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-lg text-gray-600 hover:text-blue-600 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-lg text-gray-600 hover:text-blue-600 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <img
                  src={reviews[activeIndex].photo}
                  alt={reviews[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {reviews[activeIndex].name}
                  </h3>
                  <p className="text-gray-600">
                    Purchased: {reviews[activeIndex].property}
                  </p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < reviews[activeIndex].rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl text-gray-600 italic mb-6">
                "{reviews[activeIndex].text}"
              </blockquote>

              <div className="text-sm text-gray-500">
                {new Date(reviews[activeIndex].date).toLocaleDateString()}
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}