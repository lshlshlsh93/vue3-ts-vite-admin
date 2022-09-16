import { IPageFormContentConfig } from '@/interface'

export const modelConfig: IPageFormContentConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '店铺名',
      placeholder: '请输入店铺名',
      rules: [{ required: true, message: '请输入店铺名', trigger: 'blur' }],
    },
    {
      field: 'phone',
      type: 'input',
      label: '手机号',
      placeholder: '请输入店铺手机号',
      rules: [
        { required: true, message: '请输入店铺手机号', trigger: 'blur' },
        { validator: checkPhone, trigger: 'blur' },
      ],
    },
    {
      field: 'area',
      type: 'areapicker',
      label: '所在地区',
      placeholder: '筛选所在地区',
      // otherOption: {
      // 	'before-filter': (code:any) => {
      // 		console.log(code);

      // 	}
      // }
    },
  ],
  colLayout: { span: 24 },
  labelWidth: '80px',
}

function checkPhone(rule: any, value: any, callback: any) {
  if (!Number.isInteger(Number(value))) {
    callback(new Error('请输入正确的手机类型'))
  } else {
    if (value <= 0) {
      callback(new Error('请输入正确的手机类型'))
    } else {
      callback()
    }
  }
}
