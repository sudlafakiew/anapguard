import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      id: 'regular-security',
      title: 'บริการรักษาความปลอดภัย (ประจำ)',
      description:
        'เราให้บริการเจ้าหน้าที่รักษาความปลอดภัยที่ผ่านการฝึกอบรมอย่างมืออาชีพ เพื่อดูแลความปลอดภัยในชีวิตและทรัพย์สินของท่าน ครอบคลุมทั้งอาคารสำนักงาน โรงงานอุตสาหกรรม หมู่บ้านจัดสรร คอนโดมิเนียม ห้างสรรพสินค้า และสถานที่สำคัญอื่นๆ เจ้าหน้าที่ของเรามีความพร้อมในการเฝ้าระวัง ป้องกันเหตุ และรับมือกับสถานการณ์ฉุกเฉินตลอด 24 ชั่วโมง (ข้อความตัวอย่างสำหรับบริการรักษาความปลอดภัยประจำ)',
      iconPlaceholder: 'ShieldCheckIcon', // Placeholder for icon component or class
    },
    {
      id: 'event-security',
      title: 'บริการรักษาความปลอดภัย (เฉพาะกิจ)',
      description:
        'สำหรับงานอีเว้นท์ การประชุม สัมมนา คอนเสิร์ต หรืองานจัดเลี้ยงต่างๆ ที่ต้องการการดูแลความปลอดภัยเป็นพิเศษ ทีมงานของเรามีความเชี่ยวชาญในการวางแผนและบริหารจัดการความปลอดภัยเฉพาะพื้นที่ สามารถวิเคราะห์ความเสี่ยงและจัดกำลังเจ้าหน้าที่ให้เหมาะสมกับขนาดและลักษณะของงาน เพื่อให้งานของท่านดำเนินไปอย่างราบรื่นและปลอดภัย (ข้อความตัวอย่างสำหรับบริการรักษาความปลอดภัยเฉพาะกิจ)',
      iconPlaceholder: 'CalendarDaysIcon',
    },
    {
      id: 'electronic-security',
      title: 'บริการรักษาความปลอดภัยด้วยระบบอิเล็กทรอนิกส์',
      description:
        'นำเสนอโซลูชันการรักษาความปลอดภัยด้วยเทคโนโลยีที่ทันสมัย เช่น ระบบกล้องวงจรปิด (CCTV) ทั้งแบบอนาล็อกและ IP Camera, ระบบควบคุมการเข้า-ออก (Access Control), สัญญาณกันขโมย (Alarm Systems) และระบบอื่นๆ ที่เกี่ยวข้อง เราให้บริการตั้งแต่การให้คำปรึกษา ออกแบบ ติดตั้ง ไปจนถึงการบำรุงรักษาระบบ เพื่อให้ท่านมั่นใจในประสิทธิภาพและความต่อเนื่องของการทำงาน (ข้อความตัวอย่างสำหรับบริการระบบอิเล็กทรอนิกส์)',
      iconPlaceholder: 'CameraIcon',
    },
    // Add more services as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">บริการของเรา</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          บริษัท รักษาความปลอดภัย เอ.เอ็น.เอ.พี. จำกัด มุ่งมั่นให้บริการรักษาความปลอดภัยครบวงจร
          ด้วยทีมงานมืออาชีพและเทคโนโลยีที่ทันสมัย เพื่อตอบสนองทุกความต้องการของลูกค้า
          (ข้อความตัวอย่างสำหรับคำนำบริการ)
        </p>
      </header>

      {/* Service Listing Section */}
      <section className="space-y-12">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`p-8 rounded-lg shadow-lg ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            }`}
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Placeholder for icon/image - can be an actual <img> or SVG component */}
              <div className="md:w-1/4 mb-6 md:mb-0 md:mr-8 flex justify-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                  {/* Replace with actual icon based on service.iconPlaceholder */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    {service.id === 'regular-security' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />}
                    {service.id === 'event-security' && <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />}
                    {service.id === 'electronic-security' && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />}
                  </svg>
                </div>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">{service.title}</h2>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
                 {/* Link to a more detailed page for this service (optional) */}
                {/*
                <div className="mt-6">
                  <Link href={`/services/${service.id}`} legacyBehavior>
                    <a className="text-yellow-500 hover:text-yellow-600 font-semibold">
                      เรียนรู้เพิ่มเติม &rarr;
                    </a>
                  </Link>
                </div>
                */}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action Section */}
      <section className="mt-16 py-12 bg-blue-600 text-white text-center rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-4">สนใจบริการของเรา?</h2>
        <p className="text-lg mb-8">
          ติดต่อเราเพื่อรับคำปรึกษาและข้อเสนอพิเศษสำหรับความต้องการด้านความปลอดภัยของคุณ
        </p>
        <Link href="/contact" legacyBehavior>
          <a className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            ติดต่อสอบถามได้เลย
          </a>
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage;
