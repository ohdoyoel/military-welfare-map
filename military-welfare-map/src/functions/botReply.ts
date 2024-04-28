// 0 육군 1 해군공군해병대 2 민간인
export const greeting = [`
### 충성!
_병영생활지도_ 의 챗봇 **병장 지!피!티!** 입니다!

저는 _병영생활지도_ 를 사용하는데 도움을 드리기 위하여 개발되었습니다.

_병영생활지도_ 는 **군인 관련 혜택과 정보를 보여주는 지도 플랫폼**으로, 모든 장소는 12개의 태그와 16개의 도시 정보로 분류됩니다.

제가 할 수 있는 기능은 다음과 같습니다 .

- 지도 컨트롤
  - 태그와 장소를 입력하면 검색 조건 버튼을 설정하여 장소들을 보여줍니다.
  - Ex) 경기도의 음식점을 보여줘, 주변에 카페 좀 보여줄래?
  - 검색 키워드를 입력하고 검색을 입력하면, 키워드를 검색합니다.
  - Ex) 의정부 검색
- 장소 추천
  - 
`,
`
### 필승!
_병영생활지도_ 의 챗봇 **병장 지!피!티!** 입니다 !

저는 _병영생활지도_ 를 사용하는데 도움을 드리기 위하여 개발되었습니다 .

_병영생활지도_ 는 **군인 관련 혜택과 정보를 보여주는 지도 플랫폼**으로, 12개의 태그와 16개의 도시 정보로 이루어져 있습니다 .

제가 할 수 있는 기능은 다음과 같습니다 .

- 지역 장소 추천 (태그X, 장소O)
- 지역 태그 추천 (태그O, 장소O)
`,
`

`
]

const isUserSetting = (input: string): boolean => {
    return userSetting(input).length > 0
}

// return '@user:0'
const userSetting = (input: string): string => {
    if (input.includes('육군')) return '@user:0'
    else if (input.includes('민간인') || input.includes('가족')) return '@user:2'
    else if (input.includes('해군') || input.includes('공군') || input.includes('해병대')) return '@user:3'
    return ''
}

const isTagOrPlace = (input: string): boolean => {
    return tagFrom(input).length > 0 || placeFrom(input).length > 0
}

// return '@tag:0 @tag:1'
const tagFrom = (input: string): string => {
    let result = ''
    if (input.includes('음식')) result += '@tag:0'
    if (input.includes('카페')) result += '@tag:1'
    if (input.includes('미용')) result += '@tag:2'
    if (input.includes('목욕')) result += '@tag:3'
    if (input.includes('문화') || input.includes('여가')) result += '@tag:4'
    if (input.includes('숙박')) result += '@tag:5'
    if (input.includes('스포츠')) result += '@tag:6'
    if (input.includes('교통') || input.includes('항공')) result += '@tag:7'
    if (input.includes('안경')) result += '@tag:8'
    if (input.includes('병원')) result += '@tag:9'
    if (input.includes('예비군')) result += '@tag:10'
    if (input.includes('골프')) result += '@tag:11'
    if (input.includes('모두')) result += '@tag:12'
    return result
}

// return '@plc:0 @plc:1'
const placeFrom = (input: string): string => {
    let result = ''
    if (input.includes('서울')) result += '@plc:0'
    if (input.includes('경기')) result += '@plc:7'
    if (input.includes('강원')) result += '@plc:14'
    if (input.includes('인천')) result += '@plc:3'
    if (input.includes('충북')) result += '@plc:8'
    if (input.includes('충남')) result += '@plc:9'
    if (input.includes('대전')) result += '@plc:5'
    if (input.includes('대구')) result += '@plc:2'
    if (input.includes('경북')) result += '@plc:12'
    if (input.includes('경남')) result += '@plc:13'
    if (input.includes('부산')) result += '@plc:1'
    if (input.includes('울산')) result += '@plc:6'
    if (input.includes('전북')) result += '@plc:10'
    if (input.includes('전남')) result += '@plc:11'
    if (input.includes('광주')) result += '@plc:4'
    if (input.includes('제주')) result += '@plc:15'
    if (input.includes('주변')) result += '@plc:16'
    if (input.includes('전국')) result += '@plc:17'
    return result
}

const isHello = (input: string): boolean => {
    return input.includes('안녕') || input.includes('ㅎㅇ') || input.includes('도움')
}

const isCalled = (input: string): boolean => {
    return input.includes('야') || input.includes('어이') || input.includes('ㅇ')
}

const isThanks = (input: string): boolean => {
    return input.includes('고마') || input.includes('고맙') || input.includes('땡큐') || input.includes('땡스') || input.includes('ㄳ') || input.includes('ㄱㅅ')
}

const isNothing = (input: string): boolean => {
    return input.includes('없') || input.includes('ㄴ')
}

export const botReply = (input: string):string => {
    if (isUserSetting(input)) return `${userSetting(input)}`
    else if (isTagOrPlace(input)) return `${tagFrom(input)} ${placeFrom(input)}`
    else if (isHello(input)) return greeting[0]
    else if (isCalled(input)) return '챗봇 병영생활지G도PT !'
    else if (isThanks(input)) return '아닙니다 ! 더 궁금한 것은 없으십니까 ?'
    else if (isNothing(input)) return '예 알겠습니다 ! 더 궁금한 것이 있으시면 편하게 질문해주십시오 !'
    return '잘못 들었습니다 ?'
}