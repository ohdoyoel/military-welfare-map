import axios from 'axios'
import { APIProps, Marker } from '../types/data'

export const GLAS = async ({position, size}: APIProps) => {
    var resultList: Marker[] = []

    try {

    // data fetch
    const preRes = await axios.get(
        process.env.NEXT_PUBLIC_PROXY_SERVER + `https://openapi.mnd.go.kr/${process.env.NEXT_PUBLIC_OPENAPI_KEY}/json/DS_TB_MND_GLAS_LIST/1/1`,
    )
    const cnt = preRes.data.DS_TB_MND_GLAS_LIST.list_total_count
    const response = await axios.get(
        process.env.NEXT_PUBLIC_PROXY_SERVER + `https://openapi.mnd.go.kr/${process.env.NEXT_PUBLIC_OPENAPI_KEY}/json/DS_TB_MND_GLAS_LIST/1/${cnt}`,
    )
    const data = response.data.DS_TB_MND_GLAS_LIST.row

    // data sieve
    

    // data add
    const geocoder = new window.kakao.maps.services.Geocoder()
      var address = ""
      for (let i = 0; i < 300; i++) {
        address = `${data[i].address} ${data[i].addressdetail}`
        geocoder.addressSearch(address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
        resultList.push(
          {
            position:
              {
                lat: +result[0].y,
                lng: +result[0].x
              },
            title: data[i].shop,
            tag: 8
          }
        )
        }}, {
          page: 1,
          size: 1,
          analyze_type: kakao.maps.services.AnalyzeType.SIMILAR
        })
      }
    return response
    } catch (e) {
    console.log(e)
    }
    
  }