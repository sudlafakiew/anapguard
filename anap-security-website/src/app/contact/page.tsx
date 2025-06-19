import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">ติดต่อเรา</h1>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          เราพร้อมให้บริการและตอบทุกข้อสงสัยของคุณ กรุณาติดต่อเราผ่านช่องทางที่สะดวก
        </p>
      </header>

      {/* Contact Information and Map Section */}
      <section className="mb-12 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left Column: Contact Details */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">ข้อมูลติดต่อ สำนักงานใหญ่</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-blue-600">ที่อยู่:</h3>
              <p>บริษัท รักษาความปลอดภัย เอ.เอ็น.เอ.พี. จำกัด<br />
                 เลขที่ 123/45 ถนนสุขุมวิท แขวงพระโขนง<br />
                 เขตคลองเตย กรุงเทพมหานคร 10110 (ข้อความตัวอย่าง)</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600">โทรศัพท์:</h3>
              <p>(02) 123-4567 (สำนักงาน)</p>
              <p>(081) 234-5678 (ฝ่ายบริการลูกค้า)</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600">อีเมล:</h3>
              <p>
                <a href="mailto:info@anap.co.th" className="hover:text-blue-500">
                  info@anap.co.th
                </a> (สอบถามทั่วไป)
              </p>
              <p>
                <a href="mailto:sales@anap.co.th" className="hover:text-blue-500">
                  sales@anap.co.th
                </a> (ฝ่ายขาย)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600">เวลาทำการ:</h3>
              <p>จันทร์ - ศุกร์: 9:00 - 18:00 น.</p>
              <p>เสาร์: 9:00 - 12:00 น. (เฉพาะฝ่ายบริการลูกค้า)</p>
              <p>อาทิตย์: ปิดทำการ</p>
            </div>
          </div>
        </div>

        {/* Right Column: Google Map Placeholder */}
        <div className="bg-gray-200 rounded-lg shadow h-72 md:h-full flex items-center justify-center text-gray-500">
          {/*
            Replace with actual iframe embed code for Google Maps later
            Example iframe:
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.561370948084!2d100.56105181530913!3d13.745568901280192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f0159e36c7b%3A0x8c723b7061f959e8!2sSiam%20Paragon!5e0!3m2!1sen!2sth!4v1678888888888!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border:0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          */}
          <p className="text-xl">Google Map Placeholder</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 bg-blue-50 px-4 md:px-8 rounded-lg shadow">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">ส่งข้อความถึงเรา</h2>
        <form className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล<span className="text-red-500">*</span></label>
            <input type="text" name="fullName" id="fullName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="กรอกชื่อ-นามสกุลของคุณ"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">อีเมล<span className="text-red-500">*</span></label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="example@email.com"/>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
            <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="08x-xxx-xxxx (ถ้ามี)"/>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">หัวข้อเรื่อง<span className="text-red-500">*</span></label>
            <input type="text" name="subject" id="subject" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="ระบุหัวข้อที่ต้องการติดต่อ"/>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">ข้อความ<span className="text-red-500">*</span></label>
            <textarea name="message" id="message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="พิมพ์ข้อความของคุณที่นี่..."></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-70" disabled>
              ส่งข้อความ (ยังไม่เปิดใช้งาน)
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
