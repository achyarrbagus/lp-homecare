"use client";

import { NextPage } from "next";
import Head from "next/head";
import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";
import Layout from "@/components/Layout";
import Image from "next/image";
import Logo from "../assets/Logo Cepat Sehat-01 1.png";
import VectorHeader from "../assets/Vector.png";
import AsianHealtcare from "../assets/asian-healthcare-female-posing 1.png";
import BgHeader from "../assets/Header.png";
import BgHeader2 from "../assets/Header2.png";
import KunjunganDokter from "../assets/kunjungan-dokter.png";
import PerawatDokter from "../assets/Perawat-24-jam.png";
import MedichalCheck from "../assets/MedicalCheckup.png";
import Arrow1 from "../assets/Arrow-1.png";
import { FloatButton } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Medkit from "../assets/Medical Expenses Insurance.png";
import Diploma from "../assets/Diploma.png";
import LastHours from "../assets/Last 24 Hours.png";
import Geography from "../assets/Geography.png";
import Help from "../assets/Help.png";
import WaLogo from "../assets/WhatsApp.png";
import LogoRounded from "../assets/image 5.png";
import IgLogo from "../assets/Instagram.png";
import FbLogo from "../assets/Facebook.png";
import AvensiLogo from "../assets/Avensi-logo.png";

