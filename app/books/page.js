import Image from "next/image";

export default function BooksPage() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Book Recommendations</h2>

{/* Art Books */}
<h3 className="text-2xl font-semibold mb-6 text-center text-[#f2f1ed]">
        Art Books
      </h3>
      <div className="grid md:grid-cols-3 gap-6 justify-items-center mb-16">
        <div className="bg-[#F2E0B2]/95 rounded-lg shadow p-4 text-center">
          <Image src="/images/book1.jpg" alt="Book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-[#311313]">The Complete Book of Poses for Artists</h3>
        </div>

        <div className="bg-[#F2E0B2]/95 rounded-lg shadow p-4 text-center">
          <Image src="/images/book2.jpg" alt="Book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-[#311313]">Human Anatomy for Art Students</h3>
        </div>

        <div className="bg-[#F2E0B2]/95 rounded-lg shadow p-4 text-center">
          <Image src="/images/book3.jpg" alt="Book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-[#311313]">Drawing the Human Figure</h3>
        </div>
      </div>

      {/* Philosophy Books */}
      <h3 className="text-2xl font-semibold mb-6 text-center text-[#f2f1ed]">
        Philosophy Books
      </h3>
      <div className="grid md:grid-cols-3 gap-6 justify-items-center mb-16">
        <div className="bg-[#F2E0B2]/95 rounded-lg shadow p-4 text-center">
          <Image src="/images/book4.jpg" alt="Book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-[#311313]">Greek Philosophy Thales to Aristotle</h3>
        </div>

        <div className="bg-[#F2E0B2]/95 rounded-lg shadow p-4 text-center">
          <Image src="/images/book5.jpg" alt="Book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-[#311313]">The Philosophy Book for Beginners</h3>
        </div>

        <div className="bg-[#F2E0B2]/95 rounded-lg shadow p-4 text-center">
          <Image src="/images/book6.jpg" alt="Book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-[#311313]">What Does It All Mean?</h3>
        </div>
      </div>

      {/* Psychology Books */}
      <h3 className="text-2xl font-semibold mb-6 text-center text-[#f2f1ed]">
        Psychology Books
      </h3>
      <div className="grid md:grid-cols-3 gap-6 justify-items-center mb-16">
        <div className="bg-[#F2E0B2]/95 rounded-lg shadow p-4 text-center">
          <Image src="/images/book7.jpeg" alt="Book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-[#311313]">Unwinding Anxiety</h3>
        </div>

        <div className="bg-[#F2E0B2]/95 rounded-lg shadow p-4 text-center">
          <Image src="/images/book8.jpg" alt="Book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-[#311313]">It's Ok That You're Not Ok</h3>
        </div>

        <div className="bg-[#F2E0B2]/95 rounded-lg shadow p-4 text-center">
          <Image src="/images/book9.jpg" alt="Book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-[#311313]">The Art of Self-Acceptance</h3>
        </div>
      </div>

      {/* Culinary Books */}
      <h3 className="text-2xl font-semibold mb-6 text-center text-[#f2f1ed]">
        Culinary Books
      </h3>
      <div className="grid md:grid-cols-3 gap-6 justify-items-center mb-16">
        <div className="bg-[#F2E0B2]/95 rounded-lg shadow p-4 text-center">
          <Image src="/images/book10.jpg" alt="Book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-[#311313]">Food Lover's Companion</h3>
        </div>

        <div className="bg-[#F2E0B2]/95 rounded-lg shadow p-4 text-center">
          <Image src="/images/book11.jpg" alt="Book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-[#311313]">The Ultimate Cooking For One CookBook</h3>
        </div>

        <div className="bg-[#F2E0B2]/95 rounded-lg shadow p-4 text-center">
          <Image src="/images/book12.jpg" alt="Book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-[#311313]">Chinese Cooking For Dummies</h3>
        </div>
      </div>
    </section>
  );
}