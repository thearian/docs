import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>ASP.Net Core سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>پلتفرم ASP.Net Core</h1>
    <span className="pageDescription">(ASP.Net Core Platform)</span>

    <h3>وصل کردن دامنه به پروژه</h3>
    <p>
      لیارا به صورت رایگان یک زیردامنه به همراه https برای شما ایجاد کرده است که
      از طریق بخش برنامه‌ها میتوانید لینک آن‌را مشاهده کنید. این دامنه برای تست
      و بررسی پروژه و نشان دادن برنامه به دیگران و کارفرمایان کار را راحت‌تر
      کرده است.
    </p>
    <ZoomableImage
      src="/static/netcore-default-domain.png"
      alt="دامنه پیش‌فرض"
    />
    <p>
      اما در اکثر موارد نیاز داریم که دامنه اختصاصی خود را به پروژه متصل کنیم.
      برای اتصال یک دامنه به لیارا نیازمند پیکربندی DNS های دامنه به سمت زیرساخت
      لیارا هستیم. به‌همین خاطر در صورتی که قصد اضافه کردن دامنه اختصاصی دارید،
      کافیست مستندات را مطالعه کنید. البته توصیه ما این‌است که تمام بخش‌های
      پروژه خود را با موفقیت روی لیارا مستقر کنید و سپس به کار‌های مربوط به
      اتصال{" "}
      <a href="https://laravel.com/docs/master/filesystem" target="_blank">
        دامنه‌ها
      </a>{" "}
      بپردازید.
    </p>

    <p>
      شما باید تا الان توانسته باشید پروژه‌ی‌تان را با موفقیت در لیارا مستقر
      کرده باشید. اما پلتفرم ASP.Net Core نکات و توضیحات بیشتری نیز دارد که در
      بخش بعدی یعنی <b>توضیحات و نکات تکمیلی</b> به آن‌ها پرداخته‌ایم.
    </p>

    <Link href="/apps/netcore/tips">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
