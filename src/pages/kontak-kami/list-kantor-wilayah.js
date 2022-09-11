import React, { useEffect } from 'react'
import { kantor_wilayah } from '../../__json__'

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <React.Fragment>
      <div
        className="py-5 d-flex align-items-start justify-content-center wow fadeInUp"
        style={{
          backgroundImage: `url(${
            require('../../assets/image/heading-kantor-wilayah.png').default
          })`,
          height: '300px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          marginTop: '-50px',
          padding: '10px',
        }}
      >
        <p className="title text-center">
          YBM BRILiaN Hadir di seluruh indonesia
        </p>
      </div>
      <div className="container-xxl py-5 wow fadeInUp">
        <div className="container">
          <div className="row">
            {kantor_wilayah &&
              kantor_wilayah.map((item, idx) => (
                <div key={String(idx)} className="col-md-4 col-lg-4 container-wilayah">
                  <div className="box-wilayah d-flex align-items-center justify-content-start list-group">
                    <span className="bg-span">
                      <i className={`${item.class} fa-2x build`}></i>
                    </span>
                    <p className="text">
                      {item.city} <br /> <span>{item.address}</span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <style>
        {`
          .title {
            font-size: 28px;
            font-weight: 500;
            color: #fff;
          }
          .box-wilayah {
            box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 18%);
            margin-bottom: 20px;
            padding: 15px;
            border-radius: 5px;
          }
          .box-wilayah span.bg-span {
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgb(228, 244, 255);
            width: 70px;
            min-height: 70px;
            border-radius: 50%;
          }
          .box-wilayah span.bg-span i {
            color: #116EC9;
          }
          .box-wilayah p.text {
            text-align: center;
            font-weight: 500;
            font-size: 18px;
          }
          .box-wilayah p.text span {
            font-weight: 400;
            font-size: 14px;
          }
        `}
      </style>
    </React.Fragment>
  )
}
