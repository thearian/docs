import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های ابری</title>
    </Head>

    <h1>دیتابیس MongoDB</h1>
    <span className="pageDescription">(MongoDB Database)</span>

    <h1>MongoDB Backup</h1>
    <p>
      {" "}
      لیارا، روزانه، هفتگی و ماهانه از دیتابیس‌های شما به صورت خودکار Backup یا
      همان فایل پشتیبان تهیه میکند. برای مشاهده این فایل ها کافیست به منوی{" "}
      <b>پشتیبان‌گیری</b> در صفحه دیتابیس موردنظرتان بروید:
    </p>
    <ZoomableImage
      src="/static/databases/mysql-liara-backup.png"
      alt="mysql backup page"
    />
    <p>
      سپس کافیست فایل پشتیبان موردنظرتان از لحاظ زمانی را دانلود کرده و از آن
      استفاده نمایید. محتویات این فایل‌ها شامل تمام اطلاعات دیتابیس MongoDB‌ تان
      میباشد. در حقیقت این فایل ها از خروجی دستوری شبیه دستور زیر ایجاد می‌شوند:
    </p>
    <code>
      {`$ mongodump -u USERNAME -p PASSWORD --host DB_HOST --port DB_PORT --authenticationDatabase admin --archive=/tmp/mongobackup.dump --quiet`}
    </code>
  </Layout>
);
