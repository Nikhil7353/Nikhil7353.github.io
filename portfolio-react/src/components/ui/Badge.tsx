import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'success' | 'brand';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center font-semibold rounded-full transition-colors';
    
    const variants = {
      default: 'bg-ink text-surface',
      secondary: 'bg-surface-strong text-ink border border-line',
      outline: 'bg-transparent text-ink border-2 border-line',
      destructive: 'bg-coral/10 text-coral border border-coral/20',
      success: 'bg-emerald/10 text-emerald border border-emerald/20',
      brand: 'bg-brand/10 text-brand border border-brand/20',
    };
    
    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };