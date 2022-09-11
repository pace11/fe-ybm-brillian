import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import CollapsibleMenu from './collapsible'
import CardProgram from '../../components/card-program'
import { program } from '../../__json__'

const TitleAbout = styled.h2`
  color: #00569c;
  padding: 0 5px;
  border-radius: 5px;
  span {
    color: #f26624;
  }
  text-align: ${(props) => props.align || 'left'};
`

export default function Slug() {
  const { slug } = useParams()
  const [detail, setDetail] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (slug) {
      setDetail(program.filter((item) => item.slug === slug)[0])
    }
  }, [slug])

  console.log(detail)

  return (
    <React.Fragment>
      <div class="container-xxl py-5 wow fadeInUp">
        <div class="container">
          <div
            class="row align-items-center g-5"
            style={{ marginRight: 0, marginLeft: 0 }}
          >
            <div class="col-lg-6 animated slideInRight">
              <TitleAbout>
                Program <span>{detail?.title}</span>
              </TitleAbout>
              <p class="mb-4 pb-2 mt-4">{detail?.desc_long}</p>
            </div>
            <div class="col-lg-6 text-center text-lg-end overflow-hidden animated fadeIn">
              <img className="img-about-desc" src={detail?.urlImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 wow fadeInUp">
        <div class="container">
          <div class="row">
            {detail &&
              detail.items.map((item, idx) => (
                <div
                  key={String(idx)}
                  class="col-lg-3 col-md-3 m-1"
                  data-wow-delay="0.1s"
                >
                  <CardProgram
                    imageSrc={item.urlImage}
                    imageHeight="150px"
                    title={item.title}
                    desc={item.desc}
                    linkTo={`/program/${slug}/${item.slug}`}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 wow fadeInUp">
        <div class="container">
          <div class="row align-items-start justify-content-center">
            <CollapsibleMenu title="Faq 1">
              <p>
                Faq 1 Excepteur sint aute velit sint id mollit exercitation
                exercitation nulla officia amet in laborum fugiat. Elit cillum
                sint id reprehenderit reprehenderit quis laboris eu. Consectetur
                nulla cillum dolor id culpa enim occaecat laboris amet sint
                exercitation cupidatat Lorem. Lorem ex duis do aliqua pariatur
                dolore nulla excepteur cupidatat laborum eu magna deserunt.
              </p>
            </CollapsibleMenu>
            <CollapsibleMenu title="Faq 2">
              <p>
                Faq 2 Excepteur sint aute velit sint id mollit exercitation
                exercitation nulla officia amet in laborum fugiat. Elit cillum
                sint id reprehenderit reprehenderit quis laboris eu. Consectetur
                nulla cillum dolor id culpa enim occaecat laboris amet sint
                exercitation cupidatat Lorem. Lorem ex duis do aliqua pariatur
                dolore nulla excepteur cupidatat laborum eu magna deserunt.
              </p>
            </CollapsibleMenu>
          </div>
        </div>
      </div>
      <style>
        {`
          .img-about-desc {
            height: 450px;
          }
          
          @media(max-width: 425px) {
            .img-about-desc {
              height: 250px;
            }
          }
        `}
      </style>
    </React.Fragment>
  )
}
