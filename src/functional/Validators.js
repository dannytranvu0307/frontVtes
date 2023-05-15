function Validators (formId,options,value){
    const error = {}
    const regex_email = /^[a-z]{1,15}[.][a-z]{1,30}([0-9]{0,3})@(vti.com.vn)$/g
    const regex_name_japanese = /([\u3040-\u309f]|[\u30a0-\u30ff]|[\u2e80-\u2fd5]|[\u4e00-\u9fbf]|[A-Za-z ]{3,40})/
    const regex_name_vietnamese = /^[A-Z ]{1,}[A-Z]$/m
    const check_Unicode = /[A-Za-z ]{1,}/g
    const regux_password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W){8,24}/g
    const password = options.value;
    const form = formId
    if (form){

        if (options.name === "email"){
            if (value === ""){
                error.email =  "er_input_emty"
            }
            else if (!regex_email.test(value)){
                error.email =  "er_email_undi"
            }
            else {
                error.email = ""
            }
        }

        if (check_Unicode.test(value) && options.name === "name"){
            if (value === ""){
                error.name =  "er_input_emty"
            }
            else if (!regex_name_vietnamese.test(value)){
                error.name = "er_username_undi"
            }else {
                error.name = ""
            }
        }else {
            if (value === ""){
                error.name =  "er_input_emty"
            }
            else if (!regex_name_japanese.test(value)){
                error.name = "er_username_undi"
            }else {
                error.name = ""
            }
        }
        if (options.name === "password"){
            console.log(value.length)
            if (value === ""){
                error.password =  "er_input_emty"
            }
            else if (!(regux_password.test(value))){
                error.password = "er_input_rule_password"
            }
            else if (value.length < 8){
                error.password =  "er_input_len_password"
            }
            else {
                error.password = ""
            }
        }

        if (options.name === "confirm_password"){
            if (value === ""){
                error.confirm_password =  "er_input_emty"
            }
            else if (value !== form.querySelector("#password").value){
                error.confirm_password = "er_input_confirm_password"
            }
            
            else {
                error.confirm_password = ""
            }
        }
    }

    // if (options.name === "name"){
    //     if (value === ""){
    //         error.name =  "er_input_emty"
    //     }
    //     else if (!regex_name.test(value)){
    //         error.name = "er_username_undi"
    //     }
    // }

    console.log(error)
    return error
};  

export default Validators;