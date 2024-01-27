import axios from 'axios'

export const GEOCOORD = async (addr: string): Promise<{lat:number, lng:number}> => {
    var resultPos = {lat:0, lng:0}

    try {
      // data fetch
      const parcelResponse = await axios.get(
          process.env.NEXT_PUBLIC_PROXY_SERVER
          + `https://api.vworld.kr/req/address?service=address&request=getcoord&key=${process.env.NEXT_PUBLIC_VWORLD_KEY}&type=parcel&address=${addr}`,
      )
      if (parcelResponse.data.response.status == "OK") {
        resultPos = {
            lat: +parcelResponse.data.response.result.point.y,
            lng: +parcelResponse.data.response.result.point.x
        }
      } else {
        const roadResponse = await axios.get(
          process.env.NEXT_PUBLIC_PROXY_SERVER
          + `https://api.vworld.kr/req/address?service=address&request=getcoord&key=${process.env.NEXT_PUBLIC_VWORLD_KEY}&type=road&address=${addr}`,
        )
        if (roadResponse.data.response.status == "OK") {
            resultPos = {
                lat: +roadResponse.data.response.result.point.y,
                lng: +roadResponse.data.response.result.point.x
            }
        }
      }
    } catch (e) {
      console.log(e)
    } finally {
      // console.log(resultPos)
      return resultPos
    }
  }