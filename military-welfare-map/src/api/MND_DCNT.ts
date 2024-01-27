import axios from 'axios'
import { MarkerType } from '../types/data'
import { addressToRegion } from '../functions/addressToRegion'
import { SEARCH } from '@/src/api/VW-SEARCH'

export const DCNT = async (): Promise<MarkerType[]> => {
    var resultList: MarkerType[] = []

    try {
      console.log('MND_DCNT Loading...')

      // data fetch
      const preRes = await axios.get(
          process.env.NEXT_PUBLIC_PROXY_SERVER + `https://openapi.mnd.go.kr/${process.env.NEXT_PUBLIC_OPENAPI_KEY}/json/DS_MND_ENLSTMN_DCNT_BEF_INF/1/1`,
      )
      const cnt = preRes.data.DS_MND_ENLSTMN_DCNT_BEF_INF.list_total_count
      const response = await axios.get(
          process.env.NEXT_PUBLIC_PROXY_SERVER + `https://openapi.mnd.go.kr/${process.env.NEXT_PUBLIC_OPENAPI_KEY}/json/DS_MND_ENLSTMN_DCNT_BEF_INF/1/${cnt}`,
      )
      const data = await response.data.DS_MND_ENLSTMN_DCNT_BEF_INF.row
      console.log(data)

      // data add
      var place = ""
      for (let i = 0; i < cnt; i++) {
        place = `${data[i].instltnnm}`
        const search = SEARCH(place)
        // rgn == 전국인 케이스도 처리해야 함
        if ((await search).pos.lat != 0 && (await search).pos.lng != 0 && addressToRegion((await search).address) != -1) {
        resultList.push(
          {
            // tag 조사해야함
            tag: 5,
            region: addressToRegion((await search).address),
            position:
            {
              lat: (await search).pos.lat,
              lng: (await search).pos.lng
            },
            address: (await search).address,
            title: data[i].instltnnm,
            teleno: data[i].cntadr,
            description: `${data[i].dcntenatvnm} ${data[i].dtlexpln}`
          }
        )
        }
        console.log(`MND_DCNT ${i}/${cnt}`)
        // await new Promise(f => setTimeout(f, 1))
      }
      console.log('MND_DCNT Loaded')
    } catch (e) {
      console.log(e)
    } finally {
      return resultList
    }
  }