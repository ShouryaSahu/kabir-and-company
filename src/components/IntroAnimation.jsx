
import { useEffect } from "react";

export default function IntroAnimation({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="intro-screen fixed inset-0 z-[100] flex items-center justify-center bg-white"
      aria-label="Kabir and Company"
      role="status"
    >
      <img
        src="/images/kabir-logo.png"
        alt="Kabir and Company logo"
        className="intro-logo w-[min(78vw,520px)] object-contain"
      />
    </div>
  );
}
