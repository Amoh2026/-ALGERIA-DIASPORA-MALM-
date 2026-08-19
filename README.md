# 🇩🇿 Svensk Algeriska Föreningen

A digital platform connecting the Algerian diaspora community in Malmö, Sweden, through events, news, member networking, and cultural preservation.

## 🚀 Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **NextAuth.js v5** - Authentication
- **Prisma 5** - Database ORM
- **SQLite** - Development database

### Security
- **AES-256-CBC** - Data encryption
- **Rate Limiting** - Protection against brute force
- **Audit Logging** - Track all actions
- **Zod** - Input validation
- **bcryptjs** - Password hashing

## ✨ Features

- ✅ **Member Registration** - Secure form with encryption
- ✅ **Authentication** - Login/Register with NextAuth.js
- ✅ **Event Management** - Create, view, and register for events
- ✅ **Admin Dashboard** - Manage members and content
- ✅ **Member Dashboard** - View profile and registrations
- ✅ **News & Updates** - Community posts and announcements
- ✅ **Audit Logs** - Track all administrative actions
- ✅ **GDPR Compliant** - Data protection and consent
- ✅ **Responsive Design** - Works on all devices

## 🚀 Getting Started

\\\ash
# Clone the repository
git clone https://github.com/Amoh2026/-ALGERIA-DIASPORA-MALM-.git

# Install dependencies
cd -ALGERIA-DIASPORA-MALM-/apps/web && npm install

# Set up environment
cp .env.example .env.local

# Push database
npx prisma db push

# Start development
npm run dev
\\\

## 🔒 Security

- AES-256-CBC encryption for sensitive data
- Rate limiting (5 submissions per 15 minutes)
- Audit logging for all admin actions
- Zod input validation
- GDPR compliant

## 📞 Contact

Email: info@algeriskaföreningen.se

---

Built with ❤️ for the Algerian community in Sweden