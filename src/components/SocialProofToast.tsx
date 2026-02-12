'use client';

import { CheckCircle2, X } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const purchases = [
  { name: 'Joseph', location: 'Texas' },
  { name: 'Maria', location: 'Florida' },
  { name: 'Daniel', location: 'California' },
  { name: 'Sarah', location: 'New York' },
  { name: 'Michael', location: 'Arizona' },
  { name: 'Rebecca', location: 'Illinois' },
  { name: 'David', location: 'Georgia' },
  { name: 'Esther', location: 'New Jersey' },
  { name: 'John', location: 'Ohio' },
  { name: 'Ruth', location: 'North Carolina' },
  { name: 'Samuel', location: 'Pennsylvania' },
  { name: 'Leah', location: 'Michigan' },
  { name: 'Benjamin', location: 'Virginia' },
  { name: 'Rachel', location: 'Washington' },
  { name: 'Aaron', location: 'Massachusetts' },
  { name: 'Hannah', location: 'Colorado' },
  { name: 'Joshua', location: 'Tennessee' },
  { name: 'Abigail', location: 'Indiana' },
  { name: 'Elijah', location: 'Missouri' },
  { name: 'Deborah', location: 'Wisconsin' },
];

type Purchase = {
  name: string;
  location: string;
};

export function SocialProofToast() {
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const toastCountRef = useRef(0);
  const purchaseIndexRef = useRef(0);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nextToastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showNextToast = useCallback(() => {
    if (toastCountRef.current >= 3) {
      return;
    }

    if (nextToastTimeoutRef.current) {
      clearTimeout(nextToastTimeoutRef.current);
    }

    const purchase = purchases[purchaseIndexRef.current % purchases.length];
    purchaseIndexRef.current += 1;

    setCurrentPurchase(purchase);
    setIsVisible(true);
    toastCountRef.current += 1;

    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      nextToastTimeoutRef.current = setTimeout(showNextToast, 7000);
    }, 4000);
  }, []);

  useEffect(() => {
    const initialTimeout = setTimeout(showNextToast, 3000);

    return () => {
      clearTimeout(initialTimeout);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      if (nextToastTimeoutRef.current) {
        clearTimeout(nextToastTimeoutRef.current);
      }
    };
  }, [showNextToast]);

  const handleClose = () => {
    setIsVisible(false);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    if (nextToastTimeoutRef.current) {
      clearTimeout(nextToastTimeoutRef.current);
    }
    nextToastTimeoutRef.current = setTimeout(showNextToast, 7000);
  };

  if (!currentPurchase) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed bottom-4 left-4 z-50 w-full max-w-xs rounded-xl border border-white/10 bg-[#11151B] p-4 shadow-lg transition-all duration-500 ease-in-out motion-reduce:transition-none',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:slide-out-to-bottom-2 data-[state=closed]:slide-out-to-left-2 data-[state=open]:slide-in-from-bottom-2 data-[state=open]:slide-in-from-left-2'
      )}
      data-state={isVisible ? 'open' : 'closed'}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400 mt-0.5" />
        <div className="flex-grow">
          <p className="text-sm font-medium text-white">
            {currentPurchase.name} from {currentPurchase.location} just purchased
          </p>
          <p className="text-xs text-gray-500 mt-1">Just now</p>
        </div>
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <span className="sr-only">Close</span>
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
