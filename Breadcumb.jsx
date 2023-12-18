import React from 'react'

export default function Breadcumb({data}) {
  return (
    <>
    <div className="inner-page" id="website-design-bg" data-aos="fade-up" data-aos-duration="1500">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="inner_content" data-aos="fade-up" data-aos-duration="2000">
                            <h1>{data?.serviceHeader}</h1>
                            <div aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i
                                                className="ri-home-4-line"></i>Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">{data?.serviceName}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
