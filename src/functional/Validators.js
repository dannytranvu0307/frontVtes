export const regex_email = /^[a-z]{1,15}[.][a-z]{1,30}([0-9]{0,3})@(vti.com.vn)$/g
export const regex_name_vietnamese = /^[A-Z ]{1,}[A-Z]$/m
export const regex_password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W){8,24}/g //regex cần có dấu kí tự đặt biệt
// const regex_name_japanese = /([\u3040-\u309f]|[\u30a0-\u30ff]|[\u2e80-\u2fd5]|[\u4e00-\u9fbf]|[A-Za-z ]{3,40})/
// const check_Unicode = /[A-Za-z ]{1,}/g
// const regex_password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){8,24}/gm  //regex k cần có dấu kí tự đặt biệt

function Validators (formId,options,value){
    const error = {}
    const form = formId

    if (form){

        if (options.name === "email"){
            if (value === ""){
                error.id = "email"
                error.email =  "er_input_empty"
            }
            else if (!regex_email.test(value)){
                error.id = "email"
                error.email =  "er_email_undi"
            }
            else {
                error.email = ""
            }
        }

        if (options.name === "name"){
            if (value === ""){
                error.id = "name"
                error.name =  "er_input_empty"
            }else if (value.length < 4 || value.length > 64 ){
                error.id = "name"
                error.name = "er_username_len"
            }
            else if (!regex_name_vietnamese.test(value)){
                error.id = "name"
                error.name = "er_username_undi"
            }else {
                error.name = ""
            }
        }
       
        if (options.name === "password" ){
            if (value === ""){
                error.id = "password"
                error.password =  "er_input_empty"
            }
            else if (value.length < 8){
                error.id = "password"
                error.password =  "er_input_len_password"
            }
            else if (!(regex_password.test(value))){
                error.id = "password"
                error.password = "er_input_rule_password"
            }
            else {
                error.password = ""
            }
        }

        if (options.name === "confirm_password" ){
            if (value === ""){
                error.confirm_password =  "er_input_empty"
            }
            else if (value !== form.querySelector("#password").value){
                error.confirm_password = "er_input_confirm_password"
            }
            
            else {
                error.confirm_password = ""
            }
        }

        if (options.name === "department" ){
            if (value === ""){
                error.department =  "er_select_empty"
            }
            else {
                error.department = ""
            }
        }

        if (options.name === "current_password"){
            if (value === ""){
                error.current_password = "er_input_empty"
            }
        }

        if ( options.name === "new_password"){
            if (value === ""){
                error.new_password = "er_input_empty"
            }else if (value.length < 8){
                error.new_password =  "er_input_len_password"
            }
            else if (!(regex_password.test(value))){
                error.new_password = "er_input_rule_password"
            }
            else {
                error.new_password = ""
            }
        }

        if ( options.name === "confirm_new_password"){
            if (value === ""){
                error.confirm_new_password =  "er_input_empty"
            }
            else if (value !== form.parentElement.querySelector("#new_password").value){
                error.confirm_new_password = "er_input_confirm_password"
            }
            else {
                error.confirm_new_password = ""
            }
        }

        if (options.name === "start"){
            if (value === ""){
                error.start = "er_input_empty"
            }
            else {
                error.start = ""
            }
        }

        if (options.name === "goal"){
            if (value === ""){
                error.goal = "er_input_empty"
            }
            else {
                error.goal = ""
            }
        }

        if (options.name === "via"){
            if (value === ""){
                error.via = "er_input_empty"
            }
            else {
                error.via = ""
            }
        }
    }

    return error
};  

export default Validators;