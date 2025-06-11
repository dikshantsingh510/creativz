# 🔗 URL Shortener

A modern URL shortener built with **Next.js**, **TypeScript**, **Tailwind CSS**, **shadcnUI**, **BetterAuth**, **PostgreSQL**, and **Redis**. Features include user accounts, click tracking, rate limiting, URL history, and Redis for performance.

---

## ✅ Interactive Project Checklist

<details>
<summary>📦 Initial Setup</summary>

- [x] **Create Next.js Project**
- [ ] **Install Dependencies** (Tailwind CSS, shadcnUI, Prisma, BetterAuth, etc.)
- [x] **Set Up Git Repository**

</details>

<details>
<summary>🎨 Tailwind CSS Setup</summary>

- [x] **Initialize Tailwind CSS**
- [x] **Test Tailwind Styling**

</details>

<details>
<summary>🧩 shadcnUI Setup</summary>

- [x] **Initialize shadcnUI**
- [x] **Install UI Components** (button, input, table)
- [x] **Test shadcnUI Components**

</details>

<details>
<summary>🗃️ PostgreSQL + Prisma Setup</summary>

- [ ] **Set Up PostgreSQL** (Local/Supabase/Neon)
- [ ] **Initialize Prisma**
- [ ] **Define Prisma Schema** (`User`, `Url`)
- [ ] **Run Prisma Migrations**
- [ ] **Generate Prisma Client**

</details>

<details>
<summary>🔐 BetterAuth Setup</summary>

- [ ] **Initialize BetterAuth with Prisma Adapter**
- [ ] **Create Auth API Routes** (`signup`, `login`)
- [ ] **Test Authentication via Postman**

</details>

<details>
<summary>🚀 Core Features</summary>

- [ ] **Short URL Creation API**
- [ ] **Redirection with Click Tracking**
- [ ] **Rate Limiting with Middleware**
- [ ] **User URL History API**

</details>

<details>
<summary>💻 Frontend Features</summary>

- [ ] **Signup/Login Pages (shadcnUI)**
- [ ] **URL Shortener Form (Homepage)**
- [ ] **History Dashboard with Table**
- [ ] **Full Frontend Testing**

</details>

<details>
<summary>⚡ Redis Integration (Add it later)</summary>

- [ ] **Install Redis Client**
- [ ] **Set Up Redis (Docker/Upstash)**
- [ ] **Prisma Schema Update (Remove RateLimit model)**
- [ ] **Use Redis for Rate Limiting**
- [ ] **Cache Short URLs in Redis**
- [ ] **[Optional] Redis Click Tracking**
- [ ] **Test Redis Integration**

</details>

<details>
<summary>🌐 Deployment</summary>

- [ ] **Prepare `.env.production`**
- [ ] **Deploy to Vercel**
- [ ] **Production Testing**

</details>

<details>
<summary>✨ Optional Enhancements</summary>

- [ ] **URL Validation**
- [ ] **Custom Short Codes**
- [ ] **URL Expiration**
- [ ] **Click Analytics Chart**

</details>

---

## 🚀 Getting Started

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
npx prisma db push
npm run dev
```

## Contributing
Submit issues or pull requests to improve the project!

## License
MIT License