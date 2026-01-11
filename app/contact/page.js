export default function ContactPage() {
  return (
    <section className="max-w-md min-h-screen flex flex-col justify-center px-6">
      <h2 className="text-3xl font-semibold mb-4 text-[#F2E0B2] text-center">Contact Us</h2>

      <form className="bg-[#311313]/75 p-6 rounded shadow space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-[#E6AD53] bg-transparent p-2 rounded text-[#F2E0B2] placeholder-[#F2E0B2]/70"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-[#E6AD53] bg-transparent p-2 rounded text-[#F2E0B2] placeholder-[#F2E0B2]/70"
        />
        <textarea
          placeholder="Message"
          className="w-full border border-[#E6AD53] bg-transparent p-2 rounded text-[#F2E0B2] placeholder-[#F2E0B2]/70"
        />
        <button className="w-full bg-[#62261F] text-[#F2E0B2] py-2 rounded hover:bg-[#311313]">
          Send Message
        </button>
      </form>
    </section>
  );
}