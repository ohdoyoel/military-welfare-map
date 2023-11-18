import axios from 'axios'
import { MarkerType } from '../types/data'
import { addressToRegion } from '../functions/addressToRegion'

export const GLAS = async (): Promise<MarkerType[]> => {
    var resultList: MarkerType[] = []

    try {
      console.log('MND_GLAS Loading...')

      // data fetch
      const preRes = await axios.get(
          process.env.NEXT_PUBLIC_PROXY_SERVER + `https://openapi.mnd.go.kr/${process.env.NEXT_PUBLIC_OPENAPI_KEY}/json/DS_TB_MND_GLAS_LIST/1/1`,
      )
      const cnt = preRes.data.DS_TB_MND_GLAS_LIST.list_total_count
      const response = await axios.get(
          process.env.NEXT_PUBLIC_PROXY_SERVER + `https://openapi.mnd.go.kr/${process.env.NEXT_PUBLIC_OPENAPI_KEY}/json/DS_TB_MND_GLAS_LIST/1/${cnt}`,
      )
      const data = await response.data.DS_TB_MND_GLAS_LIST.row
      console.log(data)

      // data add
      const geocoder = new window.kakao.maps.services.Geocoder()
      var address = ""
      for (let i = 0; i < cnt; i++) {
        address = `${data[i].address} ${data[i].addressdetail}`
        geocoder.addressSearch(address, (result, status) => {
        if (status === kakao.maps.services.Status.OK && addressToRegion(address) != -1) {
        resultList.push(
          {
            tag: 8,
            region: addressToRegion(address),
            position:
            {
              lat: +result[0].y,
              lng: +result[0].x
            },
            address: address,
            title: data[i].shop,
            teleno: data[i].telno
          }
        )
        }}, {
          page: 1,
          size: 1,
          analyze_type: kakao.maps.services.AnalyzeType.SIMILAR
        })
        await new Promise(f => setTimeout(f, 1))
      }
      console.log('MND_GLAS Loaded')
    } catch (e) {
      console.log(e)
    } finally {
      return resultList
    }
  }