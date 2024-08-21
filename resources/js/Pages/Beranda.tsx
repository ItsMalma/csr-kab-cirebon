import Button from "@/Components/Button";
import Divider from "@/Components/Divider";
import FeaturedIcon from "@/Components/FeaturedIcon";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import {
  IconChevronRight,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { format, subDays } from "date-fns";
import { useMemo, useState } from "react";
import { twJoin } from "tailwind-merge";

const listOfNews = [
  {
    title: "Pemkab Cirebon Terima Bantuan PJU Tematik dari Bank BJB",
    date: new Date(),
    description:
      "Penyerahan bantuan ini dihadiri langsung oleh Penjabat (Pj) Bupati Cirebon, Drs H Wahyu Mijaya SH MSi di Pendopo Bupati Cirebon, Jumat (12/7/2024). “Kami berterima kasih kepada Bank BJB yang telah memberikan PJU untuk dipasang di beberapa titik di wilayah Sumber, Kabupaten Cirebon,” ujar Wahyu. Ia menjelaskan, bahwa pemasangan PJU di kawasan Sumber, yang dekat dengan kantor",
  },
  {
    title: "Berita kedua",
    date: subDays(new Date(), 2),
    description: "Deskripsi berita kedua",
  },
];
const newsCount = listOfNews.length;

function HeroBeranda() {
  const [page, setPage] = useState(1);
  const news = useMemo(() => listOfNews[page - 1], [page]);

  return (
    <Hero
      className="h-[65vw]"
      display={
        <>
          <div className="flex flex-col gap-3 text-base-white">
            <h1 className="font-bold text-6.5xl leading-19.25 capitalize">
              Selamat datang di portal CSR Kab. Cirebon
            </h1>
            <h2 className="font-semibold text-xl leading-9 capitalize">
              Ketahui dan kenali customer social responsibility terhadap
              Kabupaten Cirebon dari para Mitra.
            </h2>
          </div>
          <div className="flex gap-3.75">
            <hr className="w-[80%]" />
          </div>
        </>
      }
    >
      <div className="w-154 max-h-96 h-96 absolute right-24 bottom-0 flex flex-col p-12 gap-2.5 bg-brand-gray-900/85 backdrop-blur-2xl z-20">
        <div className="flex flex-col gap-3 text-base-white grow">
          <h1 className="font-bold text-2xl leading-7.25">{news.title}</h1>
          <span className="w-fit flex justify-center items-center px-3.5 bg-brand-primary-red-900 font-semibold text-xxs leading-7.5 tracking-[1px] uppercase">
            {format(news.date, "eeee, dd MMM yyyy")}
          </span>
          <p className="text-sm leading-6.25 capitalize grow line-clamp-5">
            {news.description}
          </p>
        </div>
        <div className="flex py-3.75">
          <hr className="w-[86%]" />
        </div>
        <div className="flex items-center gap-2 w-fit">
          {Array.from({ length: newsCount }).map((_, index) => (
            <span
              key={index}
              className={twJoin(
                "h-1.5 rounded-3.5xl cursor-pointer",
                index === page - 1
                  ? "w-12.5 bg-brand-primary-red-900"
                  : "w-4 bg-base-platinum"
              )}
              onClick={() => setPage(index + 1)}
            ></span>
          ))}
        </div>
      </div>
    </Hero>
  );
}

const listOfMitra = {
  "Mitra 1": "/images/mitra/1.png",
  "Mitra 2": "/images/mitra/2.png",
  "Mitra 3": "/images/mitra/3.png",
  "Mitra 4": "/images/mitra/4.png",
  "Mitra 5": "/images/mitra/5.png",
  "Mitra 6": "/images/mitra/6.png",
  "Mitra 7": "/images/mitra/7.png",
  "Mitra 8": "/images/mitra/8.png",
  "Mitra 9": "/images/mitra/9.png",
  "Mitra 10": "/images/mitra/10.png",
};
const mitraCount = Object.keys(listOfMitra).length;

function MitraSection() {
  return (
    <section className="px-25 py-24 w-full">
      <div className="flex flex-col gap-10 container ">
        <div className="flex flex-col">
          <Divider />
          <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl w-100">
            Mitra CSR Kabupaten Cirebon
          </h2>
        </div>
        <div className="grid grid-cols-5 justify-center items-center w-fit self-center">
          {Object.entries(listOfMitra).map(([name, src], index) => (
            <div
              key={name}
              className={twJoin(
                "flex justify-center items-center w-fit p-8.75 border-gray-modern-200",
                index < mitraCount - 5 && "border-b",
                index % 5 !== 4 && "border-r"
              )}
            >
              <img
                src={src}
                alt={`logo ${name}`}
                className="w-42.5 h-9 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const metricItems = {
  "Total Proyek CSR": 124,
  "Proyek Terealisasi": 119,
  "Mitra Bergabung": 89,
  "Dana Terealisasi CSR": "Rp200T +",
};

function StatistikSection() {
  return (
    <section className="px-25 pt-15 pb-24 w-full">
      <div className="flex flex-col gap-16 container items-center">
        <div className="flex flex-col items-center">
          <Divider />
          <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
            Data Statistik
          </h2>
        </div>
        <div className="flex px-8 gap-8">
          {Object.entries(metricItems).map(([title, value]) => (
            <div
              key={title}
              className="flex flex-col gap-1 pl-6 border-l-2 border-primary-red-200"
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
  );
}

function PenjelasanCSRSection() {
  return (
    <section className="px-25 pt-15 pb-30 w-full">
      <div className="flex container gap-20">
        <div className="flex flex-col h-120 max-h-120 justify-center items-center flex-wrap px-4 py-9.5 w-full">
          <div className="flex w-160 max-w-160">
            <div className="h-full flex flex-col px-2.5 py-5.5">
              <div className="flex h-40 max-h-40 relative">
                <img
                  src="/images/kegiatan/1.png"
                  alt="kegiatan csr"
                  className="left-22.5 absolute shadow-[0px_5px_10px_0px_#00000026]"
                />
              </div>
              <div className="flex h-50 max-h-50 justify-center items-center">
                <img
                  src="/images/kegiatan/2.png"
                  alt="kegiatan csr"
                  className="shadow-[0px_5px_10px_0px_#00000026]"
                />
              </div>
            </div>
            <div className="h-full flex justify-end items-center px-2.5 pt-2.5 pb-14.5">
              <div className="flex items-center justify-center h-50 max-h-50">
                <img
                  src="/images/kegiatan/3.png"
                  alt="kegiatan csr"
                  className="shadow-[0px_5px_10px_0px_#00000026]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col pb-5 justify-center">
            <Divider />
            <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl w-73.5 capitalize    ">
              Apa itu kegiatan CSR?
            </h2>
          </div>
          <div className="flex flex-col gap-3.5 text-base leading-6 text-base-sonic-silver">
            <p>
              Corporate Social Responsibility (CSR) merupakan konsep di mana
              perusahaan secara sadar mengintegrasikan kepedulian sosial dan
              lingkungan ke dalam operasional bisnisnya. Ini melibatkan tindakan
              sukarela yang memberikan manfaat bagi masyarakat, seperti program
              pendidikan, kesehatan, dan lingkungan, serta upaya untuk
              mengurangi dampak negatif terhadap lingkungan. CSR tidak hanya
              mencerminkan tanggung jawab perusahaan terhadap masyarakat, tetapi
              juga dapat meningkatkan reputasi dan daya saing bisnis.
            </p>
            <p>
              Berdasarkan Undang-Undang nomor 40  Tahun 2007 tentang Perseroan
              Terbatas (UUPT) pasal 1 ayat 3, pengertian Tanggung Jawab Sosial
              dan Lingkungan Perusahaan (TJSLP) atau Corporate Social
              Responsibility (CSR) adalah komitmen perseroan untuk berperan
              serta dalam pembangunan ekonomi berkelanjutan guna meningkatkan
              kualitas kehidupan dan lingkungan yang bermanfaat, baik bagi
              perseroan sendiri, komunitas setempat, maupun masyarakat pada
              umumnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const sectors: { [name: string]: Sector } = {
  Sosial: {
    image: "/images/sektor/1.png",
    description:
      "CSR dalam lingkup sosial merupakan komitmen perusahaan untuk memberikan kontribusi positif bagi masyarakat di sekitarnya. Ini melibatkan berbagai kegiatan yang bertujuan meningkatkan kualitas hidup masyarakat, seperti program pendidikan, kesehatan, pemberdayaan ekonomi, dan pengentasan kemiskinan. Melalui CSR sosial, perusahaan tidak hanya memenuhi tanggung jawab sosialnya, tetapi juga membangun hubungan yang baik dengan masyarakat, meningkatkan reputasi perusahaan, dan menciptakan dampak sosial yang berkelanjutan. Kegiatan CSR sosial dapat berupa bantuan langsung, seperti donasi, atau program jangka panjang yang melibatkan partisipasi aktif masyarakat, seperti pelatihan keterampilan dan pengembangan komunitas.",
  },
  Lingkungan: {
    image: "/images/sektor/1.png",
    description: "CSR dalam lingkup lingkungan",
  },
  Kesehatan: {
    image: "/images/sektor/1.png",
    description: "CSR dalam lingkup kesehatan",
  },
  Pendidikan: {
    image: "/images/sektor/1.png",
    description: "CSR dalam lingkup pendidikan",
  },
  "Infrastruktur dan sanitasi lingkungan": {
    image: "/images/sektor/1.png",
    description: "CSR dalam lingkup infrastruktur dan sanitasi lingkungan",
  },
  "Sarana dan prasarana keagamaan": {
    image: "/images/sektor/1.png",
    description: "CSR dalam lingkup sarana dan prasarana keagamaan",
  },
  Lainnya: {
    image: "/images/sektor/1.png",
    description: "CSR dalam lingkup lainnya",
  },
};
type Sector = {
  image: string;
  description: string;
};
type SectorName = keyof typeof sectors;

function SektorSection() {
  const sectorNames = useMemo<SectorName[]>(
    () => Object.keys(sectors) as SectorName[],
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const selected = useMemo<Sector>(() => {
    return sectors[sectorNames[selectedIndex]];
  }, [selectedIndex]);

  return (
    <section className="px-25 py-24 w-full bg-brand-gray-900">
      <div className="flex flex-col gap-16 container items-center">
        <div className="w-full flex flex-col gap-5 text-base-white">
          <div className="flex flex-col">
            <Divider />
            <h2 className="font-bold text-4.5xl leading-12">Sektor CSR</h2>
          </div>
          <p className="text-xl leading-7.5">
            Bidang sektor CSR Kabupaten Cirebon yang tersedia
          </p>
        </div>
        <div className="w-full flex gap-16 px-8">
          <div className="min-w-114 max-w-114 flex flex-col">
            {sectorNames.map((sectorName, index) => (
              <div
                key={sectorName}
                className={twJoin(
                  "flex gap-2 items-center p-4 pl-6 border-l-4 cursor-pointer",
                  index === selectedIndex
                    ? "bg-base-white/10 border-brand-primary-red-400 font-bold"
                    : "border-brand-gray-700"
                )}
                onClick={() => setSelectedIndex(index)}
              >
                <p className="grow text-xl leading-7.5 text-base-white whitespace-nowrap overflow-hidden overflow-ellipsis">
                  {sectorName}
                </p>
                <div className="w-6 h-6">
                  <IconChevronRight className="text-base-white" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col pl-20 grow">
            <div className="relative w-105.25 h-57.75">
              <span className="absolute w-57.75 h-57.75 bg-brand-primary-red-950"></span>
              <img
                src={selected.image}
                alt="sektor"
                className="absolute left-7.75"
              />
            </div>
            <div className="flex pt-5">
              <p className="text-base leading-6 text-base-white h-60 max-h-60 line-clamp-[10]">
                {selected.description}
              </p>
            </div>
            <div className="flex gap-6 pt-5 items-center">
              <Button size="lg" text="Lihat program tersedia" />
              <Button
                size="lg"
                hierarchy="secondary gray"
                text="Lihat realisasi program"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SambutanSection() {
  return (
    <section className="px-25 pt-30 pb-24 w-full overflow-hidden">
      <div className="flex gap-24 container items-center justify-center">
        <div className="basis-1/2 flex flex-col gap-5">
          <div className="flex flex-col mb-5 justify-center">
            <Divider />
            <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
              Sambutan Bupati Kabupaten Cirebon
            </h2>
          </div>
          <div className="flex flex-col gap-3.5 text-base leading-6 text-base-sonic-silver">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates nemo in consectetur nihil nam nesciunt, ut laboriosam
              minus vitae sint incidunt numquam ratione suscipit reiciendis quia
              tempore atque reprehenderit? Laudantium?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              omnis illum obcaecati temporibus officiis vitae nesciunt, tempora
              cumque suscipit recusandae fugit magnam fugiat aliquid adipisci
              atque voluptate ipsa enim asperiores!
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl leading-7.25 text-base-black-pearl">
              Drs. H. Imron Rosyadi, Lc., M.Ag., M.M.
            </p>
            <p className="text-base leading-6 text-base-sonic-silver">
              Bupati Kabupaten Cirebon
            </p>
          </div>
        </div>
        <div className="basis-1/2 h-128 max-h-128 relative">
          <div className="absolute w-192 max-w-192 h-128 max-h-128 bg-brand-gray-100 overflow-hidden">
            <img
              src="/images/sambutan.png"
              alt="sambutan"
              className="absolute left-30.75 top-20.75 w-187.25 h-124.75 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type Kegiatan = {
  gambar: string;
  judul: string;
  deskripsi: string;
  tanggal: Date;
  avatar: string;
  user: string;
};

function KegiatanSection() {
  const [daftarKegiatan, setDaftarKegiatan] = useState<Kegiatan[]>([
    {
      gambar: "/images/kegiatan/daftar-1.png",
      judul: "Judul Kegiatan Terbaru",
      deskripsi:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      tanggal: new Date(),
      avatar: "/images/avatar/1.webp",
      user: "John Doe",
    },
    {
      gambar: "/images/kegiatan/daftar-2.png",
      judul: "Judul Kegiatan Terbaru",
      deskripsi:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      tanggal: new Date(),
      avatar: "/images/avatar/1.webp",
      user: "John Doe",
    },
    {
      gambar: "/images/kegiatan/daftar-3.png",
      judul: "Judul Kegiatan Terbaru",
      deskripsi:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      tanggal: new Date(),
      avatar: "/images/avatar/1.webp",
      user: "John Doe",
    },
    {
      gambar: "/images/kegiatan/daftar-4.png",
      judul: "Judul Kegiatan Terbaru",
      deskripsi:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      tanggal: new Date(),
      avatar: "/images/avatar/1.webp",
      user: "John Doe",
    },
  ]);

  return (
    <section className="pt-15 pb-24 w-full flex justify-center">
      <div className="flex flex-col gap-16 container items-center">
        <div className="flex flex-col items-center">
          <Divider />
          <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
            Kegiatan Terbaru
          </h2>
        </div>
        <div className="w-full flex flex-col px-8 gap-16 items-center">
          <div className="grid grid-cols-4 gap-8">
            {daftarKegiatan.map((kegiatan) => (
              <div key={kegiatan.judul} className="flex flex-col items-stretch">
                <div className="w-full relative flex justify-center">
                  <img
                    src={kegiatan.gambar}
                    alt={`gambar ${kegiatan.judul.toLowerCase()}`}
                    className="w-full h-70 object-cover object-center"
                  />
                  <div className="absolute left-5 top-5 h-7.5 flex items-center justify-center px-3.5 bg-brand-primary-red-900">
                    <p className="font-semibold text-xxs leading-7.5 tracking-[1px] text-base-white">
                      {format(kegiatan.tanggal, "d LLL, y")}
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
                  <div className="flex gap-3 items-center">
                    <img
                      src={kegiatan.avatar}
                      alt={`avatar ${kegiatan.user}`}
                      className="w-8 h-8 rounded-full border-2 border-brand-primary-red-900"
                    />
                    <p className="font-semibold text-sm leading-5 text-base-sonic-silver">
                      {kegiatan.user}
                    </p>
                  </div>
                  <h3 className="font-semibold text-xl+ leading-6.75 text-base-chinese-black">
                    {kegiatan.judul}
                  </h3>
                  <p className="text-sm+ leading-6.75 text-base-sonic-silver line-clamp-3">
                    {kegiatan.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button
            size="lg"
            hierarchy="secondary gray"
            text="Lihat semua kegiatan"
            className="w-fit h-13 text-brand-gray-700 text-base"
          />
        </div>
      </div>
    </section>
  );
}

const faq: { [question: string]: string } = {
  "Apa itu CSR?":
    "CSR atau Corporate Social Responsibility adalah komitmen perusahaan untuk berkontribusi dalam pembangunan berkelanjutan dengan cara memberikan dampak positif bagi masyarakat dan lingkungan sekitar. Di Kabupaten Cirebon, CSR dapat diwujudkan melalui berbagai program seperti pendidikan, kesehatan, lingkungan, dan pemberdayaan masyarakat.",
  "Mengapa CSR penting di Kabupaten Cirebon?": "",
  "Bagaimana cara perusahaan di Kabupaten Cirebon menjalankan program CSR?": "",
  "Apa saja contoh program CSR di Kabupaten Cirebon?": "",
  "Bagaimana pemerintah Kabupaten Cirebon mendukung program CSR?": "",
};
type FAQQuestion = keyof typeof sectors;

function FAQSection() {
  const questions = useMemo<FAQQuestion[]>(
    () => Object.keys(faq) as FAQQuestion[],
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const answer = useMemo<string>(() => {
    return faq[questions[selectedIndex]];
  }, [selectedIndex]);

  return (
    <section className="px-25 py-24 w-full bg-brand-gray-900">
      <div className="flex flex-col gap-16 container items-center">
        <div className="w-full flex flex-col gap-5 text-base-white">
          <div className="flex flex-col">
            <Divider />
            <h2 className="font-bold text-4.5xl leading-12">
              Frequently Asked Question (FAQ)
            </h2>
          </div>
          <p className="text-xl leading-7.5">Pertanyaan yang sering muncul</p>
        </div>
        <div className="w-full flex gap-16 px-8">
          <div className="min-w-114 max-w-114 flex flex-col">
            {questions.map((question, index) => (
              <div
                key={question}
                className={twJoin(
                  "flex gap-2 items-center p-4 pl-6 border-l-4 cursor-pointer",
                  index === selectedIndex
                    ? "bg-base-white/10 border-brand-primary-red-400 font-bold"
                    : "border-brand-gray-700"
                )}
                onClick={() => setSelectedIndex(index)}
              >
                <p className="grow text-xl leading-7.5 text-base-white overflow-hidden overflow-ellipsis">
                  {question}
                </p>
                <div className="w-6 h-6">
                  <IconChevronRight className="text-base-white" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col pl-20 pt-5">
            <p className="text-base leading-6 text-base-white">{answer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const contacts = [
  {
    icon: IconMapPin,
    name: "Alamat",
    values: [
      "Jl. Sunan Kalijaga No.7, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611",
    ],
  },
  {
    icon: IconPhone,
    name: "Phone",
    values: ["(0231) 321197", "(0231) 3211792"],
  },
  {
    icon: IconMail,
    name: "Email",
    values: ["pemkab@cirebonkab.go.id"],
  },
];

function Contact() {
  return (
    <section className="px-8 py-10 w-full overflow-hidden flex justify-center">
      <div className="flex gap-16 container items-center">
        <div className="grow flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <Divider />
              <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
                Sambutan Bupati Kabupaten Cirebon
              </h2>
            </div>
            <p className="text-xl leading-7.5 text-base-sonic-silver">
              Hubungi kami melalui formulir di samping, atau melalui kontak di
              bawah
            </p>
          </div>
          <div className="flex flex-col pt-5 gap-6">
            {contacts.map((contact) => (
              <div className="flex gap-4">
                <FeaturedIcon icon={contact.icon} />
                <div className="flex flex-col gap-5 pt-2">
                  <h3 className="font-semibold text-xl leading-7.5 text-base-black-pearl">
                    {contact.name}
                  </h3>
                  <p className="font-semibold text-base leading-6 text-brand-primary-red-900">
                    {contact.values.map((value, index) => (
                      <>
                        {value}
                        {index + 1 < contact.values.length && (
                          <p className="text-base leading-6 text-base-sonic-silver">
                            atau
                          </p>
                        )}
                      </>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.057104541483!2d108.477069!3d-6.762892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1e52ec39ac4b%3A0x11406d4a1fb551d1!2sJl.%20Sunan%20Kalijaga%20No.7%2C%20Sumber%2C%20Kec.%20Sumber%2C%20Kabupaten%20Cirebon%2C%20Jawa%20Barat%2045611!5e0!3m2!1sid!2sid!4v1724204361403!5m2!1sid!2sid"
          width="600"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default function Beranda({}: PageProps<{}>) {
  return (
    <>
      <Head title="Beranda" />
      <Header />
      <HeroBeranda />
      <MitraSection />
      <StatistikSection />
      <PenjelasanCSRSection />
      <SektorSection />
      <SambutanSection />
      <KegiatanSection />
      <FAQSection />
      <Contact />
      <Footer />
    </>
  );
}
