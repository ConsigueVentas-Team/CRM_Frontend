import { useState } from "react";
import { BellIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { UserNotificationTab } from "./UserNotificationTab";

export interface Notification {
  id: number;
  title: string;
  notification: string;
  date: Date;
}

const list: Notification[] = [
  {
    id: 0,
    title: "Felicidades",
    notification:
      "Esta es una prueba para ver el estado del texto en caso que ocupe todo el ancho alteracion para",
    date: new Date("2023-11-01"),
  },
  {
    id: 1,
    title: "Error",
    notification: "test1",
    date: new Date("2023-11-01"),
  },
  {
    id: 2,
    title: "Titulo 2",
    notification:
      "test2 loremp ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam! loremp ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam!",
    date: new Date("2023-11-01"),
  },
  {
    id: 3,
    title: "Titulo 3",
    notification:
      "loremp ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam!",
    date: new Date("2023-11-01"),
  },
  {
    id: 4,
    title: "Titulo 4",
    notification:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam!",
    date: new Date("2023-11-01"),
  },
  {
    id: 5,
    title: "Titulo 5",
    notification:
      "Esta es una prueba para ver el estado del texto en caso que ocupe todo el ancho para hacer una pruebaluego",
    date: new Date("2023-11-01"),
  },
];

export default function UserNotification() {
  const [listNotification, setListNotification] =
    useState<Notification[]>(list);
  const [archives, setArchives] = useState<Notification[]>([]);
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);

  const handleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

  const handleArchive = (id: number) => {
    const index = listNotification.findIndex((item) => item.id === id);

    if (index !== -1) {
      const newElements = [...listNotification];
      const elementArchived = newElements.splice(index, 1)[0];
      setListNotification(newElements);
      setArchives([elementArchived, ...archives]);
    }
  };

  const restoreListNotification = (id: number) => {
    const index = archives.findIndex((item) => item.id === id);

    if (index !== -1) {
      const newArchives = [...archives];
      const elementRestored = newArchives.splice(index, 1)[0];
      setArchives(newArchives);
      setListNotification([...listNotification, elementRestored]);
    }
  };

  const deleteListArchives = (id: number) => {
    const index = archives.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newArchives = [...archives];
      newArchives.splice(index, 1)[0];
      setArchives(newArchives);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className="relative p-[.4rem] rounded-full bg-primary cursor-pointer"
          onClick={handleNotification}
        >
          {listNotification.length > 0 && (
            <span className="absolute right-0 top-0 mt-0 h-3 w-3 rounded-full bg-destructive"></span>
          )}
          <BellIcon className="text-black" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[400px] lg:relative lg:right-[50%] pt-2">
        <div className=" h-[300px] rounded-md">
          <div>
            <Tabs defaultValue="notificaciones" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-transparent">
                <TabsTrigger
                  value="notificaciones"
                  className="pb-3 rounded-none border-b-2 data-[state=active]:border-white"
                >
                  Notificaciones
                </TabsTrigger>
                <TabsTrigger
                  value="archivados"
                  className="pb-3 rounded-none border-b-2 data-[state=active]:border-white"
                >
                  Archivados
                </TabsTrigger>
              </TabsList>
              <UserNotificationTab
                list={listNotification}
                onArchive={handleArchive}
              />
              <UserNotificationTab
                list={archives}
                value="archivados"
                onRestore={restoreListNotification}
                onDelete={deleteListArchives}
              />
            </Tabs>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
