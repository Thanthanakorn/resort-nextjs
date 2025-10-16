export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            บ้านเกื้อบ่อกุ้ง
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            สัมผัสธรรมชาติใกล้ชิด พักผ่อนอย่างสบายใจ
            <br />
            ท่ามกลางสวนเขียวชอุ่ม บรรยากาศร่มรื่น เงียบสงบ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/rooms"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors btn-transition"
            >
              ดูห้องพัก
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all btn-transition"
            >
              ติดต่อจอง
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ทำไมต้องเลือกเรา?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              บริการคุณภาพ สิ่งอำนวยความสะดวกครบครัน และบรรยากาศที่ผ่อนคลาย
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-lg card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">บรรยากาศธรรมชาติ</h3>
              <p className="text-gray-600">
                ล้อมรอบด้วยสวนเขียวชอุ่ม อากาศบริสุทธิ์ เสียงนกร้อง และลำธารใส
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-lg card-hover">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">สะดวกสบาย</h3>
              <p className="text-gray-600">
                ห้องพักสะอาด เตียงนอนนุ่ม เครื่องปรับอากาศ และอินเทอร์เน็ตฟรี
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-lg card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">ทำเลสะดวก</h3>
              <p className="text-gray-600">
                ใกล้แหล่งท่องเที่ยวสำคัญ ร้านอาหารอร่อย และตลาดท้องถิ่น
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            พร้อมสำหรับการพักผ่อนแล้วหรือยัง?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            จองเลยวันนี้ รับส่วนลดพิเศษสำหรับลูกค้าใหม่ 10%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors btn-transition"
            >
              โทรจองเลย 081-234-5678
            </a>
            <a
              href="/rooms"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all btn-transition"
            >
              ดูราคาห้องพัก
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}