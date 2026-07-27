import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <div
      ref={ref}
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : orientation}
      className={cn(
        'bg-line shrink-0',
        orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
);

Separator.displayName = 'Separator';

export { Separator };