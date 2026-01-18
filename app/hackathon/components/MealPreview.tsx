
import React from 'react';

export const MealPreview: React.FC = () => {

    const lunchImages = [
        { src: '/hackathon_lunch_salmon_v2.png', alt: 'Grilled Salmon with Green Beans' },
        { src: '/hackathon_lunch_chicken_asparagus.png', alt: 'Soy-glazed Chicken with Asparagus' },
        { src: '/hackathon_lunch_cream_chicken.png', alt: 'Cream Chicken Thigh with Green Beans' },
    ];

    const dinnerImages = [
        { src: '/hackathon_lunch_pasta_v2.png', alt: 'Cream Penne Pasta with Broccoli' },
        { src: '/hackathon_dinner_flatbread.png', alt: 'Flatbread with Tomato & Artichoke' },
        { src: '/hackathon_dinner_lettucewrap_v3.png', alt: 'Beef Lettuce Wrap' },
    ];

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background embellishments */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-hackathon-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-hackathon-primary/30 bg-hackathon-primary/10 text-hackathon-primary text-sm font-medium mb-6">
                        Fuel Your Innovation
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Gourmet <span className="text-transparent bg-clip-text bg-gradient-to-r from-hackathon-primary to-purple-400">Meal Experience</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        We believe great ideas start with great food. Enjoy premium catering throughout the event, curated to keep you energized and inspired.
                    </p>
                </div>

                {/* Lunch Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-800" />
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="text-3xl">☀️</span> Power Lunch
                        </h3>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-800" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {lunchImages.map((img, idx) => (
                            <div key={idx} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/50 shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-hackathon-primary/10">
                                <div className="absolute inset-0 bg-slate-800 animate-pulse" />
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white font-medium text-lg drop-shadow-md">{img.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dinner Section */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-800" />
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="text-3xl">🌙</span> Victory Dinner
                        </h3>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-800" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {dinnerImages.map((img, idx) => (
                            <div key={idx} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/50 shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                                <div className="absolute inset-0 bg-slate-800 animate-pulse" />
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white font-medium text-lg drop-shadow-md">{img.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
