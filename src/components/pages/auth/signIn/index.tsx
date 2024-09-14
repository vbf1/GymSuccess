import { Barbell } from "@phosphor-icons/react";

export const SignInPage = () => {
  return (
    <div className="bg-black w-[28rem] md:w-[50vw] flex flex-col justify-center h-screen items-center space-y-10">
      <Barbell size={60} className="text-yellow-400" weight="fill" />
      <div className="text-yellow-400 font-bold text-5xl">Seja Bem-Vindo</div>

      <div className="text-white font-bold text-2xl  w-[40rem] text-center">
        Vamos começar? <span className="text-yellow-400">Faça login</span> para
        explorar todos os recursos exclusivos da
      </div>
      <div className="text-white font-bold text-3xl">
        <span className="text-yellow-400">G</span>ymSucess
      </div>
      <div className="text-yellow-400 font-bold text-lg underline underline-offset-4 cursor-pointer">
        Esqueci minha senha
      </div>
      <div className="text-center">
        <div className="inline-flex gap-2 items-center border border-yellow-400  px-14 py-2 rounded-2xl mt-32">
          <button type="submit" className="font-bold text-white">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};
