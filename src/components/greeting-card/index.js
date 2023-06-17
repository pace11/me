import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings.js'

const Container = tw.div`relative`
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
])

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");height: 500px;`,
  tw`rounded bg-contain bg-no-repeat bg-center`,
])
const TextContent = tw.div`lg:py-8 text-center md:text-left`

const Subheading = tw(
  SubheadingBase,
)`text-center md:text-left lg:text-3xl`
const Heading = tw(
  SectionHeading,
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-3xl font-medium leading-relaxed text-secondary-100`

export default ({
  subheading = 'Hi !!',
  heading = (
    <>
      My name is{' '}
      <span tw="text-primary-500">Muhammad Iriansyah P Pratama</span>
    </>
  ),
  description = `I'am a Software Engineer Frontend from Jayapura, Eastern Indonesia 🇮🇩`,
  textOnLeft = true,
}) => {
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={require('../../images/pace-ct.png')} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  )
}
