import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar"
import { Card } from "../../ui/card"

export function TeamMemberCard({ name, instagram, avatar, variant }) {
  const cardClasses = variant === "primary" ? "bg-(--ciano-bt) text-(--text-normal-color)" : "flex items-end bg-(--bg-robot) text-(--text-normal-color)"

  return (
    <Card className={`${cardClasses} p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-0`}>
      <div className={variant === "primary" ? 'flex items-center gap-4' : 'dark:text-[black] flex flex-row-reverse items-center gap-4' }>
        <Avatar className="w-16 h-16">
          <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
          <AvatarFallback className="bg-muted text-muted-foreground text-lg font-semibold">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-sm opacity-90">Instagram: {instagram}</p>
        </div>
      </div>
    </Card>
  )
}