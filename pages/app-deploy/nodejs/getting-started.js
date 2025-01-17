import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های NodeJS - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="nodejs" />
      <div className="page-title">
        <h1>پلتفرم NodeJS</h1>
        <span className="page-description">(NodeJS Platform)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه NodeJS را با استفاده از
      ابزار <Link href="/app-deploy/nodejs/desktop">Liara Desktop</Link>، بر روی
      لیارا مستقر کنید. البته درصورتی که استفاده از Terminal را ترجیح می‌دهید یا
      تصمیم داشته باشید با <Link href="/cicd/about">راه‌اندازی CI/CD</Link>،
      مسئولیت استقرار برنامه‌ی خود را به سرویس{" "}
      <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپرید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/nodejs/cli">Liara CLI</Link> وجود دارد. در ادامه
      در هر گام، با یک ویژگی هاست ابری NodeJS لیارا آشنا خواهید شد و می‌توانید
      از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>
      در حال حاضر، این نسخه‌ها از NodeJS در هاست ابری NodeJS لیارا پشتیبانی
      می‌شود:
    </p>

    <ul>
      <li>8</li>
      <li>10</li>
      <li>12</li>
      <li>14</li>
      <li>
        <b>16 (پیش‌فرض)</b>
      </li>
      <li>18</li>
    </ul>

    <div className="platforms">
      <Link href="/instructions/nestjs">
        <PlatformIcon platform="nest" />
        <span>NestJS</span>
      </Link>
      <Link href="/app-deploy/nextjs/getting-started">
        <PlatformIcon platform="next" />
        <span>NextJS</span>
      </Link>
      <Link href="/instructions/nuxtjs">
        <PlatformIcon platform="nuxt" />
        <span>NuxtJS</span>
      </Link>
      <Link href="/instructions/fastify">
        <PlatformIcon platform="fastify" />
        <span>Fastify</span>
      </Link>
      <Link href="/instructions/svelte">
        <PlatformIcon platform="svelte" />
        <span>Svelte</span>
      </Link>
      <Link href="/instructions/remix">
        <PlatformIcon platform="remix" />
        <span>Remix</span>
      </Link>
      <Link href="/instructions/blitzjs">
        <PlatformIcon platform="blitz" />
        <span>BlitzJS</span>
      </Link>
      <Link href="/instructions/strapi">
        <PlatformIcon platform="strapi" />
        <span>Strapi</span>
      </Link>
      <Link href="/instructions/adonis">
        <PlatformIcon platform="adonisjs" />
        <span>Adonis</span>
      </Link>
    </div>

    <Notice variant="info">
      اگر قصد دارید نسخه‌ی پیش‌فرض NodeJS را تغییر دهید می‌توانید مستندات{" "}
      <Link href="/app-deploy/nodejs/tips#nodejs-version">
        انتخاب نسخه‌ی NodeJS
      </Link>{" "}
      را در توضیحات و نکات تکمیلی این پلتفرم مطالعه بفرمایید.
    </Notice>

    <br />

    <Link href="/app-deploy/nodejs/desktop" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
