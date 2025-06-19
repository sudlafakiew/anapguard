import Link from 'next/link';

const NewsPage = () => {
  const newsItems = [
    {
      id: 'news-1',
      title: 'กิจกรรมอบรมดับเพลิงและซ้อมอพยพประจำปี 2567',
      date: '20 ตุลาคม 2567',
      summary: 'บริษัทฯ ได้จัดกิจกรรมอบรมการดับเพลิงเบื้องต้นและการซ้อมอพยพหนีไฟให้กับพนักงานทุกคน เพื่อเตรียมความพร้อมรับมือเหตุฉุกเฉิน (ข้อความตัวอย่าง)',
      imageUrl: null, // Placeholder for actual image URL
      category: 'การเตรียมความพร้อม',
    },
    {
      id: 'news-2',
      title: 'ANAP Security ร่วมบริจาคสิ่งของช่วยเหลือผู้ประสบภัยน้ำท่วม',
      date: '15 ตุลาคม 2567',
      summary: 'ทีมงาน ANAP Security ได้เดินทางไปมอบสิ่งของจำเป็นให้กับพี่น้องผู้ประสบอุทกภัยในพื้นที่ XYZ (ข้อความตัวอย่าง)',
      imageUrl: null,
      category: 'กิจกรรมเพื่อสังคม',
    },
    {
      id: 'news-3',
      title: 'การฝึกอบรมยกระดับทักษะเจ้าหน้าที่รักษาความปลอดภัย รุ่นที่ 5',
      date: '5 ตุลาคม 2567',
      summary: 'มุ่งเน้นการพัฒนาทักษะการสังเกต การแก้ไขปัญหาเฉพาะหน้า และการบริการที่เป็นเลิศให้กับเจ้าหน้าที่ (ข้อความตัวอย่าง)',
      imageUrl: null,
      category: 'การเตรียมความพร้อม',
    },
    {
      id: 'news-4',
      title: 'บริษัทฯ จัดกิจกรรมสานสัมพันธ์พนักงานประจำปี',
      date: '28 กันยายน 2567',
      summary: 'กิจกรรมสันทนาการเพื่อสร้างความสามัคคีและผ่อนคลายจากการทำงานให้กับพนักงานทุกระดับ (ข้อความตัวอย่าง)',
      imageUrl: null,
      category: 'ช่วยเหลือพนักงาน',
    },
    {
      id: 'news-5',
      title: 'ANAP Security ได้รับใบประกาศเกียรติคุณด้านการบริการดีเด่น',
      date: '10 กันยายน 2567',
      summary: 'ความภาคภูมิใจในการได้รับการยอมรับด้านคุณภาพการบริการลูกค้าที่เป็นเลิศ (ข้อความตัวอย่าง)',
      imageUrl: null,
      category: 'ข่าวสารองค์กร',
    },
    {
      id: 'news-6',
      title: 'เปิดรับสมัครเจ้าหน้าที่รักษาความปลอดภัยจำนวนมาก',
      date: '1 กันยายน 2567',
      summary: 'ร่วมเป็นส่วนหนึ่งของทีมงานมืออาชีพกับ ANAP Security (ข้อความตัวอย่าง)',
      imageUrl: null,
      category: 'ข่าวสารองค์กร',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">ข่าวสารและกิจกรรม</h1>
        <p className="text-lg text-gray-600 mt-2">
          ติดตามข่าวสารล่าสุด กิจกรรมต่างๆ และเรื่องราวที่น่าสนใจจาก เอ.เอ็น.เอ.พี.
        </p>
      </header>

      {/* Filter Section (Placeholder) */}
      <section className="mb-10">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm">ทั้งหมด</button>
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-sm">ข่าวสารองค์กร</button>
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-sm">การเตรียมความพร้อม</button>
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-sm">กิจกรรมเพื่อสังคม</button>
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-sm">ช่วยเหลือพนักงาน</button>
        </div>
      </section>

      {/* News/Activity Listing Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
              {/* Placeholder for image */}
              <span>รูปภาพตัวอย่าง (16:9)</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{item.date} | {item.category}</p>
              <p className="text-gray-700 leading-relaxed mb-4 flex-grow">{item.summary}</p>
              <Link href={`/news/${item.id}`} legacyBehavior>
                <a className="text-yellow-500 hover:text-yellow-600 font-semibold self-start">
                  อ่านเพิ่มเติม &rarr;
                </a>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination (Placeholder) */}
      <section className="mt-12 flex justify-center items-center space-x-2">
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100" disabled>ก่อนหน้า</button>
        <button className="px-4 py-2 border rounded-md bg-blue-500 text-white">1</button>
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">2</button>
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">3</button>
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">ถัดไป</button>
      </section>
    </div>
  );
};

export default NewsPage;
