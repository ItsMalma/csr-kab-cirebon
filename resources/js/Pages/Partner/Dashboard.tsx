import Badge from "@/Components/Badge";
import BarChart from "@/Components/BarChart";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import PieChart from "@/Components/PieChart";
import Select from "@/Components/Select";
import Table from "@/Components/Table";
import PartnerLayout from "@/Layouts/PartnerLayout";
import { formatMoney } from "@/utils/format";
import { router } from "@inertiajs/react";
import {
  IconArrowDown,
  IconDownload,
  IconLayout,
  IconPlus,
  IconRefresh,
  IconRosetteDiscountCheck,
} from "@tabler/icons-react";
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

export default function Dashboard({ reports }: DashboardProps) {
  return (
    <PartnerLayout title="Dashboard">
      <div className="relative flex flex-col items-center justify-center w-full h-60">
        <div className="z-10 flex flex-col items-center justify-center gap-2 text-base-white">
          <h1 className="font-semibold text-4xl leading-13.5">
            Selamat Datang di Dashboard CSR Kabupaten Cirebon
          </h1>
          <p className="text-2xl leading-8">
            Lapor dan ketahui program CSR Anda
          </p>
        </div>
        <img
          src="/images/partner-hero.png"
          alt="partner hero"
          className="absolute w-full h-full object-cover"
        />
        <span className="absolute top-0 left-0 bg-brand-gray-900/60 w-full h-full"></span>
      </div>
      <main className="grow w-full flex flex-col px-25 py-15 gap-15">
        <div className="w-full container flex flex-col gap-6">
          <div className="w-full flex gap-4">
            <div className="grow flex gap-4">
              <Select
                options={[
                  {
                    text: "2024",
                    value: 2024,
                  },
                  {
                    text: "2023",
                    value: 2023,
                  },
                  {
                    text: "2022",
                    value: 2022,
                  },
                  {
                    text: "2021",
                    value: 2021,
                  },
                ]}
                onChange={(option) => {}}
                classNames={{
                  button: "basis-1/2",
                }}
              />
              <Select
                options={[
                  { text: "Kuartal 1 (Januari, Februari, Maret)", value: 1 },
                  { text: "Kuartal 2 (April, Mei, Juni)", value: 2 },
                  { text: "Kuartal 3 (Juli, Agustus, September)", value: 3 },
                  { text: "Kuartal 4 (Oktober, November, Desember)", value: 4 },
                ]}
                onChange={(option) => {}}
                classNames={{
                  button: "basis-1/2",
                }}
              />
            </div>
            <Button text="Terapkan filter" size="md" hierarchy="primary" />
            <Button
              text="Unduh .csv"
              size="md"
              hierarchy="secondary gray"
              iconLeading={IconDownload}
              className="bg-white text-yellow-green-600"
            />
            <Button
              text="Unduh .pdf"
              size="md"
              hierarchy="secondary gray"
              iconLeading={IconDownload}
              className="bg-white text-brand-primary-red-900"
            />
          </div>
          <h2 className="font-semibold text-2.5xl leading-11 tracking-tight text-brand-gray-900">
            Data Statistik
          </h2>
          <div className="w-full flex items-center gap-6">
            <div className="basis-1/3 flex flex-col gap-3 p-4 rounded-xl bg-semantic-color-orange-500">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-semantic-color-orange-100 border-4 border-semantic-color-orange-50 flex items-center justify-center">
                  <IconLayout
                    size={16}
                    className="text-semantic-color-orange-500"
                  />
                </div>
                <h3 className="font-medium text-sm leading-5 text-base-white">
                  Total Proyek CSR
                </h3>
              </div>
              <div className="w-full flex p-4 rounded-lg bg-base-white/30 border border-base-white/50">
                <p className="font-bold text-xl leading-6 text-base-white">
                  1000
                </p>
              </div>
            </div>
            <div className="basis-1/3 flex flex-col gap-3 p-4 rounded-xl bg-yellow-purple-500">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-yellow-purple-100 border-4 border-yellow-purple-50 flex items-center justify-center">
                  <IconRosetteDiscountCheck
                    size={16}
                    className="text-yellow-purple-500"
                  />
                </div>
                <h3 className="font-medium text-sm leading-5 text-base-white">
                  Proyek Terealisasi
                </h3>
              </div>
              <div className="w-full flex p-4 rounded-lg bg-base-white/30 border border-base-white/50">
                <p className="font-bold text-xl leading-6 text-base-white">
                  1000
                </p>
              </div>
            </div>
            <div className="basis-1/3 flex flex-col gap-3 p-4 rounded-xl bg-semantic-color-green-500">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-semantic-color-green-100 border-4 border-semantic-color-green-50 flex items-center justify-center">
                  <IconRosetteDiscountCheck
                    size={16}
                    className="text-semantic-color-green-500"
                  />
                </div>
                <h3 className="font-medium text-sm leading-5 text-base-white">
                  Dana Realisasi CSR Mitra
                </h3>
              </div>
              <div className="w-full flex p-4 rounded-lg bg-base-white/30 border border-base-white/50">
                <p className="font-bold text-xl leading-6 text-base-white">
                  {formatMoney(100000000)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full container flex flex-col gap-6">
          <h2 className="font-semibold text-2.5xl leading-11 tracking-tight text-brand-gray-900">
            Realisasi Proyek CSR
          </h2>
          <div className="w-full rounded-xl flex flex-col gap-5 bg-base-white border border-gray-iron-200 shadow p-10">
            <div className="flex gap-5">
              <div className="basis-1/2 flex flex-col gap-5">
                <h3 className="font-semibold text-2xl leading-7 text-brand-gray-900">
                  Persentase total realisasi berdasarkan sektor CSR
                </h3>
                <PieChart
                  data={[
                    {
                      label: "Sosial",
                      value: 100,
                      color: "semantic-color-blue-500",
                    },
                    {
                      label: "Lingkungan",
                      value: 100,
                      color: "gray-blue-500",
                    },
                    {
                      label: "Kesehatan",
                      value: 100,
                      color: "yellow-purple-500",
                    },
                    {
                      label: "Pendidikan",
                      value: 100,
                      color: "yellow-pink-500",
                    },
                    {
                      label: "Infrastruktur dan lingkungan",
                      value: 100,
                      color: "semantic-color-red-700",
                    },
                    {
                      label: "Sarana dan prasarana keagamaan",
                      value: 100,
                      color: "semantic-color-orange-500",
                    },
                    {
                      label: "Lainnya",
                      value: 100,
                      color: "yellow-400",
                    },
                  ]}
                />
              </div>
              <div className="basis-1/2 flex flex-col gap-5">
                <h3 className="font-semibold text-2xl leading-7 text-brand-gray-900">
                  Total realisasi sektor CSR
                </h3>
                <BarChart
                  data={[
                    {
                      label: "Sosial",
                      value: 100000,
                      color: "semantic-color-blue-500",
                    },
                    {
                      label: "Lingkungan",
                      value: 30000,
                      color: "gray-blue-500",
                    },
                    {
                      label: "Kesehatan",
                      value: 50000,
                      color: "yellow-purple-500",
                    },
                    {
                      label: "Pendidikan",
                      value: 45000,
                      color: "yellow-pink-500",
                    },
                    {
                      label: "Infrastruktur dan lingkungan",
                      value: 120000,
                      color: "semantic-color-red-700",
                    },
                    {
                      label: "Sarana dan prasarana keagamaan",
                      value: 10000,
                      color: "semantic-color-orange-500",
                    },
                    {
                      label: "Lainnya",
                      value: 50000,
                      color: "yellow-400",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-2xl leading-7 text-brand-gray-900">
                Total realisasi proyek CSR berdasarkan lokasi
              </h3>
              <BarChart
                className="grow"
                data={[
                  {
                    label: "Kecamatan Waled",
                    value: 100000,
                    color: "semantic-color-blue-500",
                  },
                  {
                    label: "Kecamatan Pasaleman",
                    value: 30000,
                    color: "gray-blue-500",
                  },
                  {
                    label: "Kecamatan Ciledug",
                    value: 50000,
                    color: "yellow-purple-500",
                  },
                  {
                    label: "Kecamatan Losari",
                    value: 45000,
                    color: "yellow-pink-500",
                  },
                  {
                    label: "Kecamatan Pabedilan",
                    value: 120000,
                    color: "semantic-color-red-700",
                  },
                  {
                    label: "Kecamatan Gebang",
                    value: 10000,
                    color: "semantic-color-orange-500",
                  },
                  {
                    label: "Kecamatan Karangsembung",
                    value: 50000,
                    color: "yellow-400",
                  },
                  {
                    label: "Kecamatan Karangwareng",
                    value: 25000,
                    color: "yellow-green-light-500",
                  },
                  {
                    label: "Lainnya",
                    value: 70000,
                    color: "yellow-green-500",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="w-full container flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-2.5xl leading-11 tracking-tight text-brand-gray-900">
              Laporan Mitra
            </h2>
            <Button
              text="Buat Laporan Baru"
              size="lg"
              hierarchy="primary"
              iconLeading={IconPlus}
              className="h-13"
            />
          </div>
          <Input
            type="search"
            placeholder="Cari"
            classNames={{
              wrapper: "w-full h-13",
            }}
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
          <Button
            size="lg"
            hierarchy="tertiary gray"
            text="Muat Lebih Banyak"
            iconLeading={IconRefresh}
            className="h-13"
            onClick={() => router.visit(route("partner.reports"))}
          />
        </div>
      </main>
    </PartnerLayout>
  );
}
