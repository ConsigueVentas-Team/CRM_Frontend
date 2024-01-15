import React, { useState } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import EmpleadoPage from "./EmpleadoPage";
import { Brush, Grip } from "lucide-react";
import { Categorias } from "./Categoria";
import { useNavigate } from "react-router-dom";
import { Outlet, Route, Routes } from "react-router-dom";
import "./styles.css";

interface DraggableCardProps {
  id: number;
  title: string;
  color: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  onClick: (id: number) => void;
  totalCards: number;
}

const DraggableCard: React.FC<DraggableCardProps> = ({
  id,
  title,
  color,
  index,
  moveCard,
  onClick,
  totalCards,
}) => {
  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const cardStyle: React.CSSProperties = {
    position: "relative",
    backgroundColor: color,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px", // Ajusta el redondeo de los bordes
    padding: "16px",
    cursor: "pointer",
    marginBottom: "8px",
    opacity: 1,
    transition: "background-color 0.3s, transform 0.3s",
    flexGrow: 0,
    flexShrink: 1,
    marginRight: index !== totalCards - 1 ? "8px" : "0",
    height: "150px",
    width: "50%",
    maxWidth: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: `linear-gradient(45deg, ${color}, #FF00FF)`,
  };
  const iconStyle: React.CSSProperties = {
    position: "absolute",
    top: "8px",
    left: "8px",
    cursor: "grab",
    color: "white",
  };

  return (
    <div style={cardStyle} onClick={() => onClick(id)}>
      <div style={iconStyle} onClick={handleIconClick}>
        <Grip />
      </div>
      <h3 style={{ margin: 0, color: "#fff" }}>{title}</h3>
    </div>
  );
};

export function Configuration() {
  const [cards, setCards] = useState([
    { id: 1, title: "Categorias", color: "#FF3030" },
    { id: 2, title: "Empleado", color: "#1E90FF" },
    { id: 3, title: "Espera2", color: "#32CD32" },
    { id: 4, title: "Espera3", color: "#FFD700" },
  ]);

  const [isPanelOn, setIsPanelOn] = useState(true);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const resetState = () => {
    setCards([
      { id: 1, title: "Categorias", color: "#FF5757" },
      { id: 2, title: "Empleado", color: "#57A2FF" },
      { id: 3, title: "Espera2", color: "#6BF178" },
      { id: 4, title: "Espera3", color: "#FFD357" },
    ]);
    setSelectedButton(null);
  };

  const handleCardClick = (cardId: number) => {
    setSelectedButton(cardId);
    // Navegar a la ruta correspondiente según el card seleccionado
    switch (cardId) {
      case 1:
        navigate("/configuration/categorias");
        break;
      case 2:
        navigate("/configuration/empleado");
        break;
      case 3:
        navigate("/configuration/espera2");
        break;
      case 4:
        navigate("/configuration/espera3");
        break;
      default:
        break;
    }
  };

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const draggedCard = cards[dragIndex];
    const updatedCards = [...cards];
    updatedCards.splice(dragIndex, 1);
    updatedCards.splice(hoverIndex, 0, draggedCard);

    if (selectedButton === null || selectedButton === 1) {
      setCards(updatedCards);
    }
  };

  const navigate = useNavigate();

  const togglePanel = () => {
    setIsPanelOn((prev) => !prev);
    // Cambiar los colores de las tarjetas si el panel está apagado
    if (!isPanelOn) {
      setCards((prevCards) =>
        prevCards.map((card) => ({
          ...card,
          color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        }))
      );
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPanelOn(event.target.value === "on");
  };

  return (
    <div>
      <label className={`toggle-switch ${isPanelOn ? "on" : "off"}`}>
        <input
          type="checkbox"
          id="panelSwitch"
          checked={isPanelOn}
          onChange={togglePanel}
        />
        <span className="toggle-slider"></span>
      </label>
      <ResizablePanelGroup direction="horizontal" className="h-full w-full">
        <ResizablePanel
          defaultSize={20}
          className="flex-grow md:w-1/2 lg:w-1/4"
          style={{
            background: "transparent",
            border: "1px solid transparent",
            margin: "5px",
            width: "100%",
          }}
        >
          <div className="flex flex-wrap h-full items-center justify-center p-12">
            {cards.map((card, index) => (
              <DraggableCard
                key={card.id}
                id={card.id}
                title={card.title}
                color={
                  isPanelOn
                    ? card.color
                    : `#${Math.floor(Math.random() * 16777215).toString(16)}`
                }
                index={index}
                moveCard={() => {}}
                onClick={() =>
                  navigate(`/configuration/${card.title.toLowerCase()}`)
                }
                totalCards={cards.length}
              />
            ))}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={50}
          className="flex-grow md:w-1/2 lg:w-3/4"
          style={{
            background: "transparent",
            border: "1px solid transparent",
            margin: "5px",
            width: "100%",
          }}
        >
          <div className="flex h-full items-center justify-center p-6">
            {/* Utilizar un Outlet para renderizar la página correspondiente */}
            <Outlet />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
