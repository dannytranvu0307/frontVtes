import Validators from "./Validators";

const ValidatorSubmit = (form, objs) =>{
    const arr = []
    for (let i = 0; i < objs.length ; i++) {
        const a = Validators(form,objs[i], objs[i].value)
        if (a.name !== "") {
            const input = form.querySelector(`input#${objs[i].id}`);
            input.classList = "border border-gray-300  text-gray-900 sm:text-sm rounded-lg  focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 border-red-500 bg-red-100"
            input.focus();
            arr.push(a.name);
            break
        }
    }
    return arr.length === 0;
}

export default ValidatorSubmit