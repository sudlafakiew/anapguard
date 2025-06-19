import Link from 'next/link';

const GalleryPage = () => {
  const categories = [
    {
      id: 'training',
      name: 'การฝึกอบรม',
      images: Array(6).fill({ caption: 'คำอธิบายภาพการฝึกอบรม' }),
    },
    {
      id: 'operations',
      name: 'การปฏิบัติงาน',
      images: Array(5).fill({ caption: 'คำอธิบายภาพการปฏิบัติงาน' }),
    },
    {
      id: 'equipment',
      name: 'อุปกรณ์และเทคโนโลยี',
      images: Array(4).fill({ caption: 'คำอธิบายภาพอุปกรณ์' }),
    },
    {
      id: 'events',
      name: 'กิจกรรมบริษัท',
      images: Array(6).fill({ caption: 'คำอธิบายภาพกิจกรรม' }),
    },
  ];

  // For now, activeTab is just a placeholder, no functionality implemented
  const activeTab = 'training';

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">แกลเลอรี่ภาพ</h1>
        <p className="text-lg text-gray-600 mt-2">
          ภาพรวมกิจกรรม การฝึกอบรม และการปฏิบัติงานของเรา
        </p>
      </header>

      {/* Category Filter/Navigation Section */}
      <section className="mb-10">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 border-b-2 border-gray-200 pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors
                ${activeTab === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Image Display Section */}
      {categories.map((category) => (
        <section key={category.id} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">{category.name}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {category.images.map((image, index) => (
              <div key={index} className="group">
                <div className="aspect-square bg-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-500 group-hover:shadow-xl transition-shadow">
                  {/* Placeholder for image */}
                  <span>รูปภาพ {index + 1}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">{image.caption} {index + 1}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Note on future enhancement */}
      <div className="text-center text-gray-500 mt-12 text-sm">
        หมายเหตุ: การคลิกเพื่อดูภาพขนาดใหญ่ (Lightbox) เป็นคุณสมบัติที่จะเพิ่มในอนาคต
      </div>
    </div>
  );
};

export default GalleryPage;
