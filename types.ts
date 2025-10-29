// Fix: Import `ReactNode` from 'react' to make React types available and resolve the "Cannot find namespace 'JSX'" error.
import type { ReactNode } from 'react';

export interface ClusterPageData {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  content: ReactNode;
}
