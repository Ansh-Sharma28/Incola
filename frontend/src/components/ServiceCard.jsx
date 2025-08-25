import { useState } from "react";

const ServiceCard = ({ title, description }) => {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left-30,
      y: e.clientY - rect.top-50,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -9999, y: -9999 });
  };

  const maskStyle = {
    WebkitMaskImage: `radial-gradient(120px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`,
    maskImage: `radial-gradient(120px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    opacity: mousePos.x === -9999 ? 0 : 1,
    transition: "opacity 0.3s ease",
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative p-8 rounded-2xl bg-[#1a1a1a] shadow-lg overflow-hidden cursor-default"
    >
      {/* Border glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl border-[2px]"
        style={{
          borderImage:
            "linear-gradient(90deg, rgba(255,215,0,1), rgba(255,215,0,0.3)) 1",
          ...maskStyle,
        }}
      />

      {/* Content */}
      <div className="relative space-y-4">
        {/* Title */}
        <h4 className="text-xl font-semibold text-white relative">
          {title}
          <span
            className="absolute inset-0 text-gold"
            style={{
              ...maskStyle,
            }}
          >
            {title}
          </span>
        </h4>

        {/* Description */}
        <p className="text-gray-400 relative">
          {description}
          <span
            className="absolute inset-0 text-gold"
            style={{
              ...maskStyle,
            }}
          >
            {description}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
