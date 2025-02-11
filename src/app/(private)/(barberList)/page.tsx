import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const barbers = [
  {
    id: 1,
    name: "Gabriel Souza",
    image: "https://github.com/ryanx3.png",
  },
  {
    id: 2,
    name: "Lucas Oliveira",
    image: "https://github.com/maykbrito.png",
  },
  {
    id: 3,
    name: "Mateus Lima",
    image: "https://github.com/birobirobiro.png",
  },
];

export default function BarberList() {
  return (
    <div className="min-h-screen bg-foreground flex flex-col items-center py-6 px-4">
      <h1 className="text-2xl font-semibold text-background mb-6">
        Escolha seu barbeiro
      </h1>

      <div className="grid gap-6 w-full max-w-md">
        {barbers.map((barber) => (
          <Card key={barber.id} className="bg-secondary-foreground border border-border shadow-md rounded-lg">
            <CardContent className="p-5 flex items-center gap-4">
              <img
                src={barber.image}
                alt={barber.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-ring"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-background">{barber.name}</h2>
              </div>
              <Button className="bg-background text-foreground text-sm hover:bg-primary/90">
                Ver horários
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
