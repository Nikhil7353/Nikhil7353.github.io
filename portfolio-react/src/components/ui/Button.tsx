import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    asChild = false,
    disabled,
    children,
    ...props
  }, ref) => {
    const baseStyles = [
      'inline-flex items-center justify-center gap-2',
      'font-semibold transition-all duration-200',
      'rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none',
      'active:scale-[0.98]',
    ];

    const variants = {
      primary: [
        'bg-ink text-surface',
        'shadow-lg shadow-ink/20',
        'hover:shadow-xl hover:shadow-ink/30 hover:-translate-y-0.5',
        'focus-visible:ring-ink',
      ],
      secondary: [
        'bg-surface-strong text-ink border border-line',
        'hover:bg-surface hover:border-brand/30',
        'focus-visible:ring-brand',
      ],
      outline: [
        'bg-transparent text-ink border-2 border-line',
        'hover:bg-surface hover:border-brand/50',
        'focus-visible:ring-brand',
      ],
      ghost: [
        'bg-transparent text-ink',
        'hover:bg-surface hover:text-brand',
        'focus-visible:ring-brand',
      ],
      link: [
        'bg-transparent text-brand underline-offset-4',
        'hover:underline',
        'focus-visible:ring-brand',
      ],
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-1.5',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-2.5',
      xl: 'px-10 py-5 text-xl gap-3',
    };

    const Component = asChild ? 'span' : 'button';

    return (
      <Component
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export { Button };