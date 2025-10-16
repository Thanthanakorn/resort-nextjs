import RoomCard from '@/components/RoomCard';

// ข้อมูลห้องพัก (ตัวอย่าง)
const rooms = [
  {
    id: 1,
    name: 'ห้องสวนธรรมชาติ',
    type: 'ห้องพักมาตรฐาน',
    price: 1200,
    originalPrice: 1500,
    images: ['/images/room1.jpg'],
    amenities: ['เครื่องปรับอากาศ', 'WiFi ฟรี', 'ทีวี', 'ตู้เย็น', 'ห้องน้ำส่วนตัว'],
    capacity: 2,
    size: 25,
    description: 'ห้องพักสะอาด อบอุ่น วิวสวนธรรมชาติ เหมาะสำหรับคู่รัก'
  },
  {
    id: 2,
    name: 'ห้องครอบครัวใหญ่',
    type: 'ห้องครอบครัว',
    price: 2200,
    originalPrice: 2800,
    images: ['/images/room2.jpg'],
    amenities: ['เครื่องปรับอากาศ', 'WiFi ฟรี', 'ทีวี', 'ตู้เย็น', '2 ห้องนอน', 'ห้องนั่งเล่น'],
    capacity: 6,
    size: 45,
    description: 'ห้องพักขนาดใหญ่ เหมาะสำหรับครอบครัว มี 2 ห้องนอน ห้องนั่งเล่นกว้างขวาง'
  },
  {
    id: 3,
    name: 'ห้องวีไอพี พรีเมียม',
    type: 'ห้องพิเศษ',
    price: 3500,
    images: ['/images/room3.jpg'],
    amenities: ['เครื่องปรับอากาศ', 'WiFi ฟรี', 'Smart TV', 'มินิบาร์', 'อ่างอาบน้ำ', 'ระเบียงส่วนตัว'],
    capacity: 2,
    size: 40,
    description: 'ห้องพักหรูหรา ระเบียงส่วนตัว วิวสวนสวย อ่างอาบน้ำ บริการพิเศษ'
  },
  {
    id: 4,
    name: 'ห้องธุรกิจ',
    type: 'ห้องพักธุรกิจ',
    price: 1800,
    images: ['/images/room4.jpg'],
    amenities: ['เครื่องปรับอากาศ', 'WiFi ฟรี', 'โต๊ะทำงาน', 'ทีวี', 'ตู้เซฟ', 'เครื่องชงกาแฟ'],
    capacity: 2,
    size: 30,
    description: 'ห้องพักสำหรับนักธุรกิจ โต๊ะทำงานกว้าง อินเทอร์เน็ตเร็ว บรรยากาศเหมาะสำหรับการทำงาน'
  },
  {
    id: 5,
    name: 'ห้องเศรษฐกิจ',
    type: 'ห้องพักประหยัด',
    price: 800,
    originalPrice: 1000,
    images: ['/images/room5.jpg'],
    amenities: ['พัดลม', 'WiFi ฟรี', 'ทีวี', 'ห้องน้ำส่วนตัว'],
    capacity: 2,
    size: 18,
    description: 'ห้องพักราคาประหยัด สะอาด สะดวกสบาย เหมาะสำหรับการพักผ่อนแบบประหยัด'
  },
  {
    id: 6,
    name: 'ห้องกลุ่ม',
    type: 'ห้องพักหมู่คณะ',
    price: 3000,
    images: ['/images/room6.jpg'],
    amenities: ['เครื่องปรับอากาศ', 'WiFi ฟรี', 'ทีวี', '4 เตียง', 'ห้องน้ำใหญ่', 'โซฟานั่งเล่น'],
    capacity: 8,
    size: 60,
    description: 'ห้องพักขนาดใหญ่สำหรับกลุ่ม มี 4 เตียง เหมาะสำหรับเดินทางเป็นหมู่คณะ'
  }
];

export default function Rooms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ห้องพักของเรา
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            เลือกห้องพักที่เหมาะสมกับความต้องการของคุณ 
            ทุกห้องได้รับการออกแบบเพื่อความสะดวกสบายและผ่อนคลาย
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold">
              ทั้งหมด
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-white rounded-full font-semibold transition-colors">
              ห้องมาตรฐาน
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-white rounded-full font-semibold transition-colors">
              ห้องครอบครัว
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-white rounded-full font-semibold transition-colors">
              ห้องพิเศษ
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-white rounded-full font-semibold transition-colors">
              ราคาถูก
            </button>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            วิธีการจอง
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">เลือกห้องพัก</h3>
              <p className="text-gray-600 text-sm">เลือกห้องที่ถูกใจ ดูรายละเอียดและราคา</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">ติดต่อจอง</h3>
              <p className="text-gray-600 text-sm">โทร 081-234-5678 หรือ LINE @baansuanthan</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">ยืนยันการจอง</h3>
              <p className="text-gray-600 text-sm">ชำระเงินมัดจำ รอรับการยืนยันจากทางรีสอร์ต</p>
            </div>
          </div>
          <div className="mt-12">
            <a
              href="/contact"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold btn-transition"
            >
              ติดต่อจองเลย
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}