package com.example.backend.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

@Service
public class MapValidationErrorService {
    public ResponseEntity<?> mapValidationError(BindingResult  result){
        if (result.hasErrors()){
            /*
            Using Map here to create json in format field_nam: "errormessage"
            */
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error: result.getFieldErrors()){
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }
        return null;
    }
}