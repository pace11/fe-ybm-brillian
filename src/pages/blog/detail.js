import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ImageWithFallback from '../../components/image-with-fallback'
import { detail } from '../../api'

const TitleNews = styled.h2`
  color: #000;
  display: inline;
  padding: 0 5px;
  border-radius: 5px;
`

function BlogDetail() {
  const params = useParams()
  const [dataDetail, setDataDetail] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    async function fetchDetailData() {
      // get detail news by id
      detail({
        endpoint: 'blog',
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

  console.log('eta =>', dataDetail)

  if (!detail) return null

  return (
    <React.Fragment>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-12 col-md-12 text-center text-lg-start animated slideInRight">
              <TitleNews>{dataDetail.name}</TitleNews>
              <p>
                {new Date(dataDetail.created_at).toDateString()},{' '}
                <i class="fa fa-paperclip"></i> {dataDetail?.blog_type?.name}
              </p>
              <ImageWithFallback
                margin="20px 0 10px 0"
                src={`${process.env.REACT_APP_IMAGE_BLOG}/${dataDetail.image}`}
                imageHeight="500px"
              />
              <div
                dangerouslySetInnerHTML={{ __html: dataDetail.isi_konten }}
                className="mb-4 pb-2 mt-4 text-berita"
              />
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

export default BlogDetail
