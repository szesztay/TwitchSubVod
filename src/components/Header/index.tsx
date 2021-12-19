import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import * as S from './styles'

const HeaderLogo = () => {
  return (
    <S.HeaderButton>
      <Image
        src="/logo/white-with-icon-beta.svg"
        width={106}
        height={23}
        aria-label="pogu.live"
      />
    </S.HeaderButton>
  )
}

const HambuguerMenu = () => {
  return (
    <S.HeaderButton>
      <FiMenu title="Open menu" aria-label="Open menu" />
    </S.HeaderButton>
  )
}

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderArea gap={30}>
          <HambuguerMenu />
          <HeaderLogo />
        </S.HeaderArea>
        <S.HeaderArea>Search bar</S.HeaderArea>
        <S.HeaderArea>Feedback + Profile + Notification</S.HeaderArea>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
