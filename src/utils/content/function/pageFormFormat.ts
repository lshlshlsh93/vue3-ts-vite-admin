/**
 * 处理省市区格式
 * @param params 一个表单数据项
 * @param deleteKey 省市区存放的key，处理的时候会删除这个key
 * @param [provinceKey, provinceCodeKey] 省市区区间的key名字，格式化后的省市区会放在这数据里面
 * @returns
 */
const handleFormatArea = (
  params: any,
  deleteKey: string = 'area',
  [provinceKey, provinceCodeKey]: string[] = ['province', 'province_code'],
  [cityKey, cityCodeKey]: string[] = ['city', 'city_code'],
  [districtKey, districtCodeKey]: string[] = ['district', 'district_code']
): any => {
  const obj = { ...params }
  if (obj[deleteKey] && Array.isArray(obj[deleteKey])) {
    obj[deleteKey].forEach((v: { label: string; value: string }, i: number) => {
      switch (i) {
        case 0:
          obj[provinceKey] = v.label
          obj[provinceCodeKey] = v.value
          obj[cityKey] = ''
          obj[cityCodeKey] = ''
          obj[districtKey] = ''
          obj[districtCodeKey] = ''
          break
        case 1:
          obj[cityKey] = v.label
          obj[cityCodeKey] = v.value
          obj[districtKey] = ''
          obj[districtCodeKey] = ''
          break
        case 2:
          obj[districtKey] = v.label
          obj[districtCodeKey] = v.value
          break
      }
    })
    delete obj[deleteKey]
  }
  return obj
}

/**
 * 处理日期格式
 * @param params 一个表单数据项
 * @param deleteKey 日期存放的key，处理的时候会删除这个key
 * @param [startKey, endKey] 日期区间的两个key名字，格式化后的日期会放在这两个数据里面
 * @returns
 */
const handleFormatTime = (
  params: any,
  deleteKey: string = 'created',
  [startKey, endKey]: string[] = ['start_time', 'end_time']
) => {
  const obj = { ...params }
  if (obj[deleteKey]) {
    obj[startKey] = obj.created[0]
    obj[endKey] = obj.created[1]
    delete obj[deleteKey]
  }

  return obj
}
export { handleFormatTime, handleFormatArea }
