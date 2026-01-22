export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-4">
        
        <div>
          <h3 className="text-white text-2xl font-semibold mb-4 ">
            Streamline.
          </h3>
          <p className="text-m leading-relaxed">
            A small studio making big things happen. Based in Stockholm,
            working with clients worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-2xl">Services</h4>
          <ul className="space-y-2 text-m">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Custom Software</li>
            <li>Product Strategy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-2xl">Company</h4>
          <ul className="space-y-2 text-m">
            <li>Our Work</li>
            {/* <li>Testimonials</li> */}
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-2xl">Get in Touch</h4>
          <ul className="space-y-2 text-m">
            <li>StreamlineSolutionsAB@hotmail.com</li>
            <li>Stockholm, Sweden</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        © 2026 Streamline Solutions. All rights reserved.
      </div>
    </footer>
  );
};