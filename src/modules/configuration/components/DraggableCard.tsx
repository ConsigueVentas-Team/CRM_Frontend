import { GripHorizontalIcon } from "lucide-react";
import { Card } from "../pages/Configuration";
import { useDrag, useDrop } from "react-dnd";
import { useTheme } from "@/contexts/theme";

interface DraggableCardProps extends Card {
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  onClick: (id: number) => void;
}

export function DraggableCard({
  id,
  title,
  color,
  index,
  moveCard,
  onClick,
}: DraggableCardProps) {
  const { theme } = useTheme();

  const [, drag] = useDrag({
    type: "CARD",
    item: { id, index, type: "CARD" },
  });

  const [, drop] = useDrop({
    accept: "CARD",
    hover: (item: { id: number; index: number; type: string }) => {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
  });

  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const cardStyle: React.CSSProperties = {
    position: "relative",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "12px",
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: `linear-gradient(45deg, ${color}, #7F00FF)`,
    transition: "transform 0.3s, opacity 0.3s",
    cursor: "pointer",
  };

  const labelStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
  };

  const iconStyle: React.CSSProperties = {
    position: "absolute",
    top: "8px",
    left: "8px",
    cursor: "grab",
    color: theme === "dark" ? "#7F00FF" : "white",
  };

  const titleStyle: React.CSSProperties = {
    textAlign: "center",
    margin: 0,
    fontSize: "1rem",
    fontWeight: "bold",
  };

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={cardStyle}
      className={`w-full transition-transform bg-blue-500 hover:-translate-y-2 hover:scale-105 hover:bg-indigo-500 duration-300 transform relative h-[8rem]`}
      onClick={() => onClick(id)}
    >
      <div style={iconStyle} onClick={handleIconClick}>
        <GripHorizontalIcon />
      </div>
      <div style={labelStyle} className="bg-foreground/60 p-1">
        <h3 style={titleStyle} className="text-background">
          {title}
        </h3>
      </div>
    </div>
  );
}
