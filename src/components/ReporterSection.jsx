
import { Link } from "react-router-dom";

export default function ReporterSection() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* Section heading */}
                <div className="mb-12 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
                        The Person Behind Our Business
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Meet the Owner
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                        Built on relationships, trust, and a commitment to the
                        community of Shahganj.
                    </p>
                </div>

                {/* Main profile card */}
                <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]">

                    {/* Portrait */}
                    <div className="relative min-h-[420px] bg-slate-200 sm:min-h-[520px]">
                        <img
                            src="/images/vinod-sahu.jpg"
                            alt="Vinod Sahu, owner of Kabir and Company"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                            loading="lazy"
                        />

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-6 pt-24 sm:p-8 sm:pt-28">
                            <p className="text-sm font-medium text-blue-200">
                                Owner
                            </p>

                            <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                                Vinod Sahu
                            </h3>

                            <p className="mt-2 text-sm text-white/85">
                                Kabir and Company · Shahganj
                            </p>
                        </div>
                    </div>

                    {/* Profile details */}
                    <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                        <span className="inline-flex w-fit rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-800">
                            Business & Community
                        </span>

                        <h3 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
                            A business built on trust
                        </h3>

                        <p className="mt-4 text-base leading-8 text-slate-600">
                            Vinod Sahu leads Kabir and Company, a wholesale
                            FMCG business serving customers and business
                            partners in Shahganj and the surrounding area.
                        </p>

                        <div className="my-7 h-px bg-slate-200" />

                        {/* Journalism role */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                Beyond Business
                            </p>

                            <h4 className="mt-2 text-xl font-bold text-slate-900">
                                Hindustan Correspondent,
                                Tehsil Representative,
                                Shahganj
                            </h4>

                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                Alongside running the family business, Vinod Sahu
                                works as a correspondent for Hindustan, covering
                                local stories and community matters in Shahganj.
                            </p>

                            {/* Supplied media logos */}
                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <div className="flex h-16 w-44 items-center justify-center rounded-xl border border-slate-200 bg-white p-3">
                                    <img
                                        src="/images/branding/hindustan-logo.png"
                                        alt="Hindustan"
                                        className="max-h-full max-w-full object-contain"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="flex h-16 w-40 items-center justify-center rounded-xl border border-slate-200 bg-white p-3">
                                    <img
                                        src="/images/branding/ht-media-logo.png"
                                        alt="HT Media"
                                        className="max-h-full max-w-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Closing statement */}
                <p className="mt-8 text-center text-sm text-slate-500">
                    Kabir and Company · Gupta Gali, Shahganj, Jaunpur
                </p>
            </div>
        </section>
    );
}
