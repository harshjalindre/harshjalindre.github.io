import { SHINOBI_DATA } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 text-center">
      <h2 className="brush-font text-5xl text-white mb-8">Send a Messenger Hawk</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <a href={`mailto:${SHINOBI_DATA.profile.email}`} className="bg-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition">
          <i className="fa-solid fa-paper-plane mr-2"></i> Send Scroll
        </a>
        <a href={SHINOBI_DATA.profile.linkedin} className="bg-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition">
          <i className="fa-brands fa-linkedin mr-2"></i> Allied Village
        </a>
      </div>
    </section>
  );
};

export default Contact;