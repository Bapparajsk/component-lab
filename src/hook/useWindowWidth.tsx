import { useState, useEffect } from 'react';

const useWindowWidth = (): number | undefined => {
    // Initialize state with undefined as window is undefined on the server side
    const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Set window width on component mount (if window is defined)
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);

            // Add event listener
            window.addEventListener('resize', handleResize);

            // Cleanup listener on unmount
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []); // Empty array ensures effect is only run on mount and unmount

    return windowWidth;
};

export default useWindowWidth;
