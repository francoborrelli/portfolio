import { useEffect, useState } from 'react';

const MOBILE_MQ = '(max-width: 900px)';

export function useIsMobile(query = MOBILE_MQ) {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [query]);

  return isMobile;
}
