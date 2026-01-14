import { Skeleton } from '../components/ui/skeleton';

export default function Loading() {
  return (
    <main className="p-8">
        <h1>Loading phrase app page...</h1>
      <Skeleton className="h-12 w-48 mx-auto" />
    </main>
  );
}
