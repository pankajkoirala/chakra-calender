# Chakra-Calender

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
![Tux, the Linux mascot](/assets/image.png)

## Installation

#### using npm:

```
$ npm i chakra-calender
```

#### using yarn:

```
$ yarn add chakra-calender
```

## Example

```ruby
import { ChakraCalender } from 'Chakra-Calender';

const App=()=>{
       const value={ '2022-5-12': { value: 2, message: 'leave'}}
       const colors=['red','blue','green','pink','orange']
       return(
       <ChakraCalender
        values={value}
        legend={['leave', 'late', 'WFH']}
        colors={colors}
       />
    )}
```

## Props

| props                   | value                                              |
| ----------------------- | -------------------------------------------------- |
| values                  | {'2022-2-3':{value:number,message:string}          |
| colors                  | string [ ]                                         |
| hasTooltip              | Boolean                                            |
| tooltip                 | (date: string, message: string) => React.ReactNode |
| cellWidth               | String                                             |
| cellHeight              | String                                             |
| cellSpecing             | String                                             |
| gridGap                 | String                                             |
| padding                 | String                                             |
| backgroundColor         | String                                             |
| monthsLabel             | Boolean                                            |
| monthsLabelFontSize     | String                                             |
| daysLabel               | Boolean                                            |
| legendGap               | String                                             |
| cellBorderRadius        | String                                             |
| legend                  | string [ ]                                         |
| legendLabelGap          | String                                             |
| legendLabelBorderRadius | String                                             |
| year                    | String                                             |
| height                  | String                                             |
| width                   | String                                             |
| margin                  | String                                             |

## Features

- will update soon
