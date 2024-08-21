import Button from "./Button";

const navItems = {
  Beranda: "beranda",
  Tentang: "tentang",
  Kegiatan: "kegiatan",
  Statistik: "statistik",
  Sektor: "sektor",
  Laporan: "laporan",
  Mitra: "mitra",
};

export default function Footer() {
  return (
    <footer className="px-25 py-8 flex justify-center items-center bg-brand-gray-900 sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <div className="flex flex-col gap-0.5 text-sm leading-7 text-base-white">
          <p>&copy; 2024 Corporate Social Responsibility Kabupaten Cirebon</p>
          <p>
            Pemkab Kabupaten Cirebon, Badan Pendapatan Daerah (Bapenda)
            Kabupaten Cirebon.
          </p>
        </div>
        <Button
          text="Masuk sebagai mitra"
          size="lg"
          hierarchy="secondary gray"
        />
      </div>
    </footer>
  );
}
