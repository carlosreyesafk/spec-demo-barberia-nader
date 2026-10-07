export const metadata = {
  title: "Barbería Nader | Barbería en Calle Mercedes, Santo Domingo",
  description:
    "Barbería Nader — cortes de cabello, afeitado con navaja y arreglo de barba en la Calle Mercedes, Santo Domingo. Reserva tu turno por WhatsApp: (829) 933-9091.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
