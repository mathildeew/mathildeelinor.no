import { useState, useEffect, useRef } from "react";

export function LazyLoadImage({ src, alt }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div ref={imgRef} className="w-full h-96 bg-primary bg-opacity-30 transition-all duration-500">
      {isVisible && <img src={`https://mathildeelinor-gjesteboka.vercel.app/api/messages/image/${src}`} alt={alt} className={`w-full max-h-96 object-cover transition-all duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`} onLoad={handleImageLoad} />}
    </div>
  );
}
