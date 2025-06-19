import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ผู้เชี่ยวชาญด้านความปลอดภัยที่เชื่อถือได้</h1>
          <p className="text-lg md:text-xl mb-8">เราให้บริการรักษาความปลอดภัยครบวงจรด้วยทีมงานมืออาชีพและประสบการณ์ยาวนาน</p>
          <Link href="/contact" legacyBehavior>
            <a className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 font-bold py-3 px-8 rounded-lg text-lg">
              ติดต่อเรา
            </a>
          </Link>
        </div>
      </section>

      {/* Brief "About Us" Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">เกี่ยวกับเรา</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            บริษัท รักษาความปลอดภัย เอ.เอ็น.เอ.พี. จำกัด ให้บริการด้านความปลอดภัยอย่างมืออาชีพมานานกว่าทศวรรษ
            เรามุ่งมั่นที่จะมอบความสงบสุขและความปลอดภัยสูงสุดให้กับลูกค้าของเราด้วยมาตรฐานสากล
          </p>
          <Link href="/about" legacyBehavior>
            <a className="text-blue-600 hover:text-blue-800 font-semibold">
              อ่านเพิ่มเติม &rarr;
            </a>
          </Link>
        </div>
      </section>

      {/* Overview of Services Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">บริการของเรา</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">รักษาความปลอดภัยประจำ</h3>
              <p className="text-gray-600 mb-4">บริการเจ้าหน้าที่รักษาความปลอดภัยสำหรับอาคาร สถานที่ และกิจกรรมต่างๆ</p>
              <Link href="/services/regular-security" legacyBehavior>
                <a className="text-yellow-500 hover:text-yellow-600 font-semibold">รายละเอียด</a>
              </Link>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">รักษาความปลอดภัยกิจกรรมพิเศษ</h3>
              <p className="text-gray-600 mb-4">การวางแผนและบริหารจัดการความปลอดภัยสำหรับงานอีเว้นท์ คอนเสิร์ต และงานประชุม</p>
              <Link href="/services/event-security" legacyBehavior>
                <a className="text-yellow-500 hover:text-yellow-600 font-semibold">รายละเอียด</a>
              </Link>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">ติดตั้งระบบ CCTV</h3>
              <p className="text-gray-600 mb-4">บริการออกแบบและติดตั้งระบบกล้องวงจรปิดเพื่อความปลอดภัยสูงสุด</p>
              <Link href="/services/cctv" legacyBehavior>
                <a className="text-yellow-500 hover:text-yellow-600 font-semibold">รายละเอียด</a>
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services" legacyBehavior>
              <a className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
                ดูบริการทั้งหมด
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">เสียงจากลูกค้า</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"ทีมงานรักษาความปลอดภัยของ ANAP มีความเป็นมืออาชีพสูงมาก ใส่ใจในรายละเอียด และตอบสนองต่อสถานการณ์ฉุกเฉินได้อย่างรวดเร็ว"</p>
              <p className="text-gray-800 font-semibold">- คุณสมชาย จาก บริษัท ABC จำกัด</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"ประทับใจในการบริการและการประสานงานที่เป็นระบบ ทำให้มั่นใจในความปลอดภัยของทรัพย์สินของเราอย่างเต็มที่"</p>
              <p className="text-gray-800 font-semibold">- คุณสมหญิง จาก โครงการหมู่บ้าน XYZ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News/Updates Section */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">ข่าวสารและกิจกรรม</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* News Snippet 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">ANAP Security ได้รับมาตรฐาน ISO 9001</h3>
              <p className="text-gray-600 text-sm mb-1">15 มกราคม 2567</p>
              <p className="text-gray-600 mb-4">ข้อความตัวอย่างสำหรับข่าวสารและกิจกรรม ข้อความสั้นๆ เกี่ยวกับข่าวนี้...</p>
              <Link href="/news/iso-9001" legacyBehavior>
                <a className="text-yellow-500 hover:text-yellow-600 font-semibold">อ่านเพิ่มเติม</a>
              </Link>
            </div>
            {/* News Snippet 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">กิจกรรมอบรมเจ้าหน้าที่รักษาความปลอดภัยประจำปี</h3>
              <p className="text-gray-600 text-sm mb-1">10 มกราคม 2567</p>
              <p className="text-gray-600 mb-4">ข้อความตัวอย่างสำหรับข่าวสารและกิจกรรม ข้อความสั้นๆ เกี่ยวกับข่าวนี้...</p>
              <Link href="/news/annual-training" legacyBehavior>
                <a className="text-yellow-500 hover:text-yellow-600 font-semibold">อ่านเพิ่มเติม</a>
              </Link>
            </div>
            {/* News Snippet 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">ANAP ร่วมสนับสนุนกิจกรรมเพื่อสังคม</h3>
              <p className="text-gray-600 text-sm mb-1">5 มกราคม 2567</p>
              <p className="text-gray-600 mb-4">ข้อความตัวอย่างสำหรับข่าวสารและกิจกรรม ข้อความสั้นๆ เกี่ยวกับข่าวนี้...</p>
              <Link href="/news/csr-activity" legacyBehavior>
                <a className="text-yellow-500 hover:text-yellow-600 font-semibold">อ่านเพิ่มเติม</a>
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/news" legacyBehavior>
              <a className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
                อ่านข่าวทั้งหมด
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
