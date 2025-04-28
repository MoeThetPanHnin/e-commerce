# 🛍️ Vite + React + TypeScript E-Commerce
 
 A minimal e-commerce front-end scaffold powered by **Vite**, **React 18**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.
 
 ---
 
 ## ✨ Features
 - 🛒 **Product Showcase** – clean card layout for items  
 - ➕ **Add to Cart** – instant cart counter update  
 - 🧹 **Clear Cart** – one-click empty function  
 - 📱 **Fully Responsive** – desktop, tablet, mobile  
 - 🌗 **Dark / Light Theme** (coming soon)
 
 ---
 
 ## 🚀 Tech Stack
 | Layer      | Tech                                |
 | ---------- | ----------------------------------- |
 | Framework  | React 18                            |
 | Build Tool | Vite                                |
 | Language   | TypeScript                          |
 | Styling    | Tailwind CSS, shadcn/ui             |
 | Linting    | ESLint (recommended config)         |
 
 ---
 
 ## 🔧 Getting Started
 
 # 1 Clone the repo
 git clone https://github.com/MoeThetPanHnin/e-commerce-website.git
 cd e-commerce-website
 
 # 2 Install dependencies
 npm install            # or pnpm / yarn
 
 # 3 Run dev server
 npm run dev   
 
 📂 Project Structure
 
 src/
  ├─ components/        # reusable UI
  ├─ pages/            
  ├─ hooks/             # custom hooks
  ├─ lib/               # utilities
  └─ main.tsx           # app entry
 public/
 index.html
 tailwind.config.ts
 vite.config.ts
 
 📈 Future Improvements
 
 Implement dynamic product pages with slug-based routing
 Connect to a real product & inventory API
 Add secure user authentication (JWT + Refresh Token) for customers and admin
 Integrate Stripe checkout and discount coupon logic
 Boost SEO with server-side rendering and structured data (JSON-LD)
 
 ## 📄 License
 MIT License – see the [LICENSE](./LICENSE) file for details.
