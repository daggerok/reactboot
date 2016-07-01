package com.daggerok.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by mak on 7/1/16.
 */
@RepositoryRestResource
public interface TodoRepository extends MongoRepository<Todo, String> {}
