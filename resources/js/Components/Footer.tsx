import Button from "./Button";

export type FooterProps = {
  buttonText: string;
};

export default function Footer({ buttonText }: FooterProps) {
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
          text={buttonText}
          size="lg"
          hierarchy="secondary gray"
          className="text-base-white"
        />
      </div>
    </footer>
  );
}
