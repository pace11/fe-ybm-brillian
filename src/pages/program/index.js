import React, { useEffect, useState } from 'react'
import ImageWithFallback from '../../components/image-with-fallback'
import Carousel from './carousel'
import CarouselHighlights from './carousel-highlights'
import { mobileVersion } from '../../utils/helpers'
import { program, program_banner } from '../../__json__'

export default function Program() {
  const [detailProgram, setDetailProgram] = useState([])
  const { dynamicWidth } = mobileVersion()
  const isMobile = dynamicWidth <= 425 ? true : false

  useEffect(() => {
    window.scrollTo(0, 0)
    program.forEach((item) => {
      setDetailProgram((old) => [...old, ...item.items])
    })
  }, [])

  return (
    <React.Fragment>
      <Carousel data={program_banner} isMobile={isMobile} />
      <div class="container-xxl py-5 wow fadeInUp">
        <div class="container">
          <div class="row align-items-start justify-content-center">
            {program &&
              program.map((item, idx) => (
                <a
                  key={String(idx)}
                  href={item.path}
                  class="col-lg-4 col-md-4"
                  style={{ textDecoration: 'none', color: '#666565' }}
                >
                  <div class="m-1" data-wow-delay="0.1s">
                    <div className="service-item rounded p-3">
                      <div class="row">
                        <div class="col-lg-5 col-md-5">
                          <ImageWithFallback
                            src={item.urlImage}
                            alt={item.urlImage}
                            imageHeight="200px"
                          />
                        </div>
                        <div class="col-lg-7 col-md-7">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
      <CarouselHighlights data={detailProgram} isMobile={isMobile} />
    </React.Fragment>
  )
}
