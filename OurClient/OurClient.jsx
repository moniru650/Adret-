import React from "react";

export default function OurClient() {
  const clients = [];

  for (let i = 1; i <= 40; i++) {
    clients.push({
      id: i,
      src: `assets/image/clientsLogo/client-${i}.png`,
    });
  }
  return (
    <>
      <section className="our_clientele_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div
                className="heading row_gap"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h2>Our Clients</h2>
              </div>
            </div>
          </div>
          <div className="row row-cols-lg-6 g-2 row-cols-md-5 row-cols-sm-4 row-cols-3 justify-content-center align-items-center ">
            {clients.map((e) => {
              return (
                <div className="col-lg">
                  <div
                    className="client_box aos-init "
                    data-aos="zoom-in"
                    data-aos-duration={2000}
                  >
                    <img
                      src={e.src}
                      className="img-fluid client-image-fit"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
