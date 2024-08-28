import Badge from "@/Components/Badge";
import Button from "@/Components/Button";
import Contact from "@/Components/Contact";
import Input from "@/Components/Input";
import Table from "@/Components/Table";
import PartnerLayout from "@/Layouts/PartnerLayout";
import { formatMoney } from "@/utils/format";
import { IconArrowDown, IconPlus } from "@tabler/icons-react";
import { format } from "date-fns";

type DashboardProps = {
  reports: {
    title: string;
    location: string;
    realization: number;
    realizationDate: Date;
    createdAt: Date;
    status: "Diterima" | "Revisi";
  }[];
};

export default function ReportList({ reports }: DashboardProps) {
  return (
    <PartnerLayout title="Daftar Laporan">
      <main className="grow w-full flex flex-col px-25 py-10 gap-10">
        <PartnerLayout.Breadcrumb
          items={[{ label: "Laporan", href: route("partner.reports") }]}
        />
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-2.5xl leading-11 tracking-tight">
              Laporan Mitra
            </h1>
            <Button
              size="lg"
              hierarchy="primary"
              iconLeading={IconPlus}
              text="Buat Laporan Baru"
              className="h-13"
            />
          </div>
          <Input
            type="search"
            placeholder="Cari laporan"
            classNames={{ wrapper: "w-full h-13" }}
          />
          <Table
            className="w-full rounded-xl overflow-hidden shadow"
            columns={[
              {
                name: (
                  <div className="flex px-6 py-3 items-center gap-1 text-brand-gray-900 ">
                    <p className="font-semibold text-sm leading-4.5 uppercase">
                      Judul
                    </p>
                    <IconArrowDown size={16} className="text-brand-gray-900" />
                  </div>
                ),
                data: reports.map((report) => (
                  <div className="min-h-15 flex px-6 py-4 items-center justify-start">
                    <p className="text-base leading-5 text-brand-gray-700">
                      {report.title}
                    </p>
                  </div>
                )),
                classNames: {
                  head: "bg-base-white",
                  body: "bg-base-white",
                },
              },
              {
                name: (
                  <div className="flex px-6 py-3 items-center gap-1 text-brand-gray-900 ">
                    <p className="font-semibold text-sm leading-4.5 uppercase">
                      Lokasi
                    </p>
                    <IconArrowDown size={16} className="text-brand-gray-900" />
                  </div>
                ),
                data: reports.map((report) => (
                  <div className="min-h-15 flex px-6 py-4 items-center justify-start">
                    <p className="text-base leading-5 text-brand-gray-700">
                      {report.location}
                    </p>
                  </div>
                )),
                classNames: {
                  head: "bg-base-white",
                  body: "bg-base-white",
                },
              },
              {
                name: (
                  <div className="flex px-6 py-3 items-center gap-1 text-brand-gray-900 ">
                    <p className="font-semibold text-sm leading-4.5 uppercase">
                      Realisasi
                    </p>
                    <IconArrowDown size={16} className="text-brand-gray-900" />
                  </div>
                ),
                data: reports.map((report) => (
                  <div className="min-h-15 flex px-6 py-4 items-center justify-start">
                    <p className="text-base leading-5 text-brand-gray-700">
                      {formatMoney(report.realization)}
                    </p>
                  </div>
                )),
                classNames: {
                  head: "bg-base-white",
                  body: "bg-base-white",
                },
              },
              {
                name: (
                  <div className="flex px-6 py-3 items-center gap-1 text-brand-gray-900 ">
                    <p className="font-semibold text-sm leading-4.5 uppercase">
                      Tanggal Realisasi
                    </p>
                    <IconArrowDown size={16} className="text-brand-gray-900" />
                  </div>
                ),
                data: reports.map((report) => (
                  <div className="min-h-15 flex px-6 py-4 items-center justify-start">
                    <p className="text-base leading-5 text-brand-gray-700">
                      {format(report.realizationDate, "d MMMM y")}
                    </p>
                  </div>
                )),
                classNames: {
                  head: "bg-base-white",
                  body: "bg-base-white",
                },
              },
              {
                name: (
                  <div className="flex px-6 py-3 items-center gap-1 text-brand-gray-900 ">
                    <p className="font-semibold text-sm leading-4.5 uppercase">
                      Laporan Dikirim
                    </p>
                    <IconArrowDown size={16} className="text-brand-gray-900" />
                  </div>
                ),
                data: reports.map((report) => (
                  <div className="min-h-15 flex px-6 py-4 items-center justify-start">
                    <p className="text-base leading-5 text-brand-gray-700">
                      {format(report.createdAt, "d MMMM y")}
                    </p>
                  </div>
                )),
                classNames: {
                  head: "bg-base-white",
                  body: "bg-base-white",
                },
              },
              {
                name: (
                  <div className="flex px-6 py-3 items-center gap-1 text-brand-gray-900 ">
                    <p className="font-semibold text-sm leading-4.5 uppercase">
                      Status
                    </p>
                    <IconArrowDown size={16} className="text-brand-gray-900" />
                  </div>
                ),
                data: reports.map((report) => (
                  <div className="min-h-15 flex px-6 py-4 items-center justify-start">
                    <p className="text-base leading-5 text-brand-gray-700">
                      <Badge
                        size="sm"
                        color={
                          report.status === "Diterima" ? "success" : "warning"
                        }
                        text={report.status}
                      />
                    </p>
                  </div>
                )),
                classNames: {
                  head: "bg-base-white",
                  body: "bg-base-white",
                },
              },
              {
                name: (
                  <div className="flex px-6 py-3 items-center gap-1 text-brand-gray-900 ">
                    <p className="font-semibold text-sm leading-4.5 uppercase">
                      Aksi
                    </p>
                    <IconArrowDown size={16} className="text-brand-gray-900" />
                  </div>
                ),
                data: reports.map((report) => (
                  <div className="min-h-15 flex px-6 py-4 items-center justify-center">
                    <p className="text-base leading-5 text-brand-gray-700">
                      {report.title}
                    </p>
                  </div>
                )),
                classNames: {
                  head: "bg-base-white",
                  body: "bg-base-white",
                },
              },
            ]}
          />
        </div>
      </main>
      <Contact />
    </PartnerLayout>
  );
}
