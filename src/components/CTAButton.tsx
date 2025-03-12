
import React from 'react';
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  href?: string;
}

const CTAButton = ({ 
  children, 
  onClick, 
  className, 
  variant = 'primary',
  href 
}: CTAButtonProps) => {
  const baseClasses = "py-3 px-6 rounded-lg font-medium transition-all duration-300 inline-block text-center";
  
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg",
    secondary: "bg-softBlue text-blue-700 hover:bg-blue-100 border border-blue-200"
  };

  const buttonContent = (
    <span className="flex items-center justify-center">
      {children}
    </span>
  );

  if (href) {
    return (
      <a 
        href={href}
        className={cn(baseClasses, variantClasses[variant], className)}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};

export default CTAButton;
