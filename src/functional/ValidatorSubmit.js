import Validators from "./Validators";

const ValidatorSubmit = (form, objs) =>{
    const arr = []
    objs.forEach(obj => {
        arr.push(Validators(form,obj, obj.value))
    })
    return arr
}

export default ValidatorSubmit