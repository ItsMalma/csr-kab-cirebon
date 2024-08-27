import Button from "@/Components/Button";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Input from "@/Components/Input";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { IconArrowLeft } from "@tabler/icons-react";
import { FormEventHandler } from "react";

export default function Login() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("login"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-gray-100">
      <Head title="Login" />
      <Header>
        <div className="container flex items-center justify-center">
          <img src="/images/logo.svg" alt="logo" className="w-36" />
        </div>
      </Header>
      <main className="grow flex justify-center items-center">
        <div className="shadow container w-full bg-base-white rounded-xl overflow-hidden flex items-center border border-brand-gray-100">
          <div className="w-125 flex flex-col p-10 gap-6">
            <Link
              href="/"
              className="w-fit flex items-center gap-2 hover:underline text-brand-primary-red-900"
            >
              <IconArrowLeft size={24} />
              <p className="font-medium text-base leading-6">
                Kembali ke halaman utama
              </p>
            </Link>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-4xl leading-10.75 text-brand-gray-800">
                Selamat Datang
              </h1>
              <p className="text-base leading-6.5 text-brand-gray-700">
                Silakan masukan email dan kata sandi untuk masuk ke halaman
                dashboard Anda
              </p>
            </div>
            <Button
              text={
                <p className="font-semibold text-sm leading-5 text-brand-gray-700">
                  Belum punya akun mitra?{" "}
                  <span className="text-brand-primary-red-900">
                    Registrasi di sini
                  </span>
                </p>
              }
              size="md"
              hierarchy="secondary gray"
              className="w-fit h-11"
              onClick={() => {
                router.visit(route("register"));
              }}
            />
          </div>
          <form className="grow flex flex-col justify-between px-10 py-15 border-l border-brand-gray-100">
            <div className="flex flex-col gap-6">
              <Input.WithLabel
                input={{
                  name: "email",
                  type: "email",
                  placeholder: "Masukan email Anda",
                }}
                label={{
                  text: "Email",
                  required: true,
                }}
              />
              <Input.WithLabel
                input={{
                  name: "password",
                  type: "password",
                  placeholder: "Masukan kata sandi",
                }}
                label={{
                  text: "Kata Sandi",
                  required: true,
                }}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              hierarchy="primary"
              text="Masuk"
              className="w-75 h-11 mt-6"
            />
          </form>
        </div>
      </main>
      <Footer buttonText="Kembali Ke Halaman Utama" />
    </div>
  );
}
