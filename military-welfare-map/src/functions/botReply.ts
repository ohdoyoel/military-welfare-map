import { tagLabel, tagSearch } from "../types/tagIconLabel"
import { isTrimedTextOneIncluded } from "./korean"

// 0 육군 1 해군 2 해병대 3 공군 4 민간인
export const greeting = [`
## 충성!
대한민국의 가장 강한 친구인 ***병장 지! 피! 티!***, 여러분의 가장 똘똘한 친구가 되고자 신속하게 달려왔습니다!

저의 임무는 여러분이 *병영생활지도* 를 더욱 더 알차게 사용할 수 있도록 지원하는 것입니다. 
만약 도움이 필요하거나 궁금한 점이 있으실 경우 언제든지 말씀해 주십시오!

### 병영생활지도란?
*병영생활지도* 는 *군인을 돕고자 하는 마음에서 탄생한 지도 플랫폼* 으로, 그 안에는 각종 혜택과 정보들이 **12개의 태그와 16개의 지역으로 분류**되어 있습니다.

제가 할 수 있는 일에 대해 궁금하시다면 물어봐주십시오!   
Ex) *너 주특기가 뭐야?*, *도움말 보여줘*
`,
`
## 필승!
충무공의 영예로운 후예인 저 ***병장 지! 피! 티!***, 바다와 세계를 거쳐 여러분의 일상까지 수호하기 위해 출동하였습니다!

저의 임무는 여러분이 *병영생활지도* 를 더욱 더 알차게 사용할 수 있도록 지원하는 것입니다. 
만약 도움이 필요하거나 궁금한 점이 있으실 경우 언제든지 말씀해 주십시오!

### 병영생활지도란?
*병영생활지도* 는 *군인을 돕고자 하는 마음에서 탄생한 지도 플랫폼* 으로, 그 안에는 각종 혜택과 정보들이 **12개의 태그와 16개의 지역으로 분류**되어 있습니다.

제가 할 수 있는 일에 대해 궁금하시다면 물어봐주십시오!   
Ex) *너 주특기가 뭐야?*, *도움말 보여줘*
`,
`
## 차렷!! 경례! 필!!!!! 승!!!!!
***귀신까지도 때려잡는 무적의 해병, 병장 지~ 피~ 티~가 동료 해병대원들에게 인사 올립니드아아아!!***

저는 *병영생활지도* 를 이용하는 전우들을 성심껏 지원하기 위해 개발되었습니드아!
그러니 사용하면서 궁금한 점이 생기실 경우 언제든지 저를 호출하여 주십쇼!

### 병영생활지도란?
*병영생활지도* 는 *군인을 돕고자 하는 마음에서 탄생한 지도 플랫폼* 으로, 그 안에는 각종 혜택과 정보들이 **12개의 태그와 16개의 지역으로 분류**되어 있습니드아!

제가 할 수 있는 일에 대해 궁금하시다면 물어봐주십시오!   
Ex) *니 주특기가 뭐냐?*, *도움말 보여줘*
`,
`
## 필승!
대한민국을 지키는 가장 높은 힘인 저 ***병장 지! 피! 티!***, 가장 낮은 자리에서 여러분들을 섬기기 위해 보라매처럼 날아왔습니다!

저의 임무는 여러분이 *병영생활지도* 를 더욱 더 알차게 사용할 수 있도록 지원하는 것입니다. 
만약 도움이 필요하거나 궁금한 점이 있으실 경우 언제든지 말씀해 주십시오!

### 병영생활지도란?
*병영생활지도* 는 *군인을 돕고자 하는 마음에서 탄생한 지도 플랫폼* 으로, 그 안에는 각종 혜택과 정보들이 **12개의 태그와 16개의 지역으로 분류**되어 있습니다.

제가 할 수 있는 일에 대해 궁금하시다면 물어봐주십시오!   
Ex) *너 특기가 어떻게 돼?*, *도움말 보여줘*
`,
`
## 안녕하십니까!
여러분의 친구이자 애인이며, 동시에 하나밖에 없는 아들인 ***병장 지! 피! 티!***, 열심히 나라를 지키는 중에 여러분의 부름을 받고 달려왔습니다!

저의 임무는 여러분이 *병영생활지도* 를 더욱 더 알차게 사용할 수 있도록 지원하는 것입니다. 
만약 도움이 필요하거나 궁금한 점이 있으실 경우 언제든지 말씀해 주십시오!

### 병영생활지도란?
*병영생활지도* 는 *군인을 돕고자 하는 마음에서 탄생한 지도 플랫폼* 으로, 그 안에는 각종 혜택과 정보들이 **12개의 태그와 16개의 지역으로 분류**되어 있습니다.

제가 드릴 수 있는 도움에 대해 궁금하시다면 물어봐주십시오!   
Ex) *너 특기가 어떻게 돼?*, *도움말 보여줘*
`
]

