import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import CardNews from '../../components/card-news'
import ImageWithFallback from '../../components/image-with-fallback'
import { detail, get } from '../../api'

const TitleNews = styled.h2`
  color: #000;
  display: inline;
  padding: 0 5px;
  border-radius: 5px;
`

const TitleSidebar = styled.h5`
  display: flex;
  justify-content: space-between;
  color: #333333;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333333;
    color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`

function NewsDetail() {
  const params = useParams()
  const [dataDetail, setDataDetail] = useState(false)
  const [news, setNews] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    async function fetchDetailData() {
      // get data news
      get({
        endpoint: 'berita',
      })
        .then((res) => {
          if (res?.StatusCode === 200 && res?.Error === false)
            setNews(res.Data[0]?.berita)
        })
        .catch((err) => {
          console.log('err ->', err)
        })

      // get detail news by id
      detail({
        endpoint: 'beritaDetail',
        id: params?.slug,
      })
        .then((res) => {
          if (res?.StatusCode === 200 && res?.Error === false) {
            setDataDetail(res?.Data)
          }
        })
        .catch((err) => {
          console.log('err ->', err)
        })
    }
    fetchDetailData()
  }, [params.slug])

  if (!detail) return null

  return (
    <React.Fragment>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-9 col-md-9 text-center text-lg-start animated slideInRight">
              <TitleNews>{dataDetail.name}</TitleNews>
              <p>
                <i class="fa fa-user"></i> Admin |{' '}
                {dataDetail?.created_at
                  ? new Date(dataDetail.created_at).toDateString()
                  : null}
              </p>
              <ImageWithFallback
                margin="20px 0 10px 0"
                src={`${process.env.REACT_APP_IMAGE_BERITA}/${dataDetail.img}`}
                imageHeight="500px"
              />
              <div
                dangerouslySetInnerHTML={{ __html: dataDetail.isi_berita }}
                className="mb-4 pb-2 mt-4 text-berita"
              />
            </div>
            <div class="col-lg-3 col-md-3 animated fadeIn">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <TitleSidebar>
                    Popular News{' '}
                    <span>
                      <i class="fa fa-chevron-right"></i>
                    </span>
                  </TitleSidebar>
                </div>
              </div>
              <div class="row">
                {news &&
                  news.map((item, idx) => (
                    <div class="col-lg-12 col-md-12 mb-4" key={String(idx)}>
                      <CardNews
                        imageSrc={`${process.env.REACT_APP_IMAGE_BERITA}/${item.img}`}
                        imageHeight="240px"
                        title={item.name}
                        desc={`8 April 2022`}
                        linkTo={`/news/${item.id}`}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .text-berita > p a {
            color: #00569C !important;
          }
          .text-berita > p a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </React.Fragment>
  )
}

export default NewsDetail
