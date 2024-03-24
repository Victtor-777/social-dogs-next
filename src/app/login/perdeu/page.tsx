import LoginPerdeuForm from "@/components/login/login-perdeu-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs | Perdeu a Senha",
  description: "Recupere a sua senha",
};

// export const dynamic = "force-dynamic";

export default async function PerdeuPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LoginPerdeuForm />
    </div>
  );
}
