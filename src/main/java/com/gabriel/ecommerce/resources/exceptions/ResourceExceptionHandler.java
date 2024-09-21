package com.gabriel.ecommerce.resources.exceptions;


import jakarta.servlet.http.HttpServletRequest;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.gabriel.ecommerce.services.exceptions.ObjectNotFoundException;

import java.time.Instant;


@ControllerAdvice
public class ResourceExceptionHandler {

	@ExceptionHandler(ObjectNotFoundException.class)
	public ResponseEntity<StandardError> objectnotFoundException(
			ObjectNotFoundException ex, HttpServletRequest request) {

		StandardError error = new StandardError(
				Instant.now(),
				HttpStatus.NOT_FOUND.value(),
				"Object Not Found",
				ex.getMessage(),
				request.getRequestURI()
		);

		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
	}

	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<StandardError> dataIntegrityViolationException(
			DataIntegrityViolationException ex, HttpServletRequest request) {

		StandardError error = new StandardError(
				Instant.now(),
				HttpStatus.BAD_REQUEST.value(),
				"Data violation",
				ex.getMessage(),
				request.getRequestURI()
		);

		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<StandardError> validationErrors(
			MethodArgumentNotValidException ex, HttpServletRequest request) {

		ValidationError errors = new ValidationError(
				Instant.now(),
				HttpStatus.BAD_REQUEST.value(),
				"Validation error",
				"Error in validating fields",
				request.getRequestURI()
		);

		for(FieldError x : ex.getBindingResult().getFieldErrors()) {
			errors.addError(x.getField(), x.getDefaultMessage());
		}

		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
	}

}
