import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Resort Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">บ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">บ้านเกื้อบ่อกุ้ง รีสอร์ต</h3>
                <p className="text-gray-400">สัมผัสธรรมชาติใกล้ชิด พักผ่อนอย่างสบายใจ</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              ที่พักท่ามกลางสวนธรรมชาติ บรรยากาศร่มรื่น เงียบสงบ เหมาะสำหรับการพักผ่อน
              ใกล้แหล่งท่องเที่ยวสำคัญ บริการดีเยี่ยม ราคาเป็นมิตร
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">เมนูหลัก</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-gray-400 hover:text-green-400 transition-colors">
                  ห้องพัก
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors">
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ติดต่อเรา</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-400">081-234-5678</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                  </svg>
                </div>
                <span className="text-gray-400">บ้านเกื้อบ่อกุ้ง รีสอร์ต</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.54 0c.847 0 1.54.693 1.54 1.54v20.92c0 .847-.693 1.54-1.54 1.54H4.46c-.847 0-1.54-.693-1.54-1.54V1.54C2.92.693 3.613 0 4.46 0H19.54zM8.842 9.165H6.454v8.707h2.388V9.165zM7.652 8.165c-.764 0-1.264-.533-1.264-1.199 0-.678.515-1.199 1.291-1.199.764 0 1.264.521 1.277 1.199 0 .666-.513 1.199-1.304 1.199zM18.932 17.872v-4.87c0-2.2-.468-3.893-3.043-3.893-1.234 0-2.061.678-2.4 1.321h-.036v-1.265h-2.329v8.707h2.425v-4.309c0-1.018.193-2.004 1.456-2.004 1.237 0 1.263 1.155 1.263 2.07v4.243h2.425-.761z"/>
                  </svg>
                </div>
                <span className="text-gray-400">@baansuan.resort</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">LINE</span>
                </div>
                <span className="text-gray-400">@baansuanthan</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 บ้านเกื้อบ่อกุ้ง รีสอร์ต. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <span className="sr-only">LINE</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18.7 8.8c0-4.2-4.2-7.6-9.4-7.6S-.1 4.6-.1 8.8c0 3.8 3.4 6.9 7.9 7.5.3.1.7 0 .8-.3l.4-1.9c0-.1 0-.3-.1-.4-.1-.1-.2-.1-.3-.1l-.5.1c-2.5-.5-4.4-2.7-4.4-5.4 0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4c0 2.7-1.9 4.9-4.4 5.4l-.5-.1c-.1 0-.2 0-.3.1-.1.1-.1.3-.1.4l.4 1.9c.1.3.5.4.8.3 4.5-.6 7.9-3.7 7.9-7.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;