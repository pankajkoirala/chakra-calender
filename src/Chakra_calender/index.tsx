import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'

interface Iprops {
  values: { [key: string]: string }
  colors: string[]
  cellHeight?: string
  cellWidth?: string
  hasTooltip?: boolean
  cellSpecing?: number
  gridGap?: string
  padding?: string
  backgroundColor?: string
  monthsLabel?: boolean
  monthsLabelFontSize?: string
  daysLabel?: boolean
  daysLabelFontSize?: string
  cellBorderRadius?: string
  legendGap?: string
  legend?: string[]
  legendLabelGap?: string
  legendLabelBorderRadius?: string
  legendLabelFontSize?: string
}
const Chakra_calender = ({
  values,
  colors = ['#adad85', '#004d1a', '#009933', '#00e64d', '#4dff88'],
  cellHeight = '12px',
  cellWidth = '12px',
  hasTooltip = true,
  cellSpecing = 1,
  gridGap = '12px',
  padding = '10px',
  backgroundColor = '#f5f5f0',
  monthsLabel = true,
  daysLabel = true,
  monthsLabelFontSize = '10px',
  daysLabelFontSize = '10px',
  cellBorderRadius = '4px',
  legendGap = '12px',
  legend = [],
  legendLabelGap = '14px',
  legendLabelBorderRadius = '8px',
  legendLabelFontSize = '12px',
  ...others
}: Iprops) => {
  const getDays = (year: any, month: any) =>
    new Date(year, month + 1, 0).getDate()

  function getMonthNames(
    date = new Date(new Date().setMonth(new Date().getMonth() - 11))
  ) {
    let d = new Date(+date)
    d.setDate(1)
    let result = []
    for (let i = 0; i < 12; i++) {
      result.push({
        year: d.getFullYear(),
        mothInNumber: d.getMonth(),
        mothInString: d.toLocaleString('default', { month: 'long' }),
      })
      d.setMonth(d.getMonth() + 1)
    }
    let finaldata = result.map((e, i) => {
      return {
        year: e.year,
        month: e.mothInNumber + 1,
        mothInString: e.mothInString,
        day: getDays(e.year, e.mothInNumber),
        daysInArray: Array.from(
          { length: getDays(e.year, e.mothInNumber) },
          (_, i) => i + 1
        ),
      }
    })
    return finaldata
  }

  const day = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  return (
    <Flex
      gap={legendGap}
      flexDir={'column'}
      padding={padding}
      bg={backgroundColor}
      {...others}
    >
      <Flex flexWrap={'wrap'} gap={gridGap}>
        {getMonthNames().map((e) => {
          return (
            <Flex
              height={'auto'}
              flexWrap='wrap'
              gap={'4px'}
              flexDir={'column'}
            >
              {monthsLabel && (
                <Text
                  fontSize={monthsLabelFontSize}
                  fontWeight={'500'}
                  textAlign='center'
                >
                  {`${e.mothInString}, ${e.year}`}
                </Text>
              )}
              <SimpleGrid columns={7} spacing={cellSpecing}>
                {e.daysInArray.map((x) => {
                  const y = `${e.year}-${e.month}-${x}`
                  const isInclude = Object.keys(values).includes(y)
                  const colorIndex = values[y]
                  console.log(isInclude, y)

                  return (
                    <Flex flexDir={'column'}>
                      {daysLabel && (
                        <>
                          {x <= 7 && (
                            <Text fontSize={daysLabelFontSize}>
                              {day[x - 1]}
                            </Text>
                          )}
                        </>
                      )}
                      <Tooltip
                        bg={
                          (isInclude ? colors[colorIndex as any] : colors[0]) ??
                          colors[0]
                        }
                        hasArrow
                        label={hasTooltip && y}
                        fontSize='md'
                      >
                        <Box
                          bgColor={
                            (isInclude
                              ? colors[colorIndex as any]
                              : colors[0]) ?? colors[0]
                          }
                          h={cellHeight}
                          w={cellWidth}
                          borderRadius={cellBorderRadius}
                        ></Box>
                      </Tooltip>
                    </Flex>
                  )
                })}
              </SimpleGrid>
            </Flex>
          )
        })}
      </Flex>
      <Flex width={'100%'} justifyContent={'flex-end'} padding={'12px'}>
        <Flex flexWrap={'wrap'} gap={legendLabelGap} h={'20px'}>
          {legend.map((e, i) => (
            <Flex gap={'4px'} alignItems={'center'}>
              <Box
                borderRadius={legendLabelBorderRadius}
                bg={colors[i + 1] ?? colors[0]}
                h={'12px'}
                w={'24px'}
              ></Box>
              <Text fontSize={legendLabelFontSize}>{e}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
export default Chakra_calender