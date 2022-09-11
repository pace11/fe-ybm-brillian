import React from 'react'

export default function Achievement() {
  return (
    <div className="container-xxl py-5 wow fadeInUp container-achieve">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-3 text-center box-achieve">
            <div>
              <img
                src={
                  require('../../assets/image/angkapenting/penerima.svg')
                    .default
                }
                alt="penerima-manfaat"
              />
            </div>
            <p
              class="animated slideInLeft mb-4 pb-2"
              style={{ fontSize: '20px', fontWeight: '400' }}
            >
              <h2 style={{ color: '#F26624' }}>930.123</h2>
              <span style={{ fontSize: '16px' }}>Penerima manfaat</span>
            </p>
          </div>
          <div class="col-lg-3 text-center box-achieve">
            <div>
              <img
                src={
                  require('../../assets/image/angkapenting/uang.svg').default
                }
                alt="penerima-manfaat"
              />
            </div>
            <p
              class="animated slideInLeft mb-4 pb-2"
              style={{ fontSize: '20px', fontWeight: '400' }}
            >
              <h2 style={{ color: '#F26624' }}>Rp 930.000.000</h2>
              <span style={{ fontSize: '16px' }}>Total donasi</span>
            </p>
          </div>
          <div class="col-lg-3 text-center box-achieve">
            <div>
              <img
                src={
                  require('../../assets/image/angkapenting/donatur.svg').default
                }
                alt="penerima-manfaat"
              />
            </div>
            <p
              class="animated slideInLeft mb-4 pb-2"
              style={{ fontSize: '20px', fontWeight: '400' }}
            >
              <h2 style={{ color: '#F26624' }}>122.982</h2>
              <span style={{ fontSize: '16px' }}>Jumlah donatur</span>
            </p>
          </div>
        </div>
      </div>
      <style>
        {`
          .container-achieve {
            position: relative;
          }

          .container-achieve::before {
            position: absolute;
            background-image: url(${require("../../assets/image/rectangle-1.svg").default});
            background-size: contain;
            background-repeat: no-repeat;
            content: "";
            top: 50px;
            left: 15%;
            width: 150px;
            height: 150px;
            z-index: 1;
          }

          .container-achieve::after {
            position: absolute;
            background-image: url(${require("../../assets/image/rectangle-1.svg").default});
            background-size: contain;
            background-repeat: no-repeat;
            content: "";
            bottom: 80px;
            right: 15%;
            width: 150px;
            height: 150px;
            z-index: 1;
          }

          .box-achieve {
            display: flex;
            align-items: center;
            flex-direction: column;
            align-items: center;
          }

          .box-achieve .content {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: red !important;
          }

          .box-achieve .content h2 {
            margin: 0;
          }
        `}
      </style>
    </div>
  )
}
