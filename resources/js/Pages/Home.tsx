import Button from "@/Components/Button";
import Card, { CardArticleProps } from "@/Components/Card";
import Divider from "@/Components/Divider";
import Remarks from "@/Components/Remarks";
import GenericLayout from "@/Layouts/GenericLayout";
import { PageProps } from "@/types";
import { IconChevronRight } from "@tabler/icons-react";
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

function HeroDisplay() {
  return (
    <>
      <div className="w-[42%] flex flex-col gap-3 text-base-white">
        <h1 className="font-bold text-6.5xl leading-19.25 capitalize">
          Selamat datang di portal CSR Kab. Cirebon
        </h1>
        <h2 className="font-semibold text-xl leading-9 capitalize">
          Ketahui dan kenali customer social responsibility terhadap Kabupaten
          Cirebon dari para Mitra.
        </h2>
      </div>
      <div className="w-[42%] flex gap-3.75">
        <hr className="w-[80%]" />
      </div>
    </>
  );
}

function Hero() {
  const [page, setPage] = useState(1);
  const news = useMemo(() => listOfNews[page - 1], [page]);

  return (
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
  );
}

const partners = {
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
const partnerCount = Object.keys(partners).length;

function Partner() {
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
          {Object.entries(partners).map(([name, src], index) => (
            <div
              key={name}
              className={twJoin(
                "flex justify-center items-center w-fit p-8.75 border-gray-modern-200",
                index < partnerCount - 5 && "border-b",
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

const metrics = {
  "Total Proyek CSR": 124,
  "Proyek Terealisasi": 119,
  "Mitra Bergabung": 89,
  "Dana Terealisasi CSR": "Rp200T +",
};

function Statistics() {
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
          {Object.entries(metrics).map(([title, value]) => (
            <div
              key={title}
              className="flex flex-col gap-1 pl-6 border-l-2 border-brand-primary-red-200"
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

function Explanation() {
  return (
    <section className="px-25 pt-15 pb-30 w-full">
      <div className="flex container gap-20">
        <div className="flex flex-col h-120 max-h-120 justify-center items-center flex-wrap px-4 py-9.5 w-full">
          <div className="flex w-160 max-w-160">
            <div className="h-full flex flex-col px-2.5 py-5.5">
              <div className="flex h-40 max-h-40 relative">
                <img
                  src="/images/activities/1.png"
                  alt="kegiatan csr"
                  className="left-22.5 absolute shadow-[0px_5px_10px_0px_#00000026]"
                />
              </div>
              <div className="flex h-50 max-h-50 justify-center items-center">
                <img
                  src="/images/activities/2.png"
                  alt="kegiatan csr"
                  className="shadow-[0px_5px_10px_0px_#00000026]"
                />
              </div>
            </div>
            <div className="h-full flex justify-end items-center px-2.5 pt-2.5 pb-14.5">
              <div className="flex items-center justify-center h-50 max-h-50">
                <img
                  src="/images/activities/3.png"
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
    image: "/images/sectors/1.png",
    description:
      "CSR dalam lingkup sosial merupakan komitmen perusahaan untuk memberikan kontribusi positif bagi masyarakat di sekitarnya. Ini melibatkan berbagai kegiatan yang bertujuan meningkatkan kualitas hidup masyarakat, seperti program pendidikan, kesehatan, pemberdayaan ekonomi, dan pengentasan kemiskinan. Melalui CSR sosial, perusahaan tidak hanya memenuhi tanggung jawab sosialnya, tetapi juga membangun hubungan yang baik dengan masyarakat, meningkatkan reputasi perusahaan, dan menciptakan dampak sosial yang berkelanjutan. Kegiatan CSR sosial dapat berupa bantuan langsung, seperti donasi, atau program jangka panjang yang melibatkan partisipasi aktif masyarakat, seperti pelatihan keterampilan dan pengembangan komunitas.",
  },
  Lingkungan: {
    image: "/images/sectors/1.png",
    description: "CSR dalam lingkup lingkungan",
  },
  Kesehatan: {
    image: "/images/sectors/1.png",
    description: "CSR dalam lingkup kesehatan",
  },
  Pendidikan: {
    image: "/images/sectors/1.png",
    description: "CSR dalam lingkup pendidikan",
  },
  "Infrastruktur dan sanitasi lingkungan": {
    image: "/images/sectors/1.png",
    description: "CSR dalam lingkup infrastruktur dan sanitasi lingkungan",
  },
  "Sarana dan prasarana keagamaan": {
    image: "/images/sectors/1.png",
    description: "CSR dalam lingkup sarana dan prasarana keagamaan",
  },
  Lainnya: {
    image: "/images/sectors/1.png",
    description: "CSR dalam lingkup lainnya",
  },
};
type Sector = {
  image: string;
  description: string;
};
type SectorName = keyof typeof sectors;

function Sector() {
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
                className="text-base-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Activity = Required<
  Pick<CardArticleProps, "image" | "title" | "description" | "date" | "author">
>;

function Activity() {
  const [activities, setActivities] = useState<Activity[]>([
    {
      image: "/images/activities/daftar-1.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      author: {
        avatar: "/images/avatar/1.webp",
        name: "John Doe",
      },
    },
    {
      image: "/images/activities/daftar-2.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      author: {
        avatar: "/images/avatar/1.webp",
        name: "John Doe",
      },
    },
    {
      image: "/images/activities/daftar-3.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      author: {
        avatar: "/images/avatar/1.webp",
        name: "John Doe",
      },
    },
    {
      image: "/images/activities/daftar-4.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      author: {
        avatar: "/images/avatar/1.webp",
        name: "John Doe",
      },
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
            {activities.map((activity) => (
              <Card.Article key={activity.title} {...activity} />
            ))}
          </div>
          <Button
            size="lg"
            hierarchy="secondary gray"
            text="Lihat semua kegiatan"
            className="w-fit h-13 text-base"
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

function FAQ() {
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

export default function Home({}: PageProps<{}>) {
  return (
    <GenericLayout
      title="Home"
      hero={{
        className: "h-[65vw]",
        display: <HeroDisplay />,
        children: <Hero />,
      }}
    >
      <Partner />
      <Statistics />
      <Explanation />
      <Sector />
      <Remarks />
      <Activity />
      <FAQ />
    </GenericLayout>
  );
}
