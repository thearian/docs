import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>VueJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های VueJS</h1>
    <span className="pageDescription">(VueJS Apps)</span>

    <h3>🚀 شروع به کار</h3>
    <video
      src="https://files.liara.ir/liara/react.mp4"
      controls="controls"
      className="block w-full"
    ></video>
    <p>
      در این بخش به شما کمک میکنیم که در سریع‌ترین زمان ممکن برنامه VueJS ای‌ که
      نوشتید را روی بستر ابری لیارا مستقر کنید. برای راحتی شما با یک مثال واقعی
      تمام مراحل را پیش میبریم. میتوانید این پروژه را از github دریافت کنید:
      (البته بدون در نظرگرفتن این پروژه تستی نیز میتوانید نحوه استقرار
      برنامه‌ی‌تان را یاد بگیرید.)
    </p>
    <pre>
      <code>
        {`$ git clone https://github.com/liara-cloud/vue-getting-started
$ cd vue-getting-started`}
      </code>
    </pre>
    <p>
      برای این که مطمئن بشید همه چیز درست کار میکنه کافیه دستورات
      <span className="code">npm install</span> و{" "}
      <span className="code">npm run serve</span> را وارد کنید و اگر پروژه با
      موفقیت روی سیستم شما اجرا شد، یعنی که آماده هستید که پروژه را بر بستر
      لیارا نیز مستقر کنید.
    </p>

    <Link href="/apps/vue/deploy">متوجه شدم، برو بعدی!</Link>
  </Layout>
);