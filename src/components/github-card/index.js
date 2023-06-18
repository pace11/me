import React from 'react'
import styled from 'styled-components'
import {
  Container,
  ContentWithPaddingXl,
} from 'components/misc/Layouts'
import { SectionHeading } from 'components/misc/Headings'
import ButtonLink from 'components/misc/ButtonLink'
import {
  RiGitBranchLine,
  RiGithubFill,
  RiCheckboxCircleFill,
} from 'react-icons/ri'
import tw from 'twin.macro'
import { format } from 'date-fns'

const HeadingRow = tw.div`flex p-10`
const FooterRow = tw.div`flex justify-center pt-5 pb-5`
const Heading = tw(SectionHeading)`text-gray-900`
const CardContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/4 sm:pr-8`}
`
const CardList = tw.div`mt-6 sm:-mr-8 flex flex-wrap`
const Card = tw.div`flex flex-col bg-gray-100 rounded-lg`
const Info = tw.div`p-8 border-2 rounded-lg rounded`
const Topics = tw.div`text-primary-500 text-xs border-2 p-1 rounded mr-1 mb-1`
const CreationDate = tw.div`capitalize text-gray-500 text-sm`
const Title = tw.a`relative mt-1 font-black text-xl underline text-gray-900 hover:text-primary-500 cursor-pointer transition duration-300`
const Description = tw.div`mt-2 mb-2`
const RowTopic = tw.div`flex flex-wrap`
const RowUser = tw.div`flex pt-1 pb-1`
const UserName = tw.a`text-primary-500 text-sm ml-1`

export default ({ items = [], headingText = null }) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingRow>
          <Heading>{headingText}</Heading>
        </HeadingRow>
        <CardList>
          {items.length > 0 &&
            items.map((el) => (
              <CardContainer key={el?.id}>
                <Card>
                  <Info>
                    <Title href={el?.html_url} target="_blank">
                      <RiGitBranchLine
                        size={25}
                        style={{
                          display: 'unset',
                          margin: '0 5px 0 0',
                        }}
                      />
                      {el?.name}{' '}
                    </Title>
                    <RowUser>
                      <img
                        src={el?.owner?.avatar_url}
                        alt={el?.owner?.avatar_url}
                        height="25px"
                        width="25px"
                        style={{ borderRadius: '50%' }}
                      />
                      <UserName
                        href={el?.owner?.html_url}
                        target="_blank"
                      >
                        {el?.owner?.login}{' '}
                        <RiCheckboxCircleFill
                          style={{
                            display: 'unset',
                            color: '#2ecc71',
                          }}
                        />
                      </UserName>
                    </RowUser>
                    <CreationDate>
                      last update:{' '}
                      <b>
                        {format(new Date(el?.updated_at), 'dd MMM Y')}
                      </b>
                    </CreationDate>
                    <Description>{el?.description}</Description>
                    <RowTopic>
                      {el?.topics.length > 0 &&
                        el?.topics.map((topic) => (
                          <Topics key={topic}>{topic}</Topics>
                        ))}
                    </RowTopic>
                  </Info>
                </Card>
              </CardContainer>
            ))}
        </CardList>
        <FooterRow>
          <ButtonLink href="https://github.com/pace11?tab=repositories">
            View more on Github{' '}
            <RiGithubFill
              size={20}
              style={{
                display: 'unset',
              }}
            />
          </ButtonLink>
        </FooterRow>
      </ContentWithPaddingXl>
    </Container>
  )
}
