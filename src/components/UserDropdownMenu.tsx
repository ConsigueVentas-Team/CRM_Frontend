import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth";
import { ModeToggle } from "./ModeToogle";
import { useAuth } from "@/hooks/useAuth";
import { getInitials } from "@/lib/utils";

export function UserDropdownMenu() {
  const dispatch = useDispatch();
  const {user} = useAuth();

 //https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww
 const imageUrl= "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww";
 
  const signOut = () => {
    dispatch(logout());
   
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="overflow-hidden flex items-center gap-4">
        Hola, {user?.username}
        {imageUrl ? (
        <Avatar>
          <AvatarImage
            src={imageUrl}
            alt="@user"
            className="object-cover"
          />
          <AvatarFallback>
            U
          </AvatarFallback>
        </Avatar>
        ) : (
           <Avatar>
          <AvatarImage
            src=""
            alt="@user"
            className="object-cover"
          />
          <AvatarFallback>
            {getInitials(user.name, user.lastname)}
          </AvatarFallback>
        </Avatar>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4">
        <DropdownMenuLabel>Opciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link className="flex items-center" to="/profile">
          <Button
            variant="ghost"
            className="w-full flex items-center justify-start"
          >
            <UserCircle className="mr-2 h-4 w-4" /> Perfil
          </Button>
        </Link>
        <Button
          variant="ghost"
          className="w-full flex items-center justify-start"
          onClick={signOut}
        >
          <LogOut className="mr-2 h-4 w-4" /> Salir
        </Button>
        <ModeToggle />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
