import React, { useCallback, useRef } from 'react';

const Button = React.memo( ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  throttleTime = 1000,
  className = '',
  size = 'md', // sm, md, lg
  ...props
}) => {
  const lastExecuted = useRef(0);

  const handleClick = useCallback(
    (e) => {
      const now = Date.now();
      if (now - lastExecuted.current >= throttleTime) {
        lastExecuted.current = now;
        onClick?.(e);
      }
    },
    [onClick, throttleTime]
  );

  // DaisyUI button classes
  const buttonClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    info: 'btn-info',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
    ghost: 'btn-ghost',
    link: 'btn-link',
    outline: 'btn-outline',
  };

  // DaisyUI size classes
  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        btn
        ${buttonClasses[variant] || buttonClasses.primary}
        ${sizeClasses[size] || sizeClasses.md}
        ${disabled ? 'btn-disabled' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
});

export  default Button;