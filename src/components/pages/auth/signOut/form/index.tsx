import React from "react";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "@phosphor-icons/react";

const createUserFormSchema = z.object({
  name: z.string().min(5, { message: "Digite um nome Válido" }),
  email: z.string().email({ message: "Digite um email Válido" }),
  password: string().min(5, { message: "Digite uma senha Válida" }),
});

type createUserFormData = z.infer<typeof createUserFormSchema>;

export const CreateUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-16 w-[25rem]">
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-white">
              Nome
            </label>

            <input
              {...register("name")}
              placeholder="Digite seu nome completo"
              className="p-3 bg-purple-800 rounded-2xl focus:outline-none ring-purple-400 placeholder:text-gray-400 focus:ring-2 text-gray-50"
            />

            {errors.name && (
              <span className="text-white">{errors.name.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              {...register("email")}
              placeholder="Digite seu email"
              className="p-3 bg-purple-800 rounded-2xl focus:outline-none ring-purple-400 placeholder:text-gray-400 focus:ring-2 text-gray-50"
            />
            {errors.email && (
              <span className="text-white">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-white">
              Senha
            </label>
            <input
              {...register("password")}
              placeholder="Digite sua senha"
              className="p-3 bg-purple-800 rounded-2xl focus:outline-none ring-purple-400 placeholder:text-gray-400 focus:ring-2 text-gray-50"
            />
            {errors.password && (
              <span className="text-white">{errors.password.message}</span>
            )}
          </div>
        </div>

        <div className="text-center ">
          <div className="inline-flex gap-2 items-center bg-white px-8 py-2 rounded-2xl">
            <button type="submit" className="font-bold">
              Continuar
            </button>
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </form>
  );
};