const Index: NextPage = () => {
  const router = useRouter();
  const NavigateWa = () => {
    router.push(
      "https://api.whatsapp.com/send/?phone=6282211189009&text=Saya+ingin+pesan+layanan+homecare&type=phone_number&app_absent=0"
    );
  };

  return (
    <>
      <Head>
        <title>Home Care</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="hello world" />
        <meta name="keywords" content="hello world" />
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}
      </Head>
      <header className="">
        <div className=" h-20 align-center max-w-layout mx-auto">
          <div className="flex justify-center p-3">
            <Image src={Logo} alt="logo-cepatsehat" />
          </div>
        </div>
      </header>
      {/* bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] */}
      <Layout>
        <FloatButton icon={<WhatsAppOutlined />} onClick={NavigateWa} />
        <section
          style={{
            backgroundImage: `url(${BgHeader2.src})`,
            backgroundColor: "00BAB9",
          }}
          className="bg-center w-full bg-no-repeat h-72 "
        >
          <div className="mt-4">
            <h1 className="h-40 flex p-4 mt-8 text-white items-center text-4xl font-light font-poppins">
              Perawatan <br /> Medis Langsung <br />
              di Rumah <br /> Kamu
            </h1>
            <h1
              className="p-4 font-poppins text-sm font-medium text-justify "
              style={{ width: "270px" }}
            >
              Kami memberikan pelayanan medis kepada kamu yang membutuhkan tanpa
              harus kerumah sakit
            </h1>
          </div>
        </section>
        <section
          style={{
            backgroundColor: "rgb(6 175 174)",
          }}
          className="bg-center  p-4 w-full bg-no-repeat auto -mt-4"
        >
          <div className="flex items-center mt-3">
            <div
              className="h-42 w-64 rounded-md p-2 relative flex items-center justify-center flex-col bg-white shadow-gray-800"
              style={{
                borderRadius: "10px",
                boxShadow: "5px 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Image
                src={KunjunganDokter}
                alt="kunjungan dokter"
                className="
                "
                style={{ border: "", borderRadius: "10px" }}
                height={150}
              />
            </div>
            <div
              className="h-28 w-full bg-white flex flex-col p-4"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <h1
                className="font-poppins text-xl font-bold"
                style={{ color: "#E57400" }}
              >
                Kunjungan Dokter
              </h1>
              <p className="font-poppins text-sm font-normal">
                Dokter Umum & Spesialis Tersertifikasi STR
              </p>
              <div className="flex justify-end">
                <Image src={Arrow1} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <div
              className="h-42 w-64 rounded-md p-2 relative flex items-center justify-center flex-col bg-white shadow-gray-800"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Image
                src={PerawatDokter}
                alt="PerawatDokter"
                className="
                "
                style={{ border: "", borderRadius: "10px" }}
                height={150}
              />
            </div>
            <div
              className="h-28 w-full bg-white flex flex-col p-4"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <h1
                className="font-poppins text-xl font-bold"
                style={{ color: "#E57400" }}
              >
                Perawat 24 Jam
              </h1>
              <p className="font-poppins text-sm font-normal">
                Perawat Medis & Non Medis Tersedia 24 Jam
              </p>
              <div className="flex justify-end">
                <Image src={Arrow1} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <div
              className="h-42 w-64 rounded-md p-2 relative flex items-center justify-center flex-col bg-white shadow-gray-800"
              style={{
                borderRadius: "10px",
                boxShadow: "0px 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Image
                src={MedichalCheck}
                alt="MedichalCheck"
                className="
                "
                style={{ border: "", borderRadius: "10px" }}
                height={150}
              />
            </div>
            <div
              className="h-auto w-full bg-white flex flex-col p-4"
              style={{
                borderRadius: "10px",
                boxShadow: "5px 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <h1
                className="font-poppins text-xl font-bold"
                style={{ color: "#E57400" }}
              >
                Medical Check Up
              </h1>
              <p className="font-poppins text-sm font-normal">
                Homecare menjadi sebuah solusi yang mudah, aman dan nyaman untuk
                proses penyembuhan pasien di rumah.
              </p>
              <div className="flex justify-end">
                <Image src={Arrow1} alt="arrow" />
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <section className="flex flex-col  p-6 justify-center items-center w-full">
            <h1
              className="font-semibold text-4xl text-left"
              style={{ color: "#E57400" }}
            >
              Kenapa Kamu Harus Menggunakan Jasa <br></br> Home Care?
            </h1>
            <p className="font-normal text-lg mt-2">
              Berikut alasan kamu harus menggunakan layanan homecare
            </p>
          </section>
          <section className="px-6 mb-3">
            <div style={{ borderTop: "2px solid #BDBDBD" }}>
              <div className="flex mt-3 gap-2">
                <div className="w-24 ">
                  <Image
                    alt="kiri"
                    src={Medkit}
                    style={{ height: "50px", width: "50px" }}
                    className=""
                  />
                </div>
                <div className="w-full overflow-hidden">
                  <h1
                    className="text-xl font-poppins font-semibold"
                    style={{ color: "#00BAB9" }}
                  >
                    Pelayanan yg mudah, aman & nyaman
                  </h1>
                  <p className="font-poppins font-thin">
                    Homecare menjadi sebuah solusi yang mudah, aman dan nyaman
                    untuk proses penyembuhan pasien di rumah.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="px-6 mb-3">
            <div style={{ borderTop: "2px solid #BDBDBD" }}>
              <div className="flex mt-3 gap-2">
                <div className="w-24 ">
                  <Image
                    alt="diploma"
                    src={Diploma}
                    style={{ height: "50px", width: "50px" }}
                    className=""
                  />
                </div>
                <div className="w-full overflow-hidden">
                  <h1
                    className="text-xl font-poppins font-semibold"
                    style={{ color: "#00BAB9" }}
                  >
                    Didukung dengan tenaga kesehatan tersertifikasi & terlatih
                  </h1>
                  <p className="font-poppins font-thin">
                    Semua tenaga kesehatan di cepatsehat homecare sudah memiliki
                    ijin (STR) & terlatih untuk menangani pasien anak, dewasa &
                    lansia di rumah
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="px-6 mb-3">
            <div style={{ borderTop: "2px solid #BDBDBD" }}>
              <div className="flex mt-3 gap-2">
                <div className="w-24 ">
                  <Image
                    alt="lasthour"
                    src={LastHours}
                    style={{ height: "50px", width: "50px" }}
                    className=""
                  />
                </div>
                <div className="w-full overflow-hidden">
                  <h1
                    className="text-xl font-poppins font-semibold"
                    style={{ color: "#00BAB9" }}
                  >
                    Layanan 24 Jam
                  </h1>
                  <p className="font-poppins font-thin">
                    Selain menyediakan layanan harian, kami juga menyediakan
                    layanan 24 jam baik dokter maupun perawat
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="px-6 mb-3">
            <div style={{ borderTop: "2px solid #BDBDBD" }}>
              <div className="flex mt-3 gap-2">
                <div className="w-24">
                  <Image
                    alt="Geography"
                    src={Geography}
                    style={{ height: "50px", width: "50px" }}
                    className=""
                  />
                </div>
                <div className="w-full overflow-hidden">
                  <h1
                    className="text-xl font-poppins font-semibold"
                    style={{ color: "#00BAB9" }}
                  >
                    Cakupan yang luas
                  </h1>
                  <p className="font-poppins font-thin">
                    Cakupan yang luas Kami menyediakan pelayanan medis di rumah
                    untuk seluruh Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-3 p-4">
            <div
              className="rounded-lg flex-col justify-center gap-2"
              style={{
                border: "",
                backgroundColor: "#00BAB9",
                height: "auto",
                padding: "2px",
              }}
            >
              <div className="flex p-3 ">
                <div className="w-32 h-full flex justify-end">
                  <Image src={Help} alt="help-button" className="w-7 h-7" />
                </div>
                <div className="text-white font-medium">
                  Ada Pertanyaan? Tim kami siap membantu kamu secara langsung
                </div>
              </div>
              <div
                style={{ backgroundColor: "#2AA81A", width: "188px" }}
                className="flex cursor-pointer text-center font-poppins text-white p-2 rounded-md mx-auto mb-5 text-xs  justify-center"
              >
                <div className="">
                  <Image src={WaLogo} alt="wa-log" width={20} />
                </div>
                <h1>Hubungi melalui WhatsApp</h1>
              </div>
            </div>
          </section>
        </section>
        <footer>
          <div className="flex gap-3 justify-between  w-full p-4 mx-auto">
            <div className="flex-none  w-2/4 gap-2">
              <div className="flex gap-3 items-center">
                <div className="">
                  <Image src={LogoRounded} alt="logo-rounded" height={50} />
                </div>
                <div className="h-full flex-none">
                  <h1 className="font-poppins font-semibold text-lg h-10 items-center flex">
                    Cepat Sehat
                  </h1>
                </div>
              </div>
              <div className="flex justify-end pr-14">
                <Image src={FbLogo} alt="fb-logo" className="h-35 w-35" />
                <Image src={IgLogo} alt="ig-logo" className="h-35 w-35" />
              </div>
            </div>
            <div className="h-auto flex-col justify-end  w-full mt-3">
              <h1 className="text-left flex justify-end w-full  font-poppins font-normal text-medium h-16">
                Member of Aliansi Telemedik Indonesia
              </h1>
              <div className=" mt-2">
                <Image
                  src={AvensiLogo}
                  alt="avensi-logo"
                  className="text-center"
                />
              </div>
            </div>
          </div>
          <div className="w-full p-4 mx-auto">
            <div className="flex-none mx-auto w-4/4 gap-2 pl-14">
              <h1 className="font-poppins font-semibold text-lg h-10 items-center flex">
                Alamat Kami
              </h1>
              <h2 className="font-poppins font-thin text-sm">
                <span className="font-poppins font-semibold text-lg">
                  Klinik Cepat
                </span>{" "}
                <br /> Sehat Jl. Peternakan No.13 RT.5/RW.1 Kp.Tengah,Kec.
                <br /> Kramat Jati, Jakarta. Daerah Khusus Ibukota Jakarta 13540
                0822 1118 9009
              </h2>
            </div>
          </div>
          <div className="w-full text-center mt-10">
            <h1>Copyright © 2022 Cepat Sehat. All Rights Reserved</h1>
          </div>
        </footer>
      </Layout>
    </>
  );
};

export default Index;
