'use client'
 
import { useReportWebVitals } from 'next/web-vitals'
 
export function WebVitals() {
  useReportWebVitals((metric) => {
    switch (metric.name) {
      case 'FCP': {
        // handle FCP results
      }
      case 'LCP': {
        // handle LCP results
      }
      case 'TTFB': {
        // handle LCP results
      }
      case 'FID': {
        // handle LCP results
      }
      case 'CLS': {
        // handle LCP results
      }
      case 'INP': {
        // handle LCP results
      }
      // ...
    }
  })
}