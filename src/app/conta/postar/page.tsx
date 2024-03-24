import ContaPhotoPost from "@/components/conta/conta-photo-post";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Minha Conta | Postar",
};

export default async function PostarPage() {
  return (
    <div>
      <ContaPhotoPost />
    </div>
  );
}
