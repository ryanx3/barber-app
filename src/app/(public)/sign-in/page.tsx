import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {

  async function handleSignIn() {
    console.log("Hello")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent">
      <img src='/bg.avif' alt="" className="object-cover w-full h-full absolute -z-10" />

      <div className="text-center space-y-4">
        <h1 className="text-2xl font-semibold text-white">Acesse sua conta</h1>
        <p className="text-zinc-300 text-sm">
          Gerencie seus horários facilmente
        </p>

        <Button
          className="w-full"
          size='lg'
        >

          <FcGoogle className="w-5 h-5" />
          Entrar com Google

        </Button>

        <p className="text-xs text-zinc-300">
          Ao continuar, você aceita os nossos <br /><strong>
            Termos de Uso
          </strong> e <strong>
            Privacidade
          </strong>
        </p>
      </div>
    </div>
  );
}
