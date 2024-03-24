import LoginResetarForm from "@/components/login/login-resetar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs | Redefinir a senha",
  description: "Redefina a sua senha",
};

type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetarPage({
  searchParams,
}: ResetarSearchParams) {
  return (
    <div className="animeLeft">
      <h1 className="title">Redefina sua Senha</h1>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  );
}
