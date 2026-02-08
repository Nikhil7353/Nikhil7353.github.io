import React, { useState, useRef, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const LazyImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className="position-relative">
      {!isLoaded && (
        <div 
          className={`d-flex align-items-center justify-content-center bg-secondary ${className}`}
          style={{ minHeight: '200px' }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      
      {isInView && (
        <img
          src={hasError ? '/images/project1.jpg' : src}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleLoad}
          onError={handleError}
          style={{ 
            transition: 'opacity 0.3s ease-in-out',
            display: isLoaded ? 'block' : 'none'
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
