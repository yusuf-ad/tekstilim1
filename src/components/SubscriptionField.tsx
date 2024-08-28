function SubscriptionField() {
  return (
    <>
      <h3 className="text-white-500 mb-6">Subscribe </h3>

      <p className="mb-6 text-sm  leading-6">
        Enter your email below to be the first to know about new collections and
        product launches.
      </p>

      <div className="relative">
        <input
          placeholder="Your email"
          type="text"
          className="py-4 px-4 pl-14 border rounded-xl text-primary-100 placeholder:text-primary-100 border-primary-100 text-sm w-full bg-transparent"
        />
        <span className="left-4 top-[10px] absolute text-2xl text-primary-100 mr-4">
          <i className="fa-regular fa-envelope"></i>
        </span>
      </div>
    </>
  );
}

export default SubscriptionField;
