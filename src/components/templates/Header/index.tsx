import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import { IoNotificationsSharp, IoPersonSharp, IoSearch } from 'react-icons/io5'
import { RiFeedbackFill } from 'react-icons/ri'
import ButtonPill from '~/components/atoms/ButtonPill'
import Input from '~/components/atoms/Input'
import Icon from '../../atoms/Icon'
import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderArea gap={30}>
          <Icon
            icon={<FiMenu />}
            title="Open menu"
            isButton
            onClick={() => {
              alert('Open menu')
            }}
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
        <S.HeaderArea flexGrow={1}>
          <Input
            icon={<IoSearch />}
            iconPosition="left"
            placeholder="Search..."
            id="search-bar"
            aria-label="Search"
          />
        </S.HeaderArea>
        <S.HeaderArea gap={8}>
          <ButtonPill
            icon={<RiFeedbackFill />}
            iconPosition="right"
            text="Feedback"
            title="Send feedback"
            onClick={() => {
              alert('Send feedback')
            }}
          />
          <Icon
            icon={<IoPersonSharp />}
            title="Profile"
            isButton
            onClick={() => {
              alert('redirect to /profile')
            }}
          />
          <Icon
            icon={<IoNotificationsSharp />}
            title="Profile"
            isButton
            onClick={() => {
              alert('Open notification')
            }}
          />
        </S.HeaderArea>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
