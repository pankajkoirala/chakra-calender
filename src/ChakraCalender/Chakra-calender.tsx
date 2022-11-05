import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import React from 'react'

interface Iprops {
  values?: { [key: string]: { value: number; message: string } }
  colors?: string[]
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
  year?: string
  tooltip?: (date: string, message: string) => React.ReactNode
  height?: string
  width?: string
  margin?: string
}

type Result = {
  year: number
  mothInNumber: number
  mothInString: string
}
const ChakraCalender = ({
  values = { '2022-3-4': { value: 2, message: 'test' } },
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
  height = 'auto',
  width = '650px',
  margin = '0px',
  year,
  tooltip,
  ...others
}: Iprops) => {
  const getDays = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate()

  function getMonthNames(
    date = new Date(new Date().setMonth(new Date().getMonth() - 0))
  ) {
    const d = new Date(year ?? date)
    d.setDate(1)
    const result: Result[] = []
    for (let i = 0; i < 12; i++) {
      result.push({
        year: d.getFullYear(),
        mothInNumber: d.getMonth(),
        mothInString: d.toLocaleString('default', { month: 'long' }),
      })
      d.setMonth(d.getMonth() + 1)
    }
    const finaldata = result.map((e) => {
      console.log()
      const monthFirstDay = Number(
        new Date(`${e?.year}-${e?.mothInNumber + 1}-${1}`).getDay()
      )
      console.log(Array.from({ length: monthFirstDay }, (_, i) => 0))

      const daysInArray = Array.from(
        { length: monthFirstDay },
        (_, i) => 0
      ).concat(
        Array.from({ length: getDays(e.year, e.mothInNumber) }, (_, i) => i + 1)
      )

      return {
        year: e.year,
        month: e.mothInNumber + 1,
        mothInString: e.mothInString,
        day: getDays(e.year, e.mothInNumber),
        daysInArray: daysInArray,
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
      h={height}
      w={width}
      margin={margin}
    >
      <Flex flexWrap={'wrap'} gap={gridGap}>
        {getMonthNames().map((e, i) => {
          return (
            <Flex
              key={i}
              height={'auto'}
              flexWrap='wrap'
              flexDir={'column'}
              gap={'6px'}
            >
              {monthsLabel && (
                <Text
                  margin={0}
                  fontSize={monthsLabelFontSize}
                  fontWeight={'500'}
                  textAlign='center'
                >
                  {`${e.mothInString}, ${e.year}`}
                </Text>
              )}
              <>
                {daysLabel && (
                  <SimpleGrid columns={7} spacing={cellSpecing}>
                    {day.map((x: string, i) => (
                      <Text m={0} fontSize={daysLabelFontSize}>
                        {day[i]}
                      </Text>
                    ))}
                  </SimpleGrid>
                )}
              </>
              <SimpleGrid columns={7} spacing={cellSpecing}>
                {e.daysInArray.map((x, i) => {
                  const y = `${e?.year}-${e?.month}-${x}`
                  const isInclude = Object.keys(values).includes(y)
                  const colorIndex = values[y]?.value ?? colors[0]
                  const message = values[y]?.message ?? ''
                  return (
                    <Flex key={i} flexDir={'column'} gap={'4px'}>
                      <Tooltip
                        gap={'0px'}
                        borderRadius={'4px'}
                        bg={
                          !tooltip
                            ? isInclude
                              ? colors[colorIndex as any]
                              : colors[0]
                            : 'white'
                        }
                        hasArrow
                        label={
                          hasTooltip && (
                            <>
                              {tooltip ? (
                                tooltip(y, message)
                              ) : (
                                <Text>{`${y} ${message}`}</Text>
                              )}
                            </>
                          )
                        }
                        fontSize='md'
                      >
                        <Box
                          display={x === 0 ? 'none' : 'inherit'}
                          bgColor={
                            (isInclude
                              ? colors[colorIndex as any]
                              : colors[0]) ?? colors[0]
                          }
                          h={cellHeight}
                          w={cellWidth}
                          borderRadius={cellBorderRadius}
                        />
                      </Tooltip>
                    </Flex>
                  )
                })}
              </SimpleGrid>
            </Flex>
          )
        })}
      </Flex>
      <Flex justifyContent={'flex-end'} padding={'12px'}>
        <Flex flexWrap={'wrap'} gap={legendLabelGap} h={'20px'}>
          {legend.map((e, i) => (
            <Flex key={i} gap={'4px'} alignItems={'center'}>
              <Box
                borderRadius={legendLabelBorderRadius}
                bg={colors[i + 1] ?? colors[0]}
                h={'12px'}
                w={'24px'}
              />
              <Text fontSize={legendLabelFontSize}>{e}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
export default ChakraCalender
