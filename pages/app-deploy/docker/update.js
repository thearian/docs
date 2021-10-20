import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>مستندات به‌روزرسانی در برنامه‌های Docker - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/docker.svg"
        alt="docker"
      />
      <div className="page-title">
        <h1>برنامه‌های Docker</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <h3>به‌روز‌رسانی برنامه</h3>
    <p>
      به‌منظور به‌روزرسانی برنامه‌های خود می‌توانید به‌سادگی دستور{' '}
      <span className="code">liara deploy</span> را در مسیر اصلی پروژه
      اجرا کنید تا فرایند استقرار برنامه آغاز شود.
    </p>
    <p>
      {" "}
      برای این که بعداً در هر استقرار بتوانید متوجه شوید علت این استقرار چه
      بوده، می‌توانید از message در دستور deploy استفاده کنید. فرض کنید استقرار
      مد نظر شما به علت رفع باگ auth کاربران بوده. پس اینطوری نسخه جدید را
      deploy کنید:
    </p>
    <Highlight className="shell">
      {`$ liara deploy --message="Fix auth bug in login api"`}
    </Highlight>
    <p>
      {" "}
      البته اگر شما از Git استفاده می‌کنید، لیارا همیشه از آخرین Commit message
      روی Branch جاری شما برای توضیحات استقرار استفاده می‌کند. البته به این شرط
      که شما <span className="code">--message</span> را خالی گذاشته باشید.
    </p>

    <Link href="/app-deploy/docker/disks">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
