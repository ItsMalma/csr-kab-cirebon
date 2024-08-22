import Button from "@/Components/Button";
import Divider from "@/Components/Divider";
import Hero from "@/Components/Hero";
import Remarks from "@/Components/Remarks";
import GenericLayout from "@/Layouts/GenericLayout";
import { format } from "date-fns";
import { useState } from "react";

type ProgramReport = {
  gambar: string;
  judul: string;
  deskripsi: string;
  tanggal: Date;
};

const panduan = {
  "Penyerahan Proposal CSR":
    "Pihak penerima menyerahkan proposal terkait CSR kepada Perusahaan yang akan di tuju. Jika perusahaan meminta rekomendasi Bupati Cirebon maka pihak penerima perlu membuat surat permohonan penerbitan surat rekomendasi CSR kepada Bupati dengan melampirkan dokumen proposal kegiatan.",
  "Permohonan Penerbitan Surat CSR":
    "Permohonan penerbitan surat rekomendasi CSR yang sudah masuk akan di disposisikan kepada Bagian Perekonomian dan SDA untuk di tindak lanjuti. Setelah Surat rekomendasi CSR di tandatangani Bupati maka pihak penerima perlu mengambil surat tersebut dan menyerahkan nya kepada perusahaan.",
  "Laporan CSR":
    "Setelah perusahaan menerima surat rekomendasi CSR maka selanjutnya pihak perusahaan berhubungan langsung dengan pihak penerima tanpa ada intervensi dari pemda, di akhir tahun berjalan perusahaan yang mengeluarkan CSR perlu melaporkan penyaluran CSR tersebut kepada Pemda sebagai laporan kepada Bupati.",
};

