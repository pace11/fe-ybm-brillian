import React from 'react'
import styled from 'styled-components'
import { Tree, TreeNode } from 'react-organizational-chart'

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
  border: 2px solid #4785b8;
`

const StyledNodeChild = styled.div`
  display: inline-block;
  border: 2px solid #4785b8;
  border-radius: 5px;
  padding: 10px;
  p {
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
`

const StyledBoxImg = styled.div`
  display: inline-block;
  padding: 15px 15px 0 15px;
  img {
    height: 150px;
  }
  p {
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
`

export default function Organization() {
  return (
    <div className="py-5 bg-dark hero-header wow fadeInUp">
      <Tree
        lineWidth="2px"
        lineColor="#C2D6E7"
        lineBorderRadius="0px"
        label={
          <>
            <StyledNode>
              <StyledBoxImg>
                <img
                  src={require('../../../assets/image/org-1.png').default}
                  alt="org-1"
                />
                <h5>Rianti Dwi N</h5>
                <p>Komisaris</p>
              </StyledBoxImg>
              <StyledBoxImg>
                <img
                  src={require('../../../assets/image/org-2.png').default}
                  alt="org-1"
                />
                <h5>Nandang P. S.</h5>
                <p>Direktur Utama</p>
              </StyledBoxImg>
            </StyledNode>
          </>
        }
      >
        <TreeNode
          label={
            <StyledNodeChild>
              <h5>Roni Ades</h5>
              <p>Kepala Divisi</p>
            </StyledNodeChild>
          }
        />
        <TreeNode
          label={
            <StyledNodeChild>
              <h5>Roni Ades</h5>
              <p>Kepala Divisi</p>
            </StyledNodeChild>
          }
        />
        <TreeNode
          label={
            <StyledNodeChild>
              <h5>Roni Ades</h5>
              <p>Kepala Divisi</p>
            </StyledNodeChild>
          }
        />
        <TreeNode
          label={
            <StyledNodeChild>
              <h5>Roni Ades</h5>
              <p>Kepala Divisi</p>
            </StyledNodeChild>
          }
        />
      </Tree>
    </div>
  )
}
