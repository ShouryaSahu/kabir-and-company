
const CONTACT = {
    phone: "919415651144",
    displayPhone: "9415651144",
    whatsapp: "919918551144",
    displayWhatsApp: "9918551144",
    address: "Gupta Gali, Shahganj, Jaunpur, Uttar Pradesh",
    mapUrl: "https://maps.app.goo.gl/DPNnsh4Ymg3d6NTD7",
};

export default function Footer() {
    const whatsappMessage = encodeURIComponent(
        "Hello Kabir and Company, I would like to enquire about your products."
    );

    return (
        <footer id="contact" className="bg-[#1c1c1c] text-white">
            <div className="mx-auto max-w-6xl px-5 py-12 text-center">
                <p className="text-xs font-semibold tracking-[0.25em] text-blue-400">
                    GET IN TOUCH
                </p>

                <h2 className="mt-3 text-2xl font-bold">Visit Our Store</h2>

                <p className="mt-2 text-sm text-gray-400">
                    Have a question? We'd be happy to help.
                </p>

                <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
                    {/* Business */}
                    <div className="border border-white/15 p-5">
                        <p className="text-xs tracking-wider text-gray-400">
                            SHOP OWNER
                        </p>
                        <p className="mt-3 font-semibold">Vinod Sahu</p>
                    </div>

                    {/* Location */}
                    <div className="border border-white/15 p-5">
                        <p className="text-xs tracking-wider text-gray-400">
                            SHOP LOCATION
                        </p>

                        <p className="mt-3 leading-6 text-gray-200">
                            Gupta Gali, Shahganj,
                            <br />
                            Jaunpur, Uttar Pradesh
                        </p>
                    </div>

                    {/* Phone numbers */}
                    <div className="border border-white/15 p-5">
                        <p className="text-xs tracking-wider text-gray-400">
                            CONTACT NUMBERS
                        </p>

                        <a
                            href={`tel:+${CONTACT.phone}`}
                            className="mt-3 block font-semibold transition-colors hover:text-blue-300"
                        >
                            {CONTACT.displayPhone}
                        </a>

                        <a
                            href={`https://wa.me/${CONTACT.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 block text-sm text-gray-300 transition-colors hover:text-blue-300"
                        >
                            WhatsApp: {CONTACT.displayWhatsApp}
                        </a>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                        href={`https://wa.me/${CONTACT.whatsapp}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary px-6 py-3 text-sm"
                    >
                        Enquire on WhatsApp
                    </a>

                    <a
                        href={CONTACT.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-gray-500 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:border-white hover:bg-white/10"
                    >
                        Get Directions
                    </a>

                    <a
                        href={`tel:+${CONTACT.phone}`}
                        className="rounded-md border border-gray-500 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:border-white hover:bg-white/10"
                    >
                        Call Us
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/15 px-5 py-5 text-center">
                <p className="text-sm font-semibold">KABIR AND COMPANY</p>
                <p className="mt-2 text-xs text-gray-400">
                    © {new Date().getFullYear()} Kabir and Company. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
