import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">เกี่ยวกับเรา</h1>
        <p className="text-lg text-gray-600 mt-2">บริษัท รักษาความปลอดภัย เอ.เอ็น.เอ.พี. จำกัด</p>
      </header>

      {/* Company History and Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
          ประวัติความเป็นมาและพันธกิจของเรา
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            ก่อตั้งขึ้นเมื่อปี พ.ศ. [XXXX] โดยมีปณิธานอันแน่วแน่ในการให้บริการรักษาความปลอดภัยที่เป็นเลิศ
            ตลอดระยะเวลาที่ผ่านมา บริษัทฯ ได้เติบโตและพัฒนาอย่างต่อเนื่อง ขยายขอบเขตการให้บริการและสร้างสมประสบการณ์
            จนได้รับความไว้วางใจจากองค์กรชั้นนำมากมายให้ดูแลความปลอดภัย ทั้งในภาคธุรกิจและภาคอุตสาหกรรม
            เราภูมิใจในความสำเร็จและทุกย่างก้าวที่ผ่านมา ซึ่งเป็นเครื่องพิสูจน์ถึงความมุ่งมั่นของเราในการสร้างสังคมที่ปลอดภัยยิ่งขึ้น
            (ข้อความตัวอย่างสำหรับประวัติความเป็นมา)
          </p>
          <p>
            <span className="font-semibold text-blue-600">พันธกิจของเรา:</span> มุ่งมั่นที่จะเป็นผู้นำในธุรกิจรักษาความปลอดภัย
            โดยให้บริการที่มีคุณภาพสูงสุด สร้างสรรค์นวัตกรรมด้านความปลอดภัยอย่างต่อเนื่อง
            พร้อมทั้งพัฒนาบุคลากรให้มีความเชี่ยวชาญและยึดมั่นในจรรยาบรรณ
            เพื่อสร้างความพึงพอใจและความเชื่อมั่นสูงสุดให้แก่ลูกค้าของเรา
            (ข้อความตัวอย่างสำหรับพันธกิจ)
          </p>
        </div>
      </section>

      {/* "Why A.N.A.P.?" / Team Expertise Section */}
      <section className="mb-12 bg-gray-50 p-8 rounded-lg shadow">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
          ทำไมต้อง เอ.เอ็น.เอ.พี.?
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            เอ.เอ็น.เอ.พี. ไม่เพียงแต่ให้บริการรักษาความปลอดภัย แต่เรามอบความอุ่นใจและความเชื่อมั่นให้กับลูกค้า
            ด้วยทีมงานรักษาความปลอดภัยที่ผ่านการคัดเลือกและฝึกอบรมอย่างเข้มงวดตามมาตรฐานสากล
            บุคลากรของเรามีความรู้ความสามารถ ความชำนาญ และประสบการณ์ในการรับมือกับสถานการณ์ต่างๆ
            พร้อมด้วยทักษะการสื่อสารและการบริการที่เป็นเลิศ เราเข้าใจถึงความต้องการที่แตกต่างกันของลูกค้าแต่ละราย
            จึงสามารถออกแบบโซลูชันการรักษาความปลอดภัยที่เหมาะสมและมีประสิทธิภาพสูงสุด
            (ข้อความตัวอย่างสำหรับจุดแข็งและทีมงาน)
          </p>
          <p>
            เราลงทุนในการพัฒนาบุคลากรอย่างต่อเนื่อง รวมถึงการนำเทคโนโลยีที่ทันสมัยมาประยุกต์ใช้
            เพื่อให้มั่นใจได้ว่าลูกค้าของเราจะได้รับการป้องกันที่ดีที่สุด
          </p>
        </div>
      </section>

      {/* Company Values and Commitments Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          ค่านิยมองค์กร
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-2">ความซื่อสัตย์</h3>
            <p className="text-gray-600 text-sm">ยึดมั่นในความถูกต้องและความโปร่งใสในการดำเนินงานทุกขั้นตอน (ข้อความตัวอย่าง)</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-2">ความเป็นมืออาชีพ</h3>
            <p className="text-gray-600 text-sm">ปฏิบัติงานด้วยความเชี่ยวชาญ มีมาตรฐาน และความรับผิดชอบสูงสุด (ข้อความตัวอย่าง)</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-2">ความน่าเชื่อถือ</h3>
            <p className="text-gray-600 text-sm">ให้บริการที่ไว้วางใจได้ สม่ำเสมอ และตอบสนองความต้องการของลูกค้า (ข้อความตัวอย่าง)</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-2">การให้ความสำคัญกับลูกค้า</h3>
            <p className="text-gray-600 text-sm">มุ่งเน้นการให้บริการที่เป็นเลิศ ตอบสนองและเกินความคาดหวังของลูกค้า (ข้อความตัวอย่าง)</p>
          </div>
        </div>
      </section>

      {/* Certifications or Accreditations Section (Optional Placeholder) */}
      <section className="bg-blue-50 p-8 rounded-lg shadow">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          ใบรับรองและรางวัล
        </h2>
        <p className="text-gray-700 text-center max-w-xl mx-auto">
          บริษัทของเรามุ่งมั่นในการพัฒนาคุณภาพการบริการอย่างต่อเนื่อง และได้รับการรับรองมาตรฐานต่างๆ
          (ข้อความตัวอย่างสำหรับใบรับรอง) เร็วๆ นี้จะมีการแสดงรายการใบรับรองและรางวัลที่เราภาคภูมิใจ ณ ที่นี้
        </p>
        {/* Example of listing (can be uncommented and populated later)
        <ul className="list-disc list-inside mt-4 max-w-md mx-auto text-gray-700">
          <li>ISO 9001:2015 (ข้อความตัวอย่าง)</li>
          <li>รางวัลผู้ให้บริการรักษาความปลอดภัยดีเด่น ปี XXXX (ข้อความตัวอย่าง)</li>
        </ul>
        */}
      </section>

      <div className="mt-16 text-center">
        <Link href="/contact" legacyBehavior>
          <a className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 font-bold py-3 px-8 rounded-lg text-lg">
            ติดต่อสอบถามเพิ่มเติม
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
