import React from 'react';

const ServiceAreaMap = () => {
    return (
        <section className="w-full px-4 py-8">
            <h2 className="text-2xl font-semibold text-center ">

            </h2>
            <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-md border border-gray-200">
                {/* Высота 450px на мобилках, 600px на ПК */}
                <iframe
                    src="https://www.google.com/maps/d/embed?mid=1PsKT5vCfKRff7nkW3-CpAGexMDfGRpM&ehbc=2E312F"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Servicegebiet Karte"
                    className="h-[450px] md:h-[600px] w-full"
                ></iframe>
            </div>
        </section>
    );
};

export default ServiceAreaMap;
