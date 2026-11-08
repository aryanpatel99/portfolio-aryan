<a href="https://portfolio-aryan-delta.vercel.app">
  <img src="https://res.cloudinary.com/dqlhyupyr/image/upload/w_1200,h_630,c_fill/portfolio.png" alt="Aryan Patel — Full Stack Developer" width="100%" />
</a>

<h3 align="center">You have the idea. I'll ship the MVP.</h3>

<p align="center">
  Full stack developer who takes products from a rough idea to a live, working launch —<br/>
  clean code, fast pages, and no hand-holding needed.
</p>

<p align="center">
  <a href="https://portfolio-aryan-delta.vercel.app"><img src="https://img.shields.io/badge/View_Portfolio-0D0D0D?style=for-the-badge&logo=vercel&logoColor=white" alt="View Portfolio" /></a>
  <a href="https://cal.com/aryan-patel-wv5rcz/30min"><img src="https://img.shields.io/badge/Book_a_Free_Call-0D0D0D?style=for-the-badge&logo=googlecalendar&logoColor=white" alt="Book a Free Call" /></a>
  <a href="mailto:aryanpatel6215@gmail.com"><img src="https://img.shields.io/badge/Email_Me-0D0D0D?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Me" /></a>
</p>

---

### How I work

| 1. Scope | 2. Build | 3. Launch |
| :-- | :-- | :-- |
| We cut the idea down to what users actually need first. | Production-ready code from day one, with progress you can see. | Deployed, fast, and ready for real users and feedback. |

### Recent work

- **[Lumin UI](https://luminui.vercel.app/)**: animated, accessible React component library
- **[Orbyt](https://openrouter-clone-dashboard.vercel.app/)**: self-hosted LLM gateway with model fallback and real-time streaming
- **[Draft](https://blog-website-ten-teal.vercel.app/)**: blogging platform with AI content generation and role-based access

Open source contributor to **Kubernetes**, **OpenTelemetry** and **Metal3**.

### Stack

<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=ts,react,nextjs,nodejs,express,tailwind,prisma,postgres,mongodb,redis,vercel&theme=dark" alt="Tech stack" />
</a>

<details>
<summary><b>Run this portfolio locally</b></summary>

<br/>

Built with Next.js 15, Tailwind CSS v4 and Motion. GitHub activity comes from the GitHub GraphQL API, and the visitor count is stored in Upstash Redis.

```bash
git clone https://github.com/aryanpatel99/portfolio-aryan.git
cd portfolio-aryan
npm install
npm run dev
```

`.env.local`: only the Cloudinary name is needed for images; the rest fall back gracefully.

```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=  # images (required)
GITHUB_TOKEN=                       # live contributions + activity calendar
UPSTASH_REDIS_REST_URL=             # visitor count
UPSTASH_REDIS_REST_TOKEN=
REVALIDATION_SECRET=                # refresh GitHub data on demand
```

</details>

<p align="center"><sub>Have something in mind? <a href="https://cal.com/aryan-patel-wv5rcz/30min">Let's talk</a>.</sub></p>