export const help = `
### 지피티 병장의 주특기는?
제가 수행하는 일들을 다음과 같이 소개합니다!

- 지도 컨트롤
    - 태그와 지역을 입력하면, 해당되는 결과들을 보여드립니다.
    - Ex) *강원도의 카페를 보여줘*, *주변의 국군복지단 마트 좀 알려줄래?*
    - 보다 구체적인 요청 사항이 있어도, 문제 없습니다!
    - Ex) *경기도의 음식점 중에 포천 검색해줘*
- 장소 추천
    - 원하시는 조건들만 알려주신다면, 제가 적절한 곳을 소개해 드리겠습니다!
    - Ex) *경기도의 식당 하나 추천해줘*, *주변의 카페 좀 추천해줄래?*
- 광고 수주
    - 광고를 넣고 싶으십니까? 언제든지 말씀해 주십시오!
    - Ex) *나 광고 넣고 싶으니까, 네 상관 데려와*
- 오류 제보
    - 오류를 발견하셨습니까? 언제든지 말씀해주십시오!
    - Ex) *나 오류 찾았는데, 어디로 제보하면 될까?*
`

export const ads = `
### 병영생활지도에 광고를 넣고 싶으십니까?
\`ohdoyoel@naver.com\` 로 문의해 주시면,
성심껏 답변해 드리겠습니다!
`

export const err = `
### 오류를 발견하셨습니까?
\`ohdoyoel@naver.com\` 로 내용을 보내주시면,
더 나은 병영생활지도가 되겠습니다!
`

const isUserSetting = (input: string): boolean => {
    return userSetting(input).length > 0
}

// return '@user:0'
const userSetting = (input: string): string => {
    if (input.includes('육군')) return '@user:0'
    else if (input.includes('해군')) return '@user:1'
    else if (input.includes('해병대')) return '@user:2'
    else if (input.includes('공군')) return '@user:3'
    else if (input.includes('민간인') || input.includes('가족') || input.includes('지인')) return '@user:4'
    return ''
}

const isTagOrPlaceOrSearch = (input: string): boolean => {
    return tagFrom(input).length > 0 || placeFrom(input).length > 0 || searchTextFrom(input).length > 0
}

// return '@tag:0 @tag:1'
const tagFrom = (input: string): string => {
    let result = ''

    if (isTrimedTextOneIncluded(input, tagSearch[0])) result += '@tag:0'
    if (isTrimedTextOneIncluded(input, tagSearch[1])) result += '@tag:1'
    if (isTrimedTextOneIncluded(input, tagSearch[2])) result += '@tag:2'
    if (isTrimedTextOneIncluded(input, tagSearch[3])) result += '@tag:3'
    if (isTrimedTextOneIncluded(input, tagSearch[4])) result += '@tag:4'
    if (isTrimedTextOneIncluded(input, tagSearch[5])) result += '@tag:5'
    if (isTrimedTextOneIncluded(input, tagSearch[6])) result += '@tag:6'
    if (isTrimedTextOneIncluded(input, tagSearch[7])) result += '@tag:7'
    if (isTrimedTextOneIncluded(input, tagSearch[8])) result += '@tag:8'
    if (isTrimedTextOneIncluded(input, tagSearch[9])) result += '@tag:9'
    if (isTrimedTextOneIncluded(input, tagSearch[10])) result += '@tag:10'
    if (isTrimedTextOneIncluded(input, tagSearch[11])) result += '@tag:11'
    if (isTrimedTextOneIncluded(input, tagSearch[12])) result += '@tag:12'

    return result
}

