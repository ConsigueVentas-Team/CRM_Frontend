import React, { useState, useEffect, useLayoutEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Outlet, useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/theme';
import { GripHorizontalIcon } from 'lucide-react';

interface Card {
    id: number;
    title: string;
    color: string;
}

interface DraggableCardProps extends Card {
    index: number;
    moveCard: (dragIndex: number, hoverIndex: number) => void;
    onClick: (id: number) => void;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ id, title, color, index, moveCard, onClick }) => {

    const { theme } = useTheme();
    const [, drag] = useDrag({
        type: 'CARD',
        item: { id, index, type: 'CARD' },
    });




    const [, drop] = useDrop({
        accept: 'CARD',
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
        position: 'relative',
        backgroundColor: theme === 'dark' ? '#000' : '#fff',

        borderRadius: "12px",
        padding: "16px",
        marginBottom: "12px",
        marginTop: "15px",
        opacity: 1,
        zIndex: 1,
        transition: "transform 0.5s",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: `linear-gradient(45deg, ${color}, #7F00FF)`,

    };
    const labelStyle: React.CSSProperties = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '30px',  // Altura deseada de la etiqueta negra
        
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
    };

    const iconStyle: React.CSSProperties = {
        position: 'absolute',
        top: '8px',
        left: '8px',
        cursor: 'grab',
        color: 'white',
    };
    const titleStyle: React.CSSProperties = {
        color: theme === 'dark' ? 'black' : 'white',
        textAlign: 'center',
        margin: 0,
        fontSize: '1rem',
        fontWeight: 'bold',
    };

    return (
        <div
            ref={(node) => drag(drop(node))}
            style={cardStyle}
            className={`transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer h-[8rem]`}
            onClick={() => onClick(id)}
        >
            <div style={iconStyle} onClick={handleIconClick}>
                <GripHorizontalIcon />
            </div>
            <div style={labelStyle} className='bg-foreground/60'>
                <h3 style={titleStyle}>{title}</h3>
            </div>
        </div>
    );
};

export function Configuration() {
    const { theme } = useTheme();
    const [cards, setCards] = useState<Card[]>([
        { id: 1, title: "Categorias", color: theme === 'dark' ? "#1E90FF" : "#FF3030" },
        { id: 2, title: "Empleado1", color: theme === 'dark' ? "#32CD32" : "#1E90FF" },
        { id: 3, title: "Empleado2", color: theme === 'dark' ? "#FFD700" : "#32CD32" },
        { id: 4, title: "Empleado3", color: theme === 'dark' ? "#FF3030" : "#FFD700" },
    ]);

    const [selectedButton, setSelectedButton] = useState<number | null>(null);
    const navigate = useNavigate();

    const handleCardClick = (cardId: number) => {
        setSelectedButton(cardId);
        switch (cardId) {
            case 1:
                navigate('/configuration/categorias');
                break;
            case 2:
                navigate('/configuration/empleado1');
                break;
            case 3:
                navigate('/configuration/espera2');
                break;
            case 4:
                navigate('/configuration/espera3');
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
        setCards(updatedCards);
    };



    useEffect(() => {
        setCards((prevCards) => {
            return prevCards.map((card) => ({
                ...card,
                color: theme === 'dark' ? getDarkColor(card.id) : getLightColor(card.id),
            }));
        });
    }, [theme]);

    const getLightColor = (id: number): string => {
        switch (id) {
            case 1:
                return "#FF3030";
            case 2:
                return "#1E90FF";
            case 3:
                return "#32CD32";
            case 4:
                return "#FFD700";
            default:
                return "#FFFFFF";
        }
    };

    const getDarkColor = (id: number): string => {
        switch (id) {
            case 1:
                return "#1E90FF";
            case 2:
                return "#32CD32";
            case 3:
                return "#FFD700";
            case 4:
                return "#FF3030";
            default:
                return "#000000";
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex flex-col lg:flex-row h-screen">
                <div className="lg:w-1/5 h-full" >
                    <div className="lg:flex-grow p-6 h-full">
                        {cards.map((card, index) => (
                            <DraggableCard
                                key={card.id}
                                id={card.id}
                                title={card.title}
                                color={card.color}
                                index={index}
                                moveCard={moveCard}
                                onClick={() => handleCardClick(card.id)}
                            />
                        ))}
                    </div>
                </div>
                <div className="lg:flex-grow p-6 h-full" >
                    <Outlet />
                </div>
            </div>
        </DndProvider>
    );
}