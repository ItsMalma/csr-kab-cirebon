import BarChart from "@/Components/BarChart";
import Button from "@/Components/Button";
import { CardArticleProps } from "@/Components/CardArticle";
import Divider from "@/Components/Divider";
import Hero from "@/Components/Hero";
import PieChart from "@/Components/PieChart";
import Select from "@/Components/Select";
import GenericLayout from "@/Layouts/GenericLayout";
import { IconCalendar, IconDownload } from "@tabler/icons-react";
import { useState } from "react";

type ProgramReport = Pick<
  CardArticleProps,
  "image" | "title" | "description" | "date"
>;

const panduan = {
  "Penyerahan Proposal CSR":
    "Pihak penerima menyerahkan proposal terkait CSR kepada Perusahaan yang akan di tuju. Jika perusahaan meminta rekomendasi Bupati Cirebon maka pihak penerima perlu membuat surat permohonan penerbitan surat rekomendasi CSR kepada Bupati dengan melampirkan dokumen proposal kegiatan.",
  "Permohonan Penerbitan Surat CSR":
    "Permohonan penerbitan surat rekomendasi CSR yang sudah masuk akan di disposisikan kepada Bagian Perekonomian dan SDA untuk di tindak lanjuti. Setelah Surat rekomendasi CSR di tandatangani Bupati maka pihak penerima perlu mengambil surat tersebut dan menyerahkan nya kepada perusahaan.",
  "Laporan CSR":
    "Setelah perusahaan menerima surat rekomendasi CSR maka selanjutnya pihak perusahaan berhubungan langsung dengan pihak penerima tanpa ada intervensi dari pemda, di akhir tahun berjalan perusahaan yang mengeluarkan CSR perlu melaporkan penyaluran CSR tersebut kepada Pemda sebagai laporan kepada Bupati.",
};

export default function Statistics() {
  const [metrics, setMetrics] = useState({
    "Total Proyek CSR": 124,
    "Proyek Terealisasi": 119,
    "Mitra Bergabung": 89,
    "Dana Terealisasi CSR": "Rp200T +",
  });

  return (
    <GenericLayout
      title="Statistics"
      hero={{
        className: "h-[30vw]",
        display: (
          <Hero.BreadcumbDisplay
            path={[{ name: "Beranda", href: route("home") }, "Statistik"]}
            title="Statistik"
            description="Program CSR yang sudah berjalan di kabupaten cirebon"
          />
        ),
      }}
    >
      <section className="px-25 pt-16 pb-24 w-full">
        <div className="flex flex-col gap-16 container items-center">
          <div className="w-full flex flex-col items-center">
            <Divider />
            <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
              Data Statistik
            </h2>
          </div>
          <div className="w-full flex gap-6">
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
                button: "w-112.5",
              }}
              icon={IconCalendar}
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
                button: "w-112.5",
              }}
              icon={IconCalendar}
            />
            <div className="flex items-center gap-4">
              <Button
                size="md"
                hierarchy="secondary gray"
                text="Tampilkan"
                className="h-11"
                iconLeading={IconDownload}
              />
              <Button
                size="md"
                hierarchy="secondary gray"
                text="Download"
                className="h-11"
                iconLeading={IconDownload}
              />
            </div>
          </div>
          <div className="w-full flex gap-8 px-8">
            {Object.entries(metrics).map(([title, value]) => (
              <div
                key={title}
                className="grow flex flex-col gap-1 pl-6 border-l-2 border-brand-primary-red-200"
              >
                <h3 className="font-semibold text-5xl leading-15 tracking-[-1px] text-brand-primary-red-950">
                  {value}
                </h3>
                <h4 className="text-lg leading-6.5 text-brand-gray-900">
                  {title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-25 py-15 w-full">
        <div className="flex flex-col gap-5 container items-center">
          <div className="w-full flex flex-col pb-5">
            <Divider />
            <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
              Realisasi Proyek CSR
            </h2>
          </div>
          <div className="w-full flex gap-5 p-8 bg-gray-cool-50">
            <div className="flex flex-col gap-5 basis-1/2">
              <h3 className="font-semibold text-2xl leading-7 text-brand-gray-900">
                Persentase jumlah realisasi proyek per sektor
              </h3>
              <div className="w-full flex gap-5 items-center">
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
            </div>
            <div className="flex flex-col gap-5 basis-1/2">
              <h3 className="font-semibold text-2xl leading-7 text-brand-gray-900">
                Total realisasi proyek per sektor
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
          <div className="w-full flex gap-5 p-8 bg-gray-cool-50">
            <div className="flex flex-col gap-5 basis-1/2">
              <h3 className="font-semibold text-2xl leading-7 text-brand-gray-900">
                Jumlah realisasi terbanyak berdasarkan mitra
              </h3>
              <BarChart
                className="grow"
                data={[
                  {
                    label: "Nama PT Mitra A",
                    value: 100000,
                    color: "semantic-color-blue-500",
                  },
                  {
                    label: "Nama PT Mitra B",
                    value: 30000,
                    color: "gray-blue-500",
                  },
                  {
                    label: "Nama PT Mitra C",
                    value: 50000,
                    color: "yellow-purple-500",
                  },
                  {
                    label: "Nama PT Mitra D",
                    value: 45000,
                    color: "yellow-pink-500",
                  },
                  {
                    label: "Nama PT Mitra E",
                    value: 120000,
                    color: "semantic-color-red-700",
                  },
                  {
                    label: "Nama PT Mitra F",
                    value: 10000,
                    color: "semantic-color-orange-500",
                  },
                  {
                    label: "Nama PT Mitra G",
                    value: 50000,
                    color: "yellow-400",
                  },
                  {
                    label: "Nama PT Migra H",
                    value: 25000,
                    color: "yellow-green-light-500",
                  },
                  {
                    label: "Nama PT Migra I",
                    value: 70000,
                    color: "yellow-green-500",
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-5 basis-1/2">
              <h3 className="font-semibold text-2xl leading-7 text-brand-gray-900">
                Jumlah realisasi terbanyak berdasarkan kecamatan
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
      </section>
    </GenericLayout>
  );
}
