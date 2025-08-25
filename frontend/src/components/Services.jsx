import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="
        py-20 px-8
        max-w-6xl mx-auto
        bg-[#141414]
      "
    >
      <h3
        className="
          text-3xl
          font-bold
          mb-12
          text-center
          text-gold
        "
      >
        Our Services
      </h3>
      <div
        className="
          grid
          grid-cols-1 md:grid-cols-3
          gap-10
        "
      >
        <ServiceCard
          title="Resident Management"
          description="Track residents, communications, and requests in one premium dashboard."
        />
        <ServiceCard
          title="Payments & Billing"
          description="Luxury means ease — seamless digital payments, invoicing, and financial reports."
        />
        <ServiceCard
          title="Community Engagement"
          description="Elevate living standards with events, polls, and premium community features."
        />
      </div>
    </section>
  );
}
