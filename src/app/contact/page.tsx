'use client';

import { useState } from 'react';
import NoSSR from '@/components/NoSSR';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
    alert('ขอบคุณสำหรับการติดต่อ เราจะติดต่อกลับโดยเร็วที่สุด!');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ติดต่อเรา
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            พร้อมให้บริการและตอบคำถามทุกเรื่อง สำหรับการจองห้องพักและข้อมูลต่างๆ
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                ช่องทางการติดต่อ
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">โทรศัพท์</h3>
                    <p className="text-gray-600">081-234-5678</p>
                    <p className="text-sm text-gray-500">เปิดรับสาย 24 ชั่วโมง</p>
                  </div>
                </div>

                {/* LINE */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">LINE</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">LINE Official</h3>
                    <p className="text-gray-600">@baansuanthan</p>
                    <p className="text-sm text-gray-500">ตอบกลับเร็ว สะดวก</p>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Facebook</h3>
                    <p className="text-gray-600">บ้านเกื้อบ่อกุ้ง รีสอร์ต</p>
                    <p className="text-sm text-gray-500">ดูรูปภาพและรีวิว</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">อีเมล</h3>
                    <p className="text-gray-600">contact@baansuanthan.com</p>
                    <p className="text-sm text-gray-500">สำหรับข้อมูลทั่วไป</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">ที่อยู่</h3>
                    <p className="text-gray-600 leading-relaxed">
                      123 หมู่ 5 ตำบลป่าสัก<br />
                      อำเภอเมือง จังหวัดลำปาง<br />
                      52000
                    </p>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="mt-12 p-6 bg-green-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">เวลาทำการ</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>จันทร์ - ศุกร์</span>
                    <span>08:00 - 20:00 น.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>เสาร์ - อาทิตย์</span>
                    <span>07:00 - 21:00 น.</span>
                  </div>
                  <div className="border-t pt-2 mt-4">
                    <p className="text-sm text-green-600 font-medium">
                      * เปิดรับการจองและสอบถาม 24 ชั่วโมง ผ่านโทรศัพท์
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                ฟอร์มการจอง
              </h2>

              <NoSSR fallback={
                <div className="bg-gray-100 rounded-lg p-8 animate-pulse">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-10 bg-gray-300 rounded"></div>
                    <div className="h-10 bg-gray-300 rounded"></div>
                  </div>
                </div>
              }>
                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      ชื่อ-นามสกุล *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="กรุณากรอกชื่อ-นามสกุล"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      เบอร์โทรศัพท์ *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="08X-XXX-XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    อีเมล
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Booking Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                      วันที่เช็คอิน *
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      required
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                      วันที่เช็คเอาท์ *
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      required
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      จำนวนผู้เข้าพัก
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="1">1 ท่าน</option>
                      <option value="2">2 ท่าน</option>
                      <option value="3">3 ท่าน</option>
                      <option value="4">4 ท่าน</option>
                      <option value="5">5 ท่าน</option>
                      <option value="6">6 ท่าน</option>
                      <option value="7">7 ท่าน</option>
                      <option value="8">8+ ท่าน</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">
                      ประเภทห้องที่สนใจ
                    </label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">เลือกประเภทห้อง</option>
                      <option value="standard">ห้องมาตรฐาน</option>
                      <option value="family">ห้องครอบครัว</option>
                      <option value="premium">ห้องพิเศษ</option>
                      <option value="business">ห้องธุรกิจ</option>
                      <option value="economy">ห้องประหยัด</option>
                      <option value="group">ห้องกลุ่ม</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    ข้อความเพิ่มเติม
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="กรุณาระบุข้อมูลเพิ่มเติมหรือความต้องการพิเศษ..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors btn-transition"
                >
                  ส่งข้อมูลการจอง
                </button>

                <p className="text-sm text-gray-500 text-center">
                  หลังจากส่งฟอร์ม เราจะติดต่อกลับภายใน 2 ชั่วโมง เพื่อยืนยันการจอง
                </p>
              </form>
              </NoSSR>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              แผนที่และเส้นทาง
            </h2>
            <p className="text-gray-600 text-lg">
              ตำแหน่งของรีสอร์ตและเส้นทางการเดินทาง
            </p>
          </div>

          {/* Google Map Placeholder */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Google Map</h3>
                <p className="text-sm opacity-80">แผนที่ตำแหน่งรีสอร์ต</p>
              </div>
            </div>
            
            {/* Map Info */}
            <div className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">การเดินทาง</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">รถยนต์ส่วนตัว</h4>
                  <p className="text-gray-600 text-sm">
                    จากตัวเมืองลำปาง ใช้เวลาเดินทางประมาณ 30 นาที 
                    มีที่จอดรถฟรีภายในรีสอร์ต
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">รถโดยสาร</h4>
                  <p className="text-gray-600 text-sm">
                    สามารถใช้รถโดยสารประจำทางสาย 123 
                    ลงป้ายตลาดป่าสัก แล้วต่อรถสองแถว
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              คำถามที่พบบ่อย
            </h2>
            <p className="text-gray-600 text-lg">
              คำตอบสำหรับคำถามที่ลูกค้าสอบถามบ่อยที่สุด
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Q: เวลาเช็คอิน - เช็คเอาท์ของรีสอร์ต?
              </h3>
              <p className="text-gray-600">
                A: เช็คอิน 14:00 น. / เช็คเอาท์ 12:00 น. 
                หากต้องการเช็คอินเร็วหรือเช็คเอาท์ช้า สามารถประสานงานได้
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Q: มีการยกเลิกการจองได้หรือไม่?
              </h3>
              <p className="text-gray-600">
                A: สามารถยกเลิกการจองได้ก่อนวันเข้าพัก 3 วัน 
                โดยสามารถขอเงินมัดจำคืน 50% หากยกเลิกก่อน 7 วัน จะได้เงินคืน 100%
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Q: มีบริการรับส่งสนามบินหรือสถานีรถไฟไหม?
              </h3>
              <p className="text-gray-600">
                A: มีบริการรับส่งสนามบินลำปาง และสถานีรถไฟลำปาง 
                ค่าบริการ 300 บาท/เที่ยว (รองรับได้ 4 ท่าน) ต้องจองล่วงหน้า 1 วัน
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Q: สัตว์เลื้ยงเข้าพักได้หรือไม่?
              </h3>
              <p className="text-gray-600">
                A: รับสัตว์เลี้ยงได้ (สุนัข แมว) เพิ่มค่าบริการ 200 บาท/คืน/ตัว 
                ต้องมีใบรับรองวัคซีนและแจ้งล่วงหน้าตอนจอง
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}