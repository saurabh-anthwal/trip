import { services } from '@/data/mockData';
import { FaWallet, FaMapMarkedAlt, FaCheckCircle } from 'react-icons/fa';

const iconMap = {
  FaWallet,
  FaMapMarkedAlt,
  FaCheckCircle,
};

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Services We Provide
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Find Trip that fit a Flexible lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl rotate-45 flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white -rotate-45" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="mt-6 space-y-2">
                  {service.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <FaCheckCircle className="w-4 h-4 mr-2 text-orange-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center text-orange-300 hover:text-orange-400 transition-colors"
                  >
                    <span className="mr-2">Learn More</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
