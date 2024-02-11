'use server'
export const imgUpload =async(formData:FormData)=> {
    'use server';
    const file = formData.get('image');
    console.log(file)
  }