import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Discover New Cultures",
      description:
        "Traveling exposes you to diverse cultures, languages, and traditions. Explore local customs, try new foods, and learn from the people you meet.",
      icon: "🌍",
    },
    {
      title: "Relax and Rejuvenate",
      description:
        "Take a break from your daily routine and relax in beautiful destinations. Recharge your mind and body amidst stunning natural landscapes.",
      icon: "⛱️",
    },
    {
      title: "Create Lasting Memories",
      description:
        "Traveling allows you to create unforgettable memories with loved ones. Capture moments and experiences that you'll cherish forever.",
      icon: "📸",
    },
    {
      title: "Expand Your Horizons",
      description:
        "Explore new places, face challenges, and step out of your comfort zone. Traveling broadens your perspective and personal growth.",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Benefits of Traveling
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <span className="text-4xl mb-2">{benefit.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
