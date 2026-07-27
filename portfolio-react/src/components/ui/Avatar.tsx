import { forwardRef, HTMLAttributes, useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  shape?: 'circle' | 'square';
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, size = 'md', shape = 'circle', ...props }, ref) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    const sizes = {
      sm: 'h-8 w-8 text-xs',
      md: 'h-10 w-10 text-sm',
      lg: 'h-12 w-12 text-base',
      xl: 'h-16 w-16 text-lg',
      '2xl': 'h-24 w-24 text-xl',
    };

    const shapes = {
      circle: 'rounded-full',
      square: 'rounded-lg',
    };

    useEffect(() => {
      if (!src) {
        setImageLoading(false);
        setImageError(true);
      }
    }, [src]);

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center overflow-hidden bg-surface-strong border border-line',
          'flex-shrink-0',
          sizes[size],
          shapes[shape],
          className
        )}
        {...props}
      >
        {src && !imageError && (
          <img
            src={src}
            alt={alt || ''}
            className={cn(
              'h-full w-full object-cover transition-opacity duration-300',
              imageLoading ? 'opacity-0' : 'opacity-100'
            )}
            onLoad={() => setImageLoading(false)}
            onError={() => setImageError(true)}
          />
        )}
        {(imageError || !src) && fallback && (
          <span className="font-semibold text-brand" aria-hidden="true">
            {fallback}
          </span>
        )}
        {(imageError || !src) && !fallback && (
          <svg
            className="h-1/2 w-1/2 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };