package com.ecommerce.apinocountry.services;

/**
 *
 * @author godoy
 */
public class LoginResponse {

    private String mensaje;
    private boolean success;
    private String token;

    public LoginResponse() {
    }

    public LoginResponse(String token, boolean success, String mensaje) {
        this.token = token;
        this.success = success;
        this.mensaje = mensaje;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

}