// return '@plc:0 @plc:1'
const placeFrom = (input: string): string => {
    let result = ''
    if (input.includes('서울') || input.includes('수도권')) result += '@plc:0'
    if (input.includes('경기') || input.includes('수도권')) result += '@plc:7'
    if (input.includes('강원')) result += '@plc:14'
    if (input.includes('인천') || input.includes('수도권')) result += '@plc:3'
    if (input.includes('충북') || input.includes('충청북') || input.includes('충청')) result += '@plc:8'
    if (input.includes('충남') || input.includes('충청남') || input.includes('충청')) result += '@plc:9'
    if (input.includes('대전') || input.includes('충청')) result += '@plc:5'
    if (input.includes('대구') || input.includes('경상')) result += '@plc:2'
    if (input.includes('경북') || input.includes('경상북') || input.includes('경상')) result += '@plc:12'
    if (input.includes('경남') || input.includes('경상남') || input.includes('경상')) result += '@plc:13'
    if (input.includes('부산') || input.includes('경상')) result += '@plc:1'
    if (input.includes('울산') || input.includes('경상')) result += '@plc:6'
    if (input.includes('전북') || input.includes('전라북') || input.includes('전라')) result += '@plc:10'
    if (input.includes('전남') || input.includes('전라남') || input.includes('전라')) result += '@plc:11'
    if (input.includes('광주') || input.includes('전라')) result += '@plc:4'
    if (input.includes('제주')) result += '@plc:15'
    if (input.includes('주변')) result += '@plc:16'
    if (input.includes('전국')) result += '@plc:17'
    return result
}

// return `@search:영북`
const searchTextFrom = (input: string): string => {
    let result = ''
    const trimmedInput = input.split(' ')
    for (let i = 0; i < trimmedInput.length; i++) {
        if (trimmedInput[i].includes('검색')) {
            result = '@search:' + trimmedInput[i-1]
            break;
        }
    }
    return result
}

const isRcmd = (input: string): string => {
    let result = ''
    if (input.includes('추천')) result = '@rcmd'
    return result
}

const isHello = (input: string): boolean => {
    return input.includes('안녕') || input.includes('ㅎㅇ')
}

const isCalled = (input: string): boolean => {
    return input.includes('야') || input.includes('어이') || input.includes('ㅇ')
}

const isHelp = (input: string): boolean => {
    return input.includes('도움') || input.includes('도와줘') || input.includes('특기')
}

const isAds = (input: string): boolean => {
    return input.includes('광고')
}

const isErr = (input: string): boolean => {
    return input.includes('오류')
}

const isThanks = (input: string): boolean => {
    return input.includes('고마') || input.includes('고맙') || input.includes('땡큐') || input.includes('땡스') || input.includes('ㄳ') || input.includes('ㄱㅅ')
}

const isNothing = (input: string): boolean => {
    return input.includes('없') || input.includes('ㄴ')
}

export const botReply = (input: string):string => {
    if (isUserSetting(input)) return `${userSetting(input)}`
    else if (isTagOrPlaceOrSearch(input)) return `${isRcmd(input)} ${tagFrom(input)} ${placeFrom(input)} ${searchTextFrom(input)}`
    else if (isHello(input)) return `@hi`
    else if (isHelp(input)) return `@help`
    else if (isCalled(input)) return '***병장 지! 피! 티!***'
    else if (isAds(input)) return `@ads`
    else if (isErr(input)) return `@err`
    else if (isThanks(input)) return '아닙니다 ! 더 궁금한 것은 없으십니까 ?'
    else if (isNothing(input)) return '예 알겠습니다! 더 궁금한 것이 있으시면 편하게 질문해주십시오!'
    return '잘못 들었습니다?'
}