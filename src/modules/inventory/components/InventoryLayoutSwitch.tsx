import { Button } from "@/components/ui/button";
import { Rows } from "lucide-react";
import React from "react";

interface InventoryLayoutSwitchProps {
  activeType: string;
  showCardsOfType: (type: string) => void;
}

const InventoryLayoutSwitch: React.FC<InventoryLayoutSwitchProps> = ({
  activeType,
  showCardsOfType,
}) => {
  return (
    <div className="button button-group flex flex-row-reverse ">
      <div dir="ltr">
        <Button
          variant={"outline"}
          onClick={() => showCardsOfType("vertical")}
          className={`rounded-s-[0px] ${
            activeType === "vertical"
              ? "bg-blue-500 text-white"
              : "bg-foreground/10"
          }`}
        >
          <Rows />
          {/* Aquí puedes agregar más botones para los otros tipos de layout */}
        </Button>
      </div>
    </div>
  );
};

export default InventoryLayoutSwitch;
