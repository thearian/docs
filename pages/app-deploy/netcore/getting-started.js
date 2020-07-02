import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>ASP.Net Core سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های ASP.Net Core</h1>
    <span className="pageDescription">(ASP.Net Core Apps)</span>

    <h3>🚀 شروع به کار</h3>
    <p>
      در این بخش به شما کمک می‌کنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      ASP.Net Core را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک
      ویژگی در لیارا آشنا می‌شوید و می‌توانید از آن‌ها در برنامه‌ی‌تان استفاده
      کنید.
    </p>

    <Link href="/app-deploy/netcore/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);