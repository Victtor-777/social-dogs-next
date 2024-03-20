export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
}
