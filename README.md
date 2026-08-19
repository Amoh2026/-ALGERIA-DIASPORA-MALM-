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

## 📁 Project Structure

\\\
apps/web/
├── app/
│   ├── admin/            # Admin dashboard
│   ├── member/           # Member dashboard
│   ├── register/         # Member registration form
│   ├── events/           # Event listings
│   ├── news/             # Community news
│   └── api/              # API routes
├── components/           # Reusable React components
├── lib/                  # Utilities (encryption, rate limit, audit)
├── prisma/              # Database schema
└── public/              # Static assets
\\\

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

\\\ash
# Clone the repository
git clone https://github.com/Amoh2026/-ALGERIA-DIASPORA-MALM-.git

# Navigate to project
cd -ALGERIA-DIASPORA-MALM-/apps/web

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Push database schema
npx prisma db push

# Start development server
npm run dev
\\\

### Environment Variables

\\\env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
ENCRYPTION_KEY="your-32-byte-encryption-key"
\\\

## 🔒 Security Features

- **Data Encryption**: All sensitive data encrypted using AES-256-CBC
- **Rate Limiting**: 5 submissions per IP per 15 minutes
- **Audit Logging**: All administrative actions are logged
- **Input Validation**: All user input validated with Zod
- **SQL Injection Protection**: Prisma ORM with parameterized queries
- **XSS Protection**: React automatic escaping
- **CSRF Protection**: Next.js built-in protection
- **GDPR Compliant**: User consent and data protection

## 👥 Roles & Permissions

| Role | Permissions |
|------|-------------|
| **Public** | View events, news, culture content |
| **Member** | Register for events, create posts, comment |
| **Admin** | Full access - manage members, events, content |

## 📊 Database Schema

- **User** - Member accounts with roles
- **Account** - OAuth authentication
- **Session** - User sessions
- **Event** - Community events
- **EventRegistration** - Event registrations
- **Announcement** - News and updates
- **MemberApplication** - Registration form submissions
- **AuditLog** - Security audit trail

## 🗓️ Roadmap

- [x] Member registration form
- [x] Authentication system
- [x] Event management
- [x] Admin dashboard
- [x] Audit logging
- [x] Data encryption
- [ ] Email notifications
- [ ] Photo galleries
- [ ] Mobile app
- [ ] Payment integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open a Pull Request

## 📝 License

This project is private and proprietary to Svensk Algeriska Föreningen.

## 📞 Contact

**Svensk Algeriska Föreningen**
Malmö, Sweden
Email: info@algeriskaföreningen.se

---

Built with ❤️ for the Algerian community in Sweden