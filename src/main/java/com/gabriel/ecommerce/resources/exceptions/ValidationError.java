package com.gabriel.ecommerce.resources.exceptions;

import lombok.Getter;

import java.io.Serial;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Getter
public class ValidationError extends StandardError {

    @Serial
    private static final long serialVersionUID = 1L;

    private List<FieldMessage> errors = new ArrayList<>();

    public ValidationError() {
        super();
    }

    public ValidationError(Instant timestamp, Integer status, String error, String message, String path) {
        super(timestamp, status, error, message, path);
    }

    public void addError(String fieldName, String message) {
        this.errors.add(new FieldMessage(fieldName, message));
    }

}
