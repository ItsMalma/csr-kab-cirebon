import Avatar from "@/Components/Avatar";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Indicator from "@/Components/Indicator";
import { Head } from "@inertiajs/react";
import { IconBell } from "@tabler/icons-react";
import { ReactNode } from "react";

type PartnerHeaderProps = {
  user: {
    name: string;
    avatar?: string;
  };
  notifications: {}[];
};

function PartnerHeader({ user, notifications }: PartnerHeaderProps) {
  return (
    <Header>
      <div className="container flex items-center justify-between">
        <img src="/images/logo.svg" alt="logo" className="w-36" />
        <div className="flex items-center gap-4">
          <div className="flex flex-col justify-end">
            <p className="font-medium text-base leading-6 text-brand-gray-900">
              {user.name}
            </p>
            <p className="text-base leading-5 text-brand-gray-500">Mitra</p>
          </div>
          <Avatar src={user.avatar} alt={`avatar ${user.name}`} />
          <Indicator content={notifications.length}>
            <IconBell size={24} className="text-brand-gray-900" />
          </Indicator>
        </div>
      </div>
    </Header>
  );
}

export type PartnerLayoutProps = {
  children: ReactNode;
  title: string;
};

export default function PartnerLayout({ children, title }: PartnerLayoutProps) {
  return (
    <div className="bg-brand-gray-100 flex flex-col min-h-screen">
      <Head title={title} />
      <PartnerHeader user={{ name: "John Doe" }} notifications={[{}, {}, {}]} />
      {children}
      <Footer buttonText="Kembali ke Halaman Utama" />
    </div>
  );
}
