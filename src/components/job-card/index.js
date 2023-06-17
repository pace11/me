import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SectionHeading } from 'components/misc/Headings'

const Container = tw.div`relative`

const JobContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`
const Heading = tw(SectionHeading)`w-full`

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`flex w-full mb-6`}
`

const Card = styled.div`
  ${tw`flex justify-start`}

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }
`

const JobDescBox = tw.span`leading-relaxed mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`
const JobDesc = tw.span`block`
const JobStatus = tw.span`text-sm block text-gray-500`
const JobSkillBox = tw.div`flex flex-wrap`
const JobSkillList = tw.div`text-primary-300 text-xs border-2 border-gray-400 pr-1 pl-1 rounded mr-1 mb-1`

export default ({ items = [], heading = 'Experience' }) => {
  return (
    <Container>
      <JobContainer>
        <Heading>{heading}</Heading>
        <VerticalSpacer />
        {items.length > 0 &&
          items.map((el, i) => (
            <Column key={i}>
              <Card>
                <div className="textContainer">
                  <span className="title">{el?.job_title}</span>
                  <JobSkillBox>
                    {el?.job_skill.map((el) => (
                      <JobSkillList key={el}>{el}</JobSkillList>
                    ))}
                  </JobSkillBox>
                  <JobDescBox>
                    <JobDesc>{el?.job_desc}</JobDesc>
                  </JobDescBox>
                  <JobStatus>{el?.job_status}</JobStatus>
                </div>
              </Card>
            </Column>
          ))}
      </JobContainer>
    </Container>
  )
}
