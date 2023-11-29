import { UserDetail as UserDetailType } from "@/types/auth";

interface Props {
  user: UserDetailType;
}

export function UserDetail({ user }: Props) {
  return (
    <div className="pt-8">
      <div className="flex flex-col items-center gap-4">
        <img
          src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww"
          alt="perfil"
          className="rounded-full w-48 h-48 2xl:w-60 2xl:h-60 flex-initial object-cover"
        />
        <p className="flex flex-col items-center">
          {user.nombre} {user.apellidos}
          <span className="text-muted-foreground">{user.position_name}</span>
        </p>
      </div>
    </div>
  );
}
