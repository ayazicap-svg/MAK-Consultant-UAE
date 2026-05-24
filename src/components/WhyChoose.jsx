import { Shield, TrendingUp, Award } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      title: "Trusted UAE Expertise",
      desc: "Deep understanding of local regulations, ensuring your business stays fully compliant.",
      icon: Shield,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Strategic Financial Insight",
      desc: "We don't just crunch numbers; we provide actionable data to scale your growth.",
      icon: TrendingUp,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Premium Client Support",
      desc: "Dedicated account managers providing transparent, around-the-clock advisory.",
      icon: Award,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section id="why" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose MAK
          </h2>
          <p className="text-gray-400 text-lg">
            The distinct advantages of partnering with our firm.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/20 transition duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;