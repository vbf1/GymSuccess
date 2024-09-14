import { FacebookLogo, GoogleLogo, LinkedinLogo } from "@phosphor-icons/react";
import { CreateUserForm } from "./form";

export const SignOutPage = () => {
  return (
    <div className="bg-purple-950 w-[50vw] flex justify-center items-center h-screen">
      <div className="space-y-14">
        <div className="space-y-8 text-center">
          <div className="text-white text-5xl font-bold">Criar Conta</div>
          <div className="flex gap-4 justify-center">
            <FacebookLogo className="text-white cursor-pointer" size={45} />
            <GoogleLogo className="text-white cursor-pointer" size={45} />
            <LinkedinLogo className="text-white cursor-pointer" size={45} />
          </div>
          <div className="text-white text-2xl font-bold underline underline-offset-8">
            Registre-se com seu email
          </div>
        </div>

        <CreateUserForm />
      </div>
    </div>
  );
};
