interface Room {
  id: number;
  name: string;
  type: string;
  price: number;
  originalPrice?: number;
  images: string[];
  amenities: string[];
  capacity: number;
  size: number;
  description: string;
}

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
      {/* Room Image */}
      <div className="relative h-64">
        <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center">
          <div className="text-center text-white">
            <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21l4-4 4 4" />
            </svg>
            <p className="text-sm opacity-80">รูปห้องพัก</p>
          </div>
        </div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full">
          <span className="text-sm font-semibold">฿{room.price.toLocaleString()}/คืน</span>
        </div>

        {/* Discount Badge */}
        {room.originalPrice && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            ลด {Math.round((1 - room.price / room.originalPrice) * 100)}%
          </div>
        )}
      </div>

      {/* Room Details */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
          <span className="text-sm text-gray-500">{room.type}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{room.description}</p>

        {/* Room Info */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{room.capacity} ท่าน</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{room.size} ตร.ม.</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">สิ่งอำนวยความสะดวก</h4>
          <div className="flex flex-wrap gap-1">
            {room.amenities.map((amenity, index) => (
              <span
                key={index}
                className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div>
            {room.originalPrice && (
              <span className="text-gray-400 line-through text-sm mr-2">
                ฿{room.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-2xl font-bold text-orange-600">
              ฿{room.price.toLocaleString()}
            </span>
            <span className="text-gray-500 text-sm ml-1">/คืน</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors btn-transition">
            จองเลย
          </button>
          <button className="px-4 py-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-lg font-semibold transition-all btn-transition">
            ดูรายละเอียด
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;