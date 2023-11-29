import { useState } from "react";
import { BellIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Archive, ArchiveX, ArchiveRestore } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator } from "./ui/dropdown-menu";

interface Notification {
  id: number;
  title: string;
  notification: string;
}

const list: Notification[] = [
  {
    id: 0,
    title: "Titulo 0",
    notification: "Esta es una prueba para ver el estado del texto en caso que ocupe todo el ancho",
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
    notification: "Esta es una prueba para ver el estado del texto en caso que ocupe todo el ancho",
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
        <DropdownMenuContent className="w-80">
          <ScrollArea className="h-[220px] rounded-md border">
            <div className="p-3">
              <Tabs defaultValue="notificaciones" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="notificaciones">
                    Notificaciones
                  </TabsTrigger>
                  <TabsTrigger value="archivados">Archivados</TabsTrigger>
                </TabsList>
                <TabsContent value="notificaciones">
                  {listNotification.length > 0 ? (
                    <Card className="border-none">
                      <CardContent className="space-y-2 px-4">
                        {listNotification
                          .slice()
                          .reverse()
                          .map((listNot) => (
                            <div key={listNot.id}>
                              <div className="flex justify-between items-center">
                                <div className="text-sm">
                                  <h1 className="text-lg">
                                    {listNot.title}
                                  </h1>
                                  <h3 >
                                    {listNot.notification}
                                  </h3>
                                </div>
                                <button
                                  onClick={() => handleArchive(listNot.id)}
                                >
                                  <Archive />
                                </button>
                              </div>
                              <Separator className="my-2" />
                            </div>
                          ))}
                      </CardContent>
                    </Card>
                  ) : (
                    <span className="text-sm px-4">No hay notificaciones</span>
                  )}
                </TabsContent>
                <TabsContent value="archivados">
                  {archives.length > 0 ? (
                    <Card className="border-none">
                      <CardContent className="space-y-2 px-4">
                        {archives.map((archive) => (
                          <div key={archive.id}>
                            <div className="flex justify-between items-center">
                              <div className="text-sm">
                                <h1 className="text-lg">{archive.title}</h1>
                                <h3 className="text text-sm">{archive.notification}</h3>
                              </div>
                              <div className="flex gap-3">
                                <button>
                                  <ArchiveRestore
                                    onClick={() =>
                                      restoreListNotification(archive.id)
                                    }
                                  />
                                </button>
                                <button>
                                  <ArchiveX
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
                  ) : (
                    <span className="text-sm  px-4">No hay archivados</span>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      {/*<DropdownMenu>
          <div className="notification-container relative">
            {listNotification.length > 0 && (
              <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-destructive" />
            )}
            <div
              className=" p-[.4rem] rounded-full bg-primary cursor-pointer"
              onClick={handleNotification}
            >
              <BellIcon className="text-black" />
            </div>
            {notificationOpen && (
              <div className="absolute top-[42px] right-0 bg-popover">
                <ScrollArea className="h-[220px] w-[320px] rounded-md border">
                  <div className="p-3">
                    <Tabs defaultValue="notificaciones" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="notificaciones">
                          Notificaciones
                        </TabsTrigger>
                        <TabsTrigger value="archivados">Archivados</TabsTrigger>
                      </TabsList>
                      <TabsContent value="notificaciones">
                        {listNotification.length > 0 ? (
                          <Card className="border-none">
                            <CardContent className="space-y-2 px-4">
                              {listNotification
                                .slice()
                                .reverse()
                                .map((listNot) => (
                                  <div key={listNot.id}>
                                    <div className="flex justify-between items-center">
                                      <div className="text-sm">
                                        {listNot.notification}
                                      </div>
                                      <button
                                        onClick={() => handleArchive(listNot.id)}
                                      >
                                        <Archive />
                                      </button>
                                    </div>
                                    <Separator className="my-2" />
                                  </div>
                                ))}
                            </CardContent>
                          </Card>
                        ) : (
                          <span className="text-sm px-4">No hay notificaciones</span>
                        )}
                      </TabsContent>
                      <TabsContent value="archivados">
                        {archives.length > 0 ? (
                          <Card className="border-none">
                            <CardContent className="space-y-2 px-4">
                              {archives.map((archive) => (
                                <div key={archive.id}>
                                  <div className="flex justify-between items-center">
                                    <div className="text-sm">
                                      {archive.notification}
                                    </div>
                                    <div className="flex gap-3">
                                      <button>
                                        <ArchiveRestore
                                          onClick={() =>
                                            restoreListNotification(archive.id)
                                          }
                                        />
                                      </button>
                                      <button>
                                        <ArchiveX
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
                        ) : (
                          <span className="text-sm  px-4">No hay archivados</span>
                        )}
                      </TabsContent>
                    </Tabs>
                  </div>
                </ScrollArea>
              </div>
            )}
          </div>
                        </DropdownMenu>*/}
      
      
    </>
    
  );
}
