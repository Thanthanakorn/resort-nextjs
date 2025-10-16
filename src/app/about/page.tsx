export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            เกี่ยวกับเรา
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            เรื่องราวของบ้านเกื้อบ่อกุ้ง รีสอร์ต ความเป็นมาและจุดมุ่งหมายในการให้บริการ
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                ความเป็นมาของรีสอร์ต
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  บ้านเกื้อบ่อกุ้ง รีสอร์ต เกิดขึ้นจากความฝันของ <strong>คุณพ่อธัน</strong> 
                  ที่ต้องการสร้างสถานที่พักผ่อนท่ามกลางธรรมชาติ ให้ผู้คนได้หลีกหนีจากความวุ่นวายในเมือง
                  มาสัมผัสความสงบและความสุขใสๆ ที่แท้จริง
                </p>
                <p>
                  เริ่มต้นจากสวนขนาดเล็ก ที่คุณพ่อปลูกต้นไม้และพัฒนาเป็นสวนเขียวชอุ่ม 
                  จนกระทั่งตัดสินใจสร้างที่พักเล็กๆ เพื่อต้อนรับแขกที่มาเยือน
                  ด้วยความรักและใส่ใจในทุกรายละเอียด
                </p>
                <p>
                  วันนี้ บ้านเกื้อบ่อกุ้ง รีสอร์ต เติบโตขึ้นเป็นที่พักที่มีชื่อเสียง 
                  โดยยังคงรักษาความเป็นธรรมชาติและความอบอุ่นเหมือนเดิม 
                  พร้อมให้บริการด้วยใจจริงทุกท่าน
                </p>
              </div>
            </div>

            {/* Story Image */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-200 to-green-400 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <p className="text-sm opacity-80">รูปประวัติรีสอร์ต</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ค่านิยมของเรา
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              สิ่งที่เราเชื่อและยึดมั่น ในการให้บริการที่ดีที่สุดแก่ผู้เข้าพัก
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center p-8 bg-white rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">ความรักธรรมชาติ</h3>
              <p className="text-gray-600">
                เราเชื่อในการอนุรักษ์ธรรมชาติ สร้างสมดุลระหว่างการท่องเที่ยวและสิ่งแวดล้อม
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center p-8 bg-white rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">ใส่ใจในบริการ</h3>
              <p className="text-gray-600">
                บริการด้วยใจจริง ใส่ใจในทุกรายละเอียด เพื่อให้ผู้เข้าพักได้รับประสบการณ์ที่ดีที่สุด
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center p-8 bg-white rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">ครอบครัวใหญ่</h3>
              <p className="text-gray-600">
                เราถือว่าผู้เข้าพักทุกท่านเป็นครอบครัว ต้อนรับด้วยความอบอุ่นและจริงใจ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              จุดเด่นของรีสอร์ต
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              สิ่งที่ทำให้บ้านเกื้อบ่อกุ้ง รีสอร์ต แตกต่างจากที่อื่น
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Feature List */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">บรรยากาศธรรมชาติ 100%</h3>
                  <p className="text-gray-600">ล้อมรอบด้วยสวนเขียว ต้นไผ่ใหญ่ และลำธารน้ำใสเซาะเสียง</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">อาหารท้องถิ่นแท้</h3>
                  <p className="text-gray-600">อาหารสดใหม่จากสวนเอง ปรุงตามสูตรต้นตำรับ รสชาติดั้งเดิม</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">กิจกรรมหลากหลาย</h3>
                  <p className="text-gray-600">เดินป่า ปั่นจักรยาน ตกปลา และอื่นๆ มากมาย</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">ทำเลสะดวก</h3>
                  <p className="text-gray-600">ใกล้แหล่งท่องเที่ยวสำคัญ เดินทางง่าย ปลอดภัย</p>
                </div>
              </div>
            </div>

            {/* Feature Image */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-orange-400 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <p className="text-sm opacity-80">รูปกิจกรรมในรีสอร์ต</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ทีมงานของเรา
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              บุคคลากรที่มีประสบการณ์และใส่ใจในการดูแลผู้เข้าพัก
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center bg-white p-8 rounded-lg shadow-md card-hover">
              <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">พ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">คุณพ่อธัน</h3>
              <p className="text-orange-600 mb-4">ผู้ก่อตั้งและเจ้าของ</p>
              <p className="text-gray-600 text-sm">
                ผู้ริเริ่มและสร้างรีสอร์ตขึ้น ด้วยความรักในธรรมชาติและการต้อนรับแขก
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center bg-white p-8 rounded-lg shadow-md card-hover">
              <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">ส</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">คุณแม่สมหญิง</h3>
              <p className="text-orange-600 mb-4">ผู้จัดการทั่วไป</p>
              <p className="text-gray-600 text-sm">
                ดูแลการบริหารจัดการรีสอร์ต และความสะดวกสบายของผู้เข้าพัก
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center bg-white p-8 rounded-lg shadow-md card-hover">
              <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">ท</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ทีมพนักงาน</h3>
              <p className="text-orange-600 mb-4">ทีมดูแลและบริการ</p>
              <p className="text-gray-600 text-sm">
                พนักงานที่มีประสบการณ์ มีใจรักงานบริการ พร้อมช่วยเหลือตลอด 24 ชั่วโมง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            พร้อมมาเป็นส่วนหนึ่งของครอบครัวเราแล้วหรือยัง?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            มาสัมผัสความอบอุ่น ความเป็นธรรมชาติ และบริการที่เต็มใจ ที่บ้านเกื้อบ่อกุ้ง รีสอร์ต
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/rooms"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors btn-transition"
            >
              ดูห้องพัก
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all btn-transition"
            >
              ติดต่อเรา
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}