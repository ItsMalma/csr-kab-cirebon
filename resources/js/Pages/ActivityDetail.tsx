import Article from "@/Components/Article";
import Badge, { BadgeProps } from "@/Components/Badge";
import Button from "@/Components/Button";
import CardArticle, { CardArticleProps } from "@/Components/CardArticle";
import Divider from "@/Components/Divider";
import Hero from "@/Components/Hero";
import IconButton from "@/Components/IconButton";
import GenericLayout from "@/Layouts/GenericLayout";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconLink,
} from "@tabler/icons-react";
import { format } from "date-fns";
import { useState } from "react";

type ActivityDetailProps = {
  slug: string;
};

type Activity = {
  slug: string;
  title: string;
  date: Date;
  content: string;
  categories: Pick<BadgeProps, "name" | "text">[];
};

type ActivityOther = Pick<
  CardArticleProps,
  "image" | "title" | "description" | "date"
> & {
  slug: string;
};

const content = `KABUPATEN CIREBON — Pemerintah Kabupaten Cirebon menerima bantuan Corporate Social Responsibility (CSR) dari Bank BJB, berupa lampu penerangan jalan umum (PJU) tematik.

Penyerahan bantuan ini dihadiri langsung oleh Penjabat (Pj) Bupati Cirebon, Drs H Wahyu Mijaya SH MSi di Pendopo Bupati Cirebon, Jumat (12/7/2024).

“Kami berterima kasih kepada Bank BJB yang telah memberikan PJU untuk dipasang di beberapa titik di wilayah Sumber, Kabupaten Cirebon,” ujar Wahyu.

Ia menjelaskan, bahwa pemasangan PJU di kawasan Sumber, yang dekat dengan kantor pemerintahan, tidak hanya akan memperindah lingkungan, tetapi juga dapat meningkatkan keselamatan masyarakat.

Langkah ini, menurut Wahyu, merupakan bagian dari upaya untuk menciptakan ruang publik yang lebih aman dan nyaman. Dengan penerangan yang baik, warga dapat beraktivitas dengan tenang, terutama di malam hari.

![](/images/placeholder.png)

“Inisiatif ini menjadi langkah strategis bagi Kabupaten Cirebon, dalam meningkatkan kualitas infrastruktur dan pelayanan publik,” tambahnya.

Pemasangan PJU tematik ini ditargetkan mulai dilaksanakan pada Agustus 2024. Wahyu berharap, fasilitas tersebut memberikan dampak positif bagi masyarakat.

“Kami sudah berkomitmen dalam menciptakan lingkungan yang lebih aman dan nyaman bagi masyarakat,” katanya.

Kepala Dinas Perhubungan Kabupaten Cirebon, Hilman Firmansyah ST menjelaskan, bahwa PJU artistik ini akan dipasang di 33 titik setelah dilakukan survei dan pengecekan.

Ia mengungkapkan, bahwa saat ini, Kabupaten Cirebon masih kekurangan PJU. Dari total kebutuhan sekitar 32 ribu titik, baru 16 ribu titik yang terpasang.

Hilman menekankan pentingnya upaya terus-menerus untuk memenuhi kebutuhan ini, termasuk mengajak instansi lain, baik dari pemerintah maupun pihak swasta, untuk menyediakan CSR.

“Kalau lihat eksisting jalan itu kurang lebih 32 ribu titik, kekurangannya masih banyak. Idealnya melakukan kolaborasi seperti itu,” ujar Hilman. (DISKOMINFO)`;

export default function ActivityDetail({ slug }: ActivityDetailProps) {
  const [activity, setActivity] = useState<Activity>({
    slug: "pemkab-cirebon-terima-bantuan-pju-tematik-dari-bank-bjb",
    title: "Pemkab Cirebon Terima Bantuan PJU Tematik dari Bank BJB",
    date: new Date(),
    content: content,
    categories: [
      { text: "Bank BJB" },
      { text: "Cirebon" },
      { text: "CSR" },
      { text: "Kabupaten Cirebon" },
      { text: "Pemkab Cirebon" },
      { text: "PJ Bupati Cirebon" },
      { text: "PJU Tematik" },
      { text: "Wahyu Mijaya" },
    ],
  });

  const [otherActivity, setOtherActivity] = useState<ActivityOther[]>([
    {
      image: "/images/activities/daftar-1.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-kegiatan-terbaru",
    },
    {
      image: "/images/activities/daftar-2.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-kegiatan-terbaru",
    },
    {
      image: "/images/activities/daftar-3.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-kegiatan-terbaru",
    },
    {
      image: "/images/activities/daftar-4.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-kegiatan-terbaru",
    },
  ]);

  return (
    <GenericLayout
      title={activity.title}
      hero={{
        className: "h-[38vw]",
        display: (
          <Hero.BreadcumbDisplay
            path={[
              { name: "Beranda", href: route("home") },
              { name: "Kegiatan", href: route("activity") },
              "Detail",
            ]}
            title={activity.title}
            description={format(activity.date, "LLLL d, Y")}
          />
        ),
      }}
    >
      <section className="px-8 py-24 w-full flex justify-center">
        <div className="flex flex-col container max-w-180 w-180">
          <Divider />
          <Article content={activity.content} className="mb-12" />
          <div className="flex flex-col gap-10 pt-6 border-t border-brand-gray-200">
            <div className="flex flex-wrap gap-3">
              {activity.categories.map((category) => (
                <Badge key={category.text} {...category} />
              ))}
            </div>
            <div className="flex gap-6 items-center justify-end">
              <p className="text-base leading-6 text-brand-gray-600">
                Bagikan kegiatan
              </p>
              <div className="flex gap-3 items-center">
                <IconButton
                  hierarchy="secondary gray"
                  icon={IconBrandFacebook}
                />
                <IconButton
                  hierarchy="secondary gray"
                  icon={IconBrandTwitter}
                />
                <IconButton
                  hierarchy="secondary gray"
                  icon={IconBrandInstagram}
                />
                <IconButton hierarchy="secondary gray" icon={IconLink} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="px-8 w-full flex justify-center">
        <hr className="container" />
      </div>
      <section className="px-25 pt-15 pb-24 w-full flex justify-center">
        <div className="flex flex-col gap-16 container items-center">
          <div className="flex flex-col w-full">
            <Divider />
            <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
              Kegiatan Lainnya
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-x-8 gap-y-16">
            {otherActivity.map((activity) => (
              <CardArticle
                key={activity.slug}
                {...activity}
                href={route("activity-detail", { slug: activity.slug })}
              />
            ))}
          </div>
          <Button
            size="lg"
            hierarchy="secondary gray"
            text="Lihat semua kegiatan"
            className="w-fit h-13 text-brand-gray-700 text-base"
          />
        </div>
      </section>
    </GenericLayout>
  );
}
