package com.daggerok.web.fallback;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by mak on 6/30/16.
 */
@Slf4j
@Controller
public class GlobalErrorHandler implements ErrorController {

    @Value("${server.context-path:}")
    String contextPath;

    @SneakyThrows
    @GetMapping("/error")
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public void handle(HttpServletRequest request, HttpServletResponse response, Exception error) {

        log.error("fallback handler {}", response.getStatus(), error);

        response.sendRedirect(contextPath.concat("/"));
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}
