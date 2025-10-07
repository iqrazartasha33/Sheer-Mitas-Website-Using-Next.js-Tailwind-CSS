function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white pt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

        <div>
          <h2 className="text-2xl font-bold text-white">Sheer Mithaas</h2>
          <p className="text-white/80 mt-3">
            Sheer Mithaas brings you the finest selection of traditional and fusion sweets,
            made with love and pure ingredients. From our kitchen to your celebrations — spreading joy in every bite.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Why Sheer Mithaas?</h3>
          <p className="text-white/80">
            Freshly made mithai, beautiful packaging, fast delivery across Pakistan,
            and 5000+ happy customers. Perfect for gifting, festivals & special moments.
          </p>
        </div>

        <div className="md:text-right">
          <h3 className="text-lg font-semibold text-white mb-2">Get in Touch</h3>
          <p className="text-white/80">Email: hello@sheermithaas.pk</p>
          <p className="text-white/80">Phone: +92 301 1234567</p>
          <p className="text-white/80 mt-1">Location: Karachi, Pakistan</p>
        </div>
      </div>

      <div className="text-center text-xs text-white/60 mt-10 border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} Sheer Mithaas. All rights reserved.<br/>
         Made with ❤️ in Pakistan.
      </div>
    </footer>
  );
}

export default Footer;
