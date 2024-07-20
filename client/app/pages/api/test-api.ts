// import useTestApi from "../../../frameworks/api/test-api"
import useTestApi from '../../../frameworks/api/test-api'

async function testApiCall(req: any, res: any) {
  try {
    const response = await useTestApi()()
    res.status(200).json(response)
  } catch (error) {
    console.log(error)
  }
}
export default testApiCall;