type Testimonial = {
  id: number;
  rating: number;
  content: string;
  customer: {
    name: string;
    job: string;
  };
};

function TestimonialItem({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="col-span-1 flex flex-col justify-between gap-2 rounded-lg bg-white-500 px-4 py-6">
      <div>
        <div className="mb-2 flex gap-[2px]">
          {Array.from({ length: 5 }, (_, index) => (
            <span className="text-xl text-[#fab005]" key={index}>
              <i className="fa-solid fa-star"></i>
            </span>
          ))}
        </div>
        <p className="mb-4 text-lg font-medium text-primary-600">
          {testimonial.content}
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex h-16 w-16 items-center overflow-hidden rounded-full bg-gray-500">
          <img src="./man.png" className="h-full w-full object-cover" alt="" />
        </div>

        <div>
          <p className="text-lg font-semibold">{testimonial.customer.name}</p>
          <p className="font-medium text-primary-400">
            {" "}
            {testimonial.customer.job}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    rating: 5,
    content:
      "Ürünlerin kalitesi mükemmel, kumaşlar yumuşacık ve çok rahat. Siparişim çok hızlı bir şekilde elime ulaştı ve paketleme de oldukça özenliydi.",
    customer: {
      name: "John Doe",
      job: "Model",
    },
  },
  {
    id: 2,
    rating: 4,
    content:
      "Ürünler beklediğimden daha iyi çıktı. Renkler çok canlı ve kumaş kalitesi harika. Kargo biraz gecikti ama genel olarak memnunum.",
    customer: {
      name: "Jane Smith",
      job: "Moda Tasarımcısı",
    },
  },
  {
    id: 3,
    rating: 5,
    content:
      "Harika bir alışveriş deneyimi yaşadım. Ürünler tam istediğim gibi ve çok kaliteli. Kesinlikle tekrar alışveriş yapacağım.",
    customer: {
      name: "Ali Haydar",
      job: "Tekstil Mühendisi",
    },
  },
];

function CustomerTestimonials() {
  return (
    <div className="my-16 bg-gray-5">
      <div className="custom-container px-8 py-16">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-lg font-medium sm:text-3xl">
            Müşterilerimiz Ne Düşünüyor
          </h2>

          <div className="flex gap-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-10 text-primary-90 sm:h-12 sm:w-12">
              <i className="fa-solid fa-arrow-left"></i>
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-800 text-white-5 sm:h-12 sm:w-12">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerTestimonials;
