const instagramStories = ["/man.png", "/man.png", "/man.png", "/man.png"];

function InstagramStories() {
  return (
    <div className="custom-container px-8 py-12">
      <h2 className="mb-12 text-center text-lg font-medium sm:text-3xl">
        Instagram Hikayelerimiz
      </h2>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {instagramStories.map((story, index) => (
          <div
            key={index}
            className={`col-span-1 aspect-square bg-gray-5 bg-[url("${story}")] bg-cover bg-center`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default InstagramStories;
