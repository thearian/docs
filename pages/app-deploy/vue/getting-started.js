import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Vue - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="vue" />
      <div className="page-title">
        <h1>برنامه‌های VueJS</h1>
        <span className="page-description">(VueJS Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/react.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <p>
      در این بخش به شما کمک می‌کنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      VueJS را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی در
      لیارا آشنا می‌شوید و می‌توانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>
      شما می‌توانید برنامه‌هایی که با <span className="code">vue cli</span>
      ساخته‌شده‌اند را روی لیارا مستقر کنید.
    </p>

    <div className="platforms">
      <Link href="/instructions/nuxtjs">
        <a>
          <PlatformIcon platform="nuxt" />
          <span>NuxtJS</span>
        </a>
      </Link>
    </div>

    <br />

    <Link href="/app-deploy/vue/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
