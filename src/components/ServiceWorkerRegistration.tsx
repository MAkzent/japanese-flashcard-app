'use client';

import { useEffect } from 'react';
import { registerServiceWorker } from '@/utils/registerSW';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return null;
}