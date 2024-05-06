import { cn } from "@/lib/utils"
import { Card } from "./card";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

function SaleCardSkeleton() {
  return (
    <Card className={cn("flex rounded-xl overflow-hidden group hover:shadow-2xl bg-background relative")}>
      <div className="bg-background contrast-75 opacity-40 p-6 flex items-center justify-start">
        <Skeleton className="mr-2 h-4 w-24" />
        <Skeleton className="h-6 w-6" />
      </div>
      <div className="bg-background rounded-tr-lg rounded-br-lg shadow-lg p-6 flex-grow relative">
        <div className="flex justify-between items-center mb-4">
          <div>
            <Skeleton className="h-6 w-48 mb-2" />
            <Skeleton className="h-4 w-36" />
          </div>
          <div>
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
        <div className="-bottom-2 left-4 flex items-center space-x-2 mt-12 text-gray-400">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </Card>
  );
}

export { Skeleton, SaleCardSkeleton }
