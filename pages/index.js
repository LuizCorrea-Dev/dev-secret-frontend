
import HomePageHeader from '../src/components/Headers/HomePageHeader'
import GiftContainer from '../src/components/Containers/GiftContainer'
import Steps from '../src/components/Steps'

export default function HomePage () {
  return (
    <>
      <HomePageHeader />
      <GiftContainer>
        <Steps />
      </GiftContainer>
    </>
  )
}