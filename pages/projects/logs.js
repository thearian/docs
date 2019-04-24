import Layout from '../../components/Layout'
import ZoomableImage from '../../components/ZoomableImage'
import Head from 'next/head'

export default () => (
  <Layout>
    <Head>
      <title>Liara | لاگ‌ها - logs</title>
    </Head>

    <h1>لاگ‌ها</h1>
    <p>
      لاگ‌ها بخش مهمی را در هر پروژه‌ای به عهده دارند. لیارا این امکان را برای‌تان
      فراهم کرده‌است که بعد از مستقر کردن پروژه‌های‌تان بتوانید لاگ‌های آن‌ها را مشاهده و دنبال کنید.
    </p>
    <p>
      لیارا تنها لاگ‌هایی را می‌تواند نمایش دهد که بر روی
      stdout
      و یا
      stderr
      نوشته شوند. مثلا اگر در NodeJS با
      <span className="code">console.log('Hello World!')</span>
      یک لاگ ایجاد کنید، لیارا آن را نشان خواهد داد.
      اما اگر لاگ‌ها‌ی‌تان را داخل فایلی بریزید، از این بخش نمی‌توانید آن‌ها را مشاهده کنید و ممکن است
      بخواهید از بخش 
      {' '}
      <a href="/projects/console">کنسول</a>
      {' '}
       استفاده کنید.
      که البته توصیه‌ی ما این است که از همان
      stdout و یا stderr استفاده کنید.
    </p>

    <h3>مشاهده‌ی لاگ‌ها از طریق پنل لیارا</h3>
    <p>
      با مراجعه به فهرست «پروژه‌ها»، روی پروژه‌ی مورد نظرتان کلیک کنید.
      <br/>
      سپس روی گزینه‌ی لاگ‌ها از فهرست سمت راست کلیک کنید تا وارد صفحه‌ی لاگ‌ها شوید.
    </p>
    <ZoomableImage src="/static/logs.png" alt="لخش لاگ‌ها" />
    <p>
      لاگ‌ها به صورت زنده برای‌تان نمایش داده خواهند شد و نیازی به رفرش‌کردن صفحه نیست.
      هر لحظه‌ای که پروژه‌ی شما لاگ جدیدی تولید کند، همان لحظه در پنل لیارا آن را مشاهده خواهید کرد.
    </p>

    <h3>مشاهده‌ی لاگ‌ها از طریق خط فرمان</h3>
    <p>
      با دستور زیر می‌توانید لاگ‌ها را از طریق 
      <Link href="/clients/cli">CLI</Link>
      نیز مشاهده کنید:
    </p>
    <pre>
      <code>
        $ liara logs --project my-app
      </code>
    </pre>
  </Layout>
)