export default function About() {
  const [latestProgramReport, setLatestProgramReport] = useState<
    ProgramReport[]
  >([
    {
      gambar: "/images/program-report/1.png",
      judul: "Judul Laporan Program Terbaru",
      deskripsi:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      tanggal: new Date(),
    },
    {
      gambar: "/images/program-report/2.png",
      judul: "Judul Laporan Program Terbaru",
      deskripsi:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      tanggal: new Date(),
    },
    {
      gambar: "/images/program-report/3.png",
      judul: "Judul Laporan Program Terbaru",
      deskripsi:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      tanggal: new Date(),
    },
  ]);

  return (
    <GenericLayout
      title="Home"
      hero={{
        className: "h-[30vw]",
        display: (
          <Hero.BreadcumbDisplay
            path={[{ name: "Beranda", href: route("home") }, "Tentang"]}
            title="Tentang"
            description="Tentang CSR Kabupaten Cirebon"
          />
        ),
      }}
    >
      <section className="px-25 pt-16 pb-24 w-full">
        <div className="flex flex-col gap-5 container items-center">
          <div className="flex flex-col pb-5 justify-center">
            <Divider />
            <div className="flex gap-30">
              <h2 className="grow font-bold text-4.5xl leading-12 text-base-black-pearl">
                Apa Itu Kegiatan CSR?
              </h2>
              <p className="w-203 max-w-203 text-base leading-6 text-base-sonic-silver">
                Corporate Social Responsibility (CSR) merupakan konsep di mana
                perusahaan secara sadar mengintegrasikan kepedulian sosial dan
                lingkungan ke dalam operasional bisnisnya. Ini melibatkan
                tindakan sukarela yang memberikan manfaat bagi masyarakat,
                seperti program pendidikan, kesehatan, dan lingkungan, serta
                upaya untuk mengurangi dampak negatif terhadap lingkungan. CSR
                tidak hanya mencerminkan tanggung jawab perusahaan terhadap
                masyarakat, tetapi juga dapat meningkatkan reputasi dan daya
                saing bisnis.
              </p>
            </div>
          </div>
          <p className="text-base leading-6 text-base-sonic-silver">
            Berdasarkan Undang-Undang nomor 40  Tahun 2007 tentang Perseroan
            Terbatas (UUPT) pasal 1 ayat 3, pengertian Tanggung Jawab Sosial dan
            Lingkungan Perusahaan (TJSLP) atau Corporate Social Responsibility
            (CSR) adalah komitmen perseroan untuk berperan serta dalam
            pembangunan ekonomi berkelanjutan guna meningkatkan kualitas
            kehidupan dan lingkungan yang bermanfaat, baik bagi perseroan
            sendiri, komunitas setempat, maupun masyarakat pada umumnya.
          </p>
        </div>
      </section>
      <section className="px-25 pt-15 pb-24 w-full">
        <div className="flex container gap-20">
          <div className="flex flex-col h-95 max-h-95 justify-center items-center flex-wrap px-4 py-9.5 w-full">
            <div className="flex w-160 max-w-160">
              <div className="h-full flex flex-col px-2.5 py-5.5">
                <div className="flex h-40 max-h-40 relative">
                  <img
                    src="/images/tujuan/1.png"
                    alt="tujuan csr"
                    className="left-22.5 absolute shadow-[0px_5px_10px_0px_#00000026]"
                  />
                </div>
                <div className="flex h-50 max-h-50 justify-center items-center">
                  <img
                    src="/images/tujuan/2.png"
                    alt="tujuan csr"
                    className="shadow-[0px_5px_10px_0px_#00000026]"
                  />
                </div>
              </div>
              <div className="h-full flex justify-end px-2.5 pt-2.5 pb-7.75">
                <div className="flex items-center justify-center h-50 max-h-50">
                  <img
                    src="/images/tujuan/3.png"
                    alt="tujuan csr"
                    className="shadow-[0px_5px_10px_0px_#00000026]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col pb-5 justify-center">
              <Divider />
              <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl w-73.5 capitalize">
                Tujuan
              </h2>
            </div>
            <div className="flex flex-col gap-3.5 text-base leading-6 text-base-sonic-silver">
              <p>
                Maksud pemerintah kabupaten dalam Corporate Social
                Responsibility (CSR) adalah untuk menciptakan sinergi yang kuat
                antara pemerintah, perusahaan, dan masyarakat. Tujuan utama dari
                upaya ini adalah untuk mendorong pembangunan berkelanjutan di
                wilayah kabupaten. Dengan melibatkan perusahaan dalam program
                CSR, diharapkan dapat tercipta solusi komprehensif bagi berbagai
                permasalahan sosial dan lingkungan, sehingga kesejahteraan
                masyarakat dapat meningkat secara signifikan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-25 pt-30 pb-24 w-full overflow-hidden">
        <div className="flex gap-24 container items-center justify-center">
          <div className="basis-1/2 flex flex-col gap-5">
            <div className="flex flex-col mb-5 justify-center">
              <Divider />
              <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
                Manfaat
              </h2>
            </div>
            <div className="flex flex-col gap-3.5 text-base leading-6 text-base-sonic-silver">
              <p>
                Pemerintah kabupaten memperoleh banyak manfaat dari pelaksanaan
                CSR. Salah satu manfaat utama adalah percepatan pembangunan di
                berbagai sektor. Dengan adanya dukungan dana dan sumber daya
                dari perusahaan, pemerintah dapat lebih cepat mewujudkan
                program-program pembangunan yang telah direncanakan, seperti
                pembangunan infrastruktur, peningkatan kualitas pendidikan dan
                kesehatan, serta pengembangan ekonomi masyarakat.
              </p>
            </div>
          </div>
          <div className="basis-1/2 h-128 max-h-128 relative">
            <div className="absolute w-192 max-w-192 h-128 max-h-128 bg-brand-gray-100 overflow-hidden">
              <img
                src="/images/manfaat.png"
                alt="manfaat"
                className="absolute left-30.75 top-20.75 w-187.25 h-124.75 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-15 pb-24 w-full flex justify-center">
        <div className="flex flex-col gap-16 container items-center">
          <div className="flex flex-col items-center">
            <Divider />
            <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
              Laporan Program Terbaru
            </h2>
          </div>
          <div className="w-full flex flex-col px-8 gap-16 items-center">
            <div className="grid grid-cols-3 gap-8">
              {latestProgramReport.map((programReport) => (
                <div
                  key={programReport.judul}
                  className="flex flex-col items-stretch"
                >
                  <div className="w-full relative flex justify-center">
                    <img
                      src={programReport.gambar}
                      alt={`gambar ${programReport.judul.toLowerCase()}`}
                      className="w-full h-80 object-cover object-center"
                    />
                    <div className="absolute left-5 top-5 h-7.5 flex items-center justify-center px-3.5 bg-brand-primary-red-900">
                      <p className="font-semibold text-xxs leading-7.5 tracking-[1px] text-base-white">
                        {format(programReport.tanggal, "d LLL, y")}
                      </p>
                      <svg
                        width="14"
                        height="7"
                        viewBox="0 0 14 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-0 top-7.25"
                      >
                        <mask id="path-1-inside-1_7592_13793" fill="white">
                          <path d="M0 0H14V7H0V0Z" />
                        </mask>
                        <path
                          d="M14 0H28V-7H14V0ZM0 7H14V-7H0V7ZM0 0V7H28V0H0Z"
                          fill="url(#paint0_linear_7592_13793)"
                          mask="url(#path-1-inside-1_7592_13793)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_7592_13793"
                            x1="14"
                            y1="0"
                            x2="26.522"
                            y2="6.26099"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#EC7444" />
                            <stop stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3.5 px-6 pt-8 pb-10 border border-base-platinum">
                    <h3 className="font-semibold text-xl+ leading-6.75 text-base-chinese-black">
                      {programReport.judul}
                    </h3>
                    <p className="text-sm+ leading-6.75 text-base-sonic-silver line-clamp-3">
                      {programReport.deskripsi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              hierarchy="secondary gray"
              text="Lihat semua laporan program"
              className="w-fit h-13 text-brand-gray-700 text-base"
            />
          </div>
        </div>
      </section>
      <Remarks />
      <section className="px-25 pt-24 pb-30 w-full bg-brand-gray-900">
        <div className="flex flex-col gap-16 container items-center">
          <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col items-center">
              <Divider />
              <h2 className="font-bold text-4.5xl leading-12 text-base-white">
                Panduan
              </h2>
            </div>
            <p className="text-xl leading-7.5 text-base-white">
              Bagaimana proses CSR berlangsung
            </p>
          </div>
          <div className="flex px-28">
            <div className="relative">
              <div className="flex gap-4">
                {Object.entries(panduan).map(([title, description], index) => (
                  <div key={title} className="flex flex-col gap-4 items-center">
                    <div className="z-10 w-10 h-10 rounded-xl flex items-center justify-center bg-brand-primary-red-900">
                      <p className="font-semibold text-2xl leading-7.25 text-base-white">
                        {index + 1}
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 pt-2">
                      <h3 className="font-semibold text-base leading-6 text-base-white">
                        {title}
                      </h3>
                      <p className="text-sm leading-6 text-base-white text-center">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute w-180.5 h-0.5 top-4.75 left-0 right-0 mx-auto bg-base-white"></div>
            </div>
          </div>
          <Button
            size="lg"
            hierarchy="primary"
            text="Ajukan surat rekomendasi CSR"
            className="h-13"
          />
        </div>
      </section>
    </GenericLayout>
  );
}
