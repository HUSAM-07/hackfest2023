import Profile from "./Profile";

export default function Speaker() {
  const speakerData = [
    {
      name: "Muhammad Razan Fawwaz",
      position: "PIC GDSC Indonesia & Lead GDSC USK",
      image: "",
    },
    {
      name: "Rizqi Nino Firmansyah",
      position: "UI Designer at Telkom Indonesia & GDG Cloud Bandung",
      image: "",
    }
  ];

  return (
    <section className="border-b-2 border-black bg-gooYellow-500 py-16">
      <div className="text-center h-full">
        <h2 className="font-gooMed text-title mb-8">Speakers</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 my-4 gap-4 mx-10 sm:mx-0">
          {speakerData.map((data, index) => {
            return <Profile key={index} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
}
