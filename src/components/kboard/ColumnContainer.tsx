import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { Column, Id, Task } from "../../types/kboard";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import { PlusIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import TaskCard from "./TaskCard";

interface Props {
    column: Column;
    deleteColumn: (id: Id) => void;
    updateColumn: (id: Id, title: string) => void;

    createTask: (columnId: Id) => void;
    updateTask: (id: Id, content: string) => void;
    deleteTask: (id: Id) => void;
    tasks: Task[];
}

function ColumnContainer({
    column,
    deleteColumn,
    updateColumn,
    createTask,
    tasks,
    deleteTask,
    updateTask,
}: Props) {
    const [editMode, setEditMode] = useState(false);

    const tasksIds = useMemo(() => {
        return tasks.map((task) => task.id);
    }, [tasks]);

    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: column.id,
        data: {
            type: "Column",
            column,
        },
        disabled: editMode,
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="
      bg-border
      opacity-40
      border-2
      border-ring
      w-[350px]
      h-[500px]
      max-h-[500px]
      rounded-md
      flex
      flex-col
      "
            >

            </div>
        );
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="
  bg-border
  w-[350px]
  h-[500px]
  max-h-[500px]
  rounded-md
  flex
  flex-col
  "
        >
            {/* Column title */}
            <div
                {...attributes}
                {...listeners}
                onClick={() => {
                    setEditMode(true);
                }}
                className="
      bg-background
      text-md
      h-[60px]
      cursor-grab
      rounded-md
      rounded-b-none
      p-3
      font-bold
      border-border
      border-4
      flex
      items-center
      justify-between
      "
            >
                <div className="flex gap-2">

                    {!editMode && column.title}
                    {editMode && (
                        <input
                            className="bg-black focus:border-ring border rounded outline-none px-2"
                            value={column.title}
                            onChange={(e) => updateColumn(column.id, e.target.value)}
                            autoFocus
                            onBlur={() => {
                                setEditMode(false);
                            }}
                            onKeyDown={(e) => {
                                if (e.key !== "Enter") return;
                                setEditMode(false);
                            }}
                        />
                    )}
                </div>
                <button
                    onClick={() => {
                        deleteColumn(column.id);
                    }}
                    className="
        stroke-gray-500
        hover:stroke-white
        hover:bg-border
        rounded
        px-1
        py-2
        "
                >
                    <TrashIcon />
                </button>
            </div>

            {/* Column task container */}
            <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
                <SortableContext items={tasksIds}>
                    {tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                        />
                    ))}
                </SortableContext>
            </div>
            {/* Column footer */}
            <button
                className="flex gap-2 items-center border-border border-2 rounded-md p-4 border-x-border hover:bg-background hover:text-ring active:bg-black"
                onClick={() => {
                    createTask(column.id);
                }}
            >
                <PlusIcon />
                Agregar Tarea
            </button>
        </div>
    );
}

export default ColumnContainer;
