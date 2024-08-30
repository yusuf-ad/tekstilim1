const benefits = [
  {
    icon: "fa-truck-fast",
    title: "Ücretsiz Kargo",
    description: "250 TL ve üzeri alışverişlerde ücretsiz kargo fırsatı.",
  },
  {
    icon: "fa-refresh",
    title: "Para İade Garantisi",
    description: "30 gün içinde koşulsuz para iade garantisi.",
  },
  {
    icon: "fa-headset",
    title: "7/24 Destek",
    description: "Her zaman yanınızdayız, 7/24 müşteri desteği.",
  },
  {
    icon: "fa-lock",
    title: "Güvenli Ödeme",
    description: "Güvenli ve hızlı ödeme seçenekleri ile alışveriş yapın.",
  },
];

function SiteBenefits() {
  return (
    <div className="custom-container mb-12 px-8 py-12">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <div key={benefit.title}>
            <p className="mb-5 text-4xl text-primary-500">
              <i className={`fa-solid ${benefit.icon}`}></i>
            </p>

            <h4 className="mb-1 text-xl font-bold text-primary-900">
              {benefit.title}
            </h4>

            <p className="font-medium text-primary-600">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SiteBenefits;
