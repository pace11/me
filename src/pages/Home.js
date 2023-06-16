import React from 'react'
import AnimationRevealPage from 'helpers/AnimationRevealPage'
import Header from 'components/header'
import Footer from 'components/footer'
import GreetingCard from 'components/greeting-card'
import JobCard from 'components/job-card'
import GithubCard from 'components/github-card'

import { REPOSITORY_NAME, JOB } from 'constants'
import useGetRepository from 'hooks/useGetRepository'

export default () => {
  const { data } = useGetRepository(REPOSITORY_NAME)

  return (
    <AnimationRevealPage>
      <Header />
      <GreetingCard />
      <GithubCard headingText="My Projects" items={data} />
      <JobCard items={JOB} />
      <Footer />
    </AnimationRevealPage>
  )
}
