import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const servicesData = [
  { id: 1, name: "Corte de cabelo", price: 15 },
  { id: 2, name: "Cabelo e barba", price: 20 },
  { id: 3, name: "Cabelo e sobrancelha", price: 17 },
  { id: 10, name: "Barba", price: 10 },
  { id: 5, name: "Alisamento", price: 40 },
  { id: 6, name: "Escova", price: 25 },
  { id: 12, name: "Descoloração", price: 35 },
];

const barbers = [
  {
    id: 1,
    name: "Gabriel Souza",
    image: "https://github.com/ryanx3.png",
  },
];

export default function BarberServices({ params }: { params: { barberId: string } }) {
  return (
    <div className="min-h-screen bg-foreground flex flex-col items-center py-6 px-4">
      {barbers.map((barber) => (
        <div key={barber.id} className="flex flex-col items-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src={barber.image} alt={barber.name} />
            <AvatarFallback>{barber.name}</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-semibold text-background mt-4">{barber.name}</h1>
        </div>
      ))}

      <div className="grid gap-4 w-full max-w-md mt-8">
        {servicesData.map((service) => (
          <Button
            key={service.id}
            className="flex justify-between items-center text-sm rounded-lg px-6 py-4 bg-background text-foreground hover:bg-background/90"
          >
            <span>{service.name}</span>
            <span className="font-semibold">{service.price}€</span>
          </Button>
        ))}
      </div>
    </div>
  );
}