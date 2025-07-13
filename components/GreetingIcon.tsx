import React from 'react';

const GreetingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img 
        src="/namaste.jpg" // path relative to public folder
        alt="Namaskaram Gesture"
        className={className}
    />
);

export default GreetingIcon;
