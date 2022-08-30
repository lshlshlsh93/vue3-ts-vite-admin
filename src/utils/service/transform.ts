
import qs from 'qs'
import { ContentType } from '@/enum';

/**
 * 请求数据的转换
 * @param requestData - 请求数据
 * @param contentType - 请求头的Content-Type
 */
 export async function transformRequestData(requestData: any, contentType?: string) {
  // application/json类型不处理
  let data = requestData;
  // form类型转换
  if (contentType === ContentType.formUrlencoded) {
    data = qs.stringify(requestData);
  }
  // form-data类型转换
  // if (contentType === ContentType.formData) {
  //   const key = Object.keys(requestData)[0];
  //   const file = requestData.data[key];
  //   data = await transformFile(file, key);
  // }
  return data;
}
