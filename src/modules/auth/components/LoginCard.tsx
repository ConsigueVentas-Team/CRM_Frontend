import { Card, CardContent } from "@/components/ui/card";
import { LoginForm } from "./forms/login-form";
import { LogoIconExpanded } from "@/components/icons";

export function LoginCard() {
  return (
    <Card
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30
      w-full md:w-[30rem] h-full md:h-auto p-[4rem] lg:mx-0
      bg-background/20 dark:bg-transparent backdrop-blur-xl dark:backdrop-blur-none border-background/30 dark:border-none
      flex flex-col md:flex-row items-center justify-center overflow-hidden"
    >
      <CardContent className="w-full flex flex-col items-center p-0">
        <div className="w-full flex items-center justify-center">
          <LogoIconExpanded
            fill={["#3b82f6", "#2563eb"]}
            className="scale-[0.7] w-full"
          />
        </div>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
