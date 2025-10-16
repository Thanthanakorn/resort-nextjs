# บ้านเกื้อบ่อกุ้ง 🌿

เว็บไซต์รีสอร์ตที่สร้างด้วย Next.js, TypeScript และ Tailwind CSS

## 🌟 ฟีเจอร์หลัก

- **หน้าแรก**: แสดงข้อมูลรีสอร์ต ความพิเศษ และปุ่มติดต่อ
- **หน้าห้องพัก**: แสดงห้องพักทั้งหมดพร้อมราคาและรายละเอียด
- **หน้าเกี่ยวกับเรา**: เรื่องราวของรีสอร์ต ค่านิยม และทีมงาน  
- **หน้าติดต่อเรา**: ฟอร์มการจอง ข้อมูลติดต่อ และแผนที่

## 🎨 การออกแบบ

- **สีหลัก**: เขียว (#22c55e) และส้มอ่อน (#fb923c)
- **ธีม**: ธรรมชาติ อบอุ่น เป็นมิตร
- **Responsive**: รองรับทุกขนาดหน้าจอ
- **Animation**: Hover effects และ transitions

## 🚀 การติดตั้งและรัน

### ความต้องการของระบบ
- Node.js 18+ 
- npm หรือ yarn

### วิธีการติดตั้ง

1. **Clone repository**
```bash
git clone <repository-url>
cd resort-nextjs
```

2. **ติดตั้ง dependencies**
```bash
npm install
# หรือ
yarn install
```

3. **รัน development server**
```bash
npm run dev
# หรือ
yarn dev
```

4. **เปิดเบราว์เซอร์ไปที่** http://localhost:3000

### สคริปต์ที่มีให้ใช้

```bash
npm run dev      # รัน development server
npm run build    # Build โปรเจค
npm run start    # รัน production server
npm run lint     # ตรวจสอบ code style
```

## 📁 โครงสร้างโปรเจค

```
resort-nextjs/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── about/          # หน้าเกี่ยวกับเรา
│   │   ├── contact/        # หน้าติดต่อเรา
│   │   ├── rooms/          # หน้าห้องพัก
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # หน้าแรก
│   └── components/         # React components
│       ├── Footer.tsx      # Footer component
│       ├── Navbar.tsx      # Navigation bar
│       └── RoomCard.tsx    # Card สำหรับห้องพัก
├── public/                 # Static files
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🔧 เทคโนโลยีที่ใช้

- **Framework**: Next.js 15.5.5
- **Language**: TypeScript 
- **Styling**: Tailwind CSS 4.0
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)

## 📱 หน้าเว็บและฟีเจอร์

### หน้าแรก (/)
- Hero section ที่สวยงาม
- จุดเด่นของรีสอร์ต 3 ข้อ
- Call-to-action buttons
- Animation และ transitions

### หน้าห้องพัก (/rooms)
- แสดงห้องพัก 6 ประเภท
- RoomCard component ที่สวยงาม
- ระบบ filter (ยังไม่ทำงาน)
- วิธีการจองแบบ step-by-step

### หน้าเกี่ยวกับเรา (/about)
- ประวัติและเรื่องราวรีสอร์ต
- ค่านิยมและความเชื่อ
- จุดเด่นของรีสอร์ต
- แนะนำทีมงาน

### หน้าติดต่อเรา (/contact)
- ข้อมูลติดต่อครบถ้วน
- ฟอร์มการจองออนไลน์
- แผนที่และเส้นทาง
- FAQ section
- เวลาทำการ

## 🎯 Components

### Navbar
- Responsive navigation
- Mobile hamburger menu
- Active states
- Brand logo

### Footer  
- ข้อมูลรีสอร์ต
- เมนูลิงก์
- ข้อมูลติดต่อ
- Social media icons

### RoomCard
- รูปภาพห้องพัก (placeholder)
- ข้อมูลราคาและรายละเอียด
- ระบบส่วนลดที่คำนวณอัตโนมัติ
- Amenities badges
- Call-to-action buttons

## 🎨 Styling และ Theme

### Colors
```css
--resort-primary: #22c55e    /* Green */
--resort-secondary: #fb923c  /* Orange */
--resort-accent: #fef3c7     /* Light cream */
--resort-dark: #1f2937       /* Dark text */
--resort-light: #f9fafb      /* Light background */
```

### Custom Classes
- `.btn-transition`: Smooth button transitions
- `.card-hover`: Card hover effects
- Gradient backgrounds
- Custom scrollbar styling

## 📞 ข้อมูลติดต่อ (ในเว็บไซต์)

- **โทรศัพท์**: 081-234-5678
- **LINE**: @baansuanthan
- **Facebook**: บ้านเกื้อบ่อกุ้ง รีสอร์ต
- **Email**: contact@baansuanthan.com
- **ที่อยู่**: 123 หมู่ 5 สุพรรณบุรี

## 🔮 การพัฒนาต่อ

### ฟีเจอร์ที่ควรเพิ่ม
- [ ] ระบบจองออนไลน์จริง
- [ ] Payment Gateway
- [ ] ระบบจัดการ Admin
- [ ] Gallery รูปภาพ
- [ ] รีวิวจากลูกค้า
- [ ] Blog/ข่าวสาร
- [ ] Multi-language support
- [ ] PWA support
- [ ] SEO optimization

### Technical Improvements
- [ ] Image optimization
- [ ] Database integration
- [ ] API routes
- [ ] Authentication
- [ ] Email notifications
- [ ] Google Maps integration
- [ ] Analytics tracking

## 📝 License

MIT License - สามารถใช้งานและดัดแปลงได้อย่างอิสระ

## 👨‍💻 Developer

สร้างโดย AI Assistant สำหรับคุณพ่อธัน - บ้านเกื้อบ่อกุ้ง รีสอร์ต

---

💚 **ขอบคุณที่ใช้งาน และหวังว่าเว็บไซต์จะช่วยให้ธุรกิจรีสอร์ตเติบโตได้!** 💚
