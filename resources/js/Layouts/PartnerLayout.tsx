import Avatar from "@/Components/Avatar";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Indicator from "@/Components/Indicator";
import Notification, { NotificationItem } from "@/Components/Notification";
import { Head, router } from "@inertiajs/react";
import { IconBell, IconChevronRight, IconHome } from "@tabler/icons-react";
import { Fragment, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PartnerHeaderProps = {
  user: {
    name: string;
    avatar?: string;
  };
  notifications: NotificationItem[];
};

function PartnerHeader({ user, notifications }: PartnerHeaderProps) {
  return (
    <Header>
      <div className="container flex items-center justify-between">
        <img src="/images/logo.svg" alt="logo" className="w-36" />
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <p className="font-medium text-base leading-6 text-brand-gray-900">
              {user.name}
            </p>
            <p className="text-base leading-5 text-brand-gray-500">Mitra</p>
          </div>
          <Avatar src={user.avatar} alt={`avatar ${user.name}`} />
          <Notification items={notifications}>
            <Indicator content={notifications.length}>
              <IconBell size={24} className="text-brand-gray-900" />
            </Indicator>
          </Notification>
        </div>
      </div>
    </Header>
  );
}

export type PartnerLayoutProps = {
  children: ReactNode;
  title: string;
};

function PartnerLayout({ children, title }: PartnerLayoutProps) {
  return (
    <div className="bg-brand-gray-100 flex flex-col min-h-screen">
      <Head title={title} />
      <PartnerHeader
        user={{ name: "John Doe" }}
        notifications={[
          {
            status: "revisi",
            title: "Laporan pengadaan perkakas masak untuk desa",
            description:
              "Foto tidak sesuai dengan judul dan sektor CSR laporan",
          },
          {
            status: "diterima",
            title: "Laporan pengadaan perkakas masak untuk desa",
          },
          {
            status: "ditolak",
            title: "Laporan pengadaan perkakas masak untuk desa",
            description:
              "Foto tidak sesuai dengan judul dan sektor CSR laporan",
          },
          {
            status: "diterima",
            title: "Laporan pengadaan perkakas masak untuk desa",
          },
          {
            status: "diterima",
            title: "Laporan pengadaan perkakas masak untuk desa",
          },
          {
            status: "diterima",
            title: "Laporan pengadaan perkakas masak untuk desa",
          },
          {
            status: "diterima",
            title: "Laporan pengadaan perkakas masak untuk desa",
          },
        ]}
      />
      {children}
      <Footer buttonText="Kembali ke Halaman Utama" />
    </div>
  );
}

type PartnerBreadcrumbProps = {
  className?: string;
  items: { label: string; href: string }[];
};

PartnerLayout.Breadcrumb = function PartnerBreadcrumb({
  className,
  items,
}: PartnerBreadcrumbProps) {
  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      <button
        className="p-1"
        onClick={() => router.visit(route("partner.dashboard"))}
      >
        <IconHome size={20} className="text-brand-gray-500" />
      </button>
      {items.map((item, index) => (
        <Fragment key={index}>
          <IconChevronRight size={16} className="text-brand-gray-500" />
          <span></span>
          <button
            className="flex items-center justify-center px-2 py-1 bg-brand-primary-red-100 font-medium text-sm leading-5 text-brand-primary-red-900 rounded-md"
            onClick={() => {
              router.visit(item.href);
            }}
          >
            {item.label}
          </button>
        </Fragment>
      ))}
    </div>
  );
};

export default PartnerLayout;
