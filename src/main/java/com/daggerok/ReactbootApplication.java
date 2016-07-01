package com.daggerok;

import com.daggerok.data.Todo;
import com.daggerok.data.TodoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.trace.TraceRepository;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

import java.util.stream.Stream;

@SpringBootApplication
public class ReactbootApplication extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Todo.class);
    }

    @Bean
    CommandLineRunner testData(TodoRepository todoRepository) {
        return args -> Stream.of(1,2,3)
                .map(i -> new Todo().setCompleted(false).setId(i + 0L).setText("" + i))
                .forEach(todoRepository::save);
    }

    public static void main(String[] args) {
        SpringApplication.run(ReactbootApplication.class, args);
    }
}
