import { majorScale, Pane, Paragraph } from 'evergreen-ui'
import { PropsWithChildren } from 'react'

import { useBreakpoints } from '@services/Responsive'
import { theme } from '@services/Theme'

interface Props {
  disabled?: boolean
  label?: string
}
export const LayoutColumn = ({
  children,
  disabled,
  label,
}: PropsWithChildren<Props>) => {
  const { isMobile } = useBreakpoints()
  const labelColor = disabled ? theme.colors.gray500 : undefined
  const style = disabled ? { filter: 'grayscale(100%)' } : undefined

  return (
    <Pane display="flex" flex={1} flexDirection="column">
      {label && (
        <Paragraph
          color={labelColor}
          marginBottom={majorScale(1)}
          role="label"
          style={style}
        >
          {label}
        </Paragraph>
      )}
      {!label && !isMobile && <Paragraph>&nbsp;</Paragraph>}
      <Pane
        display="flex"
        flex={1}
        flexDirection="column"
        height="100%"
        justifyContent="center"
        minHeight={isMobile ? undefined : '20vh'}
      >
        {children}
      </Pane>
    </Pane>
  )
}

LayoutColumn.defaultProps = {
  disabled: false,
}
