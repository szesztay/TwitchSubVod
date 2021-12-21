import Avatar from '~/components/atoms/Avatar'
import Box from '~/components/atoms/Box'
import Typography from '~/components/atoms/Typography'

interface StreamerDescriptionProps {
  name: string
  followers: number
  description: string
  avatarUrl: string
}

const StreamerDescription = ({
  name,
  followers,
  description,
  avatarUrl,
}: StreamerDescriptionProps) => {
  return (
    <Box direction="column" gap="16px">
      <Avatar title={name} src={avatarUrl} />

      <Box direction="column" gap="4px">
        <Typography variant="h5" title={name} as="h2">
          {name}
        </Typography>
        <Typography variant="body1" title={`${followers} followers`}>
          {`${followers} followers`}
        </Typography>
        <Typography variant="body2" title={description}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default StreamerDescription
