import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
    <img 
        src="/TCA.jpg" // now points to public folder
        alt="TCA IIT Ropar Logo"
        className={`${className} aspect-square rounded-full object-cover`}
    />
);

export default Logo;
