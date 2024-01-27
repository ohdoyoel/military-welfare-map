import axios from 'axios'

export const SEARCH = async (place: string): Promise<{pos: {lat:number, lng:number}, address: string}> => {
    var result =
    {
      pos: {lat:0, lng:0},
      address: ''
    }

    try {
      // data fetch
      const VWResponse = await axios.get(
          process.env.NEXT_PUBLIC_PROXY_SERVER
          + `https://api.vworld.kr/req/search?key=${process.env.NEXT_PUBLIC_VWORLD_KEY}&size=1&request=search&type=place&query=${place}`,
      )
      console.log(VWResponse)
      if (VWResponse.data.response.status == "OK") {
        result = {
            pos: 
            {
              lat: +VWResponse.data.response.result.items[0].point.y,
              lng: +VWResponse.data.response.result.items[0].point.x
            },
            address: VWResponse.data.response.result.items[0].address.road
        }
      }
    } catch (e) {
      console.log(e)
    } finally {
      console.log(result)
      return result
    }
  }