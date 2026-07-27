import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  content: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  delay?: number;
  children: React.ReactElement;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, content, side = 'top', align = 'center', delay = 200, children, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    const showTooltip = () => {
      timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
    };

    const hideTooltip = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsVisible(false);
    };

    if (!React.isValidElement(children)) {
      return <>{children}</>;
    }

    const childWithProps = React.cloneElement(children as React.ReactElement<any>, {
      onMouseEnter: (e: React.MouseEvent) => {
        showTooltip();
        children.props.onMouseEnter?.(e);
      },
      onMouseLeave: (e: React.MouseEvent) => {
        hideTooltip();
        children.props.onMouseLeave?.(e);
      },
      onFocus: (e: React.FocusEvent) => {
        showTooltip();
        children.props.onFocus?.(e);
      },
      onBlur: (e: React.FocusEvent) => {
        hideTooltip();
        children.props.onBlur?.(e);
      },
    });

    const sideStyles = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    const alignStyles = {
      start: side === 'top' || side === 'bottom' ? 'left-0 -translate-x-0' : 'top-0 -translate-y-0',
      center: side === 'top' || side === 'bottom' ? 'left-1/2 -translate-x-1/2' : 'top-1/2 -translate-y-1/2',
      end: side === 'top' || side === 'bottom' ? 'right-0 -translate-x-0' : 'bottom-0 -translate-y-0',
    };

    return (
      <div ref={ref} className={cn('relative inline-block', className)} {...props}>
        {childWithProps}
        {isVisible && (
          <div
            className={cn(
              'absolute z-50 px-3 py-1.5 text-xs font-medium text-surface bg-ink rounded-lg shadow-lg',
              'whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-200',
              sideStyles[side],
              alignStyles[align]
            )}
            role="tooltip"
          >
            {content}
            <div
              className={cn(
                'absolute w-0 h-0 border-4 border-transparent',
                side === 'top' && 'bottom-[-8px] left-1/2 -translate-x-1/2 border-t-ink',
                side === 'bottom' && 'top-[-8px] left-1/2 -translate-x-1/2 border-b-ink',
                side === 'left' && 'right-[-8px] top-1/2 -translate-y-1/2 border-l-ink',
                side === 'right' && 'left-[-8px] top-1/2 -translate-y-1/2 border-r-ink',
              )}
            />
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export { Tooltip };