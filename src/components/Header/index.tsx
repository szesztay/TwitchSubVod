import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import Icon from '../atoms/Icon'
import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderArea gap={30}>
          <Icon
            icon={<FiMenu />}
            onClick={() => {
              alert('Open menu')
            }}
            title="Open menu"
          />
          <Icon
            icon={
              <Image
                src="/logo/white-with-icon-beta.svg"
                width={106}
                height={23}
                aria-label="pogu.live"
              />
            }
            onClick={() => {
              alert('redirect to /')
            }}
            title="pogu.live"
          />
        </S.HeaderArea>
        <S.HeaderArea>Search bar</S.HeaderArea>
        <S.HeaderArea>Feedback + Profile + Notification</S.HeaderArea>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
