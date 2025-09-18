import { useEffect, useRef } from 'react';

export const useTouchGestures = (onSwipeUp, onSwipeDown, threshold = 50) => {
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e) => {
      touchEndY.current = e.changedTouches[0].screenY;
      const deltaY = touchStartY.current - touchEndY.current;

      if (Math.abs(deltaY) > threshold) {
        if (deltaY > 0) {
          // Swiped up
          onSwipeUp?.();
        } else {
          // Swiped down
          onSwipeDown?.();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeUp, onSwipeDown, threshold]);
};
