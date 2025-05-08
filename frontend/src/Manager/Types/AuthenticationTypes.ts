export interface LoginDataState{
    user_id: string,
    user_name: string,
    user_email: string,
    is_master: boolean
}

export interface RegisterFormInterface{
    manager_name: string,
    manager_email: string,
    manager_password: string,
    manager_password_confirmation: string
    register_as_admin: boolean
}