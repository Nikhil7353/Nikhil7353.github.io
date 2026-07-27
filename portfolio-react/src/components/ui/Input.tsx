import React, { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, LabelHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-semibold text-ink mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full bg-surface border border-line rounded-lg px-4 py-3 text-ink placeholder:text-muted/60',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'hover:border-brand/50',
            error && 'border-coral focus:ring-coral/20 focus:border-coral',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-1.5 text-sm text-coral" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={hintId} className="mt-1.5 text-sm text-muted">
            {hint}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = `${textareaId}-error`;
    const hintId = `${textareaId}-hint`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-semibold text-ink mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full bg-surface border border-line rounded-lg px-4 py-3 text-ink placeholder:text-muted/60',
            'transition-all duration-200 resize-none',
            'focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'hover:border-brand/50',
            error && 'border-coral focus:ring-coral/20 focus:border-coral',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-1.5 text-sm text-coral" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={hintId} className="mt-1.5 text-sm text-muted">
            {hint}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn('block text-sm font-medium text-ink mb-1.5', className)}
      {...props}
    >
      {children}
    </label>
  )
);
Label.displayName = 'Label';

export { Input, Textarea, Label };