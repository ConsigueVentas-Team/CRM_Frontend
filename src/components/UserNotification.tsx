import { useState } from "react";
import { BellIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Archive, ArchiveX, ArchiveRestore } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, } from "./ui/dropdown-menu";
import LinesEllipsis from 'react-lines-ellipsis';

interface Notification {
  id: number;
  title: string;
  notification: string;
}

const list: Notification[] = [
  {
    id: 0,
    title: "Titulo 0",
    notification: "Esta es una prueba para ver el estado del texto en caso que ocupe todo el ancho alteracion para",
  },
  {
    id: 1,
    title: "Titulo 1",
    notification: "test1",
  },
  {
    id: 2,
    title: "Titulo 2",
    notification: "test2",
  },
  {
    id: 3,
    title: "Titulo 3",
    notification: "test3",
  },
  {
    id: 4,
    title: "Titulo 4",
    notification: "test4",
  },
  {
    id: 5,
    title: "Titulo 5",
    notification: "Esta es una prueba para ver el estado del texto en caso que ocupe todo el ancho para hacer una pruebaluego",
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
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger>
          <div
            className="relative p-[.4rem] rounded-full bg-primary cursor-pointer"
            onClick={handleNotification}
          >
            {listNotification.length > 0 && (
              <span className="absolute right-0 top-0 mt-0 h-3 w-3 rounded-full bg-destructive" ></span>
            )}
            <BellIcon className="text-black" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[380px] sm:relative sm:right-[50%]">
          <div className=" h-[250px] rounded-md">
            <div className="p-2">
              <Tabs defaultValue="notificaciones" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="notificaciones">
                    Notificaciones
                  </TabsTrigger>
                  <TabsTrigger value="archivados">Archivados</TabsTrigger>
                </TabsList>
                <TabsContent value="notificaciones">
                  {listNotification.length > 0 ? (
                    <ScrollArea className=" h-[200px] rounded-md">
                      <Card className="border-none">
                        <CardContent className="space-y-2 px-4">
                          {listNotification
                            .slice()
                            .reverse()
                            .map((listNot) => (
                              <div key={listNot.id}>
                                <div className="flex justify-between items-center ">
                                  <div className="text-sm" onClick={handleClick}>
                                    <h1 className="text-lg" >
                                      {listNot.title}
                                    </h1>
                                    {expanded ? (
                                      <h2>{listNot.notification}</h2>
                                    ) : (
                                      <LinesEllipsis
                                        text={listNot.notification}
                                        maxLine="2"
                                        ellipsis="..."
                                        trimRight
                                        basedOn="letters"
                                      />
                                    )}
                                  </div>
                                  <div className="mx-1"></div>
                                  <button
                                    onClick={() => handleArchive(listNot.id)}
                                  >
                                    <Archive size={20} className="opacity-40" />
                                  </button>
                                </div>
                                <Separator className="my-2" />
                              </div>
                            ))}
                        </CardContent>
                      </Card>
                    </ScrollArea>
                    
                  ) : (
                    <span className="text-sm px-4">No hay notificaciones</span>
                  )}
                </TabsContent>
                <TabsContent value="archivados">
                  {archives.length > 0 ? (
                    <ScrollArea className="h-[200px] rounded-md">
                      <Card className="border-none">
                        <CardContent className="space-y-2 px-4">
                          {archives.map((archive) => (
                            <div key={archive.id}>
                              <div className="flex justify-between items-center">
                                <div className="text-sm" onClick={handleClick}>
                                  <h1 className="text-lg">{archive.title}</h1>
                                  {expanded ? (
                                    <h2>{archive.notification}</h2>
                                  ) : (
                                    <LinesEllipsis
                                      text={archive.notification}
                                      maxLine="2"
                                      ellipsis="..."
                                      trimRight
                                      basedOn="letters"
                                    />
                                  )}
                                </div>
                                <div className="flex gap-3">
                                  <button>
                                    <ArchiveRestore
                                      size={20} className="opacity-40"
                                      onClick={() =>
                                        restoreListNotification(archive.id)
                                      }
                                    />
                                  </button>
                                  <button>
                                    <ArchiveX
                                      size={20} className="opacity-40"
                                      onClick={() =>
                                        deleteListArchives(archive.id)
                                      }
                                    />
                                  </button>
                                </div>
                              </div>
                              <Separator className="my-2" />
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </ScrollArea>
                    
                  ) : (
                    <span className="text-sm  px-4">No hay archivados</span>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      
    </>
    
  );
}
