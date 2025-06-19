import Link from 'next/link';

const CareersPage = () => {
  const jobOpenings = [
    {
      id: 'sec-officer',
      title: 'เจ้าหน้าที่รักษาความปลอดภัย',
      description: 'ปฏิบัติหน้าที่รักษาความปลอดภัยตามที่ได้รับมอบหมาย ดูแลความเรียบร้อยและความปลอดภัยในชีวิตและทรัพย์สิน (ข้อความตัวอย่าง)',
      location: 'กรุงเทพฯ และปริมณฑล',
    },
    {
      id: 'team-lead',
      title: 'หัวหน้าชุดรักษาความปลอดภัย',
      description: 'ควบคุมดูแลการปฏิบัติงานของทีมเจ้าหน้าที่รักษาความปลอดภัย วางแผนการทำงาน และประสานงานกับผู้เกี่ยวข้อง (ข้อความตัวอย่าง)',
      location: 'กรุงเทพฯ',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">ร่วมงานกับเรา</h1>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          ร่วมเป็นส่วนหนึ่งของทีมงานมืออาชีพที่ เอ.เอ็น.เอ.พี. เรามุ่งมั่นสร้างสภาพแวดล้อมการทำงานที่ดี
          พร้อมโอกาสในการเติบโตและพัฒนาศักยภาพของคุณ (ข้อความตัวอย่างสำหรับคำนำ)
        </p>
      </header>

      {/* Why Work at A.N.A.P. Section */}
      <section className="mb-12 bg-gray-50 p-8 rounded-lg shadow">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">ทำไมคุณถึงควรเลือก เอ.เอ็น.เอ.พี.?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">การฝึกอบรมและพัฒนา</h3>
            <p className="text-gray-700">เรามีการฝึกอบรมที่เป็นมาตรฐานสากล เพื่อให้พนักงานมีความรู้ความสามารถ และทักษะที่จำเป็นในการปฏิบัติงานอย่างมืออาชีพ (ข้อความตัวอย่าง)</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">วัฒนธรรมองค์กรที่ดี</h3>
            <p className="text-gray-700">เราส่งเสริมวัฒนธรรมองค์กรที่เน้นการทำงานเป็นทีม การเคารพซึ่งกันและกัน และการสื่อสารที่เปิดกว้าง (ข้อความตัวอย่าง)</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">ความมุ่งมั่นต่อพนักงาน</h3>
            <p className="text-gray-700">เราให้ความสำคัญกับสวัสดิการ ความปลอดภัย และความเป็นอยู่ที่ดีของพนักงานทุกคน (ข้อความตัวอย่าง)</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">โอกาสก้าวหน้าในอาชีพ</h3>
            <p className="text-gray-700">เรามีเส้นทางอาชีพที่ชัดเจนและสนับสนุนให้พนักงานเติบโตไปพร้อมกับองค์กร (ข้อความตัวอย่าง)</p>
          </div>
        </div>
      </section>

      {/* Current Job Openings Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">ตำแหน่งงานที่เปิดรับ</h2>
        {jobOpenings.length > 0 ? (
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">{job.title}</h3>
                <p className="text-gray-500 mb-3">สถานที่ปฏิบัติงาน: {job.location}</p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <button
                  // onClick={() => { /* Logic to scroll to form or open modal */ }}
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  สมัครตำแหน่งนี้
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            ขณะนี้ยังไม่มีตำแหน่งงานว่าง แต่คุณสามารถส่งประวัติส่วนตัว (Resume) มาให้เราพิจารณาได้ที่{' '}
            <a href="mailto:careers@anap.co.th" className="text-blue-600 hover:underline">
              careers@anap.co.th
            </a>
          </p>
        )}
      </section>

      {/* How to Apply / Application Form Section */}
      <section className="py-10 bg-blue-50 px-4 md:px-8 rounded-lg shadow">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">วิธีการสมัครงาน</h2>
        <p className="text-center text-gray-700 mb-6">
          สนใจร่วมงานกับเรา? กรุณากรอกแบบฟอร์มด้านล่าง หรือส่งประวัติส่วนตัว (Resume) ของคุณมาที่{' '}
          <a href="mailto:careers@anap.co.th" className="text-blue-600 hover:underline">
            careers@anap.co.th
          </a>
        </p>

        {/* Placeholder Application Form */}
        <form className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล</label>
            <input type="text" name="fullName" id="fullName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="กรอกชื่อ-นามสกุลของคุณ"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">อีเมล</label>
            <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="example@email.com"/>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
            <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="08x-xxx-xxxx"/>
          </div>
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">ตำแหน่งที่สนใจ (ถ้ามี)</label>
            <input type="text" name="position" id="position" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="ระบุตำแหน่งที่ต้องการสมัคร"/>
          </div>
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">แนบไฟล์ประวัติส่วนตัว (Resume)</label>
            <input type="file" name="resume" id="resume" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 disabled:opacity-50" disabled/>
            <p className="text-xs text-gray-500 mt-1">ขณะนี้ระบบแนบไฟล์ยังไม่เปิดใช้งาน กรุณาส่ง Resume ของท่านทางอีเมล</p>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">ข้อความเพิ่มเติม</label>
            <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="แนะนำตัวเองสั้นๆ หรือระบุข้อมูลเพิ่มเติมที่ต้องการแจ้งให้เราทราบ"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-70" disabled>
              ส่งใบสมัคร (ยังไม่เปิดใช้งาน)
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CareersPage;
