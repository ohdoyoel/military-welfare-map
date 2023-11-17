import axios from 'axios'
import { Marker } from '../types/data'

export const GLAS = async (): Promise<Marker[]> => {
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
      const data = await response.data.DS_TB_MND_GLAS_LIST.row

      // // data filter by region -> no filtering is ok with sleep function
      // const geocoder = new window.kakao.maps.services.Geocoder()
      // var filteredData:any[] = []
      // geocoder.coord2RegionCode(position.lng, position.lat, (result, status) => {
      //   if (status == kakao.maps.services.Status.OK) {
      //     const region = result[0].region_1depth_name
      //     if (region == "경기도") {
      //       filteredData = data.filter((elem:any) => elem.city === "경기")
      //     }
      //   }
      // })
      // console.log(data)
      // console.log(filteredData)

      // data add
      const geocoder = new window.kakao.maps.services.Geocoder()
      var address = ""
      for (let i = 0; i < cnt; i++) {
        address = `${data[i].address} ${data[i].addressdetail}`
        geocoder.addressSearch(address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
        resultList.push(
          {
            tag: 8,
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

    } catch (e) {
    console.log(e)
    } finally {
      return resultList
    }
  